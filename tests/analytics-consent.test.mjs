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
  assert.match(loader, /select_content/);
});

test('footer exposes a reversible analytics choice only behind the feature flag', async () => {
  const footer = await source('src/components/shell/SiteFooter.astro');
  assert.match(footer, /features\.analytics/);
  assert.match(footer, /id="analytics-choices"/);
});
