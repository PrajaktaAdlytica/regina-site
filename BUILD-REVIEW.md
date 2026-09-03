# Regina — six-page build review

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
