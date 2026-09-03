import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { programmes } from '../src/site/content.js';

test('explorer replaces the icon grid and preserves all six programme destinations', () => {
  const html = fs.readFileSync('dist/client/index.html', 'utf8');
  assert.match(html, /class="programme-explorer"/);
  assert.doesNotMatch(html, /icon-overview-grid/);
  assert.equal((html.match(/class="explorer-tile"/g) || []).length, 6);
  assert.equal((html.match(/class="explorer-accordion"/g) || []).length, 6);
  for (const p of programmes) {
    assert.ok(html.includes(`/dzialania/#${p.id}`));
    assert.ok(html.includes(`aria-controls="explorer-panel-${p.id}"`));
    assert.ok(html.includes(`aria-labelledby="explorer-toggle-${p.id}" hidden`));
    assert.ok(html.includes(p.text));
  }
});
test('explorer reuses local artwork and accessible native interactions', () => {
  const source = fs.readFileSync('src/site/ProgrammeExplorer.jsx', 'utf8');
  assert.match(source, /onPointerEnter/);
  assert.match(source, /onFocus: \(\) => setActive/);
  assert.match(source, /aria-expanded=\{expanded\}/);
  assert.match(source, /hidden=\{!expanded\}/);
  assert.doesNotMatch(source, /linkedin|DEFAULT_MEMBERS|react-icons|onMouseLeave/);
  const assets = [...source.matchAll(/src: "(\/site\/[^\"]+)"/g)].map(m => m[1]);
  assert.equal(assets.length, 6);
  for (const asset of assets) assert.ok(fs.existsSync(`dist/client${asset}`));
  const css = fs.readFileSync('src/site/programme-explorer.css', 'utf8');
  assert.match(css, /@media\(max-width:900px\)/);
  assert.match(css, /\.explorer-panel\[hidden\] \{ display:none; \}/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
  assert.doesNotMatch(css, /opacity:\.5|opacity:0\.5/);
});
