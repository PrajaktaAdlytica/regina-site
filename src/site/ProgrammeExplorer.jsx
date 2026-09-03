import React, { useState } from "react";
import { ArrowRight, Plus, Minus } from "@phosphor-icons/react";
import { programmes } from "./content.js";
import { TextLink } from "./components.jsx";
import "./programme-explorer.css";

const visuals = [
  { src: "/site/technology.webp", type: "illustration", alt: "Ilustracja wspólnej pracy nad technologią." },
  { src: "/site/meeting.jpg", type: "photo", alt: "Spotkanie zespołu — fotografia tematyczna." },
  { src: "/site/community.webp", type: "illustration", alt: "Ilustracja współpracy i integracji społecznej." },
  { src: "/site/international.webp", type: "illustration", alt: "Ilustracja współpracy międzynarodowej." },
  { src: "/site/laboratory.jpg", type: "photo", alt: "Praca badawcza — fotografia tematyczna." },
  { src: "/site/education.webp", type: "illustration", alt: "Ilustracja praktycznej nauki i rozwoju kompetencji." },
];
const number = index => String(index + 1).padStart(2, "0");
const destination = programme => `/dzialania/#${programme.id}`;

function ProgrammeImage({ index }) {
  const visual = visuals[index];
  return <img src={visual.src} alt={visual.alt} className={visual.type} width="600" height="400" loading="lazy" />;
}

export default function ProgrammeExplorer() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(null);
  const selected = programmes[active];
  const preview = index => ({
    onPointerEnter: event => { if (event.pointerType === "mouse" || event.pointerType === "pen") setActive(index); },
    onFocus: () => setActive(index),
  });

  return <section className="programme-explorer" id="programy" aria-labelledby="explorer-title">
    <div className="container section">
      <div className="explorer-heading">
        <div><p className="eyebrow">Sześć obszarów. Wspólny cel.</p><h2 id="explorer-title">Działania</h2></div>
        <p>Nasze programy łączą doradztwo, szkolenia i projekty badawcze, aby dostarczać praktyczne rozwiązania dla przedsiębiorstw i społeczności.</p>
      </div>

      <div className="explorer-desktop">
        <div className="explorer-visuals">
          <div className="explorer-mosaic" aria-label="Poznaj obszary na ilustracjach i fotografiach">
            {[0, 1, 2].map(column => <div className="explorer-column" key={column}>
              {programmes.map((p, index) => index % 3 === column && <a
                key={p.id} href={destination(p)} className="explorer-tile"
                data-active={active === index} aria-label={`${number(index)} ${p.title} — poznaj program`}
                {...preview(index)}
              ><ProgrammeImage index={index} /><span aria-hidden="true">{number(index)}</span></a>)}
            </div>)}
          </div>
          <div className="explorer-summary" aria-labelledby="explorer-active-title">
            <span className="explorer-summary-number" aria-hidden="true">{number(active)} / 06</span>
            <div><h3 id="explorer-active-title">{selected.title}</h3><p>{selected.text}</p>
              <TextLink href={destination(selected)}>Poznaj ten obszar</TextLink>
            </div>
          </div>
        </div>
        <div className="explorer-index">
          <p className="explorer-hint">Najedź, aby odkryć. Wybierz, aby poznać więcej.</p>
          <ol>{programmes.map((p, index) => <li key={p.id}>
            <a href={destination(p)} data-active={active === index} {...preview(index)}>
              <span className="explorer-index-number">{number(index)}</span>
              <span className="explorer-index-title">{p.title}</span>
              <ArrowRight size={24} aria-hidden="true" />
            </a>
          </li>)}</ol>
        </div>
      </div>

      <div className="explorer-mobile">
        <p className="explorer-hint">Wybierz obszar, aby dowiedzieć się więcej.</p>
        {programmes.map((p, index) => {
          const expanded = mobileOpen === index;
          return <div className="explorer-accordion" key={p.id} data-active={expanded}>
            <h3><button type="button" id={`explorer-toggle-${p.id}`} aria-expanded={expanded}
              aria-controls={`explorer-panel-${p.id}`} onClick={() => setMobileOpen(expanded ? null : index)}>
              <span className="explorer-index-number">{number(index)}</span><span>{p.title}</span>
              {expanded ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
            </button></h3>
            <div className="explorer-panel" id={`explorer-panel-${p.id}`} role="region"
              aria-labelledby={`explorer-toggle-${p.id}`} hidden={!expanded}>
              <ProgrammeImage index={index} /><p>{p.text}</p><TextLink href={destination(p)}>Poznaj ten obszar</TextLink>
            </div>
          </div>;
        })}
      </div>
    </div>
  </section>;
}
