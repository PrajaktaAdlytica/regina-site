# Regina Purpurea Fundus
## Brand & Interface System — v2.0

3 September 2026 · Design specification for review

Visual extension: `/visual-library.html` contains the downloadable SVG library, with usage and source documentation in `/visual-library/README.md`. It extends the same Phosphor icon family with institutional/technology pictograms, verified Polish geography, conceptual diagrams, process specimens, numbered steps and patterns. Use the photography brief for authentic Polish settings; charts require verified data. These additions do not change the selected hero or logo.

This is the working digital identity for Regina's multi-page NGO website. It extends the original client logo and the selected editorial / dimensional direction. It does not rename the foundation, invent a new mark, certify WCAG compliance or mark the full site as built.

## 1. Authority and scope

**Client requirements:** the original logo; Pantone 201 and black, optional Warm Gray 8 and silver; Polish public content; an established NGO focused on vocational education, innovation, social development and international cooperation; six pages: Home, Misja, Działania, Projekty, Partnerstwo, Kontakt. PPP expertise is supporting information, not the lead proposition.

**User selections:** fine-line burgundy illustrations, editorial serif typography, different layouts and backgrounds across sections, Lusion-inspired visual/scroll ambition, and the deep-plum/mauve background of the innovation hero.

**Designer recommendations in this kit:** exact web palette, type scale, spacing, components, semantic icons, accessibility defaults and page recipes. Review these as a coherent system. They are not represented as Hubert's verbatim instructions.

**Supersedes the early blueprint:** use Cormorant Garamond + DM Sans, not Newsreader + Inter. Keep the client label Misja, not an assumed O fundacji replacement. Polish only; no language switch at launch. The selected original 3D hero is now allowed, but not decorative 3D everywhere. The experimental hero's small captions are not a universal text-size standard. No further client-question gate is imposed.

## 2. Brand foundation and voice

**Essence:** credible progress through partnership.

**Character:** established, human, cultured, practical, outward-looking. Avoid bureaucratic language, investor language, hype and generic charity sentiment.

**Working positioning:** a Polish foundation connecting education, enterprise, technology and social development through practical programmes and partnerships.

**Copy rules:** public website in Polish; design/developer notes may be English. Short direct sentences, sentence-case headings and explicit link destinations. Use client-provided claims without inventing additional metrics, dates or relationships. Label conceptual illustrations as illustrations when context might imply documentary evidence. Do not fabricate publication covers, impact numbers, project outcomes or partner logos.

**Approved source headline:** “Fundacja Regina Purpurea Fundus od ponad 20 lat działamy na rzecz rozwoju społecznego i gospodarczego Polski i społeczności międzynarodowej.” Layout can break this into a foundation label and a headline, but must not change its meaning. The study uses a shorter excerpt.

**Actions:** `Poznaj nasze programy` for programme discovery (Hubert specifically proposes the Accelerate Poland banner/link); `Nawiąż współpracę` for partnership contact; `Poznaj ten obszar` for activities; `Przejdź do projektu` for external project destinations. Do not add donate, volunteer, account or request-demo workflows without real destinations and a separate requirement.

## 3. Logo and favicon

- Use supplied artwork, unchanged proportions and internal colours. Do not redraw the R or add a crown.
- Primary: original burgundy lockup on white/ivory. Compact: original R monogram for favicon or constrained identity, not routine desktop navigation.
- Clear space on every side: at least the height of the letter R within the symbol, as requested by Hubert. Measure this from the actual displayed mark, not the whole wordmark width.
- Suggested full-logo widths: 160–176px desktop, 132px mobile; verify the fine wordmark at device scale. Favicon uses the monogram, never a tiny full lockup.
- This clear-space rule creates a generous header. Recommended full-logo header reservations: about 176px desktop / 144px mobile. Do not squeeze the mark into an 80px header and claim the rule is satisfied. A more compact variant would be a separate design approval.
- On dark surfaces, use a verified supplied reverse vector; until verified/exported, put the original on a light plaque with the same clear space. Do not use arbitrary CSS filters to create a reverse logo.
- Never stretch, rotate, crop, emboss, cast a shadow on or animate the logo. No logo over uncontrolled photography.
- Delivered here: original vector-derived primary SVG and monogram SVG. ICO, Apple touch icon, social card and full reverse/black export package remain production asset tasks; do not imply they are already delivered.

## 4. Colour system

`tokens.json` is canonical. `tokens.css` is generated from it. Pantone equivalents are web approximations, not colour-managed print matches.

