# Prototype Instructions

## Regina decisions — 3 September 2026

Website build now authorised: src/site is the six-page Polish website plus privacy/legal pages. The old motion study is preserved at /motion-study.html. Latest source content and launch gates are in BUILD-REVIEW.md. Do not interpret earlier kit-only scope as prohibiting the current full-site build. Contact is currently an explicit email-draft flow, not a configured server submission. Preserve the original worker/index.js and packaging tests; worker/site.js adds production page routing in a separate build stage. Sites review is owner-only and noindex; public launch needs approval, direct-send form/inbox configuration, legal/privacy review, public domain decision and final browser/device QA.

Visual library: /visual-library.html contains 80 reusable SVGs (32 Phosphor icons in two weights plus 16 supporting assets). Use verified Poland geography, no fictional project markers; Warsaw is a city-level contact location only. Networks are conceptual; process labels are proposed and must be checked before publication. No invented impact charts. Photography must show real Polish cities and working environments, with rights and provenance checks; no excessive futuristic AI cityscapes. See public/visual-library/README.md and photography-brief.md. Current scope remains reusable assets and documentation, not full website implementation.

Hover update: use directional colour wipes (right-to-left default for buttons, bottom-to-top for the partnership CTA; left-to-right and top-to-bottom are demonstrated alternatives). A clipped decorative duplicate label keeps contrast during the sweep; it must be aria-hidden. Use 420ms entry, 240ms retreat. Navbar category icons reveal on hover and keyboard focus in reserved slots, without moving neighbouring links. Touch menus show the icons persistently. Reduced motion changes states instantly. This supersedes the earlier plain colour-fade/text-only hover recommendation.

The user likes the deep-plum/mauve background in the innovation hero and wants this used selectively elsewhere. Brand system v2 lives at /brand-kit.html with canonical exports in public/brand-kit. Preserve the supplied Regina logo. Use Cormorant Garamond + DM Sans, Phosphor regular UI icons and light category icons. The earlier blueprint's Newsreader/Inter pairing, blanket 3D prohibition and proposed English pages are superseded by the current selected direction and Hubert's Polish-only brief. Keep the six requested pages: Home, Misja, Działania, Projekty, Partnerstwo, Kontakt. Current scope is kit documentation and component specimens, not implementation of those pages. Do not silently restyle the hero study when revising the kit.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
