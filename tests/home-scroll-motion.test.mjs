import test from 'node:test';
import assert from 'node:assert/strict';
import { homeRevealGroups, installHomeScrollMotion, installPageScrollMotion, revealOffset } from '../src/site/home-scroll-motion.js';
import { missionRevealGroups } from '../src/site/mission-scroll-motion.js';
import { activitiesRevealGroups } from '../src/site/activities-scroll-motion.js';
import { projectsRevealGroups, projectsFooterReveal } from '../src/site/projects-scroll-motion.js';
import { partnershipRevealGroups } from '../src/site/partnership-scroll-motion.js';
import { contactRevealGroups } from '../src/site/contact-scroll-motion.js';
import { scrollHomeTo } from '../src/site/scroll-home-to.js';

function fixture(reduced = false, anchorSelector = '.project-list') {
  const animations = [], triggers = [], instances = [], ticks = new Set();
  const target = { style: { opacity: '', translate: '' } };
  const anchor = { dataset: {}, querySelectorAll: () => [target], contains: element => element === target };
  const media = matches => ({ matches, addEventListener(_, cb) { this.change = cb; }, removeEventListener() { this.change = null; } });
  const preference = media(reduced), desktop = media(true);
  const document = { activeElement: null, querySelector: () => null, addEventListener(_, cb) { this.focus = cb; }, removeEventListener() { this.focus = null; } };
  const root = { ownerDocument: document, querySelectorAll: selector => selector === anchorSelector ? [anchor] : [] };
  const win = { innerWidth: 1440, matchMedia: query => query.includes('reduced-motion') ? preference : desktop,
    addEventListener(_, cb) { this.scroll = cb; }, removeEventListener() { this.scroll = null; } };
  const engine = {
    gsap: { registerPlugin() {}, ticker: { add: cb => ticks.add(cb), remove: cb => ticks.delete(cb) },
      to(values, options) { const tween = { values, options, killed: false, kill() { this.killed = true; } }; animations.push(tween); return tween; } },
    ScrollTrigger: { create(config) { const trigger = { config, kill() { this.killed = true; } }; triggers.push(trigger); return trigger; }, refresh() {}, update() {} },
    Lenis: class { constructor(options) { this.options = options; instances.push(this); } on() {} raf() {} destroy() { this.destroyed = true; } scrollTo(top, options) { this.destination = { top, options }; } },
  };
  return { root, win, engine, animations, triggers, instances, ticks, anchor, target, preference, desktop, document };
}

test('Activities rows reverse horizontal entry when returning upward and reset for repeated passes', () => {
  const spec = activitiesRevealGroups.find(group => group.anchor === '.activities-index li:nth-child(odd)');
  const f = fixture(false, spec.anchor);
  const dispose = installPageScrollMotion(f.root, f.engine, f.win, [spec]);
  const { config } = f.triggers[0];
  config.onEnter(); assert.equal(f.target.style.translate, '72px 0px');
  config.onLeave(); assert.equal(f.target.style.translate, '');
  config.onEnterBack(); assert.equal(f.target.style.translate, '-72px 0px');
  config.onLeaveBack(); config.onEnter();
  assert.equal(f.target.style.translate, '72px 0px');
  assert.equal(f.anchor.dataset.revealCount, '3');
  f.document.focus({ target: f.target }); assert.equal(f.target.style.opacity, '');
  f.desktop.matches = false; f.win.innerWidth = 390; f.desktop.change();
  assert.ok(f.instances[0].destroyed);
  f.triggers.at(-1).config.onEnter(); assert.equal(f.target.style.translate, '24px 0px');
  f.preference.matches = true; f.preference.change();
  assert.equal(f.target.style.translate, ''); assert.equal(f.ticks.size, 0);
  dispose();
});

test('homepage groups alternate directions while preserving the existing hero', () => {
  for (const selector of ['.home-intro', '.mission-intro', '.photo-pillars', '.explorer-heading', '.explorer-mosaic', '.explorer-index', '.explorer-accordion', '.project-list', '.accelerate-banner', '.cta-inner']) {
    assert.ok(homeRevealGroups.some(group => group.anchor === selector));
  }
  assert.ok(!homeRevealGroups.some(group => group.anchor.includes('hero')));
  assert.equal(revealOffset('up', false, false), '0px 44px');
  assert.equal(revealOffset('up', true, false), '0px -44px');
  assert.equal(revealOffset('down', true, true), '0px 20px');
  assert.equal(revealOffset('left', true, true), '-20px 0px');
});

