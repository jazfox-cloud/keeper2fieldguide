import test from 'node:test';
import assert from 'node:assert/strict';

import { validateEvidenceBundle } from '../src/data/validation.ts';

const routes = [{ id: 'home', path: '/', title: 'Example Game Guide', description: 'Neutral home.', published: true, sitemap: true }];
const sources = [{ id: 'official-example', label: 'Official example source', url: 'https://store.example.invalid/game', evidenceClass: 'OFFICIAL', gameVersion: 'Example version', lastVerified: '2026-08-27', publicAllowed: true, editorialJudgment: false }];
const validMedia = [{ id: 'media:example-keyart', assetPath: '/media/example-keyart.jpg', sourceId: 'official-example', width: 1600, height: 900, alt: 'Fictional example game key art used only as a test record.', placement: '/', attribution: 'Example publisher — official page', lastVerified: '2026-08-27', publicAllowed: true, rightsNote: 'Test fixture with explicit publication eligibility.' }];

test('accepts complete neutral media metadata without requiring a bundled image', () => {
  assert.deepEqual(validateEvidenceBundle({ facts: [], media: validMedia, routes, sources }), []);
});

test('rejects missing media dimensions and route placement', () => {
  const media = structuredClone(validMedia);
  media[0].width = 0;
  media[0].placement = '/missing/';
  const errors = validateEvidenceBundle({ facts: [], media, routes, sources }).join('\n');
  assert.match(errors, /positive dimensions/);
  assert.match(errors, /missing placement route/);
});

test('rejects incomplete media source and accessibility metadata', () => {
  const media = structuredClone(validMedia);
  media[0].sourceId = 'missing-source';
  media[0].alt = '';
  const errors = validateEvidenceBundle({ facts: [], media, routes, sources }).join('\n');
  assert.match(errors, /missing source/);
  assert.match(errors, /metadata is incomplete/);
});

test('rejects media without publication eligibility on a published route', () => {
  const media = structuredClone(validMedia);
  media[0].publicAllowed = false;
  const errors = validateEvidenceBundle({ facts: [], media, routes, sources }).join('\n');
  assert.match(errors, /not eligible for published route/);
});
