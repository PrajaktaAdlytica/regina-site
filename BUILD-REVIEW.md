# Regina — six-page build review

## GitHub / public Vercel handoff — 3 September 2026

User explicitly requests commit to PrajaktaAdlytica/regina-site and a public Vercel review for Hubert. Added Vercel static output/routing/header configuration, ignored local Vercel credentials, preserved existing Sites worker pipeline and remote. Canonical metadata uses Vercel's production hostname during Vercel builds. Build and all 79 tests pass. Public deployment verification follows the commit. The noindex review and email-draft contact behaviour are intentional; this is not a DNS/custom-domain or backend-form launch.

## Accelerate destination confirmed — 3 September 2026

User approved https://www.acceleratepoland.org. Updated shared project URL/domain, both Home CTAs (now using shared project data), and brand-kit link. No .org.pl references remain in src. Build and all 78 tests pass; regression verifies Home and Projects destinations and rejects obsolete/preview URLs. Local homepage HTTP 200; diff check clean. Destination currently serves coming-soon content, not the completed Vercel build. No DNS changes or public Regina deployment; publishing approval remains pending. Supersedes earlier unresolved destination-choice notes below.

## Project branding and domain investigation — 3 September 2026

All three project cards now use original identifying marks with contain fitting and white/dark contrast backplates. Home's early Accelerate banner also uses its original received logo. Project titles, destinations, external-link notices, directional hover and scroll-reveal wrappers retained. Asset provenance ships in public/site/project-brands/SOURCES.md. All 77 automated tests and production build pass; local Projects HTTP 200, diff whitespace clean. Original assets visually inspected; no browser visual QA or public deployment in this revision.

Accelerate root and www still return DNS NXDOMAIN. The existing Vercel review works (HTTP 200), but substituting it for the supplied custom domain awaits the user's requested choice. Domain/registrar changes were not made. Public publishing approval remains pending.

## Home copy and CTA compliance — 3 September 2026

Restored the complete red Home H1 from Hubert's brief, including the foundation name as its small first line, plus the supplied subtitle without the added paraphrase. Added the missing org.purpose paragraph after org.intro. The opening programme CTA now names and links to Accelerate Poland; the original illustrated Accelerate banner appears immediately after the introductory section, before photographic programme cards, using “Poznaj nasze programy”. Preserved plum surface, official logo, illustration, 3D hero and existing reveal/hover lifecycle. Scoped heading sizes accommodate the longer text; other pages unchanged.

Build and all 76 tests pass, including exact rendered H1/subtitle, both introduction paragraphs, external opening destination/new-tab semantics, and single-banner placement. Homepage responds 200; diff whitespace check passes. No new browser visual QA. The supplied Accelerate domain remains a separately reported unresolved launch issue. Local only; public publishing approval remains pending.

## Plum homepage introduction and persistent Contact icon — 3 September 2026

Applied full-width approved plum background to the foundation introduction, retaining its grid/spacing, copy, programme destination and inner scroll-reveal anchor. Text switches to ivory/rose; programme CTA uses inverse background/plum text, blush directional wipe and light keyboard focus. The navbar Contact envelope is permanently visible while other category icons remain hover-revealed. Production build and all 75 tests pass; homepage returns 200; no browser visual QA. Local only, not published.

## Compact navbar refinement — 3 September 2026

User screenshot showed excessive whitespace in the sticky header. Shared navbar inner height reduced from 176px to 92px desktop and 144px to 80px mobile; old Misja height overrides removed. Original logo retained, fitted at 148×60 / 132×54. Navigation gaps tightened to 16px; Contact destination and mobile Menu get a restrained blush outlined treatment. Existing underline/icon hover, sticky layering, modal behaviour and measured anchor/sculpture offsets remain. No below-header section restyling.

Build and all 73 tests pass; Contact preview responds 200 and diff whitespace check passes. No browser visual QA performed. Local-only revision; publishing still awaits approval.

## Shared sticky navigation — 3 September 2026

Navbar now uses sticky positioning on all site routes, with an opaque canvas surface and restrained shadow. Original dimensions, official logo, current-page/hover underlines, mobile modal and Misja density retained. Header ResizeObserver publishes its actual height for native anchor scroll padding; Lenis anchors use the same measured clearance. The homepage sculpture stage, chapter progress and chapter jumps now account for the navbar; short desktop viewports use the existing compact fallback to avoid crowding. Observer/listener cleanup included.

Production build and all 72 tests pass, including all-route shared header coverage and measured offsets. Local Partnerstwo responds 200. No browser visual/interaction QA performed. Local only; public update awaits approval.

