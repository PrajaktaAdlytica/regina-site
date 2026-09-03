# Design QA — Brand & Interface System v2

## Visual asset library — 3 September 2026

Added separate `/visual-library.html` entry, linked from the brand-kit rail. 80 downloadable SVGs: 32 Phosphor concepts in two weights plus 16 supporting vectors. Poland outline derives from included Natural Earth GeoJSON. Concept diagrams and proposed processes are explicitly distinguished from verified partnerships and real procedures. Photography is a brief, not an installed photo collection. No invented quantitative impact charts.

Verification: production build passes; 5 brand tests, 4 hosting tests and 4 new visual-library tests pass. HTTP checked all 80 SVGs plus ZIP and two guides (83 resources, no failures). ZIP integrity checked. Browser category filter returns 8 technology icons; regular-weight toggle returns 32 regular exports; blush control changes all 3 pattern surfaces. Inspected icon and network rendering, Poland map on mobile. Viewport 390 px has document width 390 px, no horizontal overflow. Responsive preview restored afterward. A development hot-reload duplicate-root warning was corrected by separating the React entry point from the component module. Existing hero was not modified.

Source licences and provenance included in the pack. Process SVGs are wide review specimens; implement semantic stacked HTML steps for the final mobile website. Photo selection/licensing and publication of real data are outside this asset-pack delivery.

## Hover refinement — 3 September 2026

Scoped update: four directional colour fills in `#hover-lab`, right-to-left default on button specimens, bottom-to-top partnership CTA, and semantic navbar icon reveals. Existing hero files remain unchanged. Fill and its aria-hidden duplicate label are clipped together to preserve contrast. Entry 420ms, retreat 240ms; nav reveal 200ms; reduced-motion states change immediately. Touch-menu icons remain visible.

Completed mouse/focus verification: right-to-left hover was observed mid-transition at `inset(0px 0px 0px 82.631%)`, then fully open at `inset(0px)`. Keyboard Tab exposed the left-to-right fill at `inset(0px)` with focus-visible true. Screenshot: `evidence/directional-fill-hover.png`.

Browser checks at the user's current 812×814 viewport: all four closed clip edges match their direction; navigation Działania icon changes opacity from 0 to 1 on hover with identical bounding box (85.164×44px at x340.188/y480.633), so no layout shift. Evidence: `evidence/nav-icon-hover.png`. Directional controls retain one accessible name despite the decorative duplicate. Production build and five token tests pass; existing Three.js chunk warning belongs to the untouched hero. Handbook, canonical tokens and AGENTS.md were updated with the requested hover rules.

final result: passed

3 September 2026. Scope: a separate browsable identity/UI specification at `/brand-kit.html`. This is not the finished six-page site, a full component package, a Figma library or a WCAG certification. The earlier hero QA is preserved below.

## Source visual truth and comparison

- User-selected source: `/Users/prajaktagaikwad/Desktop/Screenshot 2026-09-03 at 11.26.54.png`, 2880×1800 screenshot including Safari chrome. It shows the approved plum/mauve innovation hero, serif heading and ivory foreground.
- Reference system: original supplied logo, prior approved burgundy line illustrations and existing hero fonts. Content authority checked against `/Users/prajaktagaikwad/Downloads/REGINAPURPUREA FUNDUS instruction for web developer HD.docx`.
- Rendered evidence: `evidence/brand-kit-desktop.png` and `evidence/brand-kit-dark-components.png`, each 1280×720 at 1280×720 CSS; `brand-kit-mobile.png` and `brand-kit-mobile-type.png`, each 390×844 at 390×844 CSS; `brand-kit-footer-320-fixed.png`, 320×740 at 320×740 CSS. Browser screenshots are 1:1 CSS-to-capture dimensions.
- Source screenshot and dark component implementation were opened together in the same comparison input. The task is to extend the selected identity into a system, not clone the screenshot layout. Browser chrome, content and viewport differ; no pixel-perfect fidelity claim or exact screenshot-colour sampling is made. Plum is the existing scene base; mauve is an explicit flat supporting token chosen for consistent contrast.
- Focused component views: dark controls, typography glyph proof, icon catalogue (`brand-kit-icons.png`), local form (`brand-kit-form.png`) and narrow footer. Text/icon details are readable at these captures, so further enlarged crops were unnecessary.

## Findings, fixes and revised evidence

