// Observe stationary containers. Atlas/network children keep ownership of their
// selection animations; scroll reveals animate only their outer wrappers.
export const missionRevealGroups = [
  { anchor: '.mission-hero-editorial', targets: [':scope > .mission-hero-titleblock', ':scope > .mission-hero-visual'], directions: ['left', 'right'], stagger: 80 },
  { anchor: '.mission-hero-bottom', targets: [':scope > p', ':scope > .editorial-actions'], directions: ['up', 'up'], stagger: 80 },
  { anchor: '.mission-statement .container', targets: [':scope > .eyebrow', ':scope > h2', ':scope > .statement-bottom'], directions: ['down', 'up', 'right'], stagger: 85 },
  { anchor: '.mission-atlas .section-intro', targets: [':scope > div'], directions: ['left', 'right'], stagger: 80 },
  { anchor: '.atlas-layout', targets: [':scope > .atlas-navigation', ':scope > .atlas-preview'], directions: ['left', 'right'], stagger: 90 },
  { anchor: '.international-opening', targets: [':scope > .international-copy', ':scope > .cooperation-network'], directions: ['left', 'up'], stagger: 90 },
  { anchor: '.community-feature-heading', targets: [':scope > .eyebrow', ':scope > h2'], directions: ['left', 'down'], stagger: 70 },
  { anchor: '.community-feature-body', targets: [':scope > .community-feature-art', ':scope > .community-feature-copy'], directions: ['left', 'right'], stagger: 90 },
  // The same GSAP enter/enterBack state replays the photo's frame/zoom in CSS.
  // Only the caption uses the shared slide, leaving the frame stationary.
  { anchor: '.city-context', targets: [':scope > figure > figcaption'], directions: ['up'], end: 'bottom 30%' },
  { anchor: '.cta-inner', targets: [':scope > .eyebrow', ':scope > h2', ':scope > div'], directions: ['down', 'up', 'right'], stagger: 80 },
].map(group => ({
  ...group,
  // Make direction legible, while keeping touch motion shorter and lighter.
  distance: 72, compactDistance: 28,
  duration: 0.9, compactDuration: 0.6,
  ease: 'power2.out',
}));