| Token | Hex | Intended role |
|---|---|---|
| wine | #8A1538 | Brand actions, active state, small accents |
| wine-hover | #6F102D | Primary hover |
| wine-active | #570D23 | Primary pressed |
| plum | #2C1921 | Feature, partnership CTA, footer |
| mauve | #7D676F | Supporting feature/quote surface |
| rose | #CDBDC2 | Dark-section metadata, gentle accent |
| blush | #F0E2E6 | Selected surface, quiet editorial panel |
| canvas | #F8F6F2 | Main warm-white background |
| stone | #E8E2DA | Alternating sections |
| surface | #FFFFFF | Form/document surfaces |
| inverse | #FFF8EF | Foreground on wine, plum and mauve |
| ink | #292522 | Body/headings on light backgrounds |
| muted | #675D57 | Secondary copy on ivory/stone/white |
| line | #D9D3CD | Nonessential decorative dividers |
| control-border | #958780 | Required control edges on ivory/white |
| silver | #A7A9AC | Decorative flat digital silver |
| warm-gray | #8C8279 | Secondary brand accent, not small copy |
| black | #000000 | Original monochrome identity |

Plum comes from the hero scene's base material/background setting. Mauve is a deliberate flat complementary token, not an exact reading of a screenshot pixel: lighting, tone mapping and the 3D floor produce a variable appearance. Reuse flat plum or mauve in UI rather than reproducing a complicated lighting gradient behind text. Metallic shading is allowed on the real 3D object only, not on buttons or the wordmark.

Start with roughly 70% light neutral, 20% feature/dark/stone, 10% burgundy/accent, then judge the actual page. One or two dark moments per page. Do not put burgundy text on plum or silver body text on ivory. On mauve, use inverse, not burgundy. Text over photography or moving scenes needs a stable contrast field and frame-by-frame checks.

### Functional colours

Success #285C45 on #EAF2ED; error #A22532 on #FAECEE; warning #77520B on #FBF2DA; information #3D5368 on #EDF1F5. Each needs text and the corresponding icon. Information slate is reserved for status messaging—not a new blue brand direction.

### Verified pairs

| Pair | Ratio | Permission |
|---|---:|---|
| Wine / canvas | 8.67:1 | Normal text |
| Inverse / plum | 15.71:1 | Normal text |
| Inverse / mauve | 4.93:1 | Normal text |
| Muted / stone | 4.98:1 | Normal text |
| Ink / rose | 8.43:1 | Normal text |
| Control border / canvas | 3.21:1 | Component boundary, not small text |

Ratios use the WCAG sRGB relative-luminance calculation. They apply to opaque flat colours only, not transparent blends or photographic backgrounds.

## 5. Typography and text styles

**Cormorant Garamond:** display and heading roles; regular 400, italic 400, medium 500. **DM Sans:** body and interface; regular 400 and medium 500. Load Latin AND Latin Extended so ordinary letters and Polish characters use the same family. Set `font-display: swap` and include the bundled font licences when redistributing. These are the existing selected fonts, not a new font search.

| Style | Desktop / mobile px | Line height | Weight | Tracking |
|---|---:|---:|---:|---|
| Display, exceptional hero | 88 / 48 | 1.0 | 400 | -0.035em |
| H1, page title | 72 / 44 | 1.05 | 400 | -0.03em |
| H2, section | 56 / 36 | 1.1 | 400 | -0.025em |
| H3, card/subsection | 32 / 28 | 1.2 | 500 | -0.015em |
| H4, compact heading | 24 / 22 | 1.3 | 500 | 0 |
| Lead, sans | 22 / 20 | 1.55 | 400 | 0 |
| Body, sans | 18 / 16 | 1.65 | 400 | 0 |
| Small, sans | 16 / 14 | 1.6 | 400 | 0 |
| Label/button/nav, sans | 14 / 14 | 1.4 | 500 | 0 |
| Eyebrow, sans | 12 / 12 | 1.5 | 500 | 0.12em |

The CSS uses rem-based fluid sizes from 360px to 1200px. Never shrink public body copy to the hero study's experimental 10–12px captions. Documentation metadata in the kit itself is compact, not a public-site recommendation.

Use one italic phrase for emphasis, not entire paragraphs or legal text. Sentence-case headings; uppercase only short eyebrows. Text width: 55–65ch for body; hero headline about 16–24ch depending on copy. Avoid orphaned Polish prepositions where practical, but do not insert nonbreaking spaces everywhere and break mobile wrapping. Keep all diacritics: `Zażółć gęślą jaźń. Łączymy wiedzę, ludzi i miejsca.`

