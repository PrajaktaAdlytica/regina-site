import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
const base = new URL("../public/brand-kit/", import.meta.url);
const t = JSON.parse(fs.readFileSync(new URL("tokens.json", base), "utf8"));
const css = fs.readFileSync(new URL("tokens.css", base), "utf8");
const luminance = (hex) => {
  const [r, g, b] = hex
    .slice(1)
    .match(/../g)
    .map((v) => parseInt(v, 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const x = luminance(t.color[a]),
    y = luminance(t.color[b]);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};
test("documented normal text colour pairs pass AA contrast", () => {
  for (const [a, b] of [
    ["wine", "canvas"],
    ["inverse", "plum"],
    ["inverse", "mauve"],
    ["muted", "stone"],
    ["ink", "rose"],
    ["inverse", "wine"],
    ["success", "success-tint"],
    ["error", "error-tint"],
    ["warning", "warning-tint"],
    ["info", "info-tint"],
  ])
    assert.ok(contrast(a, b) >= 4.5, `${a}/${b}: ${contrast(a, b)}`);
});
test("control boundary works on its documented surfaces", () => {
  for (const bg of ["canvas", "surface"])
    assert.ok(contrast("control-border", bg) >= 3);
});
test("exported palette and dimensions match canonical JSON", () => {
  for (const [k, v] of Object.entries(t.color))
    assert.ok(css.includes(`--rp-${k}: ${v};`));
  for (const group of ["space", "radius", "component"])
    for (const [k, v] of Object.entries(t[group]))
      assert.ok(css.includes(`--rp-${group}-${k}: ${v}px;`));
});
test("public copy and controls meet intended minimum sizes", () => {
  assert.ok(t.type.body.mobile >= 16);
  assert.ok(t.component["touch-min"] >= 44);
  assert.ok(t.component["button-height"] >= 48);
  assert.ok(t.component["navbar-desktop"] >= 170);
  assert.ok(t.component["navbar-mobile"] >= 140);
});
test("type role exports and reduced-motion overrides exist", () => {
  for (const role of Object.keys(t.type))
    assert.ok(css.includes(`--rp-type-${role}: clamp(`));
  assert.ok(css.includes("prefers-reduced-motion: reduce"));
  assert.ok(css.includes("--rp-duration-reveal: 0ms"));
});
