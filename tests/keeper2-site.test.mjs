import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const expectedRoutes = [
  ['home', '/'],
  ['release-date', '/release-date/'],
  ['system-requirements', '/system-requirements/'],
  ['platforms', '/platforms/'],
  ['multiplayer', '/multiplayer/'],
  ['gameplay', '/gameplay/'],
];

test('consumer owns the independent site identity and enables only approved analytics', async () => {
  const { features, siteConfig } = await import('../src/config/index.ts');
  assert.equal(siteConfig.name, 'Keeper 2 Field Guide');
  assert.equal(siteConfig.shortName, 'Keeper 2 Field Guide');
  assert.equal(siteConfig.origin, 'https://keeper2fieldguide.com');
  assert.match(siteConfig.disclaimer, /independent/i);
  assert.match(siteConfig.disclaimer, /not affiliated/i);
  assert.deepEqual(features, {
    analytics: true,
    advertising: false,
    localization: false,
    sitemap: true,
  });
});

test('the exact six approved search routes own navigation and sitemap', async () => {
  const { navigation, routes } = await import('../src/config/index.ts');
  assert.deepEqual(routes.map(({ id, path }) => [id, path]), expectedRoutes);
  assert.ok(routes.every((route) => route.published && route.sitemap));
  assert.deepEqual(
    navigation,
    [
      { label: 'Home', href: '/' },
      { label: 'Release', href: '/release-date/' },
      { label: 'PC Requirements', href: '/system-requirements/' },
      { label: 'Platforms', href: '/platforms/' },
      { label: 'Multiplayer', href: '/multiplayer/' },
      { label: 'Gameplay', href: '/gameplay/' },
    ],
  );
});

test('every approved official destination has eligible dated source metadata', async () => {
  const { sources } = await import('../src/config/index.ts');
  const expectedHosts = [
    'www.graveyardkeeper2.com',
    'lazybeargames.com',
    'store.steampowered.com',
    'steamcommunity.com',
    'www.youtube.com',
    'store.playstation.com',
    'www.xbox.com',
    'www.nintendo.com',
  ];
  assert.ok(sources.length >= 9);
  assert.ok(sources.every((source) => source.evidenceClass === 'OFFICIAL'));
  assert.ok(sources.every((source) => source.publicAllowed));
  assert.ok(sources.every((source) => source.lastVerified === '2026-09-01'));
  for (const host of expectedHosts) {
    assert.ok(sources.some((source) => new URL(source.url).hostname === host), `missing source host: ${host}`);
  }
});

test('typed fact and keyword bundles validate against route ownership', async () => {
  const [{ facts }, { keywords, researchBacklog }, { routes, sources }, { validateEvidenceBundle, validateKeywordOwnership }] = await Promise.all([
    import('../src/data/facts.ts'),
    import('../src/data/keywords.ts'),
    import('../src/config/index.ts'),
    import('../src/data/validation.ts'),
  ]);
  assert.deepEqual(validateEvidenceBundle({ facts, media: [], routes, sources }), []);
  assert.deepEqual(validateKeywordOwnership(keywords, routes, researchBacklog), []);
  assert.ok(expectedRoutes.every(([id]) => facts.some((fact) => fact.consumers.includes(id))));
  assert.ok(expectedRoutes.every(([id]) => keywords.some((keyword) => keyword.owner === id)));
});

test('all six page modules exist and starter demonstration routes are gone', async () => {
  const pages = [
    '../src/pages/index.astro',
    '../src/pages/release-date/index.astro',
    '../src/pages/system-requirements/index.astro',
    '../src/pages/platforms/index.astro',
    '../src/pages/multiplayer/index.astro',
    '../src/pages/gameplay/index.astro',
  ];
  await Promise.all(pages.map((path) => access(new URL(path, import.meta.url))));
  await assert.rejects(access(new URL('../src/pages/guide/index.astro', import.meta.url)));
  await assert.rejects(access(new URL('../src/pages/status/index.astro', import.meta.url)));
  await assert.rejects(access(new URL('../src/pages/entities/index.astro', import.meta.url)));
});

test('homepage carries official privacy-enhanced video attribution and fallbacks', async () => {
  const [home, video] = await Promise.all([
    readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8'),
    readFile(new URL('../src/components/media/OfficialVideo.astro', import.meta.url), 'utf8'),
  ]);
  assert.match(home, /OfficialVideo/);
  assert.match(video, /youtube-nocookie\.com\/embed\/KZ6VRXqGEws/);
  assert.match(video, /tinyBuild/i);
  assert.match(video, /youtube\.com\/watch\?v=KZ6VRXqGEws/);
  assert.match(video, /graveyardkeeper2\.com/);
  assert.match(video, /Official trailer record/);
  assert.match(video, /Load official trailer/);
  assert.match(video, /createElement\('iframe'\)/);
});

test('official media kit images have validated metadata and real local assets', async () => {
  const [{ media }, { routes, sources }, { validateEvidenceBundle }, sharpModule] = await Promise.all([
    import('../src/data/media.ts'),
    import('../src/config/index.ts'),
    import('../src/data/validation.ts'),
    import('sharp'),
  ]);
  const sharp = sharpModule.default;

  assert.deepEqual(
    media.map((item) => item.id),
    ['media:key-art', 'media:town-restoration', 'media:graveyard', 'media:automation', 'media:town-combat'],
  );
  assert.deepEqual(validateEvidenceBundle({ facts: [], media, routes, sources }), []);

  for (const item of media) {
    const asset = new URL(`../public${item.assetPath}`, import.meta.url);
    await access(asset);
    const metadata = await sharp(fileURLToPath(asset)).metadata();
    assert.equal(metadata.width, item.width, `${item.id} width metadata drifted`);
    assert.equal(metadata.height, item.height, `${item.id} height metadata drifted`);
  }
});

test('favicon head uses cache-safe explicit candidates', async () => {
  const head = await readFile(new URL('../src/components/seo/SeoHead.astro', import.meta.url), 'utf8');
  assert.match(head, /shortcut icon/);
  assert.match(head, /favicon\.ico\?v=3/);
  assert.match(head, /favicon-32\.png\?v=3/);
  assert.match(head, /favicon-16\.png\?v=3/);
  assert.match(head, /apple-touch-icon/);
});
