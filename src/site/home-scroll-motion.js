import { headerOffset } from './header-offset.js';
// Animate children, observe their unmoving parent: transforms never retrigger
// scroll triggers at a viewport boundary. Content is visible without JS.
export const homeRevealGroups = [
  { anchor: '.home-intro', targets: [':scope > div:first-child', '.home-intro-aside'], directions: ['down', 'up'] },
  // HeroJourney already owns its scroll-driven sculpture and chapter motion.
  { anchor: '.mission-intro', targets: [':scope > .eyebrow', ':scope > .mission-intro-photo', ':scope > .mission-intro-copy'], directions: ['up', 'down', 'right'] },
  { anchor: '.photo-pillars', targets: [':scope > article'], directions: ['up'], stagger: 100 },
  { anchor: '.explorer-heading', targets: [':scope > div', ':scope > p'], directions: ['left', 'right'] },
  { anchor: '.explorer-mosaic', targets: [':scope > .explorer-column'], directions: ['up', 'down', 'up'], stagger: 80 },
  { anchor: '.explorer-summary', targets: [':scope > span', ':scope > div'], directions: ['left', 'up'], stagger: 60 },
  { anchor: '.explorer-index', targets: [':scope > .explorer-hint', ':scope > ol > li'], directions: ['right'], stagger: 55 },
  { anchor: '.explorer-accordion', targets: [':scope > h3'], directions: ['up'] },
  { anchor: '.projects-band .section-intro', targets: [':scope > div'], directions: ['left', 'right'] },
  { anchor: '.project-list', targets: [':scope > a'], directions: ['right'], stagger: 95 },
  { anchor: '.accelerate-banner', targets: [':scope > .accelerate-copy', ':scope > .accelerate-map-panel'], directions: ['left', 'right'], stagger: 90 },
  { anchor: '.cta-inner', targets: [':scope > .eyebrow', ':scope > h2', ':scope > div'], directions: ['down', 'up', 'right'], stagger: 80 },
];

export function revealOffset(direction, entersFromTop, compact, distance = compact ? 20 : 44) {
  if (direction === 'left') return `${-distance}px 0px`;
  if (direction === 'right') return `${distance}px 0px`;
  const sign = direction === 'down' ? -1 : 1;
  return `0px ${distance * sign * (entersFromTop ? -1 : 1)}px`;
}

