import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('Vercel serves complete prerendered pages without exposing the Sites worker or SPA fallback', () => {
  const config = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  assert.equal(config.outputDirectory, 'dist/client');
  assert.equal(config.framework, null);
  assert.equal(config.trailingSlash, true);
  assert.equal(config.rewrites, undefined);
  assert.ok(fs.existsSync(`${config.outputDirectory}/404.html`));
  for (const route of ['misja','dzialania','projekty','partnerstwo','kontakt','prywatnosc','informacje']) {
    assert.ok(fs.existsSync(`${config.outputDirectory}/${route}/index.html`));
  }
  assert.ok(config.headers[0].headers.some(h => h.key === 'X-Robots-Tag' && h.value === 'noindex, nofollow'));
});
