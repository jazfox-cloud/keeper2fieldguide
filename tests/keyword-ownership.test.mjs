import test from 'node:test';
import assert from 'node:assert/strict';

import { validateKeywordOwnership } from '../src/data/validation.ts';

const routes = [{ id: 'home', path: '/', title: 'Example Game Guide', description: 'Neutral home.', published: true, sitemap: true }];
const keywords = [
  { id: 'keyword:example', representative: 'example game', demandSource: 'SEARCH_SIGNAL', userTask: 'Choose a guide task.', owner: 'home', evidenceCompleteness: 'COMPLETE', directAnswer: 'SATISFIED', updateTrigger: 'Official scope change.' },
  { id: 'keyword:build', representative: 'example game best build', demandSource: 'SEARCH_SIGNAL', userTask: 'Choose a tested build.', owner: 'RESEARCH_BACKLOG', evidenceCompleteness: 'BLOCKED', directAnswer: 'RESEARCH_REQUIRED', updateTrigger: 'First-hand test.' },
];
const backlog = [{ taskId: 'test-example-build', keywordId: 'keyword:build', goal: 'Test a fictional build.', invalidOrMissingField: 'Version and outcome', sourceCandidates: ['Owned capture'], collectionMethod: 'Record a test.', validationMethod: 'Repeat the test.', completionCriteria: 'Repeatable evidence.', unblockCondition: 'Evidence review passes.', publicationState: 'BLOCKED' }];

test('accepts one route owner or an executable backlog per keyword', () => {
  assert.deepEqual(validateKeywordOwnership(keywords, routes, backlog), []);
});

test('rejects duplicate representative ownership', () => {
  const invalid = [...structuredClone(keywords), { ...structuredClone(keywords[0]), id: 'keyword:duplicate', owner: 'RESEARCH_BACKLOG' }];
  assert.match(validateKeywordOwnership(invalid, routes, backlog).join('\n'), /multiple owners/);
});

test('rejects a backlog task attached to a routed keyword', () => {
  const invalid = structuredClone(keywords);
  invalid[1].owner = 'home';
  assert.match(validateKeywordOwnership(invalid, routes, backlog).join('\n'), /backlog.*route/);
});
