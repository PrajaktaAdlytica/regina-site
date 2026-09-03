import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const css = fs.readFileSync('src/site/editorial.css', 'utf8');
test('photographic cards coordinate a bottom-up fill, photograph and CTA without layout shifts', () => {
  assert.match(css, /--pillar-fill:inset\(100% 0 0\)/);
  assert.match(css, /background:var\(--rp-blush\); clip-path:var\(--pillar-fill\)/);
  assert.match(css, /--pillar-duration:240ms/);
  const hover = css.match(/\.photo-pillars article:hover\s*\{([^}]+)\}/)?.[1];
  assert.ok(hover);
  for (const token of ['--pillar-fill:inset(0)', '--pillar-scale:1.035', '--pillar-arrow:6px', '--pillar-duration:420ms']) assert.ok(hover.includes(token));
  assert.match(css, /transform:scale\(var\(--pillar-scale\)\)/);
  assert.match(css, /transform:translateX\(var\(--pillar-arrow\)\)/);
  assert.match(css, /isolation:isolate/);
  assert.doesNotMatch(hover, /padding:|margin:|width:|height:/);
});
test('card motion supports keyboard access, touch and reduced-motion preferences', () => {
  assert.match(css, /\.photo-pillars article:has\(:focus-visible\)\s*\{/);
  assert.match(css, /@media\(hover:hover\) and \(pointer:fine\)/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)\{\.photo-link \.editorial-photo[^}]*transition:none;transform:none/);
  assert.match(css, /\.photo-pillars article>svg,\.photo-pillars article \.site-text-link svg\{transition:none;transform:none\}/);
});
