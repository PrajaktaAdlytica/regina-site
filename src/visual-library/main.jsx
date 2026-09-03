import React, { useState } from "react";
import {
  ArrowRight,
  ArrowDown,
  Download,
  ArrowUpRight,
} from "@phosphor-icons/react";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-ext-400.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-ext-400.css";
import assets from "../../public/visual-library/manifest.json";
import "./styles.css";

const groups = ["All", "Programy", "Instytucje", "Technologia", "UI"];
const placement = {
  Maps: "Misja / Kontakt",
  Diagrams: "Partnerstwo / Misja",
  Processes: "Partnerstwo / Działania",
  Illustrations: "Działania / project detail",
  Patterns: "Section backgrounds",
  Steps: "Numbered content sequences",
};
const shots = [
  [
    "01",
    "Polish cities",
    "Warsaw as a working city: contemporary streets, offices and public spaces. Kraków, Wrocław or Gdańsk only where the page has a reason to show them.",
    "Misja / Kontakt",
    "Architecture without invented Regina premises.",
  ],
  [
    "02",
    "Business & entrepreneurs",
    "Small teams reviewing a real document, an entrepreneur at work, a workshop in progress. Natural expressions and visible work.",
    "Home / Partnerstwo",
    "Prioritise actual foundation and partner photography.",
  ],
  [
    "03",
    "Laboratories & universities",
    "Researchers using instruments; students working with equipment; contemporary Polish university environments.",
    "Działania · education / research",
    "Verify the location and obtain institutional permission where needed.",
  ],
  [
    "04",
    "Modern production",
    "People operating machinery, quality control, an engineer inspecting a production process. Human-scale views before wide factory halls.",
    "Działania · technology",
    "No unrelated factory presented as a client or project.",
  ],
  [
    "05",
    "Public administration & meetings",
    "A working consultation, shared plans, public-service collaboration. Supporting imagery rather than the main brand story.",
    "Partnerstwo",
    "No implied endorsement by a public body.",
  ],
  [
    "06",
    "People using technology",
    "Training sessions, accessible digital tools, a professional learning a new process. Different ages and roles, not only young tech teams.",
    "Home / Działania",
    "Avoid staged holograms, glowing brains and futuristic cityscapes.",
  ],
];

