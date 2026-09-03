import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
const base = "public/visual-library/";
const manifest = JSON.parse(fs.readFileSync(base + "manifest.json", "utf8"));
test("80 unique downloadable vector assets exist", () => {
  assert.equal(manifest.length, 80);
  assert.equal(new Set(manifest.map((a) => a.id)).size, 80);
  for (const asset of manifest) {
    const svg = fs.readFileSync("public" + asset.url, "utf8");
    assert.match(svg, /<svg/);
    assert.match(svg, /viewBox=/);
    assert.doesNotMatch(svg, /<script|<foreignObject|NaN|undefined/);
  }
});
test("32 icon concepts have both agreed stroke weights", () => {
  const icons = manifest.filter((a) => a.group === "Icons");
  assert.equal(icons.length, 64);
  for (const title of new Set(icons.map((a) => a.title))) {
    assert.deepEqual(
      icons
        .filter((a) => a.title === title)
        .map((a) => a.weight)
        .sort(),
      ["light", "regular"],
    );
  }
});
test("geography is Poland and map variants share the same boundary", () => {
  const feature = JSON.parse(
    fs.readFileSync(base + "poland-source.geojson", "utf8"),
  );
  assert.equal(feature.properties.ADMIN, "Poland");
  assert.equal(feature.geometry.type, "Polygon");
  const outline = fs.readFileSync(base + "poland-outline.svg", "utf8");
  const location = fs.readFileSync(base + "poland-warsaw.svg", "utf8");
  assert.equal(
    outline.match(/<path d="([^"]+)/)[1],
    location.match(/<path d="([^"]+)/)[1],
  );
  assert.match(location, /Warszawa/);
});
test("licences and photography/data limitations ship with the pack", () => {
  assert.match(
    fs.readFileSync(base + "PHOSPHOR-LICENSE.txt", "utf8"),
    /MIT License/,
  );
  const readme = fs.readFileSync(base + "README.md", "utf8");
  assert.match(readme, /public domain/);
  assert.match(readme, /Charts are omitted/);
  assert.match(readme, /No photographs are included/);
  assert.ok(fs.statSync(base + "regina-visual-assets-v1.zip").size > 10000);
});
