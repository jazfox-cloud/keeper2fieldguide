import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { sources } from '../src/config/index.ts';
import { media } from '../src/data/media.ts';
import { validateRenderedMediaHtml } from './validate-rendered-media.mjs';

const origin = 'https://keeper2fieldguide.com';
const searchRoutes = ['/', '/release-date/', '/system-requirements/', '/platforms/', '/multiplayer/', '/gameplay/'];
const structuralRoutes = ['/privacy/', '/terms/'];

function outputUrl(path) {
  if (path === '/') return new URL('../dist/index.html', import.meta.url);
  return new URL(`../dist${path}index.html`, import.meta.url);
}

function matches(html, pattern) {
  return [...html.matchAll(pattern)];
}

const pages = new Map();
for (const path of [...searchRoutes, ...structuralRoutes]) {
  const html = await readFile(outputUrl(path), 'utf8');
  pages.set(path, html);
}

const titles = new Set();
const descriptions = new Set();
for (const path of searchRoutes) {
  const html = pages.get(path);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(title, `${path} is missing a title`);
  assert.ok(description, `${path} is missing a description`);
  assert.ok(!titles.has(title), `${path} duplicates title: ${title}`);
  assert.ok(!descriptions.has(description), `${path} duplicates description`);
  titles.add(title);
  descriptions.add(description);

  assert.equal(matches(html, /<h1(?:\s|>)/g).length, 1, `${path} must render exactly one H1`);
  assert.ok(html.includes(`<link rel="canonical" href="${origin}${path}">`), `${path} canonical mismatch`);
  assert.doesNotMatch(html, /<meta name="robots" content="noindex/i, `${path} must be indexable`);
  assert.match(html, /Sources and evidence/, `${path} must display sources`);
  assert.match(html, /Last verified:/, `${path} must display freshness`);
  assert.match(html, /Independent, unofficial guide/, `${path} must display the independent disclaimer`);
  assert.match(html, /f8e3541a/, `${path} lost the emitted design contract`);
  assert.match(html, /favicon\.ico\?v=3/, `${path} must include the cache-safe ICO candidate`);

  for (const [, href] of matches(html, /<a\b[^>]*\bhref="(\/[^"#?]*)"/g)) {
    await access(outputUrl(href));
  }
}

const home = pages.get('/');
assert.match(home, /youtube-nocookie\.com\/embed\/KZ6VRXqGEws/, 'homepage must render the privacy-enhanced official trailer');
assert.match(home, /Official trailer published by tinyBuild/, 'homepage must visibly attribute the trailer');
assert.match(home, /youtube\.com\/watch\?v=KZ6VRXqGEws/, 'homepage must provide the direct YouTube fallback');
assert.match(home, /graveyardkeeper2\.com/, 'homepage must provide the official-site fallback');
for (const [path, html] of pages) {
  assert.equal(matches(html, /id="analytics-consent"/g).length, 1, `${path} must render one consent panel`);
  assert.equal(matches(html, /id="analytics-choices"/g).length, 1, `${path} must expose analytics choices`);
  assert.doesNotMatch(html, /<script[^>]+src="https:\/\/www\.googletagmanager\.com/, 'GA must load only after consent');
}

for (const item of media) {
  const source = sources.find((entry) => entry.id === item.sourceId);
  assert.ok(source, `${item.id} is missing its official source`);
  const html = pages.get(item.placement);
  assert.ok(html, `${item.id} points to an unbuilt route`);
  assert.deepEqual(validateRenderedMediaHtml(html, item, source), [], `${item.id} rendered-media contract failed`);
  await access(new URL(`../dist${item.assetPath}`, import.meta.url));
}

const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
const sitemapUrls = matches(sitemap, /<loc>([^<]+)<\/loc>/g).map((match) => match[1]);
assert.deepEqual(sitemapUrls, searchRoutes.map((path) => `${origin}${path}`), 'sitemap must contain exactly the six approved search pages');
assert.doesNotMatch(sitemap, /\/(guide|status|entities|updates)\//, 'sitemap contains a demonstration or removed route');

const robots = await readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8');
assert.match(robots, new RegExp(`Sitemap: ${origin.replaceAll('.', '\\.')}\/sitemap\\.xml`));

const ico = await readFile(new URL('../dist/favicon.ico', import.meta.url));
assert.equal(ico.readUInt16LE(0), 0, 'ICO reserved field must be zero');
assert.equal(ico.readUInt16LE(2), 1, 'ICO type must be icon');
assert.equal(ico.readUInt16LE(4), 3, 'ICO must contain three images');
assert.deepEqual([ico.readUInt8(6), ico.readUInt8(22), ico.readUInt8(38)], [16, 32, 48], 'ICO entries must be 16, 32, and 48 px');
for (const size of [16, 32, 192, 512]) await access(new URL(`../dist/brand/favicon-${size}.png`, import.meta.url));

console.log('Built output verified: 6 search pages, exact sitemap, metadata, canonicals, links, evidence, official media, video fallbacks, consent-gated analytics, and favicon candidates.');
