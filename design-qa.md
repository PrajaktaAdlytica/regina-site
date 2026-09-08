# Validation — Project branding, 3 September 2026

Replaced generic symbols with original Accelerate, ASEAN/ARF and SAFTA logo assets; added Accelerate logo to Home programme banner. Verified source assets visually and preserved original colours/whole-logo aspect ratios. Responsive backplates, keyboard/fine-pointer hover and reduced-motion safeguards retained; no new JS dependency or runtime fetch. Build and all 77 tests pass, including each logo's built asset and rendered markup, external links, existing scroll lifecycle and Home logo. Local Projects HTTP 200; diff whitespace clean. No browser visual QA or public publishing.

Unresolved external item: supplied Accelerate domain returns NXDOMAIN with and without www. Working Vercel destination confirmed, but temporary substitution needs the user's answer; DNS changes require registrar access and confirmed ownership.

---

# Historical Validation — Home brief compliance, 3 September 2026

Compared with Hubert's rendered brief p.2. Complete original H1 and subtitle restored, both supplied intro paragraphs on Home, opening CTA points to the named Accelerate Poland destination, illustrated banner moved immediately after introduction and before programme cards. Exact rendered-copy and banner-order regression coverage added. Build and all 76 tests pass; homepage HTTP 200; whitespace check clean. Existing colour/motion/artwork retained. No browser visual QA in this change; no other page edits or public deployment. Accelerate DNS issue remains outside this copy/placement update.

---

# Historical Validation — Plum introduction and Contact icon, 3 September 2026

Scoped palette change and always-visible navbar Contact icon. Preserved original Home text, two-column inner structure, scroll anchor and CTA URL; other navbar icons still reveal on hover. Light text, button base/wipe and focus colours specified for the dark surface. Build and all 75 tests pass; homepage responds 200. No browser visual QA; local only.

---

# Historical Validation — Compact navbar, 3 September 2026

Reduced shared desktop/mobile inner heights to 92/80px and removed Misja-specific height overrides. Original logo asset, all links, focus/hover icon and underline behaviour retained; Contact and Menu use blush outlined styling. Dynamic sticky offsets continue using actual dimensions. Source tests cover compact sizes, original-logo fitting, touch target and reduced-motion guard; build and all 73 tests pass. Contact route returns 200. No browser visual QA; local only.

---

# Historical Validation — Shared sticky navbar, 3 September 2026

All eight prerendered routes retain one shared navbar, official logo and mobile dialog. Sticky layering and canvas surface added without changing original header sizes. Native/Lenis anchor clearance and homepage sculpture positions use header height; source/unit checks cover desktop, Misja and mobile values plus observer cleanup. Build and all 72 tests pass. No browser visual QA performed; local preview only.

---

# Historical Validation — Contact redesign, 3 September 2026

Source/build validation: preserved organisation details and three FAQs, email-draft semantics, city-only map with no location marker, initial HTML without iframe, attribution/fallback/privacy disclosures, scoped pointer/focus/reduced-motion rules. Shared-controller unit test verifies repeated left/right reversal and immediate field-focus restoration, native mobile and teardown. All 70 tests and production build pass; local contact route and OSM iframe endpoint respond 200. No screenshots, browser interaction or responsive visual QA performed. Local only, not published.

---

# Historical Validation — Partnerstwo hover, 3 September 2026

Scoped directional colour sweeps, icon/title movement and illustration lift added without layout or content changes. Source tests cover pointer/reduced-motion guards, independent transform versus scroll translate, and seven reading-only cards without invented links/tab stops. Build and all 66 tests pass; route returns 200. Browser interaction/visual QA not performed. Local-only update.

---

# Historical Validation — Projects opening and interactions, 3 September 2026

Opening-only layout redesign with original headline/description and data-derived 03 count; existing collage, project card geometry, context and CTA retained. Card hover has left/right/bottom-origin colour fills, independent transform for icon/title motion and keyboard focus-within parity. Projects horizontal scroll groups cover intro, collage rows/image/links, each project card, context and CTA; shared footer keeps its existing reveal. Down/up/down origins, reduced-motion teardown and focus restoration unit-tested; all 59 tests and production build pass. Native mobile scrolling and responsive opening are implemented. No browser visual QA performed; local preview available for review. Not published.

