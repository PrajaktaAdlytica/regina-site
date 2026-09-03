# Regina — motion study 01

Local preview: http://127.0.0.1:4173

Brand & Interface System v2: http://127.0.0.1:4173/brand-kit.html

The separate brand kit contains the current identity specification, palette, fonts, responsive type scale, layout tokens, 33-icon catalogue, component states, navigation/footer specimens, motion rules and verified contrast pairs. Download the handbook and CSS/JSON from its Handoff section. Canonical tokens are in `public/brand-kit/tokens.json`; `npm run tokens:brand` regenerates CSS, and `npm run test:brand` checks contrast and export consistency. The build includes both entries without changing the hero's CSS. Current kit QA is recorded at the beginning of design-qa.md; earlier hero evidence is preserved below it.

Hero-only direction study, not the full foundation website. Original interwoven ribbon geometry uses Regina's burgundy, ivory and silver palette. Native scrolling changes camera position, the arrangement of the ribbons, background and chapter. Pointer movement adds a subtle response. This is real-time WebGL, not a video or rendered image.

## Run

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4173 --strictPort
npm run build
npm run test:sites
```

## Scope

- Three hero chapters, clickable chapter navigation, replay, pause/resume.
- Programme detail dialog, keyboard Escape and focus restoration.
- A small mission/programmes continuation to judge the transition into the existing illustration style.
- Polish-only content drawn from Hubert's provided instructions; original supplied logo and monogram favicon extracted from his PDF.
- Existing approved education/technology illustrations reused locally.
- No invented partners, metrics, projects or publications. No full pages, backend, CMS, deployment or domain changes.

## Motion and accessibility

Native scroll is not intercepted. Pause switches the scene to stable chapter poses, removes pointer drift and disables smooth chapter jumps. System reduced-motion preference also disables continuous movement and caption transitions. A static illustration is shown if WebGL initialization fails or its context is lost. Canvas is decorative; all chapter text and controls are real HTML. Offscreen and background-tab rendering is skipped; pixel density is capped at 1.6.

## Before production

Validate reduced-motion and WebGL fallback on target devices, test actual touch devices, profile frame rate/energy use, and optimize original PDF-derived SVGs and illustration delivery. The lazy-loaded Three.js scene is approximately 133 kB gzip and triggers Vite's 500 kB uncompressed chunk warning. This is not a production performance certification.

See design-qa.md and evidence/ for the tested states and limitations.
