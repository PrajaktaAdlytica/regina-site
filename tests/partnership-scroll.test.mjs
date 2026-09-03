import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { partnershipRevealGroups, partnershipFooterReveal } from '../src/site/partnership-scroll-motion.js';

test('Partnerstwo motion covers every section and individual partner/offer rows', () => {
  for (const anchor of ['.collage-hero', '.partnership-opening', '.section-intro', '.partner-grid > article:nth-child(odd)', '.partner-grid > article:nth-child(even)', '.network-block', '.offer-grid > article:nth-child(odd)', '.offer-grid > article:nth-child(even)', '.mauve-section > .container', '.cta-inner']) {
    assert.ok(partnershipRevealGroups.some(group => group.anchor === anchor), anchor);
  }
  for (const group of [...partnershipRevealGroups, partnershipFooterReveal]) {
    assert.ok(group.reverseHorizontal);
    assert.equal(group.distance,96);
    assert.equal(group.compactDistance,28);
    assert.ok(group.directions.every(direction => ['left','right'].includes(direction)));
  }
});

test('Partnerstwo preserves its existing content and uses the shared GSAP/Lenis lifecycle', () => {
  const html = fs.readFileSync('dist/client/partnerstwo/index.html','utf8');
  for (const token of ['class="partnership-page"', 'partnership-collage.webp', 'network-institutions.svg', 'Uczelnie i edukacja', 'Partnerzy biznesowi', 'Organizacje społeczne', 'Instytucje i samorządy', 'Wspólne projekty', 'Doradztwo eksperckie', 'Wsparcie w pozyskiwaniu finansowania', 'href="/kontakt/"']) {
    assert.ok(html.includes(token),token);
  }
  const engine = fs.readFileSync('src/site/partnership-scroll-engine.js','utf8');
  assert.match(engine,/gsap\/ScrollTrigger/);
  assert.match(engine,/import Lenis from 'lenis'/);
  assert.match(engine,/installPageScrollMotion/);
  assert.match(engine,/partnershipFooterReveal/);
  assert.match(fs.readFileSync('src/site/partnership-scroll.css','utf8'),/overflow-x:clip/);
});