---

# Historical Validation — Działania redesign and scroll reveals, 3 September 2026

Compact two-column opening, blush programme index, original programme copy/photos and six working anchor destinations retained in prerendered output. Responsive single-column opening below 900px, no hardcoded hero height, keyboard-visible links and reduced-motion hover override. Shared motion controller now supports opt-in horizontal reversal, used only by Activities. Each programme row has a stationary parent trigger and opposing copy/photo translations; research rows and index links have their own triggers. Repeated passes, mobile native scrolling, focus restoration, reduced-motion teardown, Home/Misja regressions and source coverage validated in the 54-test suite. Build passes; local route returns 200. Browser visual QA was not performed; responsive appearance and live scroll feel remain for user review. No public deployment.

---

# Historical Design QA — Warsaw bridge reveal, 3 September 2026

Added an expanding inset frame and gentle image zoom-out, replayed by the existing GSAP visible/ready lifecycle in both scroll directions. Caption alone uses the shared slide; original photo and Arne Müseler licence credit remain unchanged. A footer-aware `bottom 30%` reset boundary allows upward replay despite the section's proximity to the page bottom.

Desktop 1440×1000: downward entry count 1, footer resets state to ready, upward return advances count to 2; frame/zoom animation names verified and settled clip is full width. Mobile 390×844: image loaded, frame duration 0.9s, no horizontal overflow, native scroll without Lenis, caption and credit readable. Desktop/mobile screenshots inspected in work/editorial-qa/bridge-scroll-*.png. Browser errors empty. Build and all 49 tests pass; reduced-motion static fallback covered by source tests, not OS emulation. Local only; no deployment.

---

# Historical Design QA — Misja GSAP / Lenis scroll motion, 3 September 2026

Directional emphasis follow-up: Mission groups now travel 72px over 0.9s with power2.out, or 28px/0.6s on mobile. All four direction variants remain assigned across sections. Home defaults unchanged. Browser traversal at 1440px: atlas/network counts changed from 1 on downward traversal to 2 on upward return, with no horizontal overflow. Unit tests verify Mission's ±72px vertical replay, timing and all four directions. Build and all 47 tests pass; reduced-motion/focus safeguards retained. Local only.

final result: passed

Misja now lazy-loads its own section specification into the same scroll lifecycle used by Home. The shared controller is exported as installPageScrollMotion; installHomeScrollMotion remains a compatible alias with unchanged Home defaults. No new package/dependency. Eleven stationary reveal groups including shared footer cover hero, introduction/CTAs, mission statement, atlas intro/layout, international network, community heading/body, city image and final CTA. Atlas and network outer wrappers move; their internal selection animations remain independent.

Desktop 1440×1000: Lenis active, all eleven groups registered. Traversed full page down and back up: atlas, international network and community reveal counts advance from 1 to 2. Settled content remains visible; page width 1440px. Research tab still selects goal 03 with one visible panel and wrapper opacity 1; Australia selection updates its heading and correct enquiry URL. Six-goal anchor lands at approximately 88px including Lenis/CSS offsets. Existing interactions remain keyboard-focus-visible through the shared controller's immediate focus cancellation.

Mobile 390×844: no Lenis root class, eleven reveal groups, page width 390px. Selecting social-development goal reveals the correct panel and native-scrolls it to approximately 64px. Inspected `work/editorial-qa/misja-scroll-mobile.png` and desktop upward-traversal `misja-scroll-up.png`. Browser error log empty. Reopened Home: its default reveal groups still install; no Mission wrapper present there.

Build and all 45 tests pass. New tests cover Mission's replay offsets, shared reduced-motion/ticker cleanup, focus visibility and correct section targeting without touching internal atlas/network elements. Existing Home tests remain passing. Reduced-motion behavior unit-tested, not OS-emulated; no physical-device certification. Source includes async-import cancellation, cleanup, resize/font refresh and horizontal clipping for reveal offsets. Local only; no publication, commit or push.

---

# Historical Design QA — Misja hero refinement, 3 September 2026

