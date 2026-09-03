# Regina — visual asset library v1

This is a review gallery and reusable asset kit, not the completed public website. Specimen labels are Polish; designer annotations are English.

## Contents

- 32 Phosphor icons, each in regular and light weights: 64 SVG files.
- 2 Poland maps: outline and Warsaw city-level contact marker.
- 2 conceptual networks: sectors and knowledge/technology/cooperation.
- 2 proposed process diagrams: partnership and technology.
- 3 technology line compositions: digital work, research, education.
- 4 numbered-step accents and 3 subtle patterns.
- Manifest, Poland source GeoJSON, licences and photography brief.

Total: 80 SVG assets. Download separately in /visual-library.html or in the ZIP.

## Usage

Use existing wine, ink, rose and ivory brand tokens. Regular icons at 20–24 px for UI; light at 40–64 px for category pictograms. Do not mix weights at the same size. SVG artboards are 256 units: set displayed dimensions in CSS, preserving aspect ratio. For dark surfaces deliberately recolour source shapes to the inverse token; do not use CSS filters.

These icons are curated Phosphor shapes, not original custom icons. Technology compositions combine licensed shapes with custom framing and connectors. The 3D hero and existing human illustrations remain separate assets.

Decorative images need empty alt text. Meaningful diagrams require adjacent text equivalents; internal SVG descriptions alone are insufficient when using img. Processes should become semantic HTML ordered lists in the public website, stacked on mobile. The wide process SVGs are design specimens. Never shrink labels below readable size.

Patterns already contain subdued opacity. Keep them away from dense text. They have no data/geographic meaning. Do not use every asset in every section.

## Page placement

| Page | Assets |
| --- | --- |
| Home | Six programme pictograms; one illustration; authentic working-environment photography |
| Misja | Poland context; conceptual relationships; people |
| Działania | Technology/research/education compositions and pictograms |
| Projekty | Actual project content and permission-cleared photographs |
| Partnerstwo | Sector network; proposed process after content confirmation |
| Kontakt | Warsaw marker; phone/email/location icons |

## Integrity

Sector networks are conceptual, not confirmed partners or governance. Process labels are proposals to confirm before publication. Warsaw is a city-level contact location from Hubert's brief, not an office address or programme coverage. No fictitious project markers or impact data.

Charts are omitted until verified data exists. Future charts must include source, period, units, definitions and an accessible data table. Use bars for comparisons and timelines for dated milestones. Never use fabricated impact counters.

## Sources and licences

Phosphor: @phosphor-icons/react 2.1.10, MIT. Preserve PHOSPHOR-LICENSE.txt in redistributed packs. Official sources: https://phosphoricons.com/ and https://github.com/phosphor-icons/react .

Map: Natural Earth Admin 0 Countries 1:50m, public domain. Retrieved 3 September 2026 from https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson . Original Poland feature included as poland-source.geojson. Terms: https://www.naturalearthdata.com/about/terms-of-use/ . Local equirectangular projection corrected at 52 degrees latitude; Warsaw uses the identical projection. Generalised editorial map, not for navigation/legal boundaries. Natural Earth does not endorse Regina.

No photographs are included, licensed or represented as Regina-owned. See photography-brief.md. Existing conceptual generated illustrations must not be presented as documentary photography.

## Rebuild

Run `node scripts/export-visual-library.mjs` in the prototype directory. Uses included Poland source and installed icon package without a network request. Separate gallery entry: /visual-library.html. Hero and brand-kit components are preserved.
