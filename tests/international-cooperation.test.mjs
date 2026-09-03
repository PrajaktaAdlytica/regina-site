import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { programmes } from '../src/site/content.js';

test('Misja communicates the four confirmed regions without a Poland-only map', () => {
  const html = fs.readFileSync('dist/client/misja/index.html', 'utf8');
  assert.match(html, /id="ponad-granicami"/);
  assert.doesNotMatch(html, /poland-outline\.svg|class="geography-section"/);
  assert.ok(html.includes(programmes[3].text));
  assert.ok(html.includes('punkt wyjścia.'));
  for (const region of ['Europa', 'Afryka', 'Azja', 'Australia']) {
    assert.ok(html.includes(`<span>${region}</span>`));
  }
  assert.ok(html.includes(`/kontakt/?temat=${encodeURIComponent('Współpraca międzynarodowa — Europa')}`));
  assert.equal((html.match(/class="cooperation-node cooperation-node-/g) || []).length, 4);
  assert.equal((html.match(/aria-pressed="true"/g) || []).length, 1);
  assert.ok(fs.existsSync('public/visual-library/poland-outline.svg'), 'original map remains available elsewhere');
});
test('international network responds to pointer, keyboard and tap with reduced-motion support', () => {
  const source = fs.readFileSync('src/site/InternationalCooperation.jsx', 'utf8');
  assert.doesNotMatch(source, /<img|international-art|office|biuro/);
  assert.match(source, /nie mapa lokalizacji projektów/);
  assert.match(source, /onClick=\{\(\) => setActive\(index\)\}/);
  assert.match(source, /onFocus=\{\(\) => setActive\(index\)\}/);
  assert.match(source, /event.pointerType === 'mouse'/);
  assert.match(source, /aria-pressed=\{index === active\}/);
  assert.match(source, /aria-live="polite"/);
  assert.match(source, /href=\{regionEnquiry\(region\)\}/);
  const css = fs.readFileSync('src/site/international-cooperation.css', 'utf8');
  assert.match(css, /focus-visible/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /max-width:900px/);
  assert.match(css, /@keyframes cooperation-connect/);
  assert.match(css, /animation:none!important/);
  const contact = fs.readFileSync('src/site/ContactForm.jsx', 'utf8');
  assert.match(contact, /URLSearchParams\(location.search\).get\("temat"\)/);
});
