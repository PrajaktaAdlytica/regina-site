import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { headerOffset } from '../src/site/header-offset.js';
import { pages } from '../src/site/content.js';

test('Every site route retains one shared sticky navbar and the supplied logo', () => {
  for (const route of Object.keys(pages)) {
    const html = fs.readFileSync(`dist/client${route}index.html`, 'utf8');
    assert.equal((html.match(/<header class="site-header"/g) || []).length, 1, route);
    assert.ok(html.includes('/assets/logo.svg'));
    assert.ok(html.includes('id="mobile-navigation"'));
  }
  const css = fs.readFileSync('src/site/sticky-header.css','utf8');
  assert.match(css,/position: sticky/);
  assert.match(css,/top: 0/);
  assert.match(css,/background: var\(--rp-canvas\)/);
  assert.match(css,/z-index: var\(--rp-z-header/);
  assert.match(css,/scroll-padding-top: calc\(var\(--site-header-height\) \+ 16px\)/);
  assert.match(css,/\.enhanced \.hero-sticky/);
});

test('Anchor and sculpture offsets follow the measured header, including mobile and Misja', () => {
  let height = 93;
  const win = {document:{querySelector:()=>({getBoundingClientRect:()=>({height})})}};
  assert.equal(headerOffset(win),109);
  height=92; assert.equal(headerOffset(win),108);
  height=81; assert.equal(headerOffset(win),97);
  assert.equal(headerOffset({}),16);
  const header=fs.readFileSync('src/site/components.jsx','utf8');
  assert.match(header,/new ResizeObserver\(measure\)/);
  assert.match(header,/observer\?\.disconnect\(\)/);
  const engine=fs.readFileSync('src/site/home-scroll-motion.js','utf8');
  assert.match(engine,/anchors: \{ offset: -headerOffset\(win\) \}/);
  const hero=fs.readFileSync('src/site/HeroJourney.jsx','utf8');
  assert.match(hero,/headerOffset\(\) - rect.top/);
  assert.match(hero,/min-height: 700px/);
});

test('Navbar is compact across routes without changing the official logo or hover system', () => {
  const css = fs.readFileSync('src/site/styles.css','utf8');
  assert.match(css,/\.header-inner \{\s*min-height: 92px/);
  assert.match(css,/@media \(max-width: 760px\)[\s\S]*?\.header-inner \{\s*min-height: 80px/);
  assert.match(css,/\.site-logo img \{[\s\S]*?width: 148px;[\s\S]*?height: 60px;[\s\S]*?object-fit: contain/);
  assert.match(css,/\.desktop-nav \{[\s\S]*?gap: 16px/);
  const sticky = fs.readFileSync('src/site/sticky-header.css','utf8');
  assert.match(sticky,/background: var\(--rp-blush\)/);
  assert.match(sticky,/prefers-reduced-motion: reduce/);
  assert.match(sticky,/min-height: 44px/);
});