test('Contact field rows replay down/up/down, with immediate focus restoration and native mobile scrolling', () => {
  const spec = contactRevealGroups.find(group => group.anchor === '.form-field:nth-child(even)');
  const f = fixture(false,spec.anchor);
  const dispose = installPageScrollMotion(f.root,f.engine,f.win,[{...spec,targets:[':scope > input']}]);
  const { config } = f.triggers[0];
  config.onEnter(); assert.equal(f.target.style.translate,'96px 0px');
  config.onLeave(); config.onEnterBack(); assert.equal(f.target.style.translate,'-96px 0px');
  config.onLeaveBack(); config.onEnter(); assert.equal(f.anchor.dataset.revealCount,'3');
  f.document.focus({target:f.target}); assert.equal(f.target.style.opacity,''); assert.equal(f.target.style.translate,'');
  f.desktop.matches=false; f.win.innerWidth=390; f.desktop.change();
  f.triggers.at(-1).config.onEnter(); assert.equal(f.target.style.translate,'28px 0px');
  assert.ok(f.instances[0].destroyed); assert.equal(f.ticks.size,0);
  f.preference.matches=true; f.preference.change(); assert.equal(f.target.style.translate,'');
  dispose(); assert.ok(f.triggers.at(-1).killed);
});

test('Partnerstwo rows replay down/up/down, with native mobile and reduced-motion/focus safety', () => {
  const spec = partnershipRevealGroups.find(group => group.anchor === '.offer-grid > article:nth-child(even)');
  const f = fixture(false,spec.anchor);
  const dispose = installPageScrollMotion(f.root,f.engine,f.win,[{...spec,targets:[':scope > h3']}]);
  const { config } = f.triggers[0];
  config.onEnter(); assert.equal(f.target.style.translate,'96px 0px');
  config.onLeave(); config.onEnterBack(); assert.equal(f.target.style.translate,'-96px 0px');
  config.onLeaveBack(); config.onEnter(); assert.equal(f.anchor.dataset.revealCount,'3');
  f.document.focus({target:f.target}); assert.equal(f.target.style.opacity,'');
  f.desktop.matches=false; f.win.innerWidth=390; f.desktop.change();
  f.triggers.at(-1).config.onEnter(); assert.equal(f.target.style.translate,'28px 0px');
  assert.ok(f.instances[0].destroyed); assert.equal(f.ticks.size,0);
  f.preference.matches=true; f.preference.change(); assert.equal(f.target.style.translate,'');
  dispose(); assert.ok(f.triggers.at(-1).killed);
});

test('Projects cards replay down/up/down with reversed sides and restore focused links', () => {
  const spec = projectsRevealGroups.find(group => group.anchor === '.project-reveal-row:nth-child(odd)');
  const f = fixture(false, spec.anchor);
  const dispose = installPageScrollMotion(f.root, f.engine, f.win, [spec]);
  const { config } = f.triggers[0];
  config.onEnter(); assert.equal(f.target.style.translate, '-96px 0px');
  assert.equal(f.animations[0].options.duration,1.05);
  config.onLeave(); config.onEnterBack(); assert.equal(f.target.style.translate, '96px 0px');
  config.onLeaveBack(); config.onEnter(); assert.equal(f.anchor.dataset.revealCount, '3');
  f.document.focus({ target: f.target }); assert.equal(f.target.style.translate, '');
  f.preference.matches = true; f.preference.change();
  assert.ok(f.instances[0].destroyed); assert.equal(f.ticks.size, 0);
  assert.equal(f.target.style.opacity, '');
  dispose(); assert.ok(f.triggers[0].killed);
});