## Contact redesign, city map and bidirectional motion — 3 September 2026

Contact now has a compact editorial opening, plum direct-contact panel beside a blush enquiry form, a dedicated Warsaw city-map section and split FAQ. Preserved email/phone/registration values, all FAQ answers, subject-prefill and the existing validated email-draft behaviour. Updated map replaces the Poland outline: local credited Warsaw photo initially, opt-in OpenStreetMap iframe with pan/zoom, permanent external link, stable toggle-off control and city-only/no-office-marker disclosure. No map request until user enables it; privacy page explains the third-party connection. Original image/geography assets retained.

Contact lazy-loads shared GSAP/Lenis with stationary section/row anchors, 96px/1.05s desktop and 28px/.65s mobile alternating horizontal entrances, reversing on upward entry and replaying each pass. Contact rows, form fields, FAQ rows and footer covered; focused controls immediately restored; reduced-motion/native touch and cleanup inherited. Contact-row wine sweeps, field/FAQ keyboard and hover feedback, and small map-photo zoom respect reduced motion. No unrelated page redesign.

Build and all 70 tests pass; tests cover down/up/down field replay, focus restoration, mobile/reduced-motion cleanup, prerendered map opt-in/attribution and retained details/form semantics. Contact route and OSM embed endpoint return 200. Browser visual/interaction QA not performed; live external-map rendering remains unverified. Local preview updated; public publishing approval still pending.

Map integration reference: https://wiki.openstreetmap.org/wiki/Export (Share / embeddable HTML) and https://www.openstreetmap.org/copyright .

## Partnerstwo hover — 3 September 2026

Added page-scoped alternating horizontal blush wipes to four partner categories, bottom-up wipes to three offers, wine rule/heading responses, icon/step motion and gentle collage/artwork lift. Network image responds to hover and its contact-link focus. Reading-only cards remain non-interactive; all existing content, links and scroll translations preserved. Fine-pointer and reduced-motion safeguards included. Production build and all 66 tests pass; preview route responds 200. No browser visual QA; local only, not published.

## Partnerstwo bidirectional scroll reveals — 3 September 2026

Added a page-scoped lazy GSAP/Lenis lifecycle to Partnerstwo. Stationary triggers cover the collage hero, introduction, all section headings, individual partner categories, network diagram/copy, individual offer rows, institutional note, closing CTA and footer columns. Alternating horizontal entrances reverse on upward re-entry and replay on repeated passes; 96px/1.05s desktop, 28px/.65s mobile. Native mobile scrolling, reduced-motion/focus safeguards and cleanup are inherited from the shared controller. Existing layouts, imagery, text and destinations unchanged.

Build and all 64 tests pass, including Partnerstwo down/up/down replay, mobile offset, focus visibility and reduced-motion cleanup. Preview route returns 200; no browser visual QA performed. Local only, not published.

## Projects full-row reveal emphasis — 3 September 2026

Full project cards now enter within stationary wrappers instead of animating only their contents. Alternating horizontal travel increased to 96px/1.05s (mobile 28px/.65s), with upward reversal and repeated re-entry. Existing Projects sections retain their reveal coverage; footer columns now also alternate/reverse horizontally through an optional profile, preserving other pages' defaults. Card layouts/links/hover unchanged. Build and all 61 tests pass, including full-card targeting, down/up/down replay and footer reversal. Route responds 200; no browser visual QA performed. Local only.

## Projects opening, card hover and scroll motion — 3 September 2026

Redesigned only the opening: compact breadcrumb, oversized editorial headline and blush introduction panel with a count derived from the actual projects. Preserved all three project card layouts/titles/domains/external URLs and new-tab notices, the existing collage, context artwork and closing CTA. Card hover/focus-within adds directional colour wipes and small title/icon movements, with contrast-safe surfaces, pointer guards and reduced-motion states. Projects now lazy-loads GSAP/Lenis using the shared lifecycle, with per-card and per-section horizontal entrances, upward side reversal and full cleanup. Existing Home/Misja/Activities settings unchanged.

Build and all 59 tests pass; checks include the three preserved external destinations, retained lower sections, hover/accessibility source checks and down/up/down replay with focus/reduced-motion restoration. Preview route responds 200. Browser visual/interaction QA not performed. Local only; public update approval remains pending.

## Działania research hover — 3 September 2026

