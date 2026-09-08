import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Plus, Pause, Play } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './hero-lab.css';

const chapters = [
  { title: 'Edukacja', id: 'edukacja', description: 'Wiedza, która otwiera możliwości.' },
  { title: 'Innowacje', id: 'innowacje', description: 'Pomysły, które zmieniają przyszłość.' },
  { title: 'Współpraca', id: 'wspolpraca', description: 'Razem możemy sięgać dalej.' },
];
function Heading({ id }) {
  const Tag = id === 'book-title' ? 'h1' : 'h2';
  return <><p className="lab-eyebrow">Fundacja Regina Purpurea Fundus</p><Tag id={id}>Od ponad 20 lat działamy na rzecz rozwoju społecznego i gospodarczego <em>Polski i społeczności międzynarodowej.</em></Tag></>;
}
function Intro() { return <p className="lab-description">Wspieramy edukację zawodową, transformację technologiczną przedsiębiorstw oraz międzynarodową współpracę społeczną.</p>; }
function CTA() { return <a className="lab-cta" href="/dzialania/">Poznaj nasze programy <ArrowUpRight size={23}/></a>; }
function ChapterButtons({ active, select }) {
  return <div className="lab-chapters" aria-label="Wybierz obszar" role="group">{chapters.map((chapter, i) => <button key={chapter.id} aria-pressed={active === i} onClick={() => select(i)}><span>{chapter.title}</span><ArrowUpRight size={23}/></button>)}</div>;
}
function Arch({ active, select }) {
  return <section id="lab-arches" className="lab-hero lab-arches" aria-labelledby="arches-title" data-active={active}>
    <img className="lab-art lab-arch-art" src="/site/hero-lab/arches.webp" alt=""/>
    <div className="lab-arch-content lab-reveal"><Heading id="arches-title"/><Intro/><CTA/>
      <ChapterButtons active={active} select={select}/>
      <div className="lab-arch-stage" key={active}><small>0{active + 1} / 03</small><h3>{chapters[active].title}</h3><a className="lab-chapter-detail" href={`/dzialania/#${chapters[active].id}`}><span>{chapters[active].description}</span><ArrowRight size={18}/></a></div>
      <p className="lab-scroll-hint">Przewijaj, aby odkryć kolejny obszar</p>
    </div>
  </section>;
}
function BookPage({ active, select, decorative = false }) {
  return <><div className="lab-years">20<sup>+</sup></div><p className="lab-years-label">lat działalności</p>
    {decorative ? <div className="lab-chapters lab-static-index">{chapters.map((chapter,i) => <div key={chapter.id} className={active === i ? 'is-selected' : ''}>{chapter.title}<ArrowUpRight size={23}/></div>)}</div> : <ChapterButtons active={active} select={select}/>}
    <div className="lab-page-note"><small>ROZDZIAŁ 0{active + 1}</small><p>{chapters[active].description}</p>{!decorative && <a href={`/dzialania/#${chapters[active].id}`}>Poznaj ten obszar <ArrowUpRight size={18}/></a>}</div></>;
}
function BookIntro({ decorative = false }) { return <><Heading id={decorative ? undefined : 'book-title'}/><Intro/>{decorative ? <span className="lab-cta">Poznaj nasze programy <ArrowUpRight size={23}/></span> : <CTA/>}<p className="lab-location">Polska · Współpraca międzynarodowa</p></>; }
function Book({ active, select, leafRef, turningFrom, completed, turn }) {
  return <section id="lab-book" className="lab-hero lab-book" aria-labelledby="book-title">
    <img className="lab-art lab-book-art" src="/site/hero-lab/book.webp" alt=""/>
    <div className="lab-book-copy"><BookIntro/></div>
    <div className="lab-book-page"><BookPage active={active} select={select}/></div>
    <div className="lab-book-leaf" ref={leafRef} aria-hidden="true"><div className="lab-leaf-front"><BookPage active={turningFrom} decorative/></div><div className="lab-leaf-back lab-book-copy"><BookIntro decorative/></div></div>
    <div className="lab-book-navigation"><button onClick={() => select(Math.max(0,completed-1))} disabled={completed === 0 && turn === 0} aria-label="Poprzedni rozdział">Poprzedni</button><span>0{completed + 1} / 03</span><button onClick={() => select(Math.min(2,completed+1))} disabled={completed === 2} aria-label="Kolejny rozdział">Kolejny <ArrowRight size={20}/></button></div>
  </section>;
}
function Panels() {
  const [active, select] = useState(0);
  const controls = useRef([]);
  function keyChange(event, index) {
    if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (index + (['ArrowRight','ArrowDown'].includes(event.key) ? 1 : 2)) % 3;
    select(next); controls.current[next]?.focus();
  }
  return <section id="lab-panels" className="lab-hero lab-panels" aria-labelledby="panels-title">
    <div className="lab-panel-copy lab-reveal"><Heading id="panels-title"/><Intro/><CTA/><p className="lab-location">Polska · Współpraca międzynarodowa</p></div>
    <div className="lab-panel-group lab-reveal" onPointerMove={event => { if(event.pointerType !== 'mouse' || !(event.movementX || event.movementY)) return; const panel = event.target.closest('[data-panel]'); if(panel) select(Number(panel.dataset.panel)); }}>{chapters.map((chapter,i) => <article data-panel={i} className={`lab-panel lab-panel-${i} ${active === i ? 'is-open' : ''}`} key={chapter.id}>
      <img className="lab-panel-art" src="/site/hero-lab/panel.webp" alt=""/>
      <button ref={el => { controls.current[i] = el; }} className="lab-panel-control" aria-expanded={active === i} aria-controls={`lab-panel-body-${i}`} onClick={() => select(i)} onFocus={() => select(i)} onKeyDown={event => keyChange(event,i)}><span className="lab-panel-number">0{i+1}</span><span className="lab-panel-name">{chapter.title}</span><Plus className="lab-panel-plus" size={28}/></button>
      <div className="lab-panel-body" id={`lab-panel-body-${i}`} hidden={active !== i}><p>{chapter.description}</p><a href={`/dzialania/#${chapter.id}`} aria-label={`Poznaj obszar: ${chapter.title}`}><ArrowUpRight size={33}/></a></div>
    </article>)}</div>
  </section>;
}
export default function HeroLab({ bookOnly = false }) {
  const root = useRef(null);
  const leafRef = useRef(null);
  const navigation = useRef({});
  const [archChapter, setArchChapter] = useState(0);
  const [bookChapter, setBookChapter] = useState(0);
  const [turningFrom, setTurningFrom] = useState(0);
  const [bookPosition, setBookPosition] = useState({completed:0,turn:0});
  const selectChapter = (section, index) => {
    if(navigation.current[section]) navigation.current[section](index);
    else if(section === 'arch') setArchChapter(index);
    else { setBookChapter(index); setBookPosition({completed:index,turn:0}); }
  };
  const [motion, setMotion] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const viewport = matchMedia('(min-width: 901px)');
    const update = () => setDesktop(viewport.matches);
    update(); viewport.addEventListener('change',update);
    return () => viewport.removeEventListener('change',update);
  },[]);
  useEffect(() => {
    let cancelled = false;
    document.fonts.ready.then(() => { if(!cancelled && location.hash.startsWith('#lab-')) document.querySelector(location.hash)?.scrollIntoView({ behavior: 'instant' }); });
    return () => { cancelled = true; };
  },[]);
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update(); query.addEventListener('change',update);
    return () => query.removeEventListener('change',update);
  },[]);
  useEffect(() => {
    if(reduced || !motion) return;
    gsap.registerPlugin(ScrollTrigger);
    // The full homepage already owns Lenis; do not attach a second wheel handler.
    const lenis = bookOnly ? {scrollTo:y => window.scrollTo({top:y,behavior:'smooth'}),raf:() => {},on:() => {},destroy:() => {}} : new Lenis({ duration: 1.05, anchors: { offset: -140 } });
    const tick = time => lenis.raf(time * 1000);
    lenis.on('scroll',ScrollTrigger.update); gsap.ticker.add(tick);
    const context = gsap.context(() => {
      gsap.utils.toArray('.lab-panel-copy, .lab-panel-group').forEach(element => {
        gsap.fromTo(element,{ y: 32, opacity: .35 },{y:0,opacity:1,duration:.8,ease:'power2.out',scrollTrigger:{trigger:element,start:'top 94%',end:'bottom 6%',toggleActions:'play reverse play reverse'}});
      });
      if (desktop) {
        const headerHeight = () => document.querySelector('header')?.getBoundingClientRect().height || 92;
        const arch = bookOnly ? null : ScrollTrigger.create({trigger:'.lab-arches',start:() => `top top+=${headerHeight()}`,end:() => `+=${innerHeight * 2.2}`,pin:true,invalidateOnRefresh:true,onUpdate:self => setArchChapter(Math.min(2,Math.floor(self.progress * 3)))});
        const book = ScrollTrigger.create({trigger:'.lab-book',start:() => `top top+=${headerHeight()}`,end:() => `+=${innerHeight * 2.6}`,pin:true,invalidateOnRefresh:true,onUpdate:self => {
          // Two complete turns separated by reading plateaus; never recycle
          // a half-turned sheet or advance the navigation before it settles.
          const progress = self.progress;
          const chapter = progress < .45 ? 0 : progress < .85 ? 1 : 2;
          const turn = chapter < 2 ? gsap.utils.clamp(0,1,(progress - (chapter === 0 ? .15 : .55)) / .30) : 0;
          setTurningFrom(chapter);
          setBookPosition({completed:chapter,turn});
          setBookChapter(turn > 0 ? chapter + 1 : chapter);
          gsap.set(leafRef.current,{rotationY:-180 * turn,width:`${42 + 16 * gsap.utils.clamp(0,1,(turn-.4)/.2)}%`,opacity:turn > .9 ? (1-turn)*10 : 1,visibility:turn > 0 && turn < 1 ? 'visible' : 'hidden'});
        }});
        navigation.current = {arch:index => lenis.scrollTo(arch.start + (index + .12) / 3 * (arch.end - arch.start)),book:index => lenis.scrollTo(book.start + [.06,.5,.94][index] * (book.end - book.start),{duration:1.5})};
      }
    },root);
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    return () => { navigation.current = {}; context.revert(); gsap.set(leafRef.current,{visibility:'hidden',rotationY:0}); gsap.ticker.remove(tick); lenis.destroy(); };
  },[motion,reduced,desktop,bookOnly]);
  if(bookOnly) return <div ref={root} className={`hero-lab homepage-book ${reduced ? 'lab-no-motion' : ''}`}><Book active={bookChapter} select={index => selectChapter('book',index)} leafRef={leafRef} turningFrom={turningFrom} completed={bookPosition.completed} turn={bookPosition.turn}/></div>;
  return <div ref={root} className={`hero-lab ${!motion || reduced ? 'lab-no-motion' : ''}`}>
    <nav className="lab-toolbar" aria-label="Porównanie koncepcji"><span>HERO / MOTION STUDY</span><div><a href="#lab-arches">01 Łuki</a><a href="#lab-book">02 Księga</a><a href="#lab-panels">03 Panele</a></div><button onClick={() => setMotion(!motion)} disabled={reduced} aria-label={motion ? 'Zatrzymaj animacje' : 'Włącz animacje'}>{motion && !reduced ? <Pause size={16}/> : <Play size={16}/>}<span>{motion && !reduced ? 'Ruch włączony' : 'Ruch wyłączony'}</span></button></nav>
    <Arch active={archChapter} select={index => selectChapter('arch',index)}/><div className="lab-divider">02 / Księga możliwości <span>Przewijaj, aby przewracać strony</span></div><Book active={bookChapter} select={index => selectChapter('book',index)} leafRef={leafRef} turningFrom={turningFrom} completed={bookPosition.completed} turn={bookPosition.turn}/><div className="lab-divider">03 / Trzy obszary <span>Najedź, dotknij lub użyj klawiatury</span></div><Panels/>
    <div className="lab-end"><p>Trzy kierunki. Jedna fundacja.</p><a href="#lab-arches">Porównaj ponownie <ArrowRight size={20}/></a><a href="/">Wróć do strony</a></div>
  </div>;
}
