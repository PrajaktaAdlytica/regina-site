import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { goals } from '../src/site/content.js';

test('mission atlas retains every approved goal with six linked tabs and panels', () => {
  const html = fs.readFileSync('dist/client/misja/index.html', 'utf8');
  assert.doesNotMatch(html, /class="goal-grid"/);
  assert.match(html, /id="cele"/);
  assert.equal((html.match(/role="tab"/g) || []).length, 6);
  assert.equal((html.match(/role="tabpanel"/g) || []).length, 6);
  for (let index = 0; index < goals.length; index++) {
    assert.ok(html.includes(goals[index][1])); assert.ok(html.includes(goals[index][2]));
    assert.ok(html.includes(`aria-controls="mission-panel-${index}"`));
    assert.ok(html.includes(`aria-labelledby="mission-tab-${index}"`));
  }
  assert.equal((html.match(/aria-selected="true"/g) || []).length, 1);
  assert.ok(html.includes('Poprzedni cel')); assert.ok(html.includes('Następny cel'));
});
test('mission atlas supports keyboard navigation, reduced motion and real destinations', () => {
  const source = fs.readFileSync('src/site/MissionAtlas.jsx', 'utf8');
  for (const key of ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End']) assert.ok(source.includes(key));
  assert.match(source, /prefers-reduced-motion: reduce/);
  assert.match(source, /context\?\.revert\(\)/);
  assert.doesNotMatch(source, /setInterval|onMouseEnter/);
  for (const match of source.matchAll(/image: '([^']+)'/g)) assert.ok(fs.existsSync(`public/site/${match[1]}`));
  for (const match of source.matchAll(/href: '([^']+)'/g)) {
    const [route, id] = match[1].split('#');
    const html = fs.readFileSync(`dist/client${route}index.html`, 'utf8');
    if (id) assert.ok(html.includes(`id="${id}"`));
  }
});
test('atlas has responsive controls, honest image provenance and no autoplay', () => {
  const css = fs.readFileSync('src/site/mission-atlas.css', 'utf8');
  assert.match(css, /@media\(max-width:900px\)/);
  assert.match(css, /\[hidden\] \{ display:none; \}/);
  assert.match(css, /focus-visible/);
  const html = fs.readFileSync('dist/client/informacje/index.html', 'utf8');
  assert.ok(html.includes('nie stanowią dokumentacji jej działalności'));
});