1. P2: 320px footer's long Polish heading crowded the right edge (`brand-kit-footer-320.png`). Changed heading to `clamp(32px, 10vw, 44px)` and resized the logo/plaque to preserve clear space. Reopened and checked `brand-kit-footer-320-fixed.png`; the complete heading, CTA, original logo and contact details fit within the dark surface.
2. P2: initial token export used fluid outer margins while the handbook specified fixed tablet/mobile margins. Export now uses explicit 20px mobile, 32px tablet and ≥48px desktop breakpoints; tests confirm the canonical dimensional values are exported.
3. P2: original draft navbar reservations did not account for Hubert's generous R-height clear-space rule. Changed canonical reservations to 176px desktop / 144px mobile and documented why; no silent modification of the separate hero header.
4. P2: non-text contrast swatch initially applied the boundary colour to its small explanatory text. The boundary now demonstrates the colour while explanatory text uses ink. Only the boundary is labelled a 3:1 example, not a normal-text pass.
5. Runtime issue: editing the original combined entry/component module repeated createRoot during hot refresh. Split React bootstrap into `entry.jsx`, made App an exported refresh boundary and reloaded. Historical console records retain the pre-fix warnings; no new runtime errors occurred during the subsequent interaction checks.
6. Semantic refinement: status specimens use success, warning/error and information icons rather than the same success icon for all. Spacing bars now show their labelled pixel width rather than double-scale lengths.

No actionable P0/P1/P2 issues remain in the tested kit states.

## Five required fidelity surfaces

- Typography: retains Cormorant Garamond + DM Sans; includes Latin and Latin Extended. Polish glyphs reviewed at 390px. Proposed website body scale is 18/16px, deliberately larger than the experimental hero's captions. Compact English documentation metadata is not a recommended public-body style.
- Spacing and layout: sidebar-based reference book becomes an inline, horizontally bounded chapter index on mobile; specimen sections reflow. No full-page horizontal overflow at 390px or 320px (DOM content width equals viewport). The kit's documentation layout is not a proposed replacement homepage.
- Colour: burgundy, ivory, plum and mauve retained; neutral/semantic usage explicitly separated. Five automated token tests cover normal-text pairs, control boundaries, dimensional export consistency, intended minimum sizes and reduced-motion token exports. Actual dark-surface button focus was checked: inverse 2px outline, 3px offset.
- Assets: original supplied vector logo/monogram and approved education illustration reused, not redrawn. Phosphor is the sole icon family. No new raster asset was required. Colour swatches and spacing/grid diagrams are functional UI specimens, not approximations of missing artwork.
- Copy: English design notes and Polish website examples are intentional. All six client pages remain intact. Earlier Newsreader/Inter, O fundacji and English-site proposals are explicitly superseded. No invented project outcomes, partner identities or unavailable publications. Demo form and navigation state controls clearly describe their limited scope.

## Interaction and build checks

- Chapter anchor navigation, light/plum selector, selected chips, loading/disabled state, accordion expansion and inline mobile navigation open/select/close exercised.
- Icon search for Globe returned the correct single icon; search reset works. Palette copy set the expected “Copied plum” status.
- Keyboard Tab from the primary dark CTA produced an inverse visible outline on the secondary CTA.
- Contact specimen validated a local example email/message/test acknowledgement and reported explicitly that nothing was sent or saved. No external email/telephone/project action was triggered.
- Build emits both `index.html` and `brand-kit.html`. Five brand-token tests and four existing packaging tests pass. The original Three.js lazy-chunk size warning persists for the separate hero and is not new kit code.
- Final browser viewport override reset. Kit remains open for review; original hero source/styles are preserved.

## Residual scope and follow-up

No real mobile-device testing, screen-reader audit, 200% zoom certification or forced system reduced-motion emulation was performed. Reduced-motion CSS and code were inspected; no nonessential transforms remain in the kit's reduced-motion rule. Production forms/backend, verified reverse-logo exports, ICO/Apple-touch/social assets, Figma components, all six pages and public deployment remain separate tasks. These are disclosed deliverable boundaries rather than broken kit controls.

Review the identity and component choices before migrating them into the full website. Re-run this gate after significant token or component changes.

---

# Earlier QA — Regina motion study

final result: passed

Passed for the bounded local hero study, not for production deployment or the complete site.

## Source and comparison evidence

- Motion/visual reference: https://lusion.co/; captured as `evidence/lusion-reference.png`, 1280 × 720 screenshot at 1280 × 720 CSS viewport (1:1 capture).
- Regina art direction source: `/Users/prajaktagaikwad/.codex/generated_images/01a06242-b76f-7de1-866f-e8c7d0e530c5/exec-2f8fd780-5bb6-4883-aa7e-cb22b0d4bb2b.png`, 909 × 1731 full-page mock. This is an illustration/typography/palette reference, not a same-viewport layout target.
- Implementation: http://127.0.0.1:4173; `evidence/desktop-final.png`, 1280 × 720 at 1280 × 720 CSS, and `evidence/mobile-final.png`, 390 × 844 at 390 × 844 CSS. No density rescaling.
- Source Lusion capture and implementation hero capture were opened together in the same comparison input, both before and after corrections. Both are 1280 × 720, but source shows its page entrance while implementation shows the pinned hero: this is an original direction adaptation, not a pixel-fidelity clone. Stage proportions are judged in that context.
- Approved Regina source and `evidence/desktop-programmes.png` were opened together to compare illustration language, neutral background and serif/sans hierarchy. Full-page source vs section capture is intentional; no pixel-perfect match claimed.
- Text and controls were legible at these capture sizes, and the dialog and mobile controls were inspected separately; no further crop enlargement was needed.

