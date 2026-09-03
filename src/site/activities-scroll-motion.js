// Each row has a stationary trigger; its content enters from opposite sides.
export const activitiesRevealGroups = [
  { anchor: '.activities-opening', targets: [':scope > .activities-breadcrumb'], directions: ['left'] },
  { anchor: '.activities-opening-grid', targets: [':scope > .activities-opening-copy', ':scope > .activities-index > .activities-index-heading'], directions: ['left', 'right'] },
  { anchor: '.activities-index li:nth-child(odd)', targets: [':scope > a'], directions: ['right'] },
  { anchor: '.activities-index li:nth-child(even)', targets: [':scope > a'], directions: ['left'] },
  { anchor: '.programme-chapter:not(.reversed) .programme-chapter-inner', targets: [':scope > .programme-copy', ':scope > .programme-art'], directions: ['left', 'right'] },
  { anchor: '.programme-chapter.reversed .programme-chapter-inner', targets: [':scope > .programme-copy', ':scope > .programme-art'], directions: ['right', 'left'] },
  { anchor: '.research-editorial > .container', targets: [':scope > div:first-child'], directions: ['left'] },
  { anchor: '.research-areas', targets: [':scope > p'], directions: ['right'] },
  { anchor: '.research-areas > div', targets: [':scope > span', ':scope > h3', ':scope > svg'], directions: ['right', 'left', 'right'] },
  { anchor: '.cta-inner', targets: [':scope > .eyebrow', ':scope > h2', ':scope > div'], directions: ['left', 'right', 'left'] },
].map(group => ({ ...group, reverseHorizontal: true, distance: 72, compactDistance: 24,
  duration: 0.9, compactDuration: 0.6, stagger: 80, ease: 'power2.out' }));
