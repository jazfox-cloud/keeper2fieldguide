import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import { validateRenderedMediaHtml } from '../scripts/validate-rendered-media.mjs';

test('optional media component keeps dimensions, alt, attribution, and fallback link visible', async () => {
  const component = await readFile(new URL('../src/components/media/OfficialMedia.astro', import.meta.url), 'utf8');
  const home = await readFile(new URL('../src/templates/HomePage.astro', import.meta.url), 'utf8');
  assert.match(component, /width={media\.width}/);
  assert.match(component, /height={media\.height}/);
  assert.match(component, /alt={media\.alt}/);
  assert.match(component, /media\.attribution/);
  assert.match(component, /source\.url/);
  assert.match(component, /View official source/);
  assert.match(home, /media && mediaSource/);
});

test('rendered-media validator accepts a complete visible contract', () => {
  const media = { id: 'media:example', assetPath: '/media/example.jpg', width: 1600, height: 900, alt: 'Fictional example image.', attribution: 'Example publisher' };
  const source = { url: 'https://store.example.invalid/game' };
  const html = `<img src="/media/example.jpg" width="1600" height="900" alt="Fictional example image."><figcaption>Example publisher <a href="https://store.example.invalid/game">View official source</a></figcaption>`;
  assert.deepEqual(validateRenderedMediaHtml(html, media, source), []);
});

test('rendered-media validator rejects a downloaded-but-unrendered asset', () => {
  const media = { id: 'media:example', assetPath: '/media/example.jpg', width: 1600, height: 900, alt: 'Fictional example image.', attribution: 'Example publisher' };
  const source = { url: 'https://store.example.invalid/game' };
  assert.match(validateRenderedMediaHtml('<main>No image here</main>', media, source).join('\n'), /not rendered/);
});
