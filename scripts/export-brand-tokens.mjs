import fs from "node:fs";
const root = new URL("../public/brand-kit/", import.meta.url);
const tokens = JSON.parse(
  fs.readFileSync(new URL("tokens.json", root), "utf8"),
);
const lines = [
  "/* Generated from tokens.json. Regina v2.0 — 3 September 2026. */",
  ":root {",
];
for (const [k, v] of Object.entries(tokens.color))
  lines.push(`  --rp-${k}: ${v};`);
for (const group of ["space", "radius", "component"])
  for (const [k, v] of Object.entries(tokens[group]))
    lines.push(`  --rp-${group}-${k}: ${v}px;`);
for (const [k, v] of Object.entries(tokens.shadow))
  lines.push(`  --rp-shadow-${k}: ${v};`);
for (const [k, v] of Object.entries(tokens.motion))
  if (["instant", "fast", "standard", "reveal", "hover-fill", "nav-reveal"].includes(k))
    lines.push(`  --rp-duration-${k}: ${v}ms;`);
lines.push(
  `  --rp-ease: ${tokens.motion.ease};`,
  '  --rp-font-display: "Cormorant Garamond", Georgia, serif;',
  '  --rp-font-body: "DM Sans", system-ui, sans-serif;',
);
for (const [k, v] of Object.entries(tokens.type)) {
  const slope = (v.desktop - v.mobile) / 8.4,
    intercept = v.mobile - slope * 3.6;
  lines.push(
    `  --rp-type-${k}: clamp(${v.mobile / 16}rem, ${intercept / 16}rem + ${slope.toFixed(4)}vw, ${v.desktop / 16}rem);`,
    `  --rp-leading-${k}: ${v["line-height"]};`,
    `  --rp-tracking-${k}: ${v.tracking};`,
    `  --rp-weight-${k}: ${v.weight};`,
  );
}
lines.push(
  `  --rp-content-max: ${tokens.layout["content-max"]}px;`,
  `  --rp-reading-max: ${tokens.layout["reading-max"]};`,
  `  --rp-page-margin: ${tokens.layout["mobile-margin"]}px;`,
  `  --rp-section-space: ${tokens.layout["mobile-section"]}px;`,
  "}",
  `@media (min-width: ${tokens.layout["tablet-breakpoint"]}px) { :root { --rp-page-margin: ${tokens.layout["tablet-margin"]}px; --rp-section-space: ${tokens.layout["tablet-section"]}px; } }`,
  `@media (min-width: ${tokens.layout["desktop-breakpoint"]}px) { :root { --rp-page-margin: clamp(${tokens.layout["desktop-margin-min"]}px, 4vw, 64px); --rp-section-space: ${tokens.layout["desktop-section"]}px; } }`,
  '[data-rp-theme="dark"] { --rp-surface: var(--rp-plum); --rp-text: var(--rp-inverse); --rp-text-muted: var(--rp-rose); --rp-focus: var(--rp-inverse); }',
  '[data-rp-theme="light"] { --rp-surface: var(--rp-canvas); --rp-text: var(--rp-ink); --rp-text-muted: var(--rp-muted); --rp-focus: var(--rp-wine); }',
  "@media (prefers-reduced-motion: reduce) { :root { --rp-duration-fast: 0ms; --rp-duration-standard: 0ms; --rp-duration-reveal: 0ms; --rp-duration-hover-fill: 0ms; --rp-duration-nav-reveal: 0ms; } }",
);
lines.push(":root {");
for (const [k, v] of Object.entries(tokens["z-index"]))
  lines.push(`  --rp-z-${k}: ${v};`);
lines.push("}");
fs.writeFileSync(new URL("tokens.css", root), lines.join("\n") + "\n");
console.log("Exported brand-kit/tokens.css from tokens.json");
