import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Pause, Play, ArrowUpRight } from '@phosphor-icons/react';
import { Button } from './components.jsx';
import './hero-variants.css';

const Sculpture = lazy(() => import('../Sculpture.jsx'));
const chapters = [
  { name: 'Edukacja', id: 'edukacja', progress: 0 },
  { name: 'Innowacje', id: 'innowacje', progress: .47 },
  { name: 'Współpraca', id: 'wspolpraca', progress: .94 },
];

export default function HeroVariants({ variant }) {
  const progress = useRef(0);
  const [chapter, setChapter] = useState(0);
  const [motion, setMotion] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [scene, setScene] = useState('loading');
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(preference.matches);
    update(); preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  const select = index => { setChapter(index); progress.current = chapters[index].progress; };
  return <>
    <section className={`hero-study hero-study-${variant}`} aria-labelledby="hero-study-title">
      <div className="hero-study-heading">
        <p className="eyebrow">Fundacja Regina Purpurea Fundus</p>
        <h1 id="hero-study-title">Od ponad 20 lat działamy na rzecz rozwoju społecznego i gospodarczego <em>Polski i społeczności międzynarodowej.</em></h1>
      </div>
      <div className="hero-study-copy">
        <p>Wspieramy edukację zawodową, transformację technologiczną przedsiębiorstw oraz międzynarodową współpracę społeczną.</p>
        <Button href="/dzialania/">Poznaj nasze programy</Button>
        <span className="hero-study-location">Polska · Współpraca międzynarodowa</span>
      </div>
      <div className="hero-study-art" aria-hidden="true">
        {scene !== 'failed' && <Suspense fallback={null}><Sculpture progress={progress} motion={motion && !reduced} onState={setScene} presentation /></Suspense>}
        {scene === 'loading' && <span className="hero-study-loading">Ładowanie formy 3D…</span>}
      </div>
      <div className="hero-study-controls">
        <div className="hero-study-chapters" role="group" aria-label="Forma współpracy">
          {chapters.map((item, index) => <button key={item.id} onClick={() => select(index)} aria-pressed={chapter === index}><small>0{index + 1}</small>{item.name}</button>)}
        </div>
        <a className="hero-study-area" href={`/dzialania/#${chapters[chapter].id}`}>Poznaj ten obszar <ArrowUpRight size={18} /></a>
        <button className="hero-study-pause" onClick={() => setMotion(value => !value)} disabled={reduced || scene !== 'ready'} aria-label={motion ? 'Zatrzymaj ruch' : 'Włącz ruch'} aria-pressed={!motion || reduced}>{motion && !reduced ? <Pause size={19} /> : <Play size={19} />}</button>
      </div>
      {scene === 'failed' && <p role="status" className="hero-study-fallback">Podgląd 3D jest niedostępny w tej przeglądarce. Poznaj nasze obszary działania, korzystając z linków powyżej.</p>}
    </section>
    <nav className="hero-study-switch" aria-label="Porównanie wersji hero">
      <span>Podgląd hero</span>
      {[1,2,3].map(number => <a key={number} href={`/?hero=${number}`} aria-current={number === variant ? 'page' : undefined}>Wersja {number}</a>)}
      <a href="/">Obecna strona</a>
    </nav>
  </>;
}