Added scoped decorative knowledge-row hover: left-to-right rose fill, wine heading with small inset, and books-icon tilt. Section hover or enquiry-link focus draws an underline beneath the italic statement. Pink section, reading-only row semantics and original enquiry CTA retained; no new links or content. Uses transform separately from GSAP translate, fine-pointer hover guard and reduced-motion instant colour/no movement. Build and all 55 tests pass; local route returns 200. Browser interaction QA not performed. Local only, public update still pending approval.

## Działania opening and bidirectional reveals — 3 September 2026

Replaced the spacious generic introduction/flat jump bar with a compact editorial split: original headline and copy alongside a blush, numbered six-area programme index with established icons and native anchors. Preserved all six alternating photographic chapters, research content and contact destinations. Added Activities-specific lazy-loaded GSAP/Lenis configuration, covering index rows, each programme row, research rows and closing CTA. Horizontal origins reverse on upward re-entry; existing Home/Misja motion defaults unchanged. Fine-pointer desktop Lenis, native mobile, focus safety, reduced-motion handling and unmount cleanup use the shared lifecycle.

Build and all 54 tests pass, including repeated down/up/down replay (count 3), ±72px desktop/24px mobile offsets, focus/reduced-motion restoration and all six anchor targets. Preview route returns 200. No browser visual/interaction QA performed in this turn. Local preview only; public revision remains unapproved.

## Mission statement hover — 3 September 2026

Added a left-to-right deep-plum hover sweep, brighter divider draw and small target-icon tilt/scale to the wine mission statement. Content and layout unchanged; isolated decorative layers do not intercept input or overwrite GSAP child translations. Fine-pointer hover only, instant reduced-motion colour feedback and no fake click/tab affordance. Build and all 51 tests pass; preview route responds 200. No browser interaction test performed for this change. Local only; public update approval remains pending.

## Warsaw bridge reveal — 3 September 2026

Bridge photograph now reveals through an expanding inset frame with a gentle zoom-out on downward and upward re-entry. Footer-aware reset enables repeat viewing; lighter mobile motion and reduced-motion static fallback retained. Original Warsaw caption and licence credit preserved. Desktop replay, mobile layout and browser errors checked; build and all 49 tests pass. Local preview only.

## Photo label cleanup — 3 September 2026

Removed the “Fotografia tematyczna” hero chip and repeated thematic-photo/source notes on Home, Misja and Activities. Central information-page credits, licence/disclosure text, image alt descriptions and Warsaw attribution remain. No image asset removed. Build and all 47 tests pass; tests check all six content routes for visible tags and preserve central attribution. Browser confirms Misja has no old tags/notes and retains its hero image. Local only.

## Misja scroll motion — 3 September 2026

Added lazy-loaded GSAP ScrollTrigger/Lenis to Misja using the homepage's shared lifecycle and a separate section specification. Entrances replay down/up, with native mobile scroll and reduced-motion/focus safety. Eleven groups include all main sections and shared footer; existing atlas/network selection animations and page design preserved. Desktop traversal, mobile panel selection, goal anchor and Home defaults checked. Build and all 45 tests pass. Local only.

## Misja hero refinement — 3 September 2026

Follow-up: tightened the Misja-only header and hero vertical spacing, removing about 128px of whitespace at 1440px while retaining type/photo sizes and structure. Desktop/mobile visually checked; all 43 tests pass. Local only.

Added staggered oversized typography, offset curved photo/blush backing, a circular #cele shortcut, and a separate introduction/CTA row. Kept original photo/message/attribution/logo/actions. Removed duplicate top rules only on Misja, preserving navigation underlines. Desktop, tablet and narrow-mobile checks pass; all 43 tests pass. See latest design-qa.md. Local only.

## Community picture format — 3 September 2026

Same original community illustration, new open editorial layout: heading above, uncropped scene blended into page canvas, blush halo and supporting social-development copy/themes to the side. No generated replacement or asset edits. Responsive stacked presentation, existing CTA, subtle hover/focus lift and reduced-motion override. Desktop/mobile and destination checks pass; all 41 tests pass. Local preview only.

## Misja cooperation network revision — 3 September 2026

The white illustration panel was rejected. The section now uses an interactive network directly on the retained pink background: selecting one of four regions by mouse hover, keyboard focus or tap draws its connection and updates a region-specific contact CTA. Conceptual network, not geographic project pins; no new claims. Original copy/assets preserved. Native button semantics, finite motion and reduced-motion CSS. Browser desktop/mobile/enquiry checks and all 40 tests pass; see newest design-qa.md entry. Local only; supersedes the static international illustration entry below.

## Misja international cooperation — 3 September 2026

