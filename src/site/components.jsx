import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  List,
  X,
  Target,
  Stack,
  Briefcase,
  Handshake,
  Envelope,
  GraduationCap,
  Lightbulb,
  UsersThree,
  GlobeHemisphereEast,
  Books,
  Bank,
  Phone,
  MapPin,
  Plus,
  Minus,
  ShieldCheck,
} from "@phosphor-icons/react";
import { organisation as org, programmes, projects } from "./content.js";
export const iconSet = {
  Target,
  Stack,
  Briefcase,
  Handshake,
  Envelope,
  GraduationCap,
  Lightbulb,
  UsersThree,
  GlobeHemisphereEast,
  Books,
  Bank,
  ShieldCheck,
};
export function Icon({ name, size = 40, ...props }) {
  const Component = iconSet[name] || Target;
  return (
    <Component
      size={size}
      weight={size > 24 ? "light" : "regular"}
      aria-hidden="true"
      {...props}
    />
  );
}
export function Button({
  children,
  href,
  secondary = false,
  direction = "right-to-left",
  external = false,
  className = "",
  ...props
}) {
  const Tag = href ? "a" : "button";
  const content = (
    <>
      {children}
      {external ? <ArrowUpRight size={20} /> : <ArrowRight size={20} />}
    </>
  );
  return (
    <Tag
      href={href}
      className={`site-button ${secondary ? "secondary" : ""} ${className}`}
      data-direction={direction}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      <span>{content}</span>
      <span className="button-wipe" aria-hidden="true">
        {content}
      </span>
      {external && <span className="sr-only"> (otwiera nową kartę)</span>}
    </Tag>
  );
}
export function TextLink({ href, children, external = false, ...props }) {
  return (
    <a
      href={href}
      className="site-text-link"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      {external ? <ArrowUpRight size={20} /> : <ArrowRight size={20} />}{" "}
      {external && <span className="sr-only">(otwiera nową kartę)</span>}
    </a>
  );
}
const nav = [
  ["/misja/", "Misja", "Target"],
  ["/dzialania/", "Działania", "Stack"],
  ["/projekty/", "Projekty", "Briefcase"],
  ["/partnerstwo/", "Partnerstwo", "Handshake"],
  ["/kontakt/", "Kontakt", "Envelope"],
];
export function Header({ path }) {
  const [open, setOpen] = useState(false),
    dialog = useRef(null),
    trigger = useRef(null);
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
  }, [open]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  const links = nav.map(([url, label, icon]) => (
    <a key={url} href={url} aria-current={path === url ? "page" : undefined}>
      <Icon name={icon} size={20} />
      <span>{label}</span>
    </a>
  ));
  return (
    <>
      <a href="#main" className="site-skip">
        Przejdź do treści
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="site-logo"
            href="/"
            aria-label="Regina Purpurea Fundus — strona główna"
          >
            <img
              src="/assets/logo.svg"
              width="176"
              height="72"
              alt="Regina Purpurea Fundus"
            />
          </a>
          <nav className="desktop-nav" aria-label="Nawigacja główna">
            {links}
          </nav>
          <button
            className="menu-trigger"
            ref={trigger}
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span>Menu</span>
            <List size={24} />
          </button>
        </div>
      </header>
      <dialog
        className="site-menu"
        id="mobile-navigation"
        ref={dialog}
        onCancel={close}
        aria-label="Menu główne"
      >
        <div className="menu-top">
          <span>Regina Purpurea Fundus</span>
          <button onClick={close} aria-label="Zamknij menu">
            <X size={24} />
          </button>
        </div>
        <nav aria-label="Nawigacja mobilna">
          <a href="/">
            Strona główna <ArrowUpRight />
          </a>
          {links}
        </nav>
        <div className="menu-contact">
          <p>Porozmawiajmy o współpracy.</p>
          <a href={"mailto:" + org.email}>{org.email}</a>
        </div>
      </dialog>
    </>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <a className="footer-logo" href="/">
              <img
                src="/assets/logo.svg"
                width="170"
                height="70"
                alt="Regina Purpurea Fundus"
              />
            </a>
            <p>
              Wiedza. Współpraca.
              <br />
              Rozwój społeczny i gospodarczy.
            </p>
          </div>
          <nav aria-label="Nawigacja w stopce">
            {nav.map(([url, label]) => (
              <a href={url} key={url}>
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
          <address>
            <a href={"mailto:" + org.email}>
              <Envelope size={20} />
              {org.email}
            </a>
            <a href={"tel:" + org.telephone}>
              <Phone size={20} />
              {org.phone}
            </a>
            <span>
              <MapPin size={20} />
              {org.city}
            </span>
          </address>
        </div>
        <div className="footer-legal">
          <p>© {new Date().getFullYear()} Fundacja Regina Purpurea Fundus</p>
          <a href="/prywatnosc/">Prywatność</a>
          <a href="/informacje/">Dane fundacji i źródła</a>
          <a href="#top" aria-label="Wróć na początek strony">
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="section-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-description">{children}</div>}
    </div>
  );
}
export function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="page-intro container">
      <a className="breadcrumb" href="/">
        Strona główna <span>/ {eyebrow}</span>
      </a>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <div className="page-lead">{children}</div>}
    </section>
  );
}
export function Artwork({ name, alt = "", className = "" }) {
  return (
    <img
      className={"human-art " + className}
      src={`/site/${name}.webp`}
      alt={alt}
      width="1536"
      height="1024"
      loading="lazy"
    />
  );
}
export function ProgrammeGrid() {
  return (
    <div className="programme-grid">
      {programmes.map((p, i) => (
        <a key={p.id} className="programme-card" href={"/dzialania/#" + p.id}>
          <div className="card-top">
            <Icon name={p.icon} />
            <span>0{i + 1}</span>
          </div>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
          <span className="card-link">
            Poznaj obszar <ArrowRight size={20} />
          </span>
        </a>
      ))}
    </div>
  );
}
export function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((p) => (
        <a href={p.url} target="_blank" rel="noopener noreferrer" key={p.id}>
          <span>{p.number}</span>
          <h3>{p.title}</h3>
          <ArrowUpRight size={28} />
          <span className="sr-only">
            Otwiera stronę projektu w nowej karcie
          </span>
        </a>
      ))}
    </div>
  );
}
export function PartnershipCTA() {
  return (
    <section className="partnership-cta">
      <div className="container cta-inner">
        <p className="eyebrow">Wspólnie możemy więcej</p>
        <h2>
          Porozmawiajmy
          <br />o <em>współpracy.</em>
        </h2>
        <div>
          <p>
            Łączymy doświadczenie eksperckie z praktycznym wsparciem. Poznaj
            możliwości wspólnego działania.
          </p>
          <Button href="/kontakt/" direction="bottom-to-top">
            Nawiąż współpracę
          </Button>
        </div>
      </div>
    </section>
  );
}
export function Accordion({ items }) {
  return (
    <div className="site-accordion">
      {items.map(([title, body], i) => (
        <details key={title}>
          <summary>
            <span>0{i + 1}</span>
            <h3>{title}</h3>
            <Plus size={20} className="plus" />
            <Minus size={20} className="minus" />
          </summary>
          <p>{body}</p>
        </details>
      ))}
    </div>
  );
}
export function CookieNotice() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      setVisible(!localStorage.getItem("regina-privacy-notice"));
    } catch {
      setVisible(true);
    }
  }, []);
  if (!visible) return null;
  return (
    <aside className="privacy-notice" aria-label="Informacja o prywatności">
      <p>
        Bez reklam i zbędnego śledzenia. Ta witryna nie uruchamia narzędzi
        analitycznych. <a href="/prywatnosc/">Więcej o prywatności</a>
      </p>
      <button
        onClick={() => {
          try {
            localStorage.setItem("regina-privacy-notice", "seen");
          } catch {}
          setVisible(false);
        }}
      >
        Rozumiem <X size={16} />
      </button>
    </aside>
  );
}