test('Projects footer uses the same horizontal replay without changing other page defaults', () => {
  const f = fixture();
  f.anchor.children = [f.target];
  f.document.querySelector = () => f.anchor;
  const dispose = installPageScrollMotion(f.root,f.engine,f.win,[],projectsFooterReveal);
  f.triggers[0].config.onEnter(); assert.equal(f.target.style.translate,'-96px 0px');
  f.triggers[0].config.onLeave(); f.triggers[0].config.onEnterBack();
  assert.equal(f.target.style.translate,'96px 0px');
  dispose(); assert.equal(f.target.style.translate,'');
});
test('GSAP replays in both scroll directions and cleans up inline styles and ticker', () => {
  const f = fixture(); const dispose = installHomeScrollMotion(f.root, f.engine, f.win);
  const { config } = f.triggers[0];
  config.onEnter(); assert.equal(f.animations.length, 1);
  assert.equal(f.target.style.translate, '44px 0px');
  assert.equal(f.target.style.transform, undefined);
  config.onLeave(); assert.equal(f.target.style.opacity, ''); assert.ok(f.animations[0].killed);
  config.onEnterBack(); assert.equal(f.anchor.dataset.revealCount, '2');
  config.onLeaveBack(); assert.equal(f.target.style.translate, '');
  dispose(); assert.ok(f.triggers[0].killed); assert.ok(f.instances[0].destroyed);
  assert.equal(f.ticks.size, 0); assert.equal(f.document.focus, null);
});
test('reduced motion disables reveals and Lenis initially and on live preference changes', () => {
  const f = fixture(true); const dispose = installHomeScrollMotion(f.root, f.engine, f.win);
  assert.equal(f.triggers.length, 0); assert.equal(f.instances.length, 0);
  f.preference.matches = false; f.preference.change(); f.triggers[0].config.onEnter();
  assert.equal(f.animations.length, 1);
  f.preference.matches = true; f.preference.change();
  assert.ok(f.animations[0].killed); assert.ok(f.instances[0].destroyed);
  assert.equal(f.anchor.dataset.scrollReveal, undefined); assert.equal(f.target.style.opacity, '');
  dispose();
});
test('keyboard focus reveals immediately, while mobile uses native scrolling', () => {
  const f = fixture(); const dispose = installHomeScrollMotion(f.root, f.engine, f.win);
  f.triggers[0].config.onEnter(); f.document.focus({ target: f.target });
  assert.ok(f.animations[0].killed); assert.equal(f.target.style.opacity, '');
  f.document.activeElement = f.target; f.triggers[0].config.onEnterBack();
  assert.equal(f.animations.length, 1);
  f.desktop.matches = false; f.desktop.change(); assert.ok(f.instances[0].destroyed);
  assert.equal(f.instances.length, 1); assert.equal(f.ticks.size, 0);
  dispose();
});
test('hero navigation uses Lenis when available and native scrolling otherwise', () => {
  const f = fixture(); const dispose = installHomeScrollMotion(f.root, f.engine, f.win);
  let intercepted = false;
  f.win.scroll({ detail: { top: 1400, motion: false }, preventDefault() { intercepted = true; } });
  assert.ok(intercepted); assert.deepEqual(f.instances[0].destination, { top: 1400, options: { immediate: true } });
  const win = { CustomEvent: class { constructor(type, options) { this.type = type; Object.assign(this, options); } }, dispatchEvent: () => true, scrollTo(options) { this.destination = options; } };
  scrollHomeTo(500, false, win); assert.deepEqual(win.destination, { top: 500, behavior: 'instant' });
  dispose();
});

test('Misja shares replay, focus and reduced-motion cleanup without changing Home defaults', () => {
  assert.equal(installHomeScrollMotion, installPageScrollMotion);
  const f = fixture(false, '.city-context');
  const dispose = installPageScrollMotion(f.root, f.engine, f.win, missionRevealGroups);
  assert.equal(f.triggers.length, 1);
  assert.equal(f.instances.length, 1);
  assert.equal(f.triggers[0].config.end,'bottom 30%');
  f.triggers[0].config.onEnter();
  assert.equal(f.target.style.translate, '0px 72px');
  assert.equal(f.animations[0].options.duration,0.9);
  f.triggers[0].config.onLeave();
  f.triggers[0].config.onEnterBack();
  assert.equal(f.target.style.translate, '0px -72px');
  assert.equal(f.anchor.dataset.revealCount, '2');
  f.document.focus({target:f.target});
  assert.equal(f.target.style.opacity, '');
  f.preference.matches = true; f.preference.change();
  assert.equal(f.ticks.size,0);
  assert.ok(f.instances[0].destroyed);
  assert.equal(f.anchor.dataset.scrollReveal,undefined);
  dispose();
});

test('Misja groups cover each section and leave internal atlas/network motion alone',()=>{
  for(const anchor of ['.mission-hero-editorial','.mission-hero-bottom','.mission-statement .container','.mission-atlas .section-intro','.atlas-layout','.international-opening','.community-feature-heading','.community-feature-body','.city-context','.cta-inner']) {
    assert.ok(missionRevealGroups.some(group=>group.anchor===anchor),anchor);
  }
  assert.ok(!missionRevealGroups.some(group=>group.targets.some(target=>/atlas-art|atlas-story|cooperation-node|cooperation-path/.test(target))));
  assert.ok(!homeRevealGroups.some(group=>group.anchor==='.atlas-layout'));
  assert.deepEqual(new Set(missionRevealGroups.flatMap(group=>group.directions)),new Set(['left','right','up','down']));
  for(const group of missionRevealGroups) {
    assert.equal(group.distance,72); assert.equal(group.compactDistance,28);
  }
});