Replaced the Poland-only map section with an editorial people/globe illustration and four interactive region enquiry links: Europe, Africa, Asia and Australia. Poland remains identified as the starting point. Reuses approved programme wording and original illustration; no invented locations or project claims. Each region opens Contact with its enquiry subject prefilled. Responsive 2×2 mobile controls, directional hover, keyboard focus and reduced-motion styling included. Build and all 40 tests pass; desktop/mobile and enquiry checks recorded in design-qa.md. Original map assets, other sections and homepage preserved. Local only; public review unchanged.

## Misja mission atlas — 3 September 2026

The six-goal static grid is replaced by MissionAtlas: six numbered selectors, one large illustrated chapter, GSAP transitions, previous/next controls, keyboard navigation and actual programme/partnership links. Original goal wording remains; supplied illustrations and credited thematic photos are reused with provenance disclosure. Mobile taps reveal the chosen panel and provide a return-to-selection control. Full-width selectors below 381px prevent long Polish label collisions. All 38 tests pass; visual and interaction checks recorded in design-qa.md. Other sections and homepage are preserved. Local only.

## Homepage motion — 3 September 2026

Added Home-only lazy-loaded GSAP ScrollTrigger and Lenis. Directional entrances/staggers replay in both scroll directions; original layout, assets, hover effects and hero are preserved. Lenis smooths desktop wheel scrolling and coordinates hero chapter jumps; touch/mobile remains native. Reduced-motion changes remove both enhancements immediately; keyboard focus cancels concealment. Motion is progressive enhancement, not required for content. Build and 35 tests pass; responsive/replay browser checks are in design-qa.md. This update is local only.

## Interactive programme explorer — 3 September 2026

Home's six-icon overview is now `ProgrammeExplorer`: six existing illustrations/photos in a staggered mosaic, linked on hover and keyboard focus to a numbered programme list and a stable selected-description area. At 900px and below, a tap-to-expand accordion supplies each image, description and destination link. Native anchors/buttons retain keyboard access; reduced-motion styling is included. No new dependencies, routes, invented content or changes to the logo, hero, navbar or photographic cards.

The supplied TeamShowcase code informed interaction only. Existing brand fonts, colour tokens, Phosphor icons and Hubert's six programme records are reused. This supersedes the six-icon Home treatment described in the historical review below. Build and all 30 tests pass; desktop, tablet, mobile, keyboard and programme-destination checks are documented in `design-qa.md`. Local preview only; public revision remains unchanged.

## Screenshot correction — 3 September 2026

Implemented the selected treatments across pages: Home numbered photo columns and six-icon overview; Mission split photographic intro and two CTAs; Activities alternating monochrome panels; Partnership torn-paper portrait composition; Projects a continuous three-theme collage; research editorial with confirmed subjects rather than invented publications. All six programmes remain intact. Existing official logo, brand tokens, illustrations, directional hover components and 3D hero are preserved.

Visual comparison and responsive/interaction QA now performed for this correction; see `design-qa.md`. This supersedes the earlier note that the six-page build had no browser checks. Build and all 25 tests pass. Existing public review remains unchanged until this revision is approved for publication. Noindex is retained; the current public Sites URL is not the foundation's domain.

### New asset provenance