export default function App() {
  const [filter, setFilter] = useState("All");
  const [weight, setWeight] = useState("light");
  const [surface, setSurface] = useState("ivory");
  const icons = assets.filter(
    (a) =>
      a.group === "Icons" &&
      a.weight === weight &&
      (filter === "All" || a.category === filter),
  );
  return (
    <>
      <header className="top">
        <a href="/brand-kit.html" aria-label="Return to brand kit">
          <img src="/assets/logo.svg" alt="Regina Purpurea Fundus" />
        </a>
        <span>Brand system / 03</span>
        <a href="/brand-kit.html">
          Back to brand kit <ArrowUpRight size={18} />
        </a>
      </header>
      <main>
        <section className="intro">
          <p className="eyebrow">A vocabulary for purposeful work</p>
          <h1>
            Clear ideas.
            <br />
            <em>Considered visuals.</em>
          </h1>
          <div className="intro-bottom">
            <p>
              A reusable visual language for Regina: precise lines, grounded
              geography and human-centred stories. Built for all six pages—not
              just the homepage.
            </p>
            <a
              className="button"
              href="/visual-library/regina-visual-assets-v1.zip"
              download
            >
              <span>
                Download 80 SVGs <Download size={18} />
              </span>
            </a>
          </div>
          <div className="stats">
            <span>32 icons × 2 weights</span>
            <span>16 supporting vectors</span>
            <span>Editable SVG files</span>
            <a href="#icon-library">
              Explore library <ArrowDown />
            </a>
          </div>
        </section>
        <nav className="section-nav" aria-label="Library sections">
          {[
            ["icon-library", "Icons"],
            ["maps", "Maps"],
            ["diagrams", "Networks"],
            ["processes", "Processes"],
            ["illustrations", "Illustrations"],
            ["patterns", "Patterns"],
            ["photography", "Photography"],
          ].map(([id, label]) => (
            <a key={id} href={"#" + id}>
              {label}
            </a>
          ))}
        </nav>
        <section id="icon-library">
          <div className="section-heading">
            <p className="eyebrow">01 / Iconography</p>
            <h2>
              One family.
              <br />
              Many applications.
            </h2>
            <p>
              Phosphor, extended for institutions, science and technology.
              Regular at 20–24 px for interfaces; light at 40–64 px for category
              pictograms. Never mix stroke weights at the same size.
            </p>
          </div>
          <div className="controls">
            <div className="filters" aria-label="Icon category">
              {groups.map((g) => (
                <button
                  key={g}
                  aria-pressed={filter === g}
                  onClick={() => setFilter(g)}
                >
                  {g}
                </button>
              ))}
            </div>
            <div className="filters" aria-label="Line weight">
              {["light", "regular"].map((w) => (
                <button
                  key={w}
                  aria-pressed={weight === w}
                  onClick={() => setWeight(w)}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
          <div className="icon-grid">
            {icons.map((a) => (
              <a className="icon-tile" key={a.id} href={a.url} download>
                <img src={a.url} alt="" />
                <span>{a.title}</span>
                <small>
                  SVG <Download size={13} />
                </small>
              </a>
            ))}
          </div>
          <p className="caption">
            Click any icon to download. These are curated Phosphor assets, not a
            newly invented icon family. The MIT licence is included in the pack.
          </p>
        </section>
        {[
          "Maps",
          "Diagrams",
          "Processes",
          "Illustrations",
          "Steps",
          "Patterns",
        ].map((group, i) => (
          <section key={group} id={group.toLowerCase()}>
            <div className="section-heading">
              <p className="eyebrow">
                0{i + 2} / {group}
              </p>
              <h2>
                {
                  {
                    Maps: "Rooted in Poland.",
                    Diagrams: "Connections, made clear.",
                    Processes: "Make the next step clear.",
                    Illustrations: "Technology, at human scale.",
                    Steps: "A quiet sense of order.",
                    Patterns: "Texture, not distraction.",
                  }[group]
                }
              </h2>
              <p>
                {
                  {
                    Maps: "A generalised geographic outline and a city-level Warsaw contact marker. No invented project reach or partner locations.",
                    Diagrams:
                      "Conceptual relationships between themes and sectors. These do not represent confirmed partners or institutional structures.",
                    Processes:
                      "Two proposed explanatory sequences. Confirm the real working process before publishing these labels.",
                    Illustrations:
                      "Three scalable line compositions for education, research and digital work. An alternative to generic technology stock imagery.",
                    Steps:
                      "Pair with real ordered-list content. Keep the numbering in HTML for screen readers; the vector is decorative.",
                    Patterns:
                      "Low-opacity lines and nodes for quiet transitions and supporting backgrounds. Never place dense text directly over a busy pattern.",
                  }[group]
                }
              </p>
            </div>
            {group === "Patterns" && (
              <div
                className="filters surface-controls"
                aria-label="Pattern preview background"
              >
                {["ivory", "stone", "blush"].map((s) => (
                  <button
                    key={s}
                    aria-pressed={surface === s}
                    onClick={() => setSurface(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div className={"asset-grid " + (group === "Steps" ? "steps" : "")}>
              {assets
                .filter((a) => a.group === group)
                .map((a) => (
                  <article className="asset" key={a.id}>
                    <div
                      className={"art " + (group === "Patterns" ? surface : "")}
                    >
                      <img src={a.url} alt={a.title} loading="lazy" />
                    </div>
                    <div className="asset-title">
                      <h3>{a.title}</h3>
                      <a
                        href={a.url}
                        download
                        aria-label={"Download " + a.title}
                      >
                        <Download size={20} />
                      </a>
                    </div>
                    <p>{a.note}</p>
                    <span className="placement">{placement[group]}</span>
                  </article>
                ))}
            </div>
          </section>
        ))}
        <section className="data-note">
          <p className="eyebrow">Data visualisation / content-led</p>
          <h2>Evidence before impact graphics.</h2>
          <p>
            No invented percentages, participant totals, growth curves or map
            activity. Once verified data exists, use simple horizontal bars for
            comparisons and timelines for dated milestones. Every chart needs
            its source, period, units and an accessible data table.
          </p>
          <p>
            Until then, project names and qualitative descriptions are the right
            visual evidence. No placeholder impact charts are included in this
            pack.
          </p>
        </section>
        <section id="photography">
          <div className="section-heading">
            <p className="eyebrow">08 / Photography direction</p>
            <h2>
              Real places.
              <br />
              People doing real work.
            </h2>
            <p>
              A production brief, not a licensed photo collection. Warm-neutral
              colour, natural light and honest environments. Choose meaningful
              activity over posed handshakes or decorative skyline montages.
            </p>
          </div>
          <div className="photo-brief">
            {shots.map(([n, title, body, page, caution]) => (
              <article key={n}>
                <span className="number">{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <small>{caution}</small>
                </div>
                <span className="placement">{page}</span>
              </article>
            ))}
          </div>
          <div className="photo-rule">
            <h3>Before any photograph goes live</h3>
            <p>
              Record photographer, source, licence, location and any required
              permissions. Contextual stock must not imply a Regina project,
              beneficiary or partnership. Use foundation-owned photographs for
              actual project stories.
            </p>
            <a href="/visual-library/photography-brief.md" download>
              Download shot list & rights checklist <ArrowRight size={18} />
            </a>
          </div>
        </section>
        <footer>
          <p className="eyebrow">Ready for the next design stage</p>
          <h2>
            One system.
            <br />
            Distinct pages.
          </h2>
          <p>
            Use expressive compositions in Działania, sector diagrams in
            Partnerstwo, restrained maps in Misja and Kontakt. The homepage
            introduces the vocabulary without using every asset at once.
          </p>
          <div className="footer-links">
            <a href="/visual-library/regina-visual-assets-v1.zip" download>
              Vector asset pack <Download />
            </a>
            <a href="/visual-library/README.md" download>
              Usage & sources <Download />
            </a>
            <a href="/brand-kit.html">
              Brand kit <ArrowUpRight />
            </a>
          </div>
          <small>
            Sources: <a href="https://phosphoricons.com/">Phosphor</a> ·{" "}
            <a href="https://www.naturalearthdata.com/about/terms-of-use/">
              Natural Earth
            </a>
            . No new photography has been licensed or installed.
          </small>
        </footer>
      </main>
    </>
  );
}
