import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { activitiesRevealGroups } from '../src/site/activities-scroll-motion.js';

test('research hover preserves scroll transforms and decorative row semantics', () => {
  const css = fs.readFileSync('src/site/activities.css', 'utf8');
  assert.match(css, /research-areas > div:hover::before/);
  assert.match(css, /transform-origin:left center/);
  assert.match(css, /background:var\(--rp-rose\)/);
  assert.match(css, /research-editorial:focus-within h2 em/);
  assert.match(css, /pointer-events:none/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /research-areas > div:hover > svg \{ transform:none; \}/);
  assert.doesNotMatch(css, /cursor:pointer|translate:/);
});

test('Activities opening keeps six real jump links and all existing programme rows', () => {
  const html = fs.readFileSync('dist/client/dzialania/index.html', 'utf8');
  assert.match(html, /class="activities-opening-grid"/);
  assert.match(html, /id="activities-title"/);
  assert.match(html, /Rzeczywiste możliwości/);
  assert.equal((html.match(/class="programme-chapter /g) || []).length, 6);
  for (const id of ['edukacja','wspolpraca','spolecznosc','innowacje','przedsiebiorcy','badania']) {
    assert.ok(html.includes(`href="#${id}"`));
    assert.ok(html.includes(`id="${id}"`));
  }
  assert.match(html, /class="research-editorial"/);
  const css = fs.readFileSync('src/site/activities.css', 'utf8');
  assert.match(css, /max-width:900px/);
  assert.match(css, /focus-visible/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /overflow-x:clip/);
});

test('Activities motion covers index rows, six alternating chapters, research rows and closing CTA', () => {
  for (const anchor of ['.activities-opening', '.activities-opening-grid', '.activities-index li:nth-child(odd)', '.activities-index li:nth-child(even)', '.programme-chapter:not(.reversed) .programme-chapter-inner', '.programme-chapter.reversed .programme-chapter-inner', '.research-editorial > .container', '.research-areas', '.research-areas > div', '.cta-inner']) {
    assert.ok(activitiesRevealGroups.some(group => group.anchor === anchor), anchor);
  }
  for (const group of activitiesRevealGroups) {
    assert.ok(group.reverseHorizontal);
    assert.ok(group.directions.every(direction => ['left', 'right'].includes(direction)));
  }
  const engine = fs.readFileSync('src/site/activities-scroll-engine.js', 'utf8');
  assert.match(engine, /installPageScrollMotion/);
  assert.match(engine, /gsap\/ScrollTrigger/);
  assert.match(engine, /import Lenis from 'lenis'/);
});
