import React from "react";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";
import "./mission-hero.css";
import { programmes } from "./content.js";
import { Button, TextLink, Icon } from "./components.jsx";

export const photoSources = [
  ["Kampus Production", "https://www.pexels.com/photo/young-diverse-students-coworking-on-laptop-in-library-with-assistance-of-female-teacher-5940704/", "Mentoring i wspólna nauka"],
  ["cottonbro studio", "https://www.pexels.com/photo/people-studying-inside-a-library-6344238/", "Studenci w bibliotece"],
  ["fauxels", "https://www.pexels.com/photo/colleagues-shaking-each-other-s-hands-3184291/", "Spotkanie zespołu"],
  ["ThisIsEngineering", "https://www.pexels.com/photo/chemical-engineers-working-in-laboratory-3861442/", "Praca w laboratorium"],
];
export function Photo({ name, alt, eager = false, className = "" }) {
  return <img className={`editorial-photo ${className}`} src={`/site/${name}.jpg`} alt={alt} width="1200" height="800" loading={eager ? "eager" : "lazy"} />;
}
export const editorialPillars = [
  {id:"edukacja", number:"01", title:<>Edukacja<br />i kompetencje</>, text:programmes[5].text, icon:"GraduationCap", photo:"students", alt:"Wspólna nauka w bibliotece — fotografia tematyczna."},
  {id:"wspolpraca", number:"02", title:<>Współpraca<br />międzynarodowa</>, text:programmes[3].text, icon:"GlobeHemisphereEast", photo:"meeting", alt:"Spotkanie zespołu — fotografia tematyczna współpracy."},
  {id:"spolecznosc", number:"03", title:<>Projekty<br />społeczne</>, text:programmes[2].text, icon:"UsersThree", photo:"mentoring", alt:"Mentoring i rozwój kompetencji — fotografia tematyczna."},
];
export function PhotoPillars() {
  return <section className="photo-pillars-section" id="obszary">
    <div className="container section">
      <div className="photo-pillars">
        {editorialPillars.map(p=><article key={p.id}>
          <span className="editorial-number">{p.number}</span><Icon name={p.icon} size={48} />
          <h2>{p.title}</h2><p>{p.text}</p>
          <a className="photo-link" href={`/dzialania/#${p.id}`} aria-label={`Poznaj obszar: ${p.id}`}><Photo name={p.photo} alt={p.alt}/></a>
          <TextLink href={`/dzialania/#${p.id}`}>Dowiedz się więcej</TextLink>
        </article>)}
      </div>
    </div>
  </section>;
}
export function MissionPhotoHero() {
  return <section className="mission-photo-hero mission-hero-editorial container" aria-labelledby="mission-hero-title">
    <div className="mission-hero-titleblock">
      <p className="eyebrow">Misja / Regina Purpurea Fundus</p>
      <h1 id="mission-hero-title"><span>Wiedza.</span><span>Współpraca.</span><em>Trwały wpływ.</em></h1>
      <p className="mission-hero-history"><span aria-hidden="true"/>Ponad dwie dekady działalności</p>
    </div>
    <div className="mission-hero-visual">
      <div className="mission-hero-photo-wrap">
        <figure><Photo name="mentoring" eager alt="Wspólna praca z mentorką w bibliotece — fotografia tematyczna."/></figure>
        <a className="mission-goals-jump" href="#cele"><span>6 celów</span><ArrowDown size={24} aria-hidden="true"/><span className="sr-only"> — poznaj cele fundacji</span></a>
      </div>
      <p className="mission-hero-photo-caption">Wiedza rozwija się we współpracy.</p>
    </div>
    <div className="mission-hero-bottom">
      <p>Łączymy doświadczenie, partnerów i projekty, które odpowiadają na realne potrzeby społeczne.</p>
      <div className="editorial-actions"><Button href="/partnerstwo/">Nawiąż współpracę</Button><Button secondary href="/dzialania/">Poznaj nasze działania</Button></div>
    </div>
  </section>;
}
export function PartnershipCollageHero() {
  return <section className="collage-hero container"><div className="collage-copy"><p className="eyebrow">Partnerstwo</p><h1>Łączymy<br/>wiedzę, ludzi<br/><em>i miejsca.</em></h1><p>Działamy odpowiedzialnie.<br/>Współpracujemy odważnie.</p><span className="collage-history">Ponad dwie dekady działalności</span><Button href="/kontakt/">Nawiąż współpracę</Button></div><figure><img src="/site/partnership-collage.webp" width="1122" height="1402" alt="Koncepcyjny kolaż trzech osób połączonych liniami współpracy; nie przedstawia zespołu fundacji."/><figcaption>Różne perspektywy. Wspólne możliwości.</figcaption></figure></section>;
}
export function ConnectedCollage() {
  return <section className="connected-collage container" aria-label="Obszary łączące nasze inicjatywy">
    <ol>{editorialPillars.map(p=><li key={p.id}><a className="connected-heading" href={`/dzialania/#${p.id}`}><span className="connected-number">{p.number}<ArrowRight size={24} aria-hidden="true"/></span><h2>{p.title}</h2></a></li>)}</ol>
    <img className="connected-art" src="/site/projects-collage-v2.webp" width="2172" height="724" loading="lazy" alt="Kolaż edukacji, międzynarodowych połączeń i współpracy społecznej: kobieta i mężczyzna na wózku wspólnie pracują przy stole. Mapa nie oznacza lokalizacji projektów."/>
    <div className="connected-links">{editorialPillars.map(p=><TextLink key={p.id} href={`/dzialania/#${p.id}`}>Poznaj obszar</TextLink>)}</div>
  </section>;
}
export function ResearchEditorial() {
  return <section className="research-editorial"><div className="container section"><div><p className="eyebrow">Badania i publikacje</p><h2>Działamy mądrze.<br/>Myślimy długofalowo.<br/><em>Dzielimy się wiedzą.</em></h2><p>{programmes[4].text}</p><TextLink href="/kontakt/?temat=Badania%20i%20publikacje">Zapytaj o nasze publikacje</TextLink></div><div className="research-areas"><p className="eyebrow">Obszary wiedzy</p>{["Zarządzanie","Psychologia pracy","Prawo"].map((t,i)=><div key={t}><span>0{i+1}</span><h3>{t}</h3><Icon name="Books" size={32}/></div>)}<p>Informacje o dostępnych raportach i analizach uzyskasz bezpośrednio od fundacji.</p></div></div></section>;
}
