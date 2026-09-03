import React, { useState } from 'react';
import { ArrowUpRight, MapPin } from '@phosphor-icons/react';
import { programmes } from './content.js';
import { TextLink } from './components.jsx';
import './international-cooperation.css';

export const cooperationRegions = ['Europa', 'Afryka', 'Azja', 'Australia'];
export const regionEnquiry = region => `/kontakt/?temat=${encodeURIComponent(`Współpraca międzynarodowa — ${region}`)}`;
const connections = ['M300 250 C190 260 165 130 120 90', 'M300 250 C235 250 220 360 125 400', 'M300 250 C370 250 360 100 480 90', 'M300 250 C410 260 385 390 480 400'];

export default function InternationalCooperation() {
  const [active, setActive] = useState(0);
  const region = cooperationRegions[active];
  return <section className="international-section" id="ponad-granicami" aria-labelledby="international-title">
    <div className="container section">
      <div className="international-opening">
        <div className="international-copy">
          <p className="eyebrow">Polskie korzenie. Międzynarodowa współpraca.</p>
          <h2 id="international-title">Blisko potrzeb.<br /><em>Ponad granicami.</em></h2>
          <p className="international-lead">{programmes[3].text}</p>
          <div className="international-origin"><MapPin size={20} weight="light" aria-hidden="true"/><span>Polska <span>— punkt wyjścia.</span></span></div>
          <TextLink href="/partnerstwo/">Poznaj możliwości współpracy</TextLink>
        </div>
        <div className="cooperation-network">
          <div className="cooperation-network-heading"><span className="eyebrow">Współpraca bez granic</span><span>0{active + 1} / 04</span></div>
          <div className="cooperation-orbit" role="group" aria-label="Wybierz region współpracy">
            <svg className="cooperation-lines" viewBox="0 0 600 500" aria-hidden="true">
              <g className="cooperation-orbits"><ellipse cx="300" cy="250" rx="220" ry="175"/><ellipse cx="300" cy="250" rx="140" ry="175"/><ellipse cx="300" cy="250" rx="220" ry="90"/><path d="M80 250H520 M300 75V425"/></g>
              {connections.map((d, i) => <path className="cooperation-path" d={d} key={i}/>)}
              <path key={active} className="cooperation-path-active" d={connections[active]} pathLength="1"/>
            </svg>
            <div className="cooperation-core" aria-hidden="true"><span>PL</span><small>Polska</small></div>
            {cooperationRegions.map((name, index) => <button type="button" key={name} className={`cooperation-node cooperation-node-${index}`} aria-pressed={index === active} aria-controls="cooperation-selection" onClick={() => setActive(index)} onFocus={() => setActive(index)} onPointerEnter={event => { if (event.pointerType === 'mouse') setActive(index); }}>
              <span className="cooperation-node-dot" aria-hidden="true">0{index + 1}</span><span>{name}</span>
            </button>)}
          </div>
          <div className="cooperation-selection" id="cooperation-selection">
            <div aria-live="polite" aria-atomic="true"><span className="cooperation-selection-label">Porozmawiajmy o współpracy</span><h3 key={region}>{region}</h3></div>
            <a href={regionEnquiry(region)} aria-label={`Zapytaj o współpracę: ${region}`} className="cooperation-enquiry"><span>Nawiąż kontakt</span><ArrowUpRight size={24} aria-hidden="true"/></a>
          </div>
          <p className="international-note">Wybierz region. Schemat współpracy — nie mapa lokalizacji projektów.</p>
        </div>
      </div>
    </div>
  </section>;
}
