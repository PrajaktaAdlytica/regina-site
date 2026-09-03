import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  ArrowDown,
  ArrowCounterClockwise,
  Plus,
  Minus,
  List,
  X,
  Check,
  Copy,
  Download,
  Envelope,
  Phone,
  MapPin,
  GlobeHemisphereEast,
  UsersThree,
  Handshake,
  Lightbulb,
  Briefcase,
  Books,
  GraduationCap,
  FileText,
  MagnifyingGlass,
  CaretDown,
  CaretRight,
  CheckCircle,
  WarningCircle,
  Info,
  Pause,
  Play,
  SpinnerGap,
  LinkedinLogo,
  House,
  Target,
  Stack,
  ShieldCheck,
} from "@phosphor-icons/react";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-ext-400.css";
import "@fontsource/cormorant-garamond/latin-ext-500.css";
import "@fontsource/cormorant-garamond/latin-ext-400-italic.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-ext-400.css";
import "@fontsource/dm-sans/latin-ext-500.css";
import tokens from "../../public/brand-kit/tokens.json";
import "../../public/brand-kit/tokens.css";
import "./styles.css";

const sections = [
  ["identity", "Identity"],
  ["palette", "Colour"],
  ["typography", "Typography"],
  ["layout", "Layout & space"],
  ["icons", "Iconography"],
  ["components", "Components"],
  ["navigation", "Navigation & footer"],
  ["motion", "Motion"],
  ["accessibility", "Accessibility"],
  ["handoff", "Handoff"],
];
const icons = [
  ["House", House, "Home"],
  ["Target", Target, "Misja"],
  ["Stack", Stack, "Działania"],
  ["Briefcase", Briefcase, "Projekty / przedsiębiorcy"],
  ["Handshake", Handshake, "Partnerstwo"],
  ["Envelope", Envelope, "Kontakt / email"],
  ["GraduationCap", GraduationCap, "Edukacja"],
  ["Lightbulb", Lightbulb, "Innowacje"],
  ["UsersThree", UsersThree, "Projekty społeczne"],
  ["GlobeHemisphereEast", GlobeHemisphereEast, "Współpraca międzynarodowa"],
  ["Books", Books, "Badania i publikacje"],
  ["FileText", FileText, "Dokument"],
  ["ArrowRight", ArrowRight, "Internal destination"],
  ["ArrowUpRight", ArrowUpRight, "External destination"],
  ["ArrowLeft", ArrowLeft, "Back"],
  ["ArrowDown", ArrowDown, "Scroll"],
  ["Download", Download, "Download"],
  ["CaretDown", CaretDown, "Expand"],
  ["CaretRight", CaretRight, "Breadcrumb"],
  ["Plus", Plus, "Closed accordion"],
  ["Minus", Minus, "Open accordion"],
  ["List", List, "Menu"],
  ["X", X, "Close"],
  ["MagnifyingGlass", MagnifyingGlass, "Search, only when needed"],
  ["Phone", Phone, "Telephone"],
  ["MapPin", MapPin, "Location"],
  ["CheckCircle", CheckCircle, "Success"],
  ["WarningCircle", WarningCircle, "Error / warning"],
  ["Info", Info, "Information"],
  ["Pause", Pause, "Pause motion"],
  ["Play", Play, "Resume motion"],
  ["ArrowCounterClockwise", ArrowCounterClockwise, "Replay"],
  ["LinkedinLogo", LinkedinLogo, "Only with verified profile"],
];
const role = {
  wine: "Primary actions · links · active states",
  plum: "Feature sections · CTA · footer",
  mauve: "Secondary feature surface · never small text on ivory",
  rose: "Dark-surface metadata · quiet panels",
  blush: "Selected surfaces · editorial quotes",
  canvas: "Default page canvas",
  stone: "Alternating editorial sections",
  surface: "Forms · document surfaces",
  inverse: "Copy on plum, wine and mauve",
  ink: "Primary copy",
  muted: "Secondary copy on light surfaces",
  line: "Decorative dividers only",
  "control-border": "Input outlines on white or ivory",
  silver: "Decorative only · not body text",
  "warm-gray": "Brand accent · not body text",
  black: "Official monochrome mark",
};
function Title({ n, title, children }) {
  return (
    <div className="section-title">
      <span className="kicker">{n} / SYSTEM</span>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
function Btn({
  children,
  variant = "",
  direction = "right-to-left",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`rp-button directional-button ${variant}`}
      data-fill={direction}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="rp-button-label">{children}</span>
      <span className="rp-button-fill" aria-hidden="true"><span className="rp-button-label">{children}</span></span>
    </button>
  );
}
function NavIcon({name}) {
  const Icon = {Misja:Target, 'Działania':Stack, Projekty:Briefcase, Partnerstwo:Handshake, Kontakt:Envelope}[name];
  return <span className="nav-reveal-icon" aria-hidden="true"><Icon size={20} weight="regular"/></span>;
}
function SemanticMark({ kind }) {
  const Icon =
    kind === "success" ? CheckCircle : kind === "info" ? Info : WarningCircle;
  return <Icon size={20} />;
}
export default function App() {
  const [toast, setToast] = useState(""),
    [copied, setCopied] = useState(""),
    [iconQuery, setIconQuery] = useState(""),
    [surface, setSurface] = useState("light"),
    [open, setOpen] = useState(0),
    [menu, setMenu] = useState(false),
    [nav, setNav] = useState("Misja"),
    [sending, setSending] = useState(false),
    [formResult, setFormResult] = useState(""),
    [filter, setFilter] = useState("Wszystkie");
  const notice = (t) => {
    setToast(t);
    window.setTimeout(() => setToast(""), 3500);
  };
  const copy = async (value, name) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(name);
      notice(`Copied ${name}`);
    } catch {
      notice(`Copy manually: ${value}`);
    }
  };
  const submit = (e) => {
    e.preventDefault();
    setFormResult("Demo only: validated locally. Nothing was sent or saved.");
  };
  const loading = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      notice("Loading-state preview complete. Nothing was sent.");
    }, 1300);
  };
  return (
    <>
      <a className="skip" href="#identity">
        Skip to brand kit
      </a>
      <aside className="rail">
        <a href="#identity" className="kit-brand">
          <img src="/assets/logo.svg" alt="Regina Purpurea Fundus" />
        </a>
        <div className="rail-label">
          BRAND & INTERFACE
          <br />
          SYSTEM / 02
        </div>
        <nav aria-label="Brand kit chapters">
          <a href="/visual-library.html"><span>↗</span>Visual asset library</a>
          {sections.map(([id, label], i) => (
            <a key={id} href={`#${id}`}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </nav>
        <a className="rail-bottom" href="/motion-study.html">
          View motion study <ArrowUpRight size={16} />
        </a>
      </aside>
      <main className="kit-main">
        <header className="kit-top">
          <span>REGINA PURPUREA FUNDUS</span>
          <span>DESIGN SPECIFICATION · 03 SEP 2026</span>
          <a href="/brand-kit/brand-guidelines.md" download>
            Download guide <Download size={16} />
          </a>
        </header>
        <section id="identity" className="identity">
          <div className="identity-intro">
            <div>
              <span className="kicker">01 / IDENTITY · VERSION 2.0</span>
              <h1>
                Institutional trust.
                <br />
                <em>Human progress.</em>
              </h1>
              <p className="intro-lead">
                One considered identity. A shared language for every Regina
                page.
              </p>
            </div>
            <div className="identity-note">
              <span className="tag">REVIEW EDITION</span>
              <p>
                The approved foundation identity, developed into a practical
                digital system. Editorial typography, restrained burgundy, warm
                surfaces and purposeful movement.
              </p>
              <small>
                For the NGO website—not an investment fund. This kit supersedes
                earlier exploratory font and motion recommendations.
              </small>
            </div>
          </div>
          <div className="identity-band">
            <div>
              <span className="kicker">THE SUPPORTING SIGNATURE</span>
              <h2>
                Depth, without
                <br />
                <em>heaviness.</em>
              </h2>
              <p>
                The plum and mauve you selected become reusable surfaces—not a
                compulsory dark theme.
              </p>
            </div>
            <div className="band-colors">
              <div style={{ background: tokens.color.plum }}>
                <span>PLUM</span>
                <code>#2C1921</code>
              </div>
              <div style={{ background: tokens.color.mauve }}>
                <span>MAUVE</span>
                <code>#7D676F</code>
              </div>
              <div
                style={{
                  background: tokens.color.rose,
                  color: tokens.color.ink,
                }}
              >
                <span>ROSE STONE</span>
                <code>#CDBDC2</code>
              </div>
            </div>
          </div>
          <div className="three-col principles">
            {[
              [
                "Established, not formalistic",
                "Clear editorial hierarchy, the original monogram and precise language establish credibility.",
              ],
              [
                "Human, not sentimental",
                "Fine-line illustrations explain ideas; genuine documentary images provide evidence.",
              ],
              [
                "Progressive, not theatrical",
                "The sculptural hero is a signature moment. Reading pages stay calm and fast.",
              ],
            ].map(([a, b]) => (
              <article key={a}>
                <h3>{a}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
          <div className="logo-section">
            <div className="logo-specimen">
              <img
                src="/assets/logo.svg"
                alt="Original supplied Regina wordmark"
              />
              <span>ORIGINAL MASTER · UNALTERED PROPORTIONS</span>
            </div>
            <div>
              <h3>Protect the mark.</h3>
              <p>
                Use the full lockup on white or ivory. Clear space on every side
                must equal the height of the R within the symbol. Minimum
                suggested full-lockup width: 160px desktop, 132px mobile; verify
                at the final display size.
              </p>
              <p>
                The monogram is reserved for favicon and compact identity. On a
                dark surface, use the supplied reverse master after
                verification; until then, use the original logo on a
                sufficiently padded light plaque.
              </p>
              <div className="download-row">
                <a href="/assets/logo.svg" download>
                  Primary SVG <Download size={16} />
                </a>
                <a href="/assets/favicon.svg" download>
                  Monogram SVG <Download size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="palette">
          <Title n="02" title="A palette with a purpose.">
            Burgundy leads. Plum adds depth. Warm neutrals keep the experience
            open and approachable.
          </Title>
          <div className="swatch-grid">
            {Object.entries(tokens.color)
              .filter(([k]) => role[k])
              .map(([k, v]) => (
                <button
                  className="swatch"
                  key={k}
                  onClick={() => copy(v, k)}
                  aria-label={`Copy ${k} ${v}`}
                >
                  <span className="swatch-color" style={{ background: v }} />
                  <span className="swatch-name">
                    {k.replaceAll("-", " ")}
                    <Copy size={14} />
                  </span>
                  <code>{v}</code>
                  <small>{role[k]}</small>
                  {copied === k && <span className="copied">Copied</span>}
                </button>
              ))}
          </div>
          <div className="note">
            <Info size={20} />
            <p>
              These are explicit web tokens. Burgundy follows Hubert’s suggested
              Pantone 201 approximation; silver and Warm Gray conversions remain
              provisional. Plum is the scene’s base colour. Mauve is a
              coordinated flat surface, not an exact pixel sample of its
              changing 3D lighting.
            </p>
          </div>
          <div className="two-col">
            <div>
              <h3>Distribution, not decoration</h3>
              <p>
                Start around 70% light neutral, 20% plum/stone and 10%
                burgundy/accent. Treat this as an art-direction guide, not a
                quota. One or two dark moments per page are enough.
              </p>
            </div>
            <div>
              <h3>Where the new background belongs</h3>
              <p>
                Partnership CTA, featured project, a mission statement or
                footer. Mauve can support a quote or a feature panel. Keep long
                articles and contact fields on light surfaces.
              </p>
            </div>
          </div>
          <div className="semantic-row">
            {["success", "error", "warning", "info"].map((k) => (
              <div
                key={k}
                style={{
                  color: tokens.color[k],
                  background: tokens.color[`${k}-tint`],
                }}
              >
                <SemanticMark kind={k} />
                <strong>{k}</strong>
                <code>{tokens.color[k]}</code>
              </div>
            ))}
          </div>
          <p className="small">
            Status colours are functional, not additional brand accents. Pair
            them with a distinct icon and explicit text; never colour alone.
          </p>
        </section>
        <section id="typography">
          <Title n="03" title="Editorial voice. Everyday clarity.">
            Cormorant Garamond for expression. DM Sans for reading and action.
            Both Latin and Latin Extended subsets are required.
          </Title>
          <div className="font-pair">
            <article>
              <span className="kicker">DISPLAY / CORMORANT GARAMOND</span>
              <div className="font-display">Aa Ąą Łł Żż</div>
              <p>400 regular · 400 italic · 500 medium</p>
              <small>
                Italic emphasis: one phrase, not a whole page. Use 500 for
                smaller card headings.
              </small>
            </article>
            <article>
              <span className="kicker">READING / DM SANS</span>
              <div className="font-body">Aa Ąą Łł Żż</div>
              <p>400 regular · 500 medium</p>
              <small>
                Body, menus, labels, buttons, numbers and forms. No condensed or
                all-caps body text.
              </small>
            </article>
          </div>
          <div className="type-table">
            {Object.entries(tokens.type).map(([k, t]) => (
              <div className="type-row" key={k}>
                <div>
                  <strong>{k}</strong>
                  <code>
                    {t.desktop} / {t.mobile}px
                  </code>
                  <small>
                    LH {t["line-height"]} · {t.weight}
                  </small>
                </div>
                <div
                  style={{
                    fontFamily: ["display", "h1", "h2", "h3", "h4"].includes(k)
                      ? "var(--rp-font-display)"
                      : "var(--rp-font-body)",
                    fontSize: `var(--rp-type-${k})`,
                    fontWeight: t.weight,
                    lineHeight: t["line-height"],
                    letterSpacing: t.tracking,
                  }}
                >
                  {["display", "h1", "h2"].includes(k)
                    ? "Wiedza łączy."
                    : k === "eyebrow"
                      ? "EDUKACJA I WSPÓŁPRACA"
                      : "Wspieramy rozwój kompetencji."}
                </div>
              </div>
            ))}
          </div>
          <div className="note">
            <Info size={20} />
            <p>
              Sizes are desktop / mobile endpoints. Use fluid tokens between
              360px and 1200px. Body copy is 18px desktop / 16px
              mobile—intentionally more readable than the small captions in the
              experimental hero. One semantic H1 per page; visual styles do not
              determine HTML heading order.
            </p>
          </div>
          <p className="polish-test">
            Polish proof: Zażółć gęślą jaźń. Łączymy wiedzę, ludzi i miejsca. Ą
            Ć Ę Ł Ń Ó Ś Ź Ż.
          </p>
        </section>
        <section id="layout">
          <Title n="04" title="Space is part of the identity.">
            A 4px foundation, a clear content grid and generous section rhythm.
            Shared alignment creates coherence across varied layouts.
          </Title>
          <div className="grid-demo" aria-label="Twelve-column desktop grid">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="three-col specs">
            {[
              [
                "Desktop ≥1200",
                "12 columns · 24px gutters",
                "1280px maximum content width",
                "48px minimum outer margins",
                "120px section padding",
              ],
              [
                "Tablet 768–1199",
                "8 columns · 24px gutters",
                "32px outer margins",
                "80px section padding",
                "Navigation collapses below 1100px",
              ],
              [
                "Mobile <768",
                "4 columns · 16px gutters",
                "20px outer margins",
                "64px section padding",
                "Single-column reading flow",
              ],
            ].map(([h, ...r]) => (
              <article key={h}>
                <h3>{h}</h3>
                {r.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </article>
            ))}
          </div>
          <div className="space-list">
            {[4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120].map((s) => (
              <div key={s}>
                <code>{s}px</code>
                <span style={{ width: s }} />
              </div>
            ))}
          </div>
          <div className="two-col">
            <div>
              <h3>Inside a component</h3>
              <p>
                Card padding 32px desktop / 24px mobile. Icon → title 24px;
                title → description 12px; description → action 24px. Button
                padding 24px horizontally with a 12px icon gap.
              </p>
            </div>
            <div>
              <h3>Across a page</h3>
              <p>
                Section heading → content 48px desktop / 32px mobile. Reading
                width ≤65ch. Alternate grids, split editorial panels and linked
                rows—not identical card grids stacked repeatedly.
              </p>
            </div>
          </div>
        </section>
        <section id="icons">
          <Title n="05" title="One family. Clear meanings.">
            Phosphor: regular at 20px for interface controls, light at 40px for
            activity categories. Brand icons are used only for their actual
            services.
          </Title>
          <label className="icon-search">
            <MagnifyingGlass size={20} />
            <input
              value={iconQuery}
              onChange={(e) => setIconQuery(e.target.value)}
              placeholder="Find an icon or purpose…"
              aria-label="Search icon library"
            />
          </label>
          <div className="icon-grid">
            {icons
              .filter(([n, , r]) =>
                `${n} ${r}`.toLowerCase().includes(iconQuery.toLowerCase()),
              )
              .map(([name, Icon, purpose]) => (
                <button
                  key={name}
                  onClick={() => copy(name, name)}
                  aria-label={`Copy icon name ${name}`}
                >
                  <Icon size={32} weight="regular" />
                  <strong>{name}</strong>
                  <small>{purpose}</small>
                </button>
              ))}
          </div>
          {icons.filter(([n, , r]) =>
            `${n} ${r}`.toLowerCase().includes(iconQuery.toLowerCase()),
          ).length === 0 && (
            <p className="empty">
              No match. Try “menu”, “education” or “Arrow”.
            </p>
          )}
          <div className="note">
            <Info size={20} />
            <p>
              No mixed libraries, emoji or decorative icons in every menu item.
              Desktop navigation stays text-first. Internal links use
              ArrowRight; external links use ArrowUpRight; downloads use
              Download. Icon-only controls need an accessible name and a 44px
              target.
            </p>
          </div>
          <div className="category-icons">
            {[
              [Lightbulb, "Innowacje"],
              [Briefcase, "Przedsiębiorcy"],
              [UsersThree, "Projekty społeczne"],
              [GlobeHemisphereEast, "Współpraca"],
              [Books, "Badania"],
              [GraduationCap, "Edukacja"],
            ].map(([Icon, label]) => (
              <div key={label}>
                <Icon size={40} weight="light" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
        <section id="components">
          <Title n="06" title="Designed in every state.">
            A compact component vocabulary for all six pages. Try hover,
            keyboard focus, selection, expansion and validation.
          </Title>
          <div className="spec-toolbar">
            <span>COMPONENT SURFACE</span>
            <div className="segmented">
              <button
                aria-pressed={surface === "light"}
                onClick={() => setSurface("light")}
              >
                Ivory
              </button>
              <button
                aria-pressed={surface === "dark"}
                onClick={() => setSurface("dark")}
              >
                Plum
              </button>
            </div>
          </div>
          <div className="component-stage" data-rp-theme={surface}>
            <div id="hover-lab" className="hover-lab">
              <div className="component-label">DIRECTIONAL COLOUR / HOVER OR KEYBOARD FOCUS</div>
              <div className="direction-grid">
                {[
                  ['right-to-left','Right → left'],
                  ['left-to-right','Left → right'],
                  ['bottom-to-top','Bottom → up'],
                  ['top-to-bottom','Top → down'],
                ].map(([direction,label])=><div key={direction}>
                  <Btn variant="secondary" direction={direction} onClick={()=>notice(`${label} fill preview selected.`)}>{label}<ArrowRight size={20}/></Btn>
                  <code>{direction}</code>
                </div>)}
              </div>
              <p className="sample-caption">Colour sweeps in on entry and retreats on exit. The label changes colour along the same edge, so it stays readable. Default: right → left for buttons; bottom → up is an alternative for larger CTAs.</p>
            </div>
            <div className="component-label">
              BUTTONS / 48px HEIGHT / 4px RADIUS
            </div>
            <div className="button-row">
              <Btn
                onClick={() =>
                  notice("Primary action preview. No navigation or submission.")
                }
              >
                Nawiąż współpracę <ArrowRight size={20} />
              </Btn>
              <Btn
                variant="secondary"
                onClick={() => notice("Secondary action preview.")}
              >
                Poznaj działania <ArrowRight size={20} />
              </Btn>
              <button
                className="rp-textlink"
                onClick={() => notice("Text-link preview.")}
              >
                Czytaj więcej <ArrowRight size={20} />
              </button>
            </div>
            <div className="button-row">
              <Btn
                variant="is-hover"
                onClick={() =>
                  notice("Hover specimen: burgundy darkens; arrow travels 3px.")
                }
              >
                Hover specimen <ArrowRight size={20} />
              </Btn>
              <Btn
                variant="is-active"
                onClick={() =>
                  notice("Pressed specimen: darker burgundy, no bounce.")
                }
              >
                Pressed
              </Btn>
              <Btn disabled>Niedostępne</Btn>
              <Btn onClick={loading} disabled={sending}>
                {sending ? (
                  <>
                    <SpinnerGap size={20} className="spin" /> Wysyłanie…
                  </>
                ) : (
                  "Preview loading"
                )}
              </Btn>
            </div>
            <p className="sample-caption">
              Hover and pressed specimens are explicitly labelled. All other
              controls use real browser states. Nothing here submits data.
            </p>
            <div className="button-row filters">
              {["Wszystkie", "Edukacja", "Innowacje"].map((f) => (
                <button
                  className="rp-chip"
                  aria-pressed={filter === f}
                  key={f}
                  onClick={() => setFilter(f)}
                >
                  {filter === f && <Check size={16} />} {f}
                </button>
              ))}
            </div>
            <p className="sample-caption" role="status">
              Selected filter specimen: {filter}
            </p>
          </div>
          <div className="two-col card-specimens">
            <article className="rp-card">
              <GraduationCap weight="light" size={40} />
              <span className="kicker">ACTIVITY CARD</span>
              <h3>Edukacja i szkolenia</h3>
              <p>
                Specjalistyczne programy szkoleniowe, kursy i warsztaty
                praktyczne.
              </p>
              <button
                className="rp-textlink"
                onClick={() =>
                  notice(
                    "Activity card selected. Full page is not built in this kit.",
                  )
                }
              >
                Poznaj ten obszar <ArrowRight size={20} />
              </button>
            </article>
            <article className="rp-card image-card">
              <img
                src="/assets/education.png"
                alt="Concept illustration of vocational training"
              />
              <div>
                <span className="kicker">ILLUSTRATED EDITORIAL CARD</span>
                <h3>Wiedza w praktyce.</h3>
                <p>
                  Use approved illustrations for themes—not as evidence of an
                  event.
                </p>
                <button
                  className="rp-textlink"
                  onClick={() => notice("Editorial card specimen selected.")}
                >
                  Zobacz działania <ArrowRight size={20} />
                </button>
              </div>
            </article>
          </div>
          <div className="project-row">
            <div>
              <span className="kicker">EXTERNAL PROJECT ROW</span>
              <h3>ACCELERATE POLAND</h3>
              <p>
                Client-supplied project link. Preserve the project’s own brand
                assets.
              </p>
            </div>
            <a
              className="rp-textlink"
              href="https://www.acceleratepoland.org.pl"
            >
              Przejdź do projektu <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="two-col lower-components">
            <div>
              <h3>Accordion / programme detail</h3>
              {[
                "Innowacje i transformacja technologiczna",
                "Wsparcie dla przedsiębiorców",
                "Projekty społeczne",
              ].map((t, i) => (
                <div className="rp-accordion" key={t}>
                  <h4>
                    <button
                      aria-expanded={open === i}
                      aria-controls={`kit-panel-${i}`}
                      onClick={() => setOpen(open === i ? null : i)}
                    >
                      {t}
                      {open === i ? <Minus size={20} /> : <Plus size={20} />}
                    </button>
                  </h4>
                  <p id={`kit-panel-${i}`} hidden={open !== i}>
                    {
                      [
                        "Doradztwo dla firm w zakresie wdrażania nowych technologii, cyfryzacji procesów i rozwoju produktów.",
                        "Usługi doradcze, mentoring, badania rynku i pomoc w internacjonalizacji działalności.",
                        "Inicjatywy lokalne na rzecz integracji, aktywizacji zawodowej i rozwoju kompetencji społecznych.",
                      ][i]
                    }
                  </p>
                </div>
              ))}
            </div>
            <form className="form-specimen" onSubmit={submit}>
              <h3>Contact field system</h3>
              <p className="small">
                Local demonstration. No messages are sent or stored.
              </p>
              <label>
                Adres email <span>(wymagany)</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="imie@organizacja.pl"
                  autoComplete="off"
                />
              </label>
              <label>
                Wiadomość{" "}
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Opisz temat współpracy…"
                />
              </label>
              <label className="checkbox">
                <input type="checkbox" required /> Rozumiem, że to demonstracja
                formularza.
              </label>
              <Btn type="submit">
                Sprawdź formularz <ArrowRight size={20} />
              </Btn>
              {formResult && (
                <p className="form-result" role="status">
                  <CheckCircle size={20} />
                  {formResult}
                </p>
              )}
              <div className="error-example">
                <WarningCircle size={20} />
                <span>Error specimen: Wpisz poprawny adres email.</span>
              </div>
            </form>
          </div>
          <div className="elevation-row">
            {[
              ["No shadow", "none"],
              ["Low / navigation", "low"],
              ["Raised / hover", "raised"],
              ["Overlay / dialog", "overlay"],
            ].map(([t, k]) => (
              <div key={k} style={{ boxShadow: tokens.shadow[k] }}>
                <span>{t}</span>
                <code>{tokens.shadow[k]}</code>
              </div>
            ))}
          </div>
        </section>
        <section id="navigation">
          <Title n="07" title="A consistent beginning and ending.">
            Text-first navigation, a recognisable logo, one clear collaboration
            action and a useful institutional footer.
          </Title>
          <div className="nav-preview">
            <div className="nav-preview-head">
              <a href="#identity" className="nav-logo">
                <img src="/assets/logo.svg" alt="Regina Purpurea Fundus" />
              </a>
              <nav aria-label="Desktop navigation specimen">
                {[
                  "Misja",
                  "Działania",
                  "Projekty",
                  "Partnerstwo",
                  "Kontakt",
                ].map((n) => (
                  <button
                    key={n}
                    aria-current={nav === n ? "page" : undefined}
                    onClick={() => {
                      setNav(n);
                      notice(`${n}: selected navigation state only`);
                    }}
                  >
                    <NavIcon name={n}/><span>{n}</span>
                  </button>
                ))}
              </nav>
              <button
                className="menu-trigger"
                onClick={() => setMenu(!menu)}
                aria-expanded={menu}
                aria-controls="kit-mobile-menu"
              >
                {menu ? <X size={20} /> : <List size={20} />} Menu
              </button>
            </div>
            {menu && (
              <nav
                className="menu-panel"
                id="kit-mobile-menu"
                aria-label="Mobile navigation specimen"
              >
                {[
                  "Misja",
                  "Działania",
                  "Projekty",
                  "Partnerstwo",
                  "Kontakt",
                ].map((n) => (
                  <button
                    key={n}
                    onClick={() => {
                      setNav(n);
                      setMenu(false);
                      notice(`${n}: selected navigation state only`);
                    }}
                  >
                    <span className="mobile-nav-label"><NavIcon name={n}/>{n}</span>
                    <ArrowRight size={20} />
                  </button>
                ))}
              </nav>
            )}
            <p className="small">
              Hover or keyboard-focus a desktop item to reveal its matching icon. Space is reserved so neighbouring links do not jump. On touch devices icons stay visible.
            </p>
            <p className="small">
              This specimen selects an active state; it does not pretend the six
              pages are already built. Mobile menu also works at desktop size
              for review.
            </p>
          </div>
          <div className="footer-preview" data-rp-theme="dark">
            <div className="footer-cta">
              <div>
                <span className="kicker">PARTNERSTWO</span>
                <h3>
                  Porozmawiajmy
                  <br />
                  <em>o współpracy.</em>
                </h3>
              </div>
              <a
                className="rp-button secondary directional-button"
                data-fill="bottom-to-top"
                href="mailto:kontakt@reginapurpureafundus.org"
              >
                <span className="rp-button-label">Nawiąż współpracę <ArrowRight size={20}/></span>
                <span className="rp-button-fill" aria-hidden="true"><span className="rp-button-label">Nawiąż współpracę <ArrowRight size={20}/></span></span>
              </a>
            </div>
            <div className="footer-details">
              <div>
                <div className="logo-plaque">
                  <img src="/assets/logo.svg" alt="Regina Purpurea Fundus" />
                </div>
                <p>
                  Fundacja Regina Purpurea Fundus
                  <br />
                  Warszawa, Polska
                </p>
              </div>
              <div>
                <span className="kicker">KONTAKT</span>
                <a href="mailto:kontakt@reginapurpureafundus.org">
                  <Envelope size={20} /> kontakt@reginapurpureafundus.org
                </a>
                <a href="tel:+48605607609">
                  <Phone size={20} /> +48 605 607 609
                </a>
              </div>
            </div>
            <div className="footer-legal">
              <span>KRS 0000223158 · NIP 9512152516 · REGON 140132635</span>
              <span>Privacy and legal links: required in the full build.</span>
            </div>
          </div>
        </section>
        <section id="motion">
          <Title n="08" title="Movement with a reason.">
            Lusion informs the dimensional hero. The rest of the site uses
            quiet, consistent feedback.
          </Title>
          <div className="three-col specs">
            <article>
              <span className="kicker">160ms / FEEDBACK</span>
              <h3>Immediate.</h3>
              <p>
                Button colour, link underline and focus response. Keyboard focus
                never waits for an entrance animation.
              </p>
            </article>
            <article>
              <span className="kicker">240ms / COMPONENT</span>
              <h3>Composed.</h3>
              <p>
                Card lift ≤4px. Arrow translation 3px. Image scale ≤1.025. No
                bounce or dramatic rotation.
              </p>
            </article>
            <article>
              <span className="kicker">560ms / REVEAL</span>
              <h3>Purposeful.</h3>
              <p>
                One section entrance, 12px maximum travel. No letter-by-letter
                body text and no essential content hidden until animation
                completes.
              </p>
            </article>
          </div>
          <div className="motion-demo">
            <button
              className="motion-card"
              onClick={() =>
                notice("Motion specimen: hover or focus to see the lift.")
              }
            >
              <span className="kicker">HOVER OR FOCUS</span>
              <span>
                Small movement.
                <br />
                <em>Clear intent.</em>
              </span>
              <ArrowRight size={28} />
            </button>
            <div>
              <h3>One easing curve</h3>
              <code>cubic-bezier(0.22, 1, 0.36, 1)</code>
              <p>
                Native page scrolling. Pause/replay for continuous scenes.
                System reduced-motion preference removes lift, scale, rotation,
                smooth scrolling and non-essential reveals—not just their
                duration.
              </p>
              <a href="/" className="rp-textlink">
                Review the separate 3D study <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
        <section id="accessibility">
          <Title n="09" title="Beautiful is also usable.">
            Verified colour pairs, visible focus and readable copy. These are
            implementation requirements—not a claim that the finished website is
            certified.
          </Title>
          <div className="contrast-grid">
            {[
              ["Burgundy on ivory", "wine", "canvas", "8.67"],
              ["Ivory on plum", "inverse", "plum", "15.71"],
              ["Ivory on mauve", "inverse", "mauve", "4.93"],
              ["Muted on stone", "muted", "stone", "4.98"],
              ["Ink on rose", "ink", "rose", "8.43"],
              ["Control border on ivory", "control-border", "canvas", "3.21"],
            ].map(([name, fg, bg, ratio]) => (
              <article
                key={name}
                style={{
                  background: tokens.color[bg],
                  color: tokens.color[name.startsWith("Control") ? "ink" : fg],
                  borderColor: name.startsWith("Control")
                    ? tokens.color["control-border"]
                    : undefined,
                }}
              >
                <span className="contrast-aa">Aa</span>
                <strong>{ratio}:1</strong>
                <p>{name}</p>
                <small>
                  {name.startsWith("Control")
                    ? "Non-text boundary only"
                    : "Normal-text contrast passes 4.5:1"}
                </small>
              </article>
            ))}
          </div>
          <div className="two-col checklist">
            <div>
              <h3>Every component</h3>
              <p>
                <Check size={18} /> Minimum 44px intended touch target
              </p>
              <p>
                <Check size={18} /> 2px focus outline with 3px offset
              </p>
              <p>
                <Check size={18} /> Labels, error text and keyboard operation
              </p>
              <p>
                <Check size={18} /> No hover-only information
              </p>
            </div>
            <div>
              <h3>Every page</h3>
              <p>
                <Check size={18} /> One H1 and logical heading order
              </p>
              <p>
                <Check size={18} /> Contrast checked on actual surfaces
              </p>
              <p>
                <Check size={18} /> Polish alt text and reduced-motion support
              </p>
              <p>
                <Check size={18} /> Reflow at 320px and readable at 200% zoom
              </p>
            </div>
          </div>
          <p className="small">
            Our 44px target is a design standard. WCAG 2.2 AA Target Size
            Minimum is 24px with defined exceptions. Normal text requires 4.5:1;
            large text 3:1. Focus Appearance is AAA; visible keyboard focus
            remains required.{" "}
            <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">
              W3C contrast
            </a>{" "}
            ·{" "}
            <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">
              Target size
            </a>{" "}
            ·{" "}
            <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">
              Focus appearance
            </a>
          </p>
        </section>
        <section id="handoff">
          <Title n="10" title="A system we can build from.">
            The visual rules, exact values and component behaviour now live
            together. The full website remains a separate implementation step.
          </Title>
          <div className="download-cards">
            {[
              [
                "Design handbook",
                "Decisions, page recipes and component rules",
                "/brand-kit/brand-guidelines.md",
              ],
              [
                "CSS variables",
                "Namespaced tokens, type scale and themes",
                "/brand-kit/tokens.css",
              ],
              [
                "JSON tokens",
                "Canonical values for development or Figma mapping",
                "/brand-kit/tokens.json",
              ],
            ].map(([a, b, c]) => (
              <a href={c} download key={a}>
                <FileText size={24} />
                <h3>{a}</h3>
                <p>{b}</p>
                <span>
                  Download <Download size={20} />
                </span>
              </a>
            ))}
          </div>
          <p className="small">
            Not a Figma library import file or a fully implemented component
            package. Source specimens are in this project. Logo masters remain
            supplied client assets. No external messages, publishing or
            deployments occur from this kit.
          </p>
          <div className="kit-colophon">
            <span>REGINA PURPUREA FUNDUS</span>
            <span>BRAND & INTERFACE SYSTEM / 02</span>
            <a href="#identity">
              Back to beginning <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <div className={`toast ${toast ? "visible" : ""}`} role="status">
        {toast && (
          <>
            <Check size={18} />
            {toast}
          </>
        )}
      </div>
    </>
  );
}