## Findings and iteration history

1. P2 — Paused canvas disappeared after viewport resize. Evidence: `mobile-education.png`. Cause: resizing cleared the render buffer while the paused render signature remained unchanged. Fixed by adding resizeVersion to the render signature. Verified after resizing to 360 × 780 with pause active: `mobile-paused-resize-fixed.png`.
2. P2 — Mobile sculpture was too large and collided with the caption region. Earlier `mobile-education-fixed.png` still shows the oversized state before the clean reload; do not treat it as final evidence. Reduced mobile object scale to .62 and raised the composition. Revised evidence: `mobile-innovation-fixed.png` and `mobile-final.png`; controls, sculpture and copy each occupy distinct areas.
3. P2 — Font imports initially covered Latin Extended only, leaving ordinary Latin to fallback fonts. Added Latin subsets for DM Sans and Cormorant Garamond. Final desktop and mobile captures show the intended finer serif forms and consistent Polish/Latin text.
4. P2 — Pause control had weak contrast over the dark chapter. Made its light surface almost opaque with explicit dark text. Also enlarged chapter and replay tap targets to at least 44px high. Revised evidence: `mobile-innovation-fixed.png`, `mobile-final.png` and `desktop-final.png`.
5. Runtime warning — Switched deprecated PCFSoftShadowMap to PCFShadowMap. No console errors observed; log history contains the old warning from the first load, with no repeat after the clean reload.

No unresolved P0/P1/P2 issues observed in the tested study states.

## Required fidelity surfaces

- Typography: Cormorant Garamond display type with DM Sans reading/UI text; Latin and Polish subsets included. Thin editorial display treatment preserves Regina's approved direction, intentionally unlike Lusion's sans-serif identity. No truncation in inspected desktop/mobile states.
- Spacing/layout: light outer margin and a large rounded interactive stage, native scroll with a sticky three-chapter scene. Caption remains left of geometry on desktop and below it on mobile. Mobile reflows rather than miniaturizes the desktop layout. No horizontal overflow at 360px (DOM width check 360/360); also checked 390px.
- Colors: burgundy #8a1538, warm ivory #f8f6f2, silver materials, dark plum innovation chapter. The 3D material varies in apparent tone under lighting; it is not a flat color sample. Dark text or a solid caption backing maintains readability in tested states.
- Assets: actual client logo paths extracted from the supplied PDF; no redrawn crest, crown or fake wordmark. Approved raster illustrations reused with their native aspect ratio. Original 3D geometry is the requested interactive medium, not an approximation of a missing source image or a copy of Lusion's objects. Phosphor icons used for controls.
- Copy: Polish education/innovation/cooperation and all six activities remain aligned with supplied NGO content. Intro is an excerpt rather than the complete long source headline. Study labels explicitly distinguish this from a finished website. No invented reports or figures.

## Functional checks

- Production build passed after final font update. Vite's large-chunk warning remains and is documented in README.
- Four supplied packaging tests passed; these test the scaffold server, not animation correctness.
- Native wheel scroll enters sticky hero; chapter buttons change active content and sculpture scene, and replay returns to education.
- All three chapter states inspected on desktop: `desktop-education.png`, `desktop-innovation.png`, `desktop-cooperation.png`; final typography in `desktop-final.png`.
- Pause changes to resume, resuming works; paused viewport resize regression verified.
- Programme detail opens; Escape closes it and returns focus to the originating button (read-only DOM check).
- Dialog's all-activities CTA scrolls into programme content. Education accordion expands and sets aria-expanded=true. Header actions and back-to-top operate as in-page navigation.
- Collaboration link has the supplied mailto address; no message was sent.
- Mobile content/accordion/footer inspected: `mobile-programmes.png`. Desktop artwork transition inspected: `desktop-programmes.png`.
- Browser viewport override reset and local preview kept open for user review.

## Residual checks / follow-up polish

- No real-device GPU/frame-rate, energy or Lighthouse measurements; no cross-browser certification.
- System reduced-motion branch and WebGL failure fallback reviewed in code, not forced through the browser (the available browser API has no media-emulation or WebGL-context override). Manual pause behavior was exercised.
- Scene has pointer-responsive orientation; physical dragging, raycast picking and audio are deliberately not included.
- Optimize the PDF-derived SVG payload and raster delivery before release. Final approval of the sculpture metaphor and motion intensity remains the user's design decision.
- Next: user reviews this movement, then selected principles can be applied to the separately planned full multi-page site.