## 6. Layout, spacing and margins

Base spacing: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160. Use named tokens, not repeated arbitrary 17/23/39px gaps.

| | Desktop ≥1200 | Tablet 768–1199 | Mobile <768 |
|---|---|---|---|
| Columns | 12 | 8 | 4 |
| Gutters | 24px | 24px | 16px |
| Outside margin | ≥48px | 32px | 20px |
| Content maximum | 1280px | Available | Available |
| Section padding | 120px | 80px | 64px |
| Heading to content | 48px | 40px | 32px |
| Card padding | 32px | 32px | 24px |

Formula: content width = min(1280px, viewport minus twice the appropriate outer margin). Centre it. Full-bleed backgrounds can reach the viewport edges, but their text aligns to the content grid. Background changes follow meaningful content boundaries.

Within components: icon→title 24px, title→description 12px, description→action 24px. Form label→field 8px; field→help/error 8px; field group→next group 24px. Related inline metadata 8px; separate groups 24–32px.

Allow content-driven height. Do not lock cards with longer Polish titles to brittle pixel heights. Equalise rows only when content fits without truncating essential details. At 320px, reflow rather than create horizontal page scrolling; intentionally scrollable specimen strips must be bounded.

## 7. Icon system

Use **@phosphor-icons/react** exclusively for standard UI. Regular at 20px for controls (16px only adjacent to small metadata). Light at 40px for category artwork; 32px on compact cards if necessary. Do not pretend a library weight is an exact arbitrary CSS stroke width, and do not override internal SVG paths. Decorative icons are hidden from assistive technology; icon-only buttons have labels.

| Meaning | Phosphor name |
|---|---|
| Mission / activities / project | Target / Stack / Briefcase |
| Partnership / email | Handshake / Envelope |
| Education / innovation | GraduationCap / Lightbulb |
| Entrepreneurs / community | Briefcase / UsersThree |
| International / research | GlobeHemisphereEast / Books |
| Document / download | FileText / Download |
| Internal / external destination | ArrowRight / ArrowUpRight |
| Back / breadcrumb | ArrowLeft / CaretRight |
| Expand / accordion | CaretDown / Plus–Minus |
| Menu / close | List / X |
| Phone / location | Phone / MapPin |
| Success / error-warning / info | CheckCircle / WarningCircle / Info |
| Pause / resume / replay | Pause / Play / ArrowCounterClockwise |

Nav is text-first; having an icon mapping does not mean every desktop link receives an icon. Footer uses icons for contact and functional actions, not decoration beside every legal link. Category icons may appear burgundy on light backgrounds and inverse on plum. Social logos are permitted only for verified profiles; no empty social links. No mixed Lucide/Phosphor family, emoji, ornate icons or custom pseudo-icons.

## 8. Components and states

### Buttons and links

**Selected hover behaviour (3 September):** directional colour fill, not an instant whole-button colour swap. Default right-to-left; bottom-to-top for the partnership CTA. The kit includes left-to-right and top-to-bottom alternatives. Use one consistent direction per component family, not random directions. Entry 420ms, retreat 240ms; use the same state on keyboard focus. A clipped duplicate label follows the fill edge to preserve contrast and must be `aria-hidden="true"`; the original accessible label remains singular. Disabled controls do not animate. Reduced-motion preferences replace the sweep with an immediate state change.

- Standard button: 48px minimum height, 24px horizontal padding, 12px gap, 14px/500 DM Sans, 4px radius. Large hero CTA: 56px. Content may wrap on very narrow screens; do not crop labels.
- Primary: wine/inverse. Hover wine-hover; pressed wine-active with at most 1px downward displacement. Do not add a shadow by default.
- Secondary light: transparent, ink foreground/border; wine sweeps in with inverse label. Secondary dark: inverse border/text; inverse sweeps in with plum label. The recommended dark-section primary action is this high-contrast inverse treatment. If retaining wine on plum, provide an inverse/rose boundary so its shape is distinguishable.
- Text link: wine, visible underline or bottom rule, ArrowRight for internal destination. In paragraphs, keep an underline so colour is not the only indication. External icon does not imply a new browser tab; if opening a new tab, disclose it.
- Focus: 2px outline, 3px offset; wine on light, inverse on dark. A two-colour focus ring is appropriate if surroundings are mixed. Do not remove focus outlines.
- Disabled: line background / muted label, native disabled attribute, no hover movement. Communicate the reason nearby; disabled contrast exceptions do not justify unnecessary unreadability.
- Loading: preserve width, disable duplicate submissions, spinner plus `Wysyłanie…`, announce state. Success/error only follows a real response in the full site. The kit's demonstration never sends data.

