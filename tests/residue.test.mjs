import test from 'node:test';
import assert from 'node:assert/strict';
import { scanText } from '../scripts/scan-project-residue.mjs';

test('detects reference-site identities', () => {
  assert.ok(scanText('DragonSwordGuide').length > 0);
  assert.ok(scanText('WARDOGS field guide').length > 0);
});

test('detects unapproved production domains and analytics IDs', () => {
  assert.ok(scanText('https://reference-game-guide.com/page/').length > 0);
  assert.ok(scanText('G-ABCDEF12').length > 0);
});

test('allows neutral placeholder and generic integration domains', () => {
  assert.deepEqual(scanText('https://example.invalid and https://www.googletagmanager.com'), []);
});

test('allows the consuming project identity only when explicitly declared', () => {
  assert.deepEqual(scanText('WARDOGS Guide', ['WARDOGS']), []);
});

test('allows project-owned and source-registry hosts only when explicitly supplied', () => {
  assert.deepEqual(scanText('https://keeper2fieldguide.com and https://store.steampowered.com/app/4358690', [], ['keeper2fieldguide.com', 'store.steampowered.com']), []);
  assert.match(scanText('https://unapproved-example.com', [], ['keeper2fieldguide.com']).join('\n'), /unapproved absolute URL host/);
});
