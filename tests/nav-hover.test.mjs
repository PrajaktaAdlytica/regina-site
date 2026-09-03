import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('shared navbar underline draws left-to-right on hover and keyboard focus', () => {
  const css = fs.readFileSync('src/site/styles.css', 'utf8');
  const underline = css.match(/\.desktop-nav a:after\s*\{([^}]+)\}/)?.[1];
  assert.ok(underline);
  assert.match(underline, /transform: scaleX\(0\)/);
  assert.match(underline, /transform-origin: left center/);
  assert.match(underline, /transition: transform 300ms var\(--ease\)/);
  assert.match(css, /\.desktop-nav a:is\(:hover, :focus-visible\):after,[\s\S]*?transform: scaleX\(1\)/);
  assert.match(css, /\.desktop-nav a\[aria-current="page"\]:after\s*\{\s*transform: scaleX\(1\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*transition: none !important/);
});
