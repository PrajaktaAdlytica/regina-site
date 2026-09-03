import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { organisation } from '../src/site/content.js';
import { contactRevealGroups, contactFooterReveal } from '../src/site/contact-scroll-motion.js';

test('Contact redesign retains confirmed details, form semantics and all three FAQ rows', () => {
  const html = fs.readFileSync('dist/client/kontakt/index.html', 'utf8');
  for (const value of [organisation.email, organisation.phone, organisation.city, organisation.krs, organisation.nip, organisation.regon, 'mailto:' + organisation.email, 'tel:' + organisation.telephone, 'id="wiadomosc"', 'id="lokalizacja"', 'contact-page', 'contact-opening-grid', 'contact-faq']) assert.ok(html.includes(value), value);
  assert.equal((html.match(/<details>/g) || []).length, 3);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  for (const name of ['name','email','subject','message']) assert.ok(html.includes(`id="contact-${name}"`));
  assert.match(html, /Nic nie zostanie wysłane automatycznie/);
  assert.doesNotMatch(html, /poland-warsaw\.svg|Wiadomość została wysłana/);
});

test('Warsaw map is opt-in, city-wide, attributed and has a permanent external fallback', () => {
  const html = fs.readFileSync('dist/client/kontakt/index.html', 'utf8');
  assert.doesNotMatch(html, /<iframe/);
  assert.match(html, /Warszawa w OpenStreetMap/);
  assert.match(html, /nie dokładny adres biura/);
  assert.match(html, /Włącz mapę/);
  assert.match(html, /Arne Müseler/);
  const source = fs.readFileSync('src/site/ContactMap.jsx', 'utf8');
  assert.match(source, /useState\(false\)/);
  assert.match(source, /active \? <iframe/);
  assert.match(source, /setActive\(value => !value\)/);
  assert.match(source, /© OpenStreetMap contributors/);
  assert.match(source, /data-lenis-prevent/);
  assert.match(source, /referrerPolicy="no-referrer"/);
  assert.doesNotMatch(source, /[?&]marker=|geolocation/);
  assert.match(fs.readFileSync('dist/client/prywatnosc/index.html','utf8'), /OpenStreetMap/);
});

test('Contact has independent directional row reveals and accessible hover/motion safeguards', () => {
  for (const anchor of ['.contact-opening', '.contact-opening-grid', '.contact-details > header', '.contact-detail-row:nth-child(odd)', '.contact-detail-row:nth-child(even)', '.contact-registration', '.contact-form-panel', '.form-field:nth-child(odd)', '.form-field:nth-child(even)', '.contact-form-panel > form', '.contact-map-grid', '.contact-faq > header', '.contact-faq details:nth-child(odd)', '.contact-faq details:nth-child(even)']) assert.ok(contactRevealGroups.some(group => group.anchor === anchor), anchor);
  for (const group of [...contactRevealGroups, contactFooterReveal]) {
    assert.equal(group.reverseHorizontal,true);
    assert.equal(group.distance,96);
    assert.equal(group.compactDistance,28);
    assert.ok(group.directions.every(direction => ['left','right'].includes(direction)));
  }
  const css = fs.readFileSync('src/site/contact.css', 'utf8');
  for (const token of ['(hover: hover) and (pointer: fine)', '(prefers-reduced-motion: reduce)', ':focus-within', ':focus-visible', 'transform-origin: right', 'transform-origin: left', 'overflow-wrap: anywhere', 'color: var(--rp-inverse)', 'transition: none']) assert.ok(css.includes(token),token);
  assert.doesNotMatch(css, /(?:^|[;{])\s*translate\s*:/m);
  const engine = fs.readFileSync('src/site/contact-scroll-engine.js','utf8');
  assert.match(engine, /gsap\/ScrollTrigger/);
  assert.match(engine, /import Lenis from 'lenis'/);
  assert.match(engine, /installPageScrollMotion/);
});