### Cards and linked rows

1. Activity: 40px light icon, H3, 16–18px summary, one internal CTA. Quiet border, no default shadow.
2. Illustrated editorial: one approved 3:2 image slot, H3, short text, CTA. Preserve illustration bounds. Documentary photos may crop with a checked focal point and alt text.
3. Project banner/row: actual project identity, concise description, external link. All three client projects keep their own marks. Do not invent dates, outcome metrics or partner badges.
4. Quote/feature: plum or mauve field with inverse copy. A real quote needs attribution and permission; a mission statement must not look like a fabricated testimonial.
5. Publication: reserved until real publication title, file, date and cover are supplied. Do not manufacture reports to fill this component.

Card radius 8px; hover lift ≤4px and raised shadow only where interactive. Include focus-within equivalent. No nested links/buttons inside a whole-card anchor; use either one stretched primary link or separate intentional controls. Hover never reveals the only way to understand or activate a card.

### Navigation

**Selected icon reveal:** Misja → Target; Działania → Stack; Projekty → Briefcase; Partnerstwo → Handshake; Kontakt → Envelope. On desktop hover or keyboard focus, the matching 20px regular Phosphor icon fades/slides into a reserved slot over 200ms. Labels and neighbouring links do not shift. On exit, the icon hides again; the active-page underline remains independent. Touch menus show icons persistently. Reduced motion removes the slide and transition. This refines the earlier text-first nav rule: labels remain primary, icons are supporting feedback.

Logo returns Home. Desktop links: Misja, Działania, Projekty, Partnerstwo, Kontakt. Active page uses a wine underline and aria-current. Hover changes text to wine, not a filled pill. The partnership CTA may sit at the right only if all items fit; otherwise keep it in the page hero. Collapse below 1100px rather than compressing Polish labels.

Use the logo clear-space reservations from section 3. Sticky behaviour must not obscure headings or keyboard focus; do not shrink the logo on scroll below its clearance rules. Mobile menu: labelled Menu button, aria-expanded, 48px rows; inline disclosure can follow normal Tab order. A full-screen modal menu would additionally require focus trapping, Escape, focus return and background scroll lock. The kit demonstrates an inline disclosure, not that modal implementation.

### Footer and partnership CTA

Plum is recommended, connecting to the selected hero background. Inverse text, rose secondary copy, a quiet dividing rule, one collaboration CTA. Full identity, Warsaw, client email and phone, legal identifiers, and actual legal/privacy destinations belong here. Keep legal text ≥14px on the public site. Use the light logo plaque until the reverse master is validated. Do not invent addresses, social profiles or copyright ownership claims.

Client contact: kontakt@reginapurpureafundus.org, +48 605 607 609, Warszawa, Polska; KRS 0000223158, NIP 9512152516, REGON 140132635. Legal text must use the supplied excerpt and reviewed policy material rather than invented compliance claims.

### Forms

Light field surface, ink text, 52px minimum field height, 16px content padding, 4px radius, control-border edge. Persistent labels, not placeholder-only. Type email for email, appropriate autocomplete, readable labels for required fields. Textareas resize vertically.

Error = error border + icon + a specific explanation attached with aria-describedby and aria-invalid. Focus the error summary or first invalid input on failure. Never erase the message after failed submission. For success, explain what happened without promising unapproved response times. Contact page's real required fields follow Hubert: name, email, subject, message. Privacy controls must reflect the actual legal basis, not a generic checkbox copied from this demo.

The kit uses native validation and an explicitly labelled local test acknowledgement. Production requires server-side validation, abuse protection, delivery/error handling, privacy review and actual submission tests. No claim of a functional contact backend is made.

### Accordions, chips and overlays

Accordion headings contain buttons, aria-expanded and aria-controls; Plus/Minus state icon, 48px or larger row. Essential summary remains visible. Filter chips are the only everyday pill-shaped component; selection uses text/icon and aria-pressed, not colour alone. Do not add filters when the three-project list does not need them.

Dialogs: accessible name, close button, Escape, trapped focus, return focus, readable mobile padding, overlay shadow and a 50-level stacking layer. Do not create popups for routine internal navigation.

## 9. Radius, borders, shadows and layers

