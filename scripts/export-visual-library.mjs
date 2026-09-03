import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as Icons from "@phosphor-icons/react";

const root = path.resolve("public/visual-library");
fs.mkdirSync(root, { recursive: true });
const manifest = [];
const wine = "#8A1538",
  ink = "#292522",
  rose = "#CDBDC2",
  canvas = "#F8F6F2";
const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;");
const text = (x, y, s, size = 18, color = ink, anchor = "start") =>
  `<text x="${x}" y="${y}" fill="${color}" font-family="DM Sans, Arial, sans-serif" font-size="${size}" text-anchor="${anchor}">${esc(s)}</text>`;
const line = (x1, y1, x2, y2, color = rose) =>
  `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${color}" stroke-width="1.5" fill="none"/>`;
const dot = (x, y, r = 4) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${wine}"/>`;
const icon = (name, x, y, size = 48) =>
  renderToStaticMarkup(
    React.createElement(Icons[name], {
      size,
      weight: "light",
      color: wine,
      x,
      y,
    }),
  );
function save(id, title, group, body, note, width = 800, height = 480) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(note)}</desc>${body}</svg>`;
  fs.writeFileSync(path.join(root, id + ".svg"), svg);
  manifest.push({
    id,
    title,
    group,
    note,
    url: "/visual-library/" + id + ".svg",
    width,
    height,
  });
}
const catalogue = [
  ["House", "Strona główna", "UI"],
  ["Target", "Misja", "UI"],
  ["Stack", "Działania", "UI"],
  ["Briefcase", "Przedsiębiorcy", "UI"],
  ["Handshake", "Partnerstwo", "UI"],
  ["Envelope", "Kontakt", "UI"],
  ["ArrowRight", "Dalej", "UI"],
  ["ArrowUpRight", "Link zewnętrzny", "UI"],
  ["Download", "Pobierz", "UI"],
  ["MapPin", "Lokalizacja", "UI"],
  ["Phone", "Telefon", "UI"],
  ["List", "Menu", "UI"],
  ["GraduationCap", "Edukacja", "Programy"],
  ["Lightbulb", "Innowacje", "Programy"],
  ["UsersThree", "Społeczności", "Programy"],
  ["GlobeHemisphereEast", "Współpraca międzynarodowa", "Programy"],
  ["Books", "Publikacje", "Programy"],
  ["FileText", "Badania", "Programy"],
  ["Bank", "Administracja publiczna", "Instytucje"],
  ["Buildings", "Organizacje", "Instytucje"],
  ["Factory", "Produkcja", "Instytucje"],
  ["Student", "Kompetencje", "Instytucje"],
  ["PresentationChart", "Warsztaty", "Instytucje"],
  ["ShieldCheck", "Odpowiedzialność", "Instytucje"],
  ["Flask", "Laboratorium", "Technologia"],
  ["Microscope", "Prace badawcze", "Technologia"],
  ["Cpu", "Technologia", "Technologia"],
  ["Circuitry", "Cyfryzacja", "Technologia"],
  ["Network", "Sieć współpracy", "Technologia"],
  ["Database", "Dane", "Technologia"],
  ["Gear", "Procesy", "Technologia"],
  ["TreeStructure", "Systemy", "Technologia"],
];
for (const [name, label, category] of catalogue) {
  for (const weight of ["regular", "light"]) {
    const id = `icon-${name.replace(/[A-Z]/g, (c, i) => (i ? "-" : "") + c.toLowerCase())}-${weight}`;
    const svg = renderToStaticMarkup(
      React.createElement(Icons[name], {
        size: 256,
        weight,
        color: wine,
        "aria-label": label,
        role: "img",
      }),
    );
    fs.writeFileSync(path.join(root, id + ".svg"), svg);
    manifest.push({
      id,
      title: label,
      group: "Icons",
      category,
      weight,
      note: `Phosphor ${weight}. ${weight === "regular" ? "20–24 px interface use" : "40–64 px category use"}.`,
      url: "/visual-library/" + id + ".svg",
      width: 256,
      height: 256,
    });
  }
}

const sourcePath = path.join(root, "poland-source.geojson");
if (!fs.existsSync(sourcePath)) {
  const world = JSON.parse(
    fs.readFileSync("/tmp/regina-natural-earth-countries.geojson", "utf8"),
  );
  const poland = world.features.find((f) => f.properties.ADMIN === "Poland");
  fs.writeFileSync(sourcePath, JSON.stringify(poland));
}
const poland = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const rings =
  poland.geometry.type === "Polygon"
    ? poland.geometry.coordinates
    : poland.geometry.coordinates.flat();
// Local equirectangular projection with latitude correction; identical projection for the marker.
const project = ([lon, lat]) => [
  (lon - 14) * Math.cos((52 * Math.PI) / 180),
  55 - lat,
];
const pts = rings.flat().map(project),
  xs = pts.map((p) => p[0]),
  ys = pts.map((p) => p[1]);
const minX = Math.min(...xs),
  minY = Math.min(...ys),
  maxX = Math.max(...xs),
  maxY = Math.max(...ys);
const scale = Math.min(500 / (maxX - minX), 360 / (maxY - minY));
const offsetX = (800 - (maxX - minX) * scale) / 2,
  offsetY = (440 - (maxY - minY) * scale) / 2;
const xy = (p) => {
  const [x, y] = project(p);
  return [offsetX + (x - minX) * scale, offsetY + (y - minY) * scale];
};
const d = rings
  .map(
    (r) =>
      "M" +
      r
        .map((p) =>
          xy(p)
            .map((n) => n.toFixed(2))
            .join(","),
        )
        .join("L") +
      "Z",
  )
  .join("");
const map = `<path d="${d}" fill="${canvas}" stroke="${wine}" stroke-width="1.5" stroke-linejoin="round"/>`;
save(
  "poland-outline",
  "Polska · kontur",
  "Maps",
  map,
  "Natural Earth 1:50m. Generalised national boundary; not a cadastral or operational map.",
);
const [wx, wy] = xy([21.0122, 52.2297]);
save(
  "poland-warsaw",
  "Polska · Warszawa",
  "Maps",
  map +
    `<circle cx="${wx}" cy="${wy}" r="15" fill="${wine}" opacity=".1"/>` +
    dot(wx, wy, 5) +
    text(wx + 22, wy + 6, "Warszawa", 18) +
    text(
      400,
      463,
      "Lokalizacja kontaktowa · nie mapa zasięgu projektów",
      13,
      "#675D57",
      "middle",
    ),
  "Warsaw city-level contact location from Hubert’s brief. No office address or project coverage implied.",
);

const node = (x, y, name, label) =>
  `<rect x="${x - 90}" y="${y - 52}" width="180" height="104" rx="8" fill="${canvas}" stroke="${rose}"/>` +
  icon(name, x - 22, y - 34, 44) +
  text(x, y + 33, label, 15, ink, "middle");
save(
  "network-institutions",
  "Współpraca między sektorami",
  "Diagrams",
  line(400, 240, 155, 115) +
    line(400, 240, 645, 115) +
    line(400, 240, 155, 365) +
    line(400, 240, 645, 365) +
    node(155, 115, "GraduationCap", "Edukacja") +
    node(645, 115, "Briefcase", "Przedsiębiorcy") +
    node(155, 365, "Bank", "Administracja") +
    node(645, 365, "UsersThree", "Społeczności") +
    `<circle cx="400" cy="240" r="79" fill="${wine}"/>` +
    text(400, 234, "Wspólne", 20, "#FFF8EF", "middle") +
    text(400, 262, "działanie", 20, "#FFF8EF", "middle"),
  "Conceptual sector relationships, not confirmed partners, governance or a measured network.",
);
save(
  "network-knowledge",
  "Od wiedzy do współpracy",
  "Diagrams",
  `<path d="M170 145 Q400 -5 630 145 M170 145 Q100 340 400 365 M630 145 Q700 340 400 365" fill="none" stroke="${rose}" stroke-width="1.5"/>` +
    node(170, 145, "Books", "Wiedza") +
    node(630, 145, "Circuitry", "Technologia") +
    node(400, 365, "Handshake", "Współpraca") +
    dot(400, 72) +
    dot(214, 316) +
    dot(586, 316),
  "Editorial concept showing complementary themes. No quantitative meaning.",
);
const stages = [
  ["01", "Rozmowa", "Poznanie potrzeb"],
  ["02", "Koncepcja", "Wspólne założenia"],
  ["03", "Działanie", "Realizacja inicjatywy"],
  ["04", "Wnioski", "Dzielenie się wiedzą"],
];
save(
  "process-partnership",
  "Od rozmowy do działania",
  "Processes",
  line(100, 205, 700, 205) +
    stages
      .map(([n, t, s], i) => {
        const x = 100 + i * 200;
        return (
          `<circle cx="${x}" cy="205" r="32" fill="${canvas}" stroke="${wine}"/>` +
          text(x, 213, n, 22, wine, "middle") +
          text(x, 278, t, 20, ink, "middle") +
          text(x, 310, s, 13, "#675D57", "middle")
        );
      })
      .join(""),
  "Proposed partnership process for design review. Confirm the actual workflow before publishing.",
);
save(
  "process-technology",
  "Technologia jako proces",
  "Processes",
  ["Rozpoznanie", "Rozwiązanie", "Wdrożenie"]
    .map((t, i) => {
      const x = 145 + i * 255;
      return (
        (i < 2 ? line(x + 65, 214, x + 185, 214) : "") +
        icon(["MagnifyingGlass", "Circuitry", "Gear"][i], x - 40, 172, 80) +
        text(x, 300, t, 20, ink, "middle")
      );
    })
    .join(""),
  "Proposed explanatory sequence for a technology service page, not a claim about an existing service procedure.",
);
for (let i = 1; i <= 4; i++)
  save(
    `step-0${i}`,
    `Krok 0${i}`,
    "Steps",
    text(24, 73, `0${i}`, 56, wine) + line(116, 55, 278, 55) + dot(154, 55),
    "Decorative numbered step; pair with a real HTML ordered list.",
    320,
    110,
  );

function scene(main, smallA, smallB, label) {
  return (
    `<rect x="185" y="80" width="430" height="295" rx="8" stroke="${rose}" fill="none"/><path d="M185 128H615 M225 400H575" stroke="${rose}" fill="none"/>` +
    dot(211, 104, 3) +
    dot(225, 104, 3) +
    dot(239, 104, 3) +
    icon(main, 320, 165, 160) +
    `<path d="M320 245H132V195 M480 245H668V290" fill="none" stroke="${wine}" stroke-width="1.5"/>` +
    `<circle cx="132" cy="161" r="44" fill="${canvas}" stroke="${rose}"/><circle cx="668" cy="331" r="44" fill="${canvas}" stroke="${rose}"/>` +
    icon(smallA, 104, 133, 56) +
    icon(smallB, 640, 303, 56) +
    text(400, 448, label, 16, "#675D57", "middle")
  );
}
save(
  "illustration-digital-work",
  "Cyfrowe środowisko pracy",
  "Illustrations",
  scene(
    "Circuitry",
    "Database",
    "UsersThree",
    "Ludzie · procesy · technologia",
  ),
  "Conceptual technology line composition using Phosphor icons, not a product screenshot.",
);
save(
  "illustration-research",
  "Badania i zastosowania",
  "Illustrations",
  scene("Microscope", "Flask", "Gear", "Badania · wiedza · zastosowania"),
  "Conceptual research line composition using Phosphor icons, not an actual Regina laboratory.",
);
save(
  "illustration-skills",
  "Kompetencje przyszłości",
  "Illustrations",
  scene("GraduationCap", "Books", "Cpu", "Edukacja · umiejętności · praktyka"),
  "Conceptual education line composition using Phosphor icons.",
);
save(
  "pattern-grid",
  "Siatka współpracy",
  "Patterns",
  `<defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="${wine}" stroke-opacity=".07" stroke-width="1"/></pattern></defs><rect width="800" height="480" fill="url(#grid)"/>`,
  "Decorative pattern; keep away from dense text. SVG includes subdued opacity.",
);
save(
  "pattern-nodes",
  "Punkty połączeń",
  "Patterns",
  `<defs><pattern id="nodes" width="64" height="64" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="1.8" fill="${wine}" opacity=".14"/></pattern></defs><rect width="800" height="480" fill="url(#nodes)"/>`,
  "Decorative repeat, not geographic locations or data points.",
);
save(
  "pattern-pathways",
  "Ścieżki cyfrowe",
  "Patterns",
  `<g fill="none" stroke="${wine}" stroke-width="1.5" opacity=".1">${[0, 1, 2, 3, 4].map((i) => `<path d="M${-180 + i * 130} 480V${290 - i * 32}Q${-180 + i * 130} ${250 - i * 32} ${-140 + i * 130} ${250 - i * 32}H${450 + i * 70}Q${490 + i * 70} ${250 - i * 32} ${490 + i * 70} ${210 - i * 32}V0"/>`).join("")}</g>`,
  "Decorative circuitry motif; not a real system architecture.",
);
fs.writeFileSync(
  path.join(root, "manifest.json"),
  JSON.stringify(manifest, null, 2),
);
fs.copyFileSync(
  "node_modules/@phosphor-icons/react/LICENSE",
  path.join(root, "PHOSPHOR-LICENSE.txt"),
);
console.log(`Exported ${manifest.length} SVGs.`);