Latest photo-scale adjustment: widened the desktop/tablet image toward the centre using a 1fr/1.08fr grid, 48px desktop gap and no desktop left inset. At 1440px, image width increases from about 550px to 640px (16%), while height remains 460px and next section remains at 792px. Desktop and 1024px tablet screenshots inspected; no overflow or text/badge collision. Mobile override is unchanged. Evidence: `work/editorial-qa/mission-hero-wider-photo.png`. Build and all 43 tests pass. Local only.

Latest density adjustment: reduced Misja header height to 136px desktop/104px mobile, hero top margin to 8px, row gap to 28px, and bottom margin to 48px (24px/40px mobile). Same typography, photo size and composition. At 1440px, next section now begins at 792px rather than approximately 920px: 128px less vertical whitespace. Inspected 1440×1000 and 320×812 screenshots (`mission-hero-compact-desktop.png`, `mission-hero-compact-mobile.png`); widths match viewport and content remains readable. Build and all 43 tests pass. Local only.

final result: passed

Reworked the Misja hero into staggered oversized type, an offset curved-corner photograph with blush backing, a circular six-goal anchor and a separate introduction/CTA row. Original photograph, thematic credit, message, history claim, logo and both CTA destinations retained. Removed hero top border and header bottom border on Misja only; navigation hover/current-page underlines remain. No other page hero changed.

Browser inspection at 1440×1100, 1024×1000 and 320×812: no horizontal overflow; desktop photograph 460px high; tablet and mobile type, framing and links remain readable. Narrow mobile CTAs are full-width 280×56px. Both unwanted dividers compute to 0px. Six-goal shortcut reaches #cele at top 32px. Source checks verify original CTA destinations, photo, one h1, attribution, scoped borders, responsive and reduced-motion rules. Browser errors empty. Reduced motion source-checked, not OS-emulated. The old generic hero min-height initially overrode the new photo dimensions; increased scoped selector specificity and rechecked.

Evidence: `work/editorial-qa/mission-hero-refined-desktop.png`, `mission-hero-refined-tablet.png`, `mission-hero-refined-mobile.png`. Build and all 43 tests pass. Local only; no publication, commit or push.

---

# Historical Design QA — Community illustration presentation, 3 September 2026

final result: passed

Kept the exact community.webp asset, all four people and wheelchair. Replaced the rectangular split block with a large editorial heading above, uncropped illustration blended into the canvas with a soft blush halo, and supporting copy/themes alongside. No image regeneration, file modification or cropping. Themes repeat the existing approved integration/employment/social-skills copy. Added conceptual illustration caption and preserved the activity CTA. Restrained hover/focus lift has a reduced-motion override.

Inspected desktop 1440×1050 and narrow mobile 320×812; document widths match viewport, the full 3:2 picture remains visible, mobile stacks heading/art/copy. Fixed an initial white backdrop by giving the isolated blending container the page canvas colour. Screenshots: `work/editorial-qa/community-editorial-desktop.png` and `community-editorial-mobile.png`. The CTA reaches `/dzialania/#spolecznosc`, anchor top 56px. Browser errors empty. Build and all 41 tests pass; added preservation/responsive/reduced-motion source test. Other sections unchanged. Local only.

---

# Historical Design QA — Misja interactive cooperation network, 3 September 2026

final result: passed

User rejected the static white illustration panel while retaining the pink background. Replaced it with a native SVG/React cooperation network on the blush surface: four region buttons, Poland starting-point core, selected connection drawing, selected marker and changing regional enquiry. Existing intro/copy and other sections preserved. The diagram is explicitly conceptual, not a map of project locations. Original illustration and map files retained.

Desktop 1440×1000 inspected: Asia mouse hover selects its marker, changes heading/contact URL and draws the matching path. Tab from Asia focuses Australia with a 2px focus outline and selects it. Australia enquiry opens Contact with the correct prefilled subject; no submission. Native buttons expose aria-pressed (one selected), aria-controls and a polite selected-region announcement. Motion is finite and interaction-driven, with no autoplay. Reduced-motion disables all section animations/transitions in CSS (source-checked, not OS-emulated).

