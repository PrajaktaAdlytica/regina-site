import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { ArrowDown, ArrowUpRight, ArrowRight, Pause, Play, ArrowCounterClockwise, Cube } from '@phosphor-icons/react';
import '@fontsource/dm-sans/latin-ext-400.css';
import '@fontsource/dm-sans/latin-ext-500.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/cormorant-garamond/latin-ext-400.css';
import '@fontsource/cormorant-garamond/latin-ext-500.css';
import '@fontsource/cormorant-garamond/latin-ext-400-italic.css';
import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/cormorant-garamond/latin-400-italic.css';
const Sculpture = lazy(() => import('./Sculpture.jsx'));
const chapters = [
  { title:'Edukacja', full:'Edukacja i szkolenia', text:'Specjalistyczne programy szkoleniowe, kursy i warsztaty praktyczne oraz międzynarodowe programy grantowe.', label:'Rozwój kompetencji', target:0 },
  { title:'Innowacje', full:'Innowacje i transformacja technologiczna', text:'Doradztwo dla firm w zakresie wdrażania nowych technologii, cyfryzacji procesów i rozwoju produktów.', label:'Transformacja technologiczna', target:.47 },
  { title:'Współpraca', full:'Współpraca międzynarodowa', text:'Programy wymiany, partnerstwa projektowe i transfer wiedzy z partnerami w Europie, Afryce, Azji i Australii.', label:'Transfer wiedzy', target:.94 },
];
const activities = [
 ['Innowacje i transformacja technologiczna',chapters[1].text],
 ['Wsparcie dla przedsiębiorców','Usługi doradcze, mentoring, badania rynku i pomoc w internacjonalizacji działalności.'],
 ['Projekty społeczne','Inicjatywy lokalne na rzecz integracji, aktywizacji zawodowej i rozwoju kompetencji społecznych.'],
 ['Współpraca międzynarodowa',chapters[2].text],
 ['Badania i publikacje','Raporty, analizy i publikacje naukowe z zakresu zarządzania, psychologii pracy i prawa.'],
 ['Edukacja i szkolenia',chapters[0].text],
];

