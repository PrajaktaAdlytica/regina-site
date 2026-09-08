export const projectsRevealGroups = [
  { anchor: '.projects-opening', targets: [':scope > .projects-breadcrumb'], directions: ['left'] },
  { anchor: '.projects-opening-grid', targets: [':scope > .projects-opening-title', ':scope > .projects-opening-note'], directions: ['left', 'right'] },
  { anchor: '.connected-collage li:nth-child(odd)', targets: [':scope > a'], directions: ['left'] },
  { anchor: '.connected-collage li:nth-child(even)', targets: [':scope > a'], directions: ['right'] },
  { anchor: '.connected-collage', targets: [':scope > .connected-art'], directions: ['right'] },
  { anchor: '.connected-links', targets: [':scope > a'], directions: ['left', 'right', 'left'] },
  { anchor: '.projects-directory .project-list', targets: [':scope > a'], directions: ['left', 'right', 'left'] },
  { anchor: '.cta-inner', targets: [':scope > .eyebrow', ':scope > h2', ':scope > div'], directions: ['left', 'right', 'left'] },
].map(group => ({ ...group, reverseHorizontal: true, distance: 96, compactDistance: 28,
  duration: 1.05, compactDuration: 0.65, stagger: 100, ease: 'power2.out' }));

export const projectsFooterReveal = {
  directions: ['left', 'right'], reverseHorizontal: true,
  distance: 96, compactDistance: 28, duration: 1.05, compactDuration: 0.65,
  stagger: 100, ease: 'power2.out',
};
