# Hero comparison prototypes — 8 September 2026

Source visual truth: three displayed ImageGen concepts, in displayed order:
- /Users/prajaktagaikwad/.codex/generated_images/01a06242-b76f-7de1-866f-e8c7d0e530c5/exec-1632fa06-3b23-44d0-904d-f29912c5748b.png
- /Users/prajaktagaikwad/.codex/generated_images/01a06242-b76f-7de1-866f-e8c7d0e530c5/exec-4519c60b-bf8a-4440-a110-efbd4127ee1d.png
- /Users/prajaktagaikwad/.codex/generated_images/01a06242-b76f-7de1-866f-e8c7d0e530c5/exec-7dcdcf1d-f02f-4012-b934-b27629fb6155.png

Implementation: localhost port 4174, query ?hero=1, ?hero=2, ?hero=3. In-app browser tab 16 screenshots displayed in the task. Desktop CSS viewport 1440×1000, capture 1440×1000; source images approximately 1504×1048, same desktop proportions. Screenshots reviewed at settled state. Mobile 390×844 visually reviewed; overflow checks at 320, 768 and 1440 across all three variants passed with one H1 and canvas present.

## Comparison and constraints

- Typography: retained real Cormorant Garamond/DM Sans and original logo. Full approved headline retained. Actual font wrapping differs from generated letterforms; no copy is truncated.
- Layout: light and plum variants unite copy and sculpture in one two-column hero. Third variant uses a wider headline above a blush lower field. Initial third variant split the body paragraph across the background boundary; fixed by anchoring the blush field to the content grid row, then recaptured.
- Colors: ivory, plum and blush variations preserve the established palette. Dark variant uses ivory CTA and readable foregrounds.
- Assets: original interactive Three.js sculpture is reused, not a bitmap replica. Its lighting, pose and size are consequently not pixel-identical to generated concepts. Existing homepage sculpture mode remains the default; presentation mode is opt-in only.
- Content: agreed headline/body retained; primary CTA links to programmes. Preview-only comparison navigation is intentionally added below each hero.
- Interaction: programme selection changed the area link to /dzialania/#innowacje; pause button was clicked successfully. Reduced motion is respected by code; physical devices and unsupported WebGL were not simulated. A failed-scene notice is provided.

## Result

No blocking layout issues found for trying the three prototypes. Generated-concept exact pixel fidelity is not claimed. Remaining polish: tune sculpture lighting and scale after the user chooses a direction; establish a static sculpture poster for unsupported WebGL before adopting a variant as the production homepage.

Build and all 15 existing tests passed. Existing tests primarily cover the unchanged published-page structure, not exhaustive variant interactions.

final result: passed
