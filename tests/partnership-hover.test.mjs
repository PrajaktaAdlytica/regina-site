import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('Partnership hover is scoped, directional, motion-safe and compatible with scroll translate', () => {
  const css = fs.readFileSync('src/site/partnership-hover.css', 'utf8');
  assert.match(fs.readFileSync('src/site/Pages.jsx', 'utf8'), /import "\.\/partnership-hover.css"/);
  for (const token of ['.partnership-page', 'transform-origin: left', 'transform-origin: right', 'transform-origin: bottom', 'pointer-events: none', '(hover: hover) and (pointer: fine)', '(prefers-reduced-motion: reduce)', 'transition: none', 'transform: none', '.network-block:focus-within']) {
    assert.ok(css.includes(token), token);
  }
  assert.doesNotMatch(css, /(?:^|[;{])\s*translate\s*:/m);
  assert.doesNotMatch(css, /cursor:\s*pointer/);
});

test('Partner and offer cards remain reading content without invented links or keyboard stops', () => {
  const html = fs.readFileSync('dist/client/partnerstwo/index.html', 'utf8');
  const cards = [...html.matchAll(/<article>([\s\S]*?)<\/article>/g)];
  assert.equal(cards.length, 7);
  for (const [, card] of cards) {
    assert.doesNotMatch(card, /tabindex|role="button"|<a\s/);
  }
  assert.ok(html.includes('network-institutions.svg'));
  assert.ok(html.includes('partnership-collage.webp'));
});