Mobile 390×844 and 320×812 captures inspected: same network is directly selectable, the enquiry stacks at narrow width, every region remains visible and labels do not overlap. Document widths equal viewport widths. Clicked all four regions at 320px; each produced the matching heading and encoded enquiry URL with exactly one pressed button. Touch targets have minimum 44px width and 64px height. Evidence: `work/editorial-qa/network-desktop.png`, `network-mobile.png`, `network-320.png`.

Build and all 40 tests pass. Tests updated to the new interactive contract, retaining approved regions/copy, map preservation and enquiry flow checks. Browser error log empty. No new dependency, asset deletion, deployment, commit or push. No actionable P0/P1/P2 remains in tested scope.

---

# Historical Design QA — Misja international cooperation, 3 September 2026

final result: passed

Replaced only the Poland-outline section with InternationalCooperation: existing people-and-globe illustration, approved international programme wording, a small Poland starting-point label and four region enquiry links. Europe, Africa, Asia and Australia are the client-confirmed regions. No invented offices, project pins, metrics or regional claims. Original Poland assets remain available elsewhere.

Desktop 1440×1000 before/after captures inspected; mobile 390×844 and 320×812 screenshots inspected. Evidence: `work/editorial-qa/international-before.png`, `international-after.png`, `international-mobile.png`, `international-mobile-regions.png`, `international-320.png`. Layout becomes a single editorial column and 2×2 region grid on mobile. Document widths equal the 1440/390/320 viewports; every region link has matching clientWidth/scrollWidth at 320px.

Australia hover completes the left-to-right ivory wipe with clip-path inset(0px) and a 3px/-3px arrow translation. Native keyboard navigation advances from the last region to the provenance link. Clicking Australia opens Contact with subject “Współpraca międzynarodowa — Australia”; no form was submitted. All four encoded enquiry destinations inspected. CSS includes equivalent keyboard focus treatment and reduced-motion overrides; reduced motion checked in source, not OS-emulated.

Build and all 40 tests pass, including two new tests for approved content, destinations, provenance, responsive/focus/reduced-motion rules and retained map assets. Browser error log empty; git diff --check passes. Existing Three.js build warning is unrelated. No actionable P0/P1/P2 remains in tested scope. Local preview only; no deployment, commit or push.

---

# Historical Design QA — Misja interactive goal atlas, 3 September 2026

final result: passed

Scope: replace only the six-goal grid on Misja with MissionAtlas. The user's `Screenshot 2026-09-03 at 14.36.17.png` identifies the old section; this is an intentional interactive redesign, not a clone. All six approved goal titles/descriptions and the purpose paragraph remain unchanged. Other Misja sections and Home are untouched.

The replacement pairs six numbered tab tiles with one illustrated chapter: selected burgundy tile, plum text panel, restrained GSAP image/copy entrance, previous/next controls and an actual related activity or partnership link. Uses existing illustrations, credited photos, Phosphor icons and brand tokens. No auto-rotation or hover-triggered selection. Real tabs support arrow keys, Home/End and roving tab focus; one visible tabpanel, with labelled relationships and a polite selected-goal status.

Visual evidence under `work/editorial-qa/`: `mission-goals-before.png`, `mission-atlas-desktop.png`, `mission-atlas-mobile.png`, `mission-atlas-320.png`, `mission-atlas-tablet.png`, and `mission-atlas-comparison.png`. Opened and reviewed native desktop 1440×1050, tablet 1024×1000, mobile 390×844 and narrow 320×812 captures. The combined comparison uses same-size desktop before/after captures, each proportionally reduced to 700px wide, with a 24px gutter; reproducible in `compare-mission-atlas.cjs`. Intentional changes: more concise heading wrapping with burgundy italic emphasis, selectable tiles, a large art/story panel, and contextual links instead of six static paragraphs.

Verified research selection points to `/dzialania/#badania`; End selects and focuses goal 06; Next wraps from 06 to 01. Preview height stays 633px across desktop goals 01/03/06. On mobile, tapping a tile brings its panel into view; “Wybierz inny cel” returns focus to the selected tab. The institutional goal link reaches `/partnerstwo/`. Mobile shows one panel, not six stacked stories.

