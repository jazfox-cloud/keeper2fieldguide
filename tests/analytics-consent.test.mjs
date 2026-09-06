import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8');
}

test('analytics is delegated to a consent component instead of SEO', async () => {
  const [layout, seo, consent] = await Promise.all([
    source('src/layouts/BaseLayout.astro'),
    source('src/components/seo/SeoHead.astro'),
    source('src/components/analytics/AnalyticsConsent.astro'),
  ]);

  assert.match(layout, /AnalyticsConsent/);
  assert.doesNotMatch(seo, /googletagmanager|gtag\(|PUBLIC_GA4_ID/);
  assert.match(consent, /PUBLIC_GA4_ID/);
  assert.match(consent, /siteConfig\.origin/);
});

test('consent loader defaults all Consent Mode v2 keys to denied', async () => {
  const loader = await source('src/lib/analytics-consent.mjs');
  for (const key of ['analytics_storage', 'ad_storage', 'ad_user_data', 'ad_personalization']) {
    assert.match(loader, new RegExp(`${key}: 'denied'`));
  }
  assert.match(loader, /window\.location\.hostname !== productionHost/);
  assert.match(loader, /localStorage\.setItem/);
  assert.doesNotMatch(loader, /select_content/);
});

test('footer exposes a reversible analytics choice only behind the feature flag', async () => {
  const footer = await source('src/components/shell/SiteFooter.astro');
  assert.match(footer, /features\.analytics/);
  assert.match(footer, /id="analytics-choices"/);
});

test('reject, accept, reopen, and preview sessions enforce consent before loading', async () => {
  const { setupAnalyticsConsent } = await import('../src/lib/analytics-consent.mjs');
  function session(hostname) {
    const elements = Object.fromEntries(['analytics-consent', 'analytics-accept', 'analytics-reject', 'analytics-choices'].map(id => [id, { hidden: true, addEventListener(_, fn) { this.click = fn; } }]));
    const storage = new Map();
    const scripts = [];
    const window = { location: { hostname }, localStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) } };
    const document = { getElementById: id => elements[id], createElement: () => ({}), head: { append: script => scripts.push(script) } };
    setupAnalyticsConsent({ window, document, measurementId: 'G-TESTONLY', productionHost: 'keeper2fieldguide.com', storageKey: 'consent' });
    return { window, elements, scripts };
  }
  const live = session('keeper2fieldguide.com');
  assert.equal(live.scripts.length, 0);
  assert.equal(live.elements['analytics-consent'].hidden, false);
  live.elements['analytics-reject'].click();
  assert.equal(live.scripts.length, 0);
  live.elements['analytics-choices'].click();
  assert.equal(live.elements['analytics-consent'].hidden, false);
  live.elements['analytics-accept'].click();
  live.elements['analytics-accept'].click();
  assert.equal(live.scripts.length, 1);
  const commands = live.window.dataLayer.map(args => Array.from(args));
  const configIndex = commands.findIndex(args => args[0] === 'config');
  assert.ok(commands.slice(0, configIndex).some(args => args[0] === 'consent' && args[1] === 'update' && args[2].analytics_storage === 'granted'));
  assert.equal(commands.filter(args => args[0] === 'config').length, 1);
  assert.equal(session('keeper2fieldguide.pages.dev').window.dataLayer, undefined);
});