- Control 4px; cards and hero frame 8px; chips 999px. No random 16/24/40px card radii. Borders 1px; important focus ring 2px.
- None: editorial content and normal cards.
- Low: `0 2px 8px rgb(44 25 33 / 6%)` for a raised navigation bar.
- Raised: `0 8px 24px rgb(44 25 33 / 10%)` for interactive card hover.
- Overlay: `0 20px 64px rgb(44 25 33 / 18%)` for dialogs.
- Dark surfaces prefer border/tonal separation over black shadows.
- Layers: content 0, header 20, menu 30, overlay 50, toast 60.

## 10. Motion

160ms controls; 240ms components; 560ms one-time editorial reveals. Easing `cubic-bezier(0.22,1,0.36,1)`. Maximum card lift 4px, arrow travel 3px, image scale 1.025, reveal travel 12px. Prefer opacity/transform; no layout-shifting hover effects. Focus remains immediate.

The original three-chapter sculptural hero is a special signature, not a global template. Native scroll must remain reversible and skippable with visible chapter controls. Provide pause/replay and a static fallback, stop offscreen rendering, and test GPU performance on actual mobile devices. No sound autoplay or cursor replacement.

Reduced motion removes nonessential translation, scale, rotation, parallax, smooth scrolling and reveals; merely setting duration to zero is insufficient because a jump can remain. Keep content and navigation fully usable. The kit's CSS removes these transforms; the exported duration tokens still need component-level reduced-motion treatment by consumers.

## 11. Page recipes — varied, not inconsistent

| Page | Composition and colour rhythm | Preferred components |
|---|---|---|
| Home | Ivory introduction → selected 3D hero → stone activity overview → light project rows → plum partnership CTA | Hero, six category icons, original illustrations, real project banners |
| Misja | Light editorial heading → alternating text/illustration panels → mauve mission statement → ivory goals | Serif statement, fine rules, light icon list; no invented timeline |
| Działania | Ivory heading → six-category overview → alternating stone/white programme details → plum CTA | Category icons, split panels, mobile accordion, contextual project links |
| Projekty | Ivory title → three distinct client-project banners → light contact strip | Accelerate Poland, ASEAN Business Council Poland, SAFTA Business Council Poland; actual external links |
| Partnerstwo | Ivory text/photo or illustration → stone cooperation formats → mauve process panel → plum contact CTA | Real institution types, steps, partnership enquiry; no fabricated partner logos |
| Kontakt | Light, readable contact details and form → plum footer | Labelled fields, exact email/phone/legal identity, error/success states |

Approved layout motifs to distribute: split editorial hero, numbered activity cards, alternating black-and-white photo/text sections, brush-mask collage sparingly, fine-line activity icons, connecting-line process and original burgundy illustrations. They share the grid and type system. Do not force every motif onto every page, or create unavailable content solely to fill a reference layout.

## 12. Accessibility and QA requirements

Normal text ≥4.5:1; large text ≥3:1 (24 CSS px regular or approximately 18.67px bold). Required non-text control/graphic boundaries ≥3:1 against adjacent colours. Our preferred target is 44×44px; WCAG 2.2 AA Target Size Minimum is 24×24px with stated exceptions. Focus Appearance is AAA, not AA; visible keyboard focus and focus not being entirely obscured are still part of the AA baseline.

Test all hover/focus/pressed/disabled/error states; light and dark surfaces; keyboard and screen reader labels; 320px reflow; 200% text zoom; long Polish labels; reduced motion; slow loading; missing assets; contact submission failure. A palette passing contrast is not a complete WCAG audit.

Official references, checked using Perplexity and W3C material:

- [W3C Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [W3C Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [W3C Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [Phosphor React official repository](https://github.com/phosphor-icons/react)

## 13. Implementation and governance

Files: `tokens.json` (canonical plain JSON, not DTCG/Figma-import format), generated `tokens.css` (namespaced variables), this handbook, original logo/monogram, and React/CSS specimens at `src/brand-kit/`. Run `node scripts/export-brand-tokens.mjs` after modifying values. Tokens alone do not include component markup, fonts or all accessibility behaviour; consume the documented specimens deliberately.

The kit is a separate entry `/brand-kit.html`; the hero remains `/`. Existing hero styling has not been silently migrated. The website build should adopt these production-oriented defaults after visual review.

Before final launch: export the verified logo variants and favicons; optimise assets; use real project branding; implement all six pages and legal destinations; complete CMS/contact work; audit accessibility and performance; then deploy and connect the domain when authorised. None of those future tasks is claimed as complete by delivering this kit.