Fixed P2: at 320px, long Polish labels overflowed two-column tiles. Below 381px, selectors now become full-width rows: all six have matching clientWidth/scrollWidth of 278px, document width 320px. At 390px and 1024px document width also equals viewport. The main layout stacks through 900px to prevent intermediate tablet crowding. Reduced-motion skips/cancels JS transitions and CSS hover transforms; preference handling checked in source, not OS-emulated.

Build and all 38 tests pass, including three new atlas tests for content, tab/panel relationships, local assets, destination anchors, keyboard logic and reduced-motion cleanup. Browser error log is empty. No actionable P0/P1/P2 remains in tested scope. Existing Three.js build warning is unrelated. Local only; no publication, commit or push.

---

# Historical Design QA — Homepage GSAP / Lenis motion, 3 September 2026

final result: passed

Scope: the approved homepage layout is unchanged; add replayable directional section entrances and smooth desktop scrolling. GSAP 3.15.0 / ScrollTrigger drives entrances, Lenis 1.3.26 uses GSAP's ticker on fine-pointer desktop only. The previous native observer experiment was replaced after the user's GSAP/Lenis request. No publication.

- Intro enters from opposing vertical directions; mission from the sides; photo cards rise with a stagger; programme heading/mosaic/list use complementary side and vertical motion; project links cascade; Accelerate text/artwork enter from opposite sides; final CTA and footer have staggered entrances. Existing 3D chapter motion is preserved.
- Stationary parent triggers avoid transform-boundary loops. onEnter/onEnterBack replay; onLeave/onLeaveBack restore visible resting styles. Vertical offsets reverse on upward entry. No disappearing content while reading, scroll snapping, added pinning or page-layout changes.
- Browser desktop 1440×1000: reveal counts increased from 1 to 2 after downward traversal and upward re-entry for mission, cards, explorer and projects. Settled opacity is 1, translate is none; horizontal document width remains 1440. Existing card hover remains visible. Hero Innovation button selects chapter 1 and changes scroll position through Lenis; the programme anchor reaches the photographic section.
- Browser mobile 390×844: Lenis root class is absent, document width is 390, native accordion expands and retains readable artwork/copy/CTA; mobile programme rows replay after leaving and returning. Screenshot `work/editorial-qa/scroll-gsap-mobile.png` inspected. Desktop captures: `scroll-gsap-up-desktop.png` (hero/mission on upward traversal) and `scroll-gsap-explorer-desktop.png`.
- Early integration produced a GSAP warning when passed CSSStyleDeclaration as a target. Fixed by tweening a plain value object and applying opacity/independent translate through onUpdate; final navigation/traversal added no new browser warning/error entries. Historical warning entries remain in the browser log.
- Five focused tests cover direction offsets, replay callbacks, restoration/cleanup, live reduced-motion changes, focus visibility, native mobile scrolling, ticker cleanup and hero fallback. Build and all 35 tests pass. Reduced-motion is unit-tested, not OS-emulated; no physical-device or screen-reader certification. Existing Three.js chunk warning remains.

The motion engine is dynamically imported after Home mounts, with cancelled-import/unmount cleanup. It does not load into the server render; failed loading leaves a readable page. ResizeObserver/font readiness refresh positions after hero and accordion layout changes. Lenis disables competing CSS smooth scrolling only while active. All prior content and provenance remain.

