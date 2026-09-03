// Stationary section/row triggers; child translate leaves hover transforms alone.
const timing = { reverseHorizontal: true, distance: 96, compactDistance: 28,
  duration: 1.05, compactDuration: 0.65, stagger: 100, ease: 'power2.out' };

export const partnershipRevealGroups = [
  { anchor: '.collage-hero', targets: [':scope > .collage-copy', ':scope > figure'], directions: ['left', 'right'] },
  { anchor: '.partnership-opening', targets: [':scope > .human-art', ':scope > div'], directions: ['right', 'left'] },
  { anchor: '.section-intro', targets: [':scope > div'], directions: ['left', 'right'] },
  { anchor: '.partner-grid > article:nth-child(odd)', targets: [':scope > svg', ':scope > h3'], directions: ['left'] },
  { anchor: '.partner-grid > article:nth-child(even)', targets: [':scope > svg', ':scope > h3'], directions: ['right'] },
  { anchor: '.network-block', targets: [':scope > img', ':scope > div'], directions: ['left', 'right'] },
  { anchor: '.offer-grid > article:nth-child(odd)', targets: [':scope > img', ':scope > h3', ':scope > p'], directions: ['left'] },
  { anchor: '.offer-grid > article:nth-child(even)', targets: [':scope > img', ':scope > h3', ':scope > p'], directions: ['right'] },
  { anchor: '.mauve-section > .container', targets: [':scope > .mauve-note'], directions: ['right'] },
  { anchor: '.cta-inner', targets: [':scope > .eyebrow', ':scope > h2', ':scope > div'], directions: ['left', 'right', 'left'] },
].map(group => ({ ...group, ...timing }));

export const partnershipFooterReveal = { ...timing, directions: ['left', 'right'] };
