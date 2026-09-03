import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { missionRevealGroups } from '../src/site/mission-scroll-motion.js';

test('mission hover is a scoped decorative colour sweep with touch and reduced-motion guards', () => {
  const css = fs.readFileSync('src/site/mission-statement.css', 'utf8');
  assert.match(css, /isolation: isolate/);
  assert.match(css, /background: var\(--rp-plum\)/);
  assert.match(css, /transform-origin: left center/);
  assert.match(css, /\.mission-statement:hover::before/);
  assert.match(css, /\(hover: hover\) and \(pointer: fine\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /transition: none !important/);
  assert.match(css, /pointer-events: none/);
  assert.doesNotMatch(css, /cursor: pointer|translate:|height: \d+vh/);
  const group = missionRevealGroups.find(item => item.anchor === '.mission-statement .container');
  assert.deepEqual(group.targets, [':scope > .eyebrow', ':scope > h2', ':scope > .statement-bottom']);
});

test('mission retains its statement content and non-interactive section semantics', () => {
  const html = fs.readFileSync('dist/client/misja/index.html', 'utf8');
  assert.match(html, /<section class="mission-statement"><div class="container">/);
  assert.match(html, /Nasza misja/);
  assert.match(html, /Wzmacniać kompetencje społeczne/);
  assert.match(fs.readFileSync('src/site/Pages.jsx', 'utf8'), /import "\.\/mission-statement.css"/);
});