Implementation references: [GSAP ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and [official Lenis integration](https://github.com/darkroomengineering/lenis). No actionable P0/P1/P2 remains in the tested motion scope.

---

# Historical Design QA — Interactive programme explorer, 3 September 2026

final result: passed

Latest scope: replace only Home's six-icon Działania overview with the approved linked mosaic/list explorer. The historical six-icon decisions below are superseded for this section. The logo, hero, navbar and three photographic cards remain unchanged. Local only; this revision has not been published.

## Reference and visual review

The user's reference is the TeamShowcase component in `/Users/prajaktagaikwad/.codex/attachments/f64c27b5-80c9-443a-9c9d-fadc4ef77518/pasted-text.txt`, adapted as approved: programme imagery instead of team portraits; numbered programme names instead of people; existing descriptions and destination links instead of social profiles. No framework migration or new dependency. The screenshot `/Users/prajaktagaikwad/Desktop/Screenshot 2026-09-03 at 13.57.47.png` is the before-state, not a pixel-cloning target.

Opened and reviewed the combined `work/editorial-qa/explorer-before-after.png`, plus native desktop, keyboard, mobile and tablet captures. `compare-explorer.cjs` records the reproducible comparison: source cropped below browser chrome (0,180,2880,1620), after cropped (0,32,1440,1068), each scaled proportionally to 700px wide and joined with a 24px gutter. The intentional changes are a staggered image mosaic, linked serif programme list and stable selected-description area. The original burgundy/ivory palette and approved typography remain. The comparison is not a claim of pixel fidelity to the old grid.

## Verified states

- Desktop 1440×1100: image/list hover synchronisation, corresponding colour/border/arrow states, readable programme titles and descriptions. All six destinations exist. International row hover and business image hover update their counterparts.
- Keyboard: Tab between mosaic links selects the focused programme and shows a visible focus indicator; the research selection was captured in `explorer-keyboard.png`.
- No selection-induced list movement in measured desktop states: all six row positions remain identical; the section height remains 1200.4375px across international/research selections.
- Mobile 390×844: six accessible accordion buttons, one panel open at a time, correct description and image. International CTA reaches `/dzialania/#wspolpraca`, target top 55.78125px.
- Narrow mobile 320×812: titles wrap without overlap or horizontal overflow; research opens and closes, with aria-expanded changing true/false.
- Tablet 1024×1100: inspected two-column composition, full titles, images and description; document width equals viewport. Saved `explorer-tablet.png`. Mobile document widths equal 320/390px respectively.
- Build and all 30 tests pass. Browser error log is empty after this pass. Reduced-motion transitions/transforms are disabled in CSS and covered by source tests; not emulated in browser. No physical-device or screen-reader certification.

Evidence also includes `explorer-desktop-default.png`, `explorer-desktop-hover.png`, `explorer-mobile-collapsed.png` and `explorer-mobile-expanded.png`. Illustrations deliberately use contain to preserve complete people; photographs use cover. Existing source disclosures are linked, and no imagery is presented as actual foundation project documentation.

No actionable P0/P1/P2 remains in the tested scope. Existing Three.js chunk-size warning belongs to the untouched hero. Publication remains pending explicit approval.

---

# Historical Design QA — Selected screenshot treatments, 3 September 2026

final result: passed

Scope: the requested cross-page visual correction, not a pixel-identical clone or a production accessibility certification. Public deployment of this revision is pending approval; the local preview contains the changes.

## Source and comparison evidence

Source truth is the seven user screenshots in `/Users/prajaktagaikwad/Desktop/`, named `Screenshot 2026-09-03 at 10.40.43.png`, `10.40.40.png`, `10.40.29.png`, `10.40.19.png`, `10.40.04.png`, `10.39.38.png` and `10.39.20.png` with the same prefix. The two alternating-row screenshots represent the same treatment. Each original is 2880×1800, including desktop/browser chrome; these are design-reference images, not equivalent browser CSS viewports.

Evidence folder: `work/editorial-qa/` (local, ignored by Git). Desktop implementation captures are 1440×1000 pixels at a 1440×1000 CSS viewport, 1:1. Mobile captures are 390×844 and 320×780 at matching CSS dimensions; tablet inspected at 768×1024. Source chrome was cropped away. The reproducible crop/normalization recipe is `compare.cjs`: each source and implementation content region is independently scaled to 700px wide, preserving aspect ratio, then placed together with source left / implementation right. Different section heights and changed client copy are explicitly not treated as density errors.

Combined comparison inputs opened and reviewed: `comparison-mission.png`, `comparison-columns.png`, `comparison-alternating.png`, `comparison-partnership.png`, `comparison-projects.png`, and revised `comparison-icons-final.png`. These are focused section comparisons. The original 1440px implementation captures were also inspected for readable body copy, photo crops and controls; mobile captures were reviewed at native resolution.

## Iteration history and fixes

- P2 — Unequal photographic column widths: removed asymmetric article padding, put separators midway through equal grid gaps. Revised `home-columns-desktop-v2.png` and combined columns comparison show equal images and aligned text/links.
- P2 — Mission buttons had doubled padding: retained padding only on the label layers, restoring compact equal-height controls. Revised `mission-desktop-final.png` and `mission-mobile-final.png` show legible CTAs with no collisions.
- P2 — Activities second row inherited white copy on a light surface: added scoped neutral-text overrides. Revised `activities-desktop-final.png` shows readable text; computed colour is rgb(103,93,87).
- P2 — Collage image had a conspicuous rectangular background edge: matched the containing paper panel to the asset's sampled corner colour, #fbf4e8. Revised `partnership-desktop-final.png` and `partnership-mobile.png` show a continuous panel.
- P2 — Mobile connected headings collided: replaced three narrow columns with three numbered, linked rows. `projects-mobile.png` records the old overlap; `projects-mobile-final.png` shows complete headings and a full-width panorama.
- P2 — Initial six-icon section was under-scaled relative to the selected reference: increased desktop icon boxes to 104px, labels to 21px and display heading to 96px maximum. Re-captured `icons-desktop-final.png` and reviewed `comparison-icons-final.png`; mobile keeps its 60px icons.
- Functional correction — Cross-page hash links reached the route but not the section in client-rendered preview. Added a font-ready mount scroll; tested Projects → international cooperation and Home icons → research. Targets now land at the existing ~56px scroll margin. Activities jump navigation numbering now agrees with row order.

No actionable P0/P1/P2 remains in these tested states.

## Five fidelity surfaces and intentional adaptations

- Typography: preserves approved self-hosted Cormorant Garamond and DM Sans, including Polish glyphs. The screenshot's narrower editorial serif is not substituted for the agreed brand family. Hierarchy, burgundy emphasis, numbered labels and serif/sans contrast are carried through. Native screenshots confirm legibility and corrected wrapping.
- Layout: Home photographic columns and open six-icon grid; Mission 50/50 split; six alternating flush Activity rows; Partnership portrait collage; Projects connected thematic panorama. Mobile stacks content rather than shrinking desktop columns. Document width equals viewport at 320, 390 and 768px in inspected states.
- Colour: approved wine, ivory, warm neutrals, blush and dark hero palette remain. Warm paper #fbf4e8 is limited to the collage panel. Activity monochrome images, separators and burgundy accents reflect the references. Existing token-contrast tests pass; no whole-site WCAG claim.
- Assets: exact official logo and existing human illustrations/3D scene are preserved. New credited thematic photographs replace mock photographs, not actual foundation event evidence. Two generated editorial collages are concept art, not portraits of staff or a map of project locations. Standard Phosphor icons deliberately follow the approved icon system rather than reproducing generated mock pictograms. No hand-drawn SVG substitute for missing artwork.
- Copy: Hubert's programmes, three project URLs and organisation details remain. The unverified “2004” mock label becomes “over two decades”; social-project naming follows the supplied content. No fabricated publication covers, download links, impact figures or partner identities. Research is an editorial subject overview and honest enquiry CTA.

## Checks and limits

Production build and all 25 tests pass: routes, content, assets, provenance, brand tokens, hero fallback and hosting packaging. Browser-tested mobile menu navigation, connected heading links, programme jumps and research enquiry routing. CTA wipe reaches `inset(0px)` with its duplicate label aria-hidden; navigation hover capture is `nav-hover.png`. Existing reduced-motion CSS is preserved and covers new transforms. No external form submission, telephone call or email sent.

Browser error logs checked after the focused route/interaction pass. No Lighthouse, physical-device GPU test, screen-reader audit or forced reduced-motion emulation. Existing Three.js chunk-size warning remains. Real foundation photography/publications, direct-send contact backend and legal launch approval remain outside this visual correction. The generated collages and stock photos are clearly distinguished in the public source notes.

Implementation checklist: [x] selected treatments across relevant pages; [x] preserve logo/hero/content; [x] mobile fixes; [x] combined comparison review; [x] build/tests. [ ] Publish this revision after approval.

---

# Historical QA — Brand & Interface System v2

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