export function installPageScrollMotion(root, { gsap, ScrollTrigger, Lenis }, win = window, revealGroups = homeRevealGroups, footerSpec = { directions: ['up'], stagger: 80 }) {
  if (!root) return () => {};
  gsap.registerPlugin(ScrollTrigger);
  const preference = win.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = win.matchMedia('(min-width: 901px) and (pointer: fine)');
  const groups = revealGroups.flatMap(spec => [...root.querySelectorAll(spec.anchor)].map(anchor => ({
    anchor, spec, targets: spec.targets.flatMap(selector => [...anchor.querySelectorAll(selector)]),
    animations: [],
  })));
  // The shared footer belongs to the currently mounted page's motion lifecycle.
  const footer = root.ownerDocument.querySelector('.footer-main');
  if (footer) groups.push({ anchor: footer, spec: footerSpec, targets: [...footer.children], animations: [] });
  const original = new Map(groups.flatMap(group => group.targets).map(target => [target, { opacity: target.style.opacity, translate: target.style.translate }]));
  const restore = target => Object.assign(target.style, original.get(target));
  let triggers = [], lenis, ticker, resizeObserver, refreshCall, disposed = false;
  const cancel = group => {
    group.animations.forEach(animation => animation.kill());
    group.animations = [];
    group.targets.forEach(restore);
  };
  const clear = () => {
    triggers.forEach(trigger => trigger.kill()); triggers = [];
    if (ticker) gsap.ticker.remove(ticker);
    ticker = null;
    lenis?.destroy(); lenis = null;
    groups.forEach(group => {
      cancel(group);
      delete group.anchor.dataset.scrollReveal;
      delete group.anchor.dataset.revealCount;
    });
  };
  const configure = () => {
    clear();
    if (preference.matches) return;
    if (desktop.matches) {
      lenis = new Lenis({
        lerp: 0.12, smoothWheel: true, syncTouch: false, autoRaf: false,
        anchors: { offset: -headerOffset(win) }, stopInertiaOnNavigate: true,
        prevent: node => Boolean(node.closest?.('dialog, [data-lenis-prevent]')),
      });
      lenis.on('scroll', ScrollTrigger.update);
      ticker = time => lenis?.raf(time * 1000);
      gsap.ticker.add(ticker);
    }
    groups.forEach(group => {
      const play = fromTop => {
        group.anchor.dataset.scrollReveal = 'visible';
        group.anchor.dataset.revealCount = String(Number(group.anchor.dataset.revealCount || 0) + 1);
        cancel(group);
        // Focusing a link or button must never temporarily conceal it.
        if (group.anchor.contains(root.ownerDocument.activeElement)) return;
        group.targets.forEach((target, index) => {
          let direction = group.spec.directions[index % group.spec.directions.length];
          if (fromTop && group.spec.reverseHorizontal) {
            if (direction === 'left') direction = 'right';
            else if (direction === 'right') direction = 'left';
          }
          // A value proxy keeps CSSPlugin away from the hover transform.
          const compact = win.innerWidth <= 900;
          const distance = compact ? group.spec.compactDistance : group.spec.distance;
          const values = { opacity: '0', translate: revealOffset(direction, fromTop, compact, distance) };
          Object.assign(target.style, values);
          const animation = gsap.to(values, {
            opacity: '1', translate: '0px 0px',
            duration: compact ? (group.spec.compactDuration ?? 0.48) : (group.spec.duration ?? 0.68),
            delay: index * (group.spec.stagger ?? 85) / 1000,
            ease: group.spec.ease ?? 'power3.out',
            onUpdate: () => { target.style.opacity = values.opacity; target.style.translate = values.translate; },
            onComplete: () => restore(target),
          });
          group.animations.push(animation);
        });
      };
      const reset = () => { group.anchor.dataset.scrollReveal = 'ready'; cancel(group); };
      group.anchor.dataset.scrollReveal = 'ready';
      triggers.push(ScrollTrigger.create({
        trigger: group.anchor, start: 'top bottom', end: group.spec.end ?? 'bottom top',
        onEnter: () => play(false), onEnterBack: () => play(true),
        onLeave: reset, onLeaveBack: reset,
        // Match the currently visible content after font/layout refreshes.
        onRefresh: self => { if (self.isActive && group.anchor.dataset.scrollReveal !== 'visible') play(false); },
      }));
    });
    ScrollTrigger.refresh();
  };
  const showFocused = event => groups.forEach(group => {
    if (group.anchor.contains(event.target)) cancel(group);
  });
  configure();
  // Hero fallback/enhanced mode, fonts and expanded mobile rows change heights.
  const scheduleRefresh = () => {
    if (lenis) lenis.options.anchors.offset = -headerOffset(win);
    refreshCall?.kill();
    refreshCall = gsap.delayedCall(0.12, () => { if (!disposed && !preference.matches) ScrollTrigger.refresh(); });
  };
  if (win.ResizeObserver) { resizeObserver = new win.ResizeObserver(scheduleRefresh); resizeObserver.observe(root); }
  root.ownerDocument.fonts?.ready.then(() => { if (!disposed) scheduleRefresh(); });
  const scrollTo = event => {
    if (!lenis) return;
    event.preventDefault();
    lenis.scrollTo(event.detail.top, { immediate: !event.detail.motion });
  };
  win.addEventListener('regina:scroll-to', scrollTo);
  preference.addEventListener('change', configure);
  desktop.addEventListener('change', configure);
  root.ownerDocument.addEventListener('focusin', showFocused);
  return () => {
    disposed = true;
    resizeObserver?.disconnect(); refreshCall?.kill();
    clear();
    win.removeEventListener('regina:scroll-to', scrollTo);
    preference.removeEventListener('change', configure);
    desktop.removeEventListener('change', configure);
    root.ownerDocument.removeEventListener('focusin', showFocused);
  };
}

// Keep the homepage API and reveal specification unchanged.
export const installHomeScrollMotion = installPageScrollMotion;