export function App() {
 const journey=useRef(null),progress=useRef(0),bar=useRef(null),dialog=useRef(null),returnFocus=useRef(null);
 const [chapter,setChapter]=useState(0),[sceneState,setSceneState]=useState('loading'),[detail,setDetail]=useState(null),[open,setOpen]=useState(0);
 const [reduced,setReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
 const [motion,setMotion]=useState(()=>!matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{setReduced(media.matches);setMotion(!media.matches);};media.addEventListener('change',update);return()=>media.removeEventListener('change',update);},[]);
 useEffect(()=>{
   let queued=0;
   const update=()=>{queued=0;const el=journey.current;if(!el)return;const max=Math.max(1,el.offsetHeight-(innerHeight-32));const p=Math.max(0,Math.min(1,(scrollY-el.offsetTop+16)/max));progress.current=p;if(bar.current)bar.current.style.transform=`scaleX(${p})`;setChapter(p<.29?0:p<.72?1:2);};
   const schedule=()=>{if(!queued)queued=requestAnimationFrame(update);};addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);update();return()=>{removeEventListener('scroll',schedule);removeEventListener('resize',schedule);cancelAnimationFrame(queued);};
 },[]);
 useEffect(()=>{if(detail!==null){returnFocus.current=document.activeElement;dialog.current?.showModal();}},[detail]);
 const close=()=>{dialog.current?.close();setDetail(null);returnFocus.current?.focus();};
 const jump=index=>{const el=journey.current;const max=el.offsetHeight-(innerHeight-32);window.scrollTo({top:el.offsetTop-16+max*chapters[index].target,behavior:reduced||!motion?'instant':'smooth'});};
 const goTo=id=>document.getElementById(id)?.scrollIntoView({behavior:reduced||!motion?'instant':'smooth'});
 return <>
 <a className="skip-link" href="#programy">Przejdź do programów</a>
 <header className="header"><a className="brand" href="#top" aria-label="Regina Purpurea Fundus — początek"><img src="/assets/logo.svg" width="178" height="72" alt="Regina Purpurea Fundus"/></a><nav aria-label="Nawigacja studium"><a href="#misja">Misja</a><a href="#programy">Działania</a><a href="#kontakt">Kontakt <ArrowUpRight size={14}/></a></nav><span className="study-label">STUDIUM RUCHU <span>01</span></span></header>
 <main id="top">
 <section className="intro" aria-labelledby="hero-heading"><div className="intro-copy"><p className="eyebrow">FUNDACJA REGINA PURPUREA FUNDUS</p><h1 id="hero-heading">Od ponad 20 lat działamy na rzecz <em>rozwoju społecznego i gospodarczego.</em></h1></div><div className="intro-aside"><p>Wspieramy edukację zawodową, transformację technologiczną przedsiębiorstw oraz międzynarodową współpracę społeczną.</p><a className="text-link" href="#programy">Poznaj nasze programy <ArrowUpRight size={19}/></a></div></section>
 <section ref={journey} className="journey" aria-label="Interaktywne studium: edukacja, innowacje, współpraca" data-chapter={chapter}>
 <div className={`sticky-stage chapter-${chapter} ${!motion?'motion-off':''}`}>
 <div className="stage-window">
 <div className="canvas-slot" aria-hidden="true">{sceneState!=='failed'&&<Suspense fallback={null}><Sculpture progress={progress} motion={motion&&!reduced} onState={setSceneState}/></Suspense>}{sceneState==='failed'&&<img className="fallback-art" src="/assets/technology.png" alt=""/>}</div>
 <div className="stage-top"><span className="stage-kicker"><Cube size={15} weight="light"/>{sceneState==='failed'?'WIDOK STATYCZNY':'FORMA WSPÓŁPRACY'}</span><button className="motion-toggle" aria-pressed={!motion} onClick={()=>setMotion(v=>!v)} disabled={reduced}>{motion&&!reduced?<Pause size={14}/>:<Play size={14}/>}<span>{reduced?'Ograniczony ruch':motion?'Zatrzymaj ruch':'Włącz ruch'}</span></button></div>
 <div className="chapter-caption" key={chapter}><span className="eyebrow">0{chapter+1} / {chapters[chapter].label}</span><h2>{chapters[chapter].title}<span>.</span></h2><p>{chapters[chapter].text}</p><button className="caption-link" onClick={()=>setDetail(chapter)}>Poznaj ten obszar <ArrowUpRight size={18}/></button></div>
 <span className="vertical-note">REGINA PURPUREA FUNDUS — NGO</span>{sceneState==='loading'&&<div className="loading-note" role="status">Przygotowujemy formę…</div>}
 </div>
 <div className="stage-footer"><button className="scroll-cue" onClick={()=>chapter<2?jump(chapter+1):goTo('misja')}><ArrowDown size={17}/><span>Przewiń, aby odkryć</span></button><div className="chapter-tabs" aria-label="Rozdziały animacji">{chapters.map((c,i)=><button key={c.title} className={chapter===i?'active':''} aria-current={chapter===i?'step':undefined} onClick={()=>jump(i)}><span>0{i+1}</span>{c.title}</button>)}</div><button className="replay" onClick={()=>jump(0)} aria-label="Odtwórz od początku"><ArrowCounterClockwise size={20}/></button></div><div className="progress-track" aria-hidden="true"><span ref={bar}/></div>
 </div></section>
 <section id="misja" className="mission"><p className="eyebrow">MISJA I CELE</p><div><h2>Wzmacniać kompetencje społeczne, zawodowe <em>i przedsiębiorcze.</em></h2><p>Promować innowacyjność i zaradność oraz wspierać zrównoważony rozwój społeczny i gospodarczy na całym świecie.</p></div></section>
 <section id="programy" className="programmes"><div className="section-head"><h2>Działania<span>.</span></h2><p>Nasze programy łączą doradztwo, szkolenia i projekty badawcze, aby dostarczać praktyczne rozwiązania dla przedsiębiorstw i społeczności.</p></div><div className="programme-layout"><div className="illustration"><img src="/assets/education.png" alt="Ilustracja instruktorów i uczestników szkolenia przy wspólnym stole." loading="lazy"/><span>EDUKACJA · INNOWACJE · WSPÓŁPRACA</span></div><div className="activity-list">{activities.map(([title,text],i)=><div className={`activity ${open===i?'expanded':''}`} key={title}><h3><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i} aria-controls={`activity-${i}`}><span className="activity-number">0{i+1}</span><span>{title}</span><ArrowUpRight className="activity-arrow" size={18}/></button></h3><div id={`activity-${i}`} hidden={open!==i}><p>{text}</p></div></div>)}</div></div></section>
 <footer id="kontakt"><div><img src="/assets/logo.svg" width="155" height="66" alt="Regina Purpurea Fundus"/><p>Warszawa, Polska</p></div><a href="mailto:kontakt@reginapurpureafundus.org">Nawiąż współpracę <ArrowUpRight size={26}/></a><span>Studium hero — nie pełna strona fundacji.<button onClick={()=>goTo('top')}>Wróć na początek <ArrowUpRight size={14}/></button></span></footer>
 </main>
 <dialog ref={dialog} onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===dialog.current)close();}} aria-labelledby="detail-title"><button className="dialog-close" onClick={close}>Zamknij</button>{detail!==null&&<><span className="eyebrow">OBSZAR DZIAŁANIA / 0{detail+1}</span><h2 id="detail-title">{chapters[detail].full}</h2><p>{chapters[detail].text}</p><button className="primary-button" onClick={()=>{close();goTo('programy');}}>Wszystkie działania <ArrowRight size={20}/></button></>}</dialog>
 </>;
}
