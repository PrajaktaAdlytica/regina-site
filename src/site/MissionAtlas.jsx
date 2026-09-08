import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import { goals, organisation as org } from './content.js';
import { Icon, SectionIntro, TextLink } from './components.jsx';
import './mission-atlas.css';

export const missionChapters = [
  { image: 'technology.webp', href: '/dzialania/#innowacje', label: 'Poznaj działania innowacyjne', alt: 'Ilustracja wspólnej pracy nad technologią.' },
  { image: 'community.webp', href: '/dzialania/#spolecznosc', label: 'Poznaj projekty społeczne', alt: 'Ilustracja współpracy i integracji społecznej.' },
  { image: 'research-sketch.webp', href: '/dzialania/#badania', label: 'Poznaj obszar badań', alt: 'Szkic badaczy wspólnie analizujących materiały w laboratorium.' },
  { image: 'education.webp', href: '/dzialania/#edukacja', label: 'Poznaj programy edukacyjne', alt: 'Ilustracja praktycznej nauki i rozwoju kompetencji.' },
  { image: 'international.webp', href: '/dzialania/#wspolpraca', label: 'Poznaj współpracę międzynarodową', alt: 'Ilustracja wymiany wiedzy ponad granicami.' },
  { image: 'institutional-sketch.webp', href: '/partnerstwo/', label: 'Poznaj możliwości partnerstwa', alt: 'Szkic przedstawicieli fundacji i instytucji omawiających wspólny projekt.' },
];
const number = index => String(index + 1).padStart(2, '0');

export default function MissionAtlas() {
  const [active, setActive] = useState(0);
  const host = useRef(null), tabs = useRef([]), direction = useRef(1);
  const select = index => { direction.current = index >= active ? 1 : -1; setActive(index); };
  const choose = (index, event) => {
    select(index);
    if (event.detail > 0 && matchMedia('(max-width: 900px)').matches) {
      host.current?.querySelector('.atlas-preview')?.scrollIntoView({
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start',
      });
    }
  };
  const step = delta => { direction.current = delta; setActive(value => (value + delta + goals.length) % goals.length); };
  const onKeyDown = (event, index) => {
    const rowStep = matchMedia('(max-width: 380px)').matches ? 1 : 2;
    const changes = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: rowStep, ArrowUp: -rowStep };
    let next;
    if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = goals.length - 1;
    else if (event.key in changes) next = (index + changes[event.key] + goals.length) % goals.length;
    else return;
    event.preventDefault(); select(next); tabs.current[next]?.focus();
  };
  useEffect(() => {
    let disposed = false, context;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const stop = () => { if (media.matches) context?.revert(); };
    media.addEventListener('change', stop);
    if (!media.matches) import('gsap').then(({ gsap }) => {
      if (disposed || media.matches) return;
      const panel = host.current?.querySelector('[role="tabpanel"]:not([hidden])');
      if (!panel) return;
      context = gsap.context(() => {
        gsap.fromTo(panel.querySelector('.atlas-art img'),
          { opacity: 0, x: 24 * direction.current },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', clearProps: 'opacity,transform' });
        gsap.fromTo(panel.querySelectorAll('.atlas-story > *'),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.42, stagger: 0.055, ease: 'power3.out', clearProps: 'opacity,transform' });
      }, panel);
    }).catch(() => { /* Content and tabs work even if motion cannot load. */ });
    return () => { disposed = true; context?.revert(); media.removeEventListener('change', stop); };
  }, [active]);

  return <section className="mission-atlas container section" id="cele" ref={host} aria-label="Sześć celów fundacji">
    <SectionIntro eyebrow="Kierunki zaangażowania" title={<>Sześć celów.<br /><em>Wspólna odpowiedzialność.</em></>}><p>{org.purpose}</p></SectionIntro>
    <div className="atlas-layout">
      <div className="atlas-navigation">
        <p className="atlas-instruction">Wybierz cel. Poznaj kierunek działania.</p>
        <div className="atlas-tabs" role="tablist" aria-label="Cele fundacji">
          {goals.map(([icon, title], index) => <button key={title} type="button" role="tab"
            id={`mission-tab-${index}`} aria-controls={`mission-panel-${index}`} aria-selected={active === index}
            tabIndex={active === index ? 0 : -1} ref={el => { tabs.current[index] = el; }}
            onClick={event => choose(index, event)} onKeyDown={event => onKeyDown(event, index)}>
            <span className="atlas-tab-meta"><span>{number(index)}</span><Icon name={icon} size={30} /></span>
            <span className="atlas-tab-title">{title}</span>
            <ArrowUpRight className="atlas-tab-arrow" size={18} aria-hidden="true" />
          </button>)}
        </div>
        <p className="atlas-navigation-note">Różne obszary zaangażowania.<br />Jedna wspólna odpowiedzialność.</p>
      </div>
      <div className="atlas-preview">
        <div className="atlas-toolbar"><span>CEL FUNDACJI <span aria-hidden="true">/</span> <strong>{number(active)} — 06</strong></span>
          <div><button type="button" aria-label="Poprzedni cel" onClick={() => step(-1)}><ArrowLeft size={20} /></button><button type="button" aria-label="Następny cel" onClick={() => step(1)}><ArrowRight size={20} /></button></div>
        </div>
        {goals.map(([, title, text], index) => {
          const chapter = missionChapters[index];
          return <div key={title} role="tabpanel" id={`mission-panel-${index}`} aria-labelledby={`mission-tab-${index}`} hidden={active !== index} tabIndex={0}>
            <figure className={`atlas-art ${chapter.photo ? 'is-photo' : ''}`}><img src={`/site/${chapter.image}`} width="1200" height="800" alt={chapter.alt} loading={index === 0 ? 'eager' : 'lazy'} /></figure>
            <div className="atlas-story"><span className="atlas-story-label">{number(index)} / NASZE ZAANGAŻOWANIE</span><h3>{title}</h3><p>{text}</p><TextLink href={chapter.href}>{chapter.label}</TextLink></div>
          </div>;
        })}
        <span className="sr-only" role="status" aria-live="polite">Cel {active + 1} z 6: {goals[active][1]}</span>
        <button className="atlas-return" type="button" onClick={() => {
          tabs.current[active]?.focus({ preventScroll: true });
          host.current?.querySelector('.atlas-tabs')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
        }}><ArrowLeft size={16} />Wybierz inny cel</button>
      </div>
    </div>
  </section>;
}
