# Hubert review QA — 8 September 2026

Scope: review/hubert-home preview only. Production is not promoted.

## Fixes in this pass

- Reset native button appearance and padding so the shared directional hover fills the button instead of producing an inset rectangle. Decorative wipe layers ignore pointer events.
- Removed the visible conceptual-illustration caption and redundant instructional captions on the mission goal selector and international diagram. Accessible labels and central source documentation remain.

## Verification

- Production build passed.
- All 15 automated tests passed: site (6), brand (5), Sites worker (4).
- Six main pages checked at 320, 390, 768 and 1440px: 24 route/viewport checks. No page-level horizontal overflow, missing same-page anchor targets, or completed broken images were detected; each page has one H1.
- Mobile hero layouts visually reviewed after entrance animations settled. Contact details and form reviewed at narrow width.
- Mobile menu opens and closes with all navigation links present.
- Empty contact submission displays four validation errors and focuses the first invalid field. No message was sent.
- Shared CTA content and hover layers have matching bounds with zero native padding.

These checks use the in-app browser, not a physical-device Safari/Chrome matrix. Off-screen lazy images and external site uptime are not comprehensively tested by the viewport scan.

## Recorded Regina feedback accounted for

- Capital “Od”, burgundy identity, approved typography, and 3D feature retained.
- Home training image, full-width Accelerate Poland feature, and combined photographic activities collage implemented.
- Mission goals use six wide illustrations; social-inclusion illustration retained; Warsaw bridge module removed.
- Activities final two photographs changed to professional consultation and report analysis without changing headlines.
- Projects collage updated, project links simplified to three rows, redundant shared-areas module removed, hover contrast corrected.
- Partnership hero retained, lower collaboration image integrated into the section, heading shortened to “Wsparcie finansowe”.
- Entire Contact map module removed; contact/form/FAQ spacing rebalanced.
- Remaining visible conceptual and diagram instruction labels removed in this pass.

## Still requires confirmation

- Hubert's final Polish-copy and visual approval is not replaced by this checklist.
- Confirm the 3D experience on Hubert's actual device; fallback behavior remains intentional where rendering is unavailable.
- Contact currently prepares an email draft; it is not a server-delivered inbox form. Real email delivery was not tested.
- Production remains unchanged until the preview is approved.