Four real thematic photographs, downloaded 3 September 2026 under the [Pexels licence](https://www.pexels.com/license/), resized/cropped and selectively displayed in grayscale:

- `public/site/mentoring.jpg`: [Kampus Production](https://www.pexels.com/photo/young-diverse-students-coworking-on-laptop-in-library-with-assistance-of-female-teacher-5940704/).
- `public/site/students.jpg`: [cottonbro studio](https://www.pexels.com/photo/people-studying-inside-a-library-6344238/).
- `public/site/meeting.jpg`: [fauxels](https://www.pexels.com/photo/colleagues-shaking-each-other-s-hands-3184291/).
- `public/site/laboratory.jpg`: [ThisIsEngineering](https://www.pexels.com/photo/chemical-engineers-working-in-laboratory-3861442/).

These are not claimed to show foundation staff, partners, events or Polish locations. Credits and this distinction appear at `/informacje/#fotografie`.

Two generated conceptual collages (WebP quality 86, no invented brand marks):

- `public/site/partnership-collage.webp`, 1122×1402. Generation brief: standalone portrait editorial collage; three thoughtful adults in an asymmetric triangle, desaturated warm monochrome, dark clothing, torn-paper/dry-brush edges, muted rose and grey, fine burgundy connecting arcs/nodes and faint archival/map texture on warm ivory. Fictional people, not staff; no letters, logos, crowns, UI or statistics. Original generation: `exec-c1aad55f-a4cf-4df3-b79f-4c3202ba1766.png`.
- `public/site/projects-collage.webp`, 2172×724. Generation brief: continuous 3:1 editorial panorama; educator gesturing at left over dusty rose, conceptual Europe network in the centre, wooded mountain path with hikers at right; unified warm paper/torn edges, no labels, UI, report covers or claims of actual project locations. Original generation: `exec-8d4d5054-6afc-4e72-81df-da0f3c46e7b1.png`.

Raw assets and QA images are retained locally under `work/`, excluded from deployment/source upload. Visible source notes disclose the collages as AI-generated conceptual illustrations.

## Implemented

- Polish Home, Misja, Działania, Projekty, Partnerstwo, Kontakt, plus privacy and legal/source pages.
- Actual static HTML per route, page titles/descriptions, NGO structured data, sitemap and review-only noindex policy.
- Original Regina logo, favicon, Cormorant Garamond / DM Sans, canonical brand tokens.
- Directional clipped colour wipes and decorative aria-hidden label layers; navigation icon reveal without layout shift; mobile dialog menu.
- Desktop scroll-driven Three.js sculpture reused from the approved study, pause control; image-based chapter controls on mobile/reduced-motion/save-data devices. All core content exists without WebGL.
- Four approved human illustrations, two technology vectors, Poland maps, sector diagram, numbered accents and subtle digital patterns, with selective page placement.
- Real Warsaw photograph with source/author/CC BY-SA licence and modification notice.
- Contact form validation and explicit draft workflow: opens the user's email application or copies the composed message. Does not claim server delivery.
- Original motion review preserved at /motion-study.html; brand kit and visual library remain accessible for private review.

## Reference synthesis

Bosch: composed motion and clear hierarchy. Nesta: distinct section layouts. KBS and EIC: clean line pictograms. BMW/Rockefeller: interactive section rhythm. Oxfam: accessible structural clarity. Impact Europe/Visegrad: varied editorial art treatments. Artzzs: restrained directional hover motion. Lusion: visual and scroll-led 3D chapter treatment. These inform principles, not copied site layouts. The latest brand kit supersedes the earlier wireframes and Newsreader/Inter proposal.

## Launch gates — not silently completed

1. Direct-send form: server validation, CAPTCHA credentials, email delivery provider and protected message inbox/admin remain unconfigured. The current draft workflow is intentionally visible. No visitor data is stored by this review app.
2. Client/legal approval of privacy notice, retention, hosting/processors and future contact-form policies. No claim of GDPR certification.
3. Analytics choice and consent integration if tracking is enabled; currently no analytics or advertising trackers.
4. Official project logo/banner files when available. Current project panels are typographic treatments, not invented project logos.
5. Actual project/event photography with permissions; current people imagery is explicitly conceptual, and city photography is contextual.
6. Public domain/hosting choice (the user's general preference is Vercel), public-access approval and removal of review noindex/internal design artifacts before launch.
7. Final interactive browser, keyboard, screen-reader and device testing plus Lighthouse measurements. This build uses source/render/route tests; no Lighthouse or WCAG conformance score is claimed.
8. CMS/admin setup if requested. Content currently lives in src/site/content.js and page modules; this is not a connected CMS.

## Checks

Production compilation, server rendering, unique titles, one h1 per page, supplied programmes/projects/registration values, local asset/link existence, draft-flow copy, reduced-motion code path, and route security/error handling are covered by tests. Browser screenshots/interactions were not performed for this build, following the Sites skill's explicit-test requirement.

## Social image

public/og.png created with one built-in imagegen request. Prompt: elegant landscape editorial Polish NGO card; warm ivory #F8F6F2, burgundy #8A1538 serif type; exact title “Regina Purpurea Fundus”, subtitle “Edukacja · Innowacje · Współpraca”; restrained intertwined burgundy/ivory/silver sculptural ribbons on right; no new logo, crown, statistics, people or cityscape. Verified text visually. The original logo is not replaced.

## Photography provenance

public/site/warsaw.webp derives from https://commons.wikimedia.org/wiki/File:Warsaw_skyline_%C5%9Awi%C4%99tokrzyski_Bridge.jpg . Photographer: Arne Müseler / www.arne-mueseler.com. CC BY-SA 3.0 DE (https://creativecommons.org/licenses/by-sa/3.0/de/deed.en). Resized to 1600px, WebP conversion and layout crop; derivative under same licence. Source metadata verified through Wikimedia imageinfo API on 3 September 2026. No implied endorsement or foundation activity.
