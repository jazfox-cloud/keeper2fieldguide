import test from 'node:test';
import assert from 'node:assert/strict';

import { validateEvidenceBundle } from '../src/data/validation.ts';

const routes = [{ id: 'home', path: '/', title: 'Example Game Guide', description: 'Neutral home.', published: true, sitemap: true }];
const sources = [{ id: 'official-example', label: 'Official example source', url: 'https://store.example.invalid/game', evidenceClass: 'OFFICIAL', gameVersion: 'Example version', lastVerified: '2026-08-27', publicAllowed: true, editorialJudgment: false }];
const facts = [{ id: 'fact:example-mode', label: 'Example mode', value: 'Turn based', required: true, sourceIds: ['official-example'], evidenceClass: 'OFFICIAL', gameVersion: 'Example version', lastVerified: '2026-08-27', publicAllowed: true, editorialJudgment: false, consumers: ['home'] }];
const media = [{ id: 'media:example-keyart', assetPath: '/media/example-keyart.jpg', sourceId: 'official-example', width: 1600, height: 900, alt: 'Fictional example game key art used only as a test record.', placement: '/', attribution: 'Example publisher — official page', lastVerified: '2026-08-27', publicAllowed: true, rightsNote: 'Test fixture with explicit publication eligibility.' }];

test('accepts a complete neutral evidence bundle', () => {
  assert.deepEqual(validateEvidenceBundle({ facts, media, routes, sources }), []);
});

test('rejects dangling sources and missing required values', () => {
  const invalidFacts = structuredClone(facts);
  invalidFacts[0].sourceIds = ['missing-source'];
  invalidFacts[0].value = 'UNKNOWN';
  const errors = validateEvidenceBundle({ facts: invalidFacts, media, routes, sources }).join('\n');
  assert.match(errors, /missing source/);
  assert.match(errors, /required value/);
});

test('rejects invalid dates and consumer routes', () => {
  const invalidFacts = structuredClone(facts);
  invalidFacts[0].lastVerified = 'today';
  invalidFacts[0].consumers = ['missing-route'];
  const errors = validateEvidenceBundle({ facts: invalidFacts, media, routes, sources }).join('\n');
  assert.match(errors, /invalid verification date/);
  assert.match(errors, /missing consumer route/);
});

test('rejects ineligible public fact evidence', () => {
  const invalidFacts = structuredClone(facts);
  invalidFacts[0].evidenceClass = 'SEARCH_SIGNAL';
  assert.match(validateEvidenceBundle({ facts: invalidFacts, media, routes, sources }).join('\n'), /ineligible evidence/);
});
