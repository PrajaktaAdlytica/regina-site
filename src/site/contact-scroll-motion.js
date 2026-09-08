// Stationary anchors keep form focus and hover transforms independent of scroll.
const timing = { reverseHorizontal: true, distance: 96, compactDistance: 28,
  duration: 1.05, compactDuration: 0.65, stagger: 85, ease: 'power2.out' };
export const contactRevealGroups = [
  { anchor: '.contact-opening', targets: [':scope > nav'], directions: ['left'] },
  { anchor: '.contact-opening-grid', targets: [':scope > div'], directions: ['left', 'right'] },
  { anchor: '.contact-details > header', targets: [':scope > p', ':scope > h2'], directions: ['left'] },
  { anchor: '.contact-detail-row:nth-child(odd)', targets: [':scope > dt', ':scope > dd'], directions: ['left'] },
  { anchor: '.contact-detail-row:nth-child(even)', targets: [':scope > dt', ':scope > dd'], directions: ['right'] },
  { anchor: '.contact-registration', targets: [':scope > p', ':scope > dl'], directions: ['left', 'right'] },
  { anchor: '.contact-form-panel', targets: [':scope > .eyebrow', ':scope > h2', ':scope > .form-explainer'], directions: ['right'] },
  { anchor: '.form-field:nth-child(odd)', targets: [':scope > label', ':scope > input', ':scope > textarea', ':scope > p'], directions: ['left'] },
  { anchor: '.form-field:nth-child(even)', targets: [':scope > label', ':scope > input', ':scope > textarea', ':scope > p'], directions: ['right'] },
  { anchor: '.contact-form-panel > form', targets: [':scope > .form-privacy', ':scope > .site-button'], directions: ['left', 'right'] },
  { anchor: '.contact-faq > header', targets: [':scope > p', ':scope > h2'], directions: ['left'] },
  { anchor: '.contact-faq details:nth-child(odd)', targets: [':scope > summary', ':scope > p'], directions: ['right'] },
  { anchor: '.contact-faq details:nth-child(even)', targets: [':scope > summary', ':scope > p'], directions: ['left'] },
].map(group => ({ ...group, ...timing }));
export const contactFooterReveal = { ...timing, directions: ['left', 'right'] };
