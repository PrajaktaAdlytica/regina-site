import React, { useEffect, useRef } from "react";
import { organisation as org, programmes, projects } from "./content.js";
import MissionAtlas from "./MissionAtlas.jsx";
import InternationalCooperation from "./InternationalCooperation.jsx";
import "./community-feature.css";
import "./bridge-scroll.css";
import "./mission-statement.css";
import "./activities.css";
import "./projects.css";
import "./partnership-scroll.css";
import "./partnership-hover.css";
import "./contact.css";
import { EnvelopeSimple, Phone, ArrowUpRight, MapPin } from "@phosphor-icons/react";
import {
  PageIntro,
  ProjectList,
  SectionIntro,
  PartnershipCTA,
  Button,
  TextLink,
  Artwork,
  Icon,
  Accordion,
} from "./components.jsx";
import ContactForm from "./ContactForm.jsx";
import { MissionPhotoHero, PartnershipCollageHero, ConnectedCollage, ResearchEditorial, Photo, photoSources } from "./Editorial.jsx";
export function Mission() {
  const page = useRef(null);
  useEffect(() => {
    let disposed = false, cleanup;
    import('./mission-scroll-engine.js').then(({ mountMissionScrollMotion }) => {
      if (!disposed) cleanup = mountMissionScrollMotion(page.current);
    }).catch(() => { /* Motion is optional; all content stays readable. */ });
    return () => { disposed = true; cleanup?.(); };
  }, []);
  return (
    <div className="mission-page" ref={page}>
      <MissionPhotoHero />
      <section className="mission-statement">
        <div className="container">
          <p className="eyebrow">Nasza misja</p>
          <h2>{org.mission}</h2>
          <div className="statement-bottom">
            <span>Regina Purpurea Fundus</span>
            <Icon name="Target" size={64} />
          </div>
        </div>
      </section>
      <MissionAtlas />
      <InternationalCooperation />
      <section className="container section community-feature" id="rozwoj-spoleczny" aria-labelledby="community-title">
        <header className="community-feature-heading">
          <p className="eyebrow">Rozwój społeczny</p>
          <h2 id="community-title">Kompetencje ludzi.<br /><em>Potencjał społeczności.</em></h2>
        </header>
        <div className="community-feature-body">
        <figure className="community-feature-art">
          <Artwork
          name="community"
          alt="Ilustracja ludzi wspólnie pracujących na rzecz społeczności."
          />
        </figure>
        <div className="community-feature-copy">
          <p>
            Inicjatywy lokalne na rzecz integracji, aktywizacji zawodowej i
            rozwoju kompetencji społecznych.
          </p>
          <ul className="community-feature-themes" aria-label="Obszary rozwoju społecznego"><li>Integracja</li><li>Aktywizacja zawodowa</li><li>Kompetencje społeczne</li></ul>
          <TextLink href="/dzialania/#spolecznosc">
            Poznaj nasze działania
          </TextLink>
        </div>
        </div>
      </section>
      <PartnershipCTA />
    </div>
  );
}
export function Activities() {
  const page = useRef(null);
  useEffect(() => {
    let disposed = false, cleanup;
    import('./activities-scroll-engine.js').then(({ mountActivitiesScrollMotion }) => {
      if (!disposed) cleanup = mountActivitiesScrollMotion(page.current);
    }).catch(() => { /* Keep the complete page readable when motion is unavailable. */ });
    return () => { disposed = true; cleanup?.(); };
  }, []);
  const orderedProgrammes = [programmes[5], programmes[3], programmes[2], programmes[0], programmes[1], programmes[4]];
  const photos = {edukacja:"students",wspolpraca:"meeting",spolecznosc:"mentoring",innowacje:"laboratory",przedsiebiorcy:"business-consultation-v2",badania:"report-analysis-v2"};
  return (
    <div className="activities-page" ref={page}>
      <section className="activities-opening container" aria-labelledby="activities-title">
        <nav className="activities-breadcrumb" aria-label="Ścieżka nawigacji"><a href="/">Strona główna</a><span aria-hidden="true">/</span><span aria-current="page">Działania</span></nav>
        <div className="activities-opening-grid">
          <div className="activities-opening-copy">
            <p className="eyebrow">Działania / Regina Purpurea Fundus</p>
            <h1 id="activities-title">Praktyczna{" "}<br />wiedza.<em>Rzeczywiste możliwości.</em></h1>
            <p className="activities-opening-description">Nasze programy łączą doradztwo, szkolenia i projekty badawcze, aby dostarczać praktyczne rozwiązania dla przedsiębiorstw i społeczności.</p>
          </div>
          <nav className="activities-index" aria-label="Obszary działania">
            <div className="activities-index-heading"><span>Obszary działania</span><span>01 — 06</span></div>
            <ol>{orderedProgrammes.map((p, i) => (
              <li key={p.id}><a href={"#" + p.id}>
                <span className="activities-index-number">0{i + 1}</span>
                <Icon name={p.icon} size={28} />
                <span className="activities-index-name">{p.short}</span>
                <Icon name="ArrowDownRight" size={22} className="activities-index-arrow" />
              </a></li>
            ))}</ol>
          </nav>
        </div>
      </section>
      <div className="programme-chapters editorial-chapters container">
        {orderedProgrammes.map((p, i) => (
          <section
            className={"programme-chapter " + (i % 2 ? "reversed" : "")}
            id={p.id}
            key={p.id}
          >
            <div className="programme-chapter-inner">
              <div className="programme-copy">
                <div className="programme-label">
                  <span>0{i + 1} / Obszar działania</span>
                  <Icon name={p.icon} />
                </div>
                <h2>{p.title}</h2>
                <p>{p.text}</p>
                <ul className="topic-list">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <TextLink
                  href={"/kontakt/?temat=" + encodeURIComponent(p.title)}
                >
                  Porozmawiajmy o tym obszarze
                </TextLink>
              </div>
              <div className="programme-art">
                <Photo name={photos[p.id]} alt={`Fotografia tematyczna: ${p.title}.`} />
              </div>
            </div>
          </section>
        ))}
      </div>
      <ResearchEditorial />
      <PartnershipCTA />
    </div>
  );
}
export function Projects() {
  const page = useRef(null);
  useEffect(() => {
    let disposed = false, cleanup;
    import('./projects-scroll-engine.js').then(({ mountProjectsScrollMotion }) => {
      if (!disposed) cleanup = mountProjectsScrollMotion(page.current);
    }).catch(() => { /* Motion is optional; project links remain available. */ });
    return () => { disposed = true; cleanup?.(); };
  }, []);
  return (
    <div className="projects-page" ref={page}>
      <section className="projects-opening container" aria-labelledby="projects-title">
        <nav className="projects-breadcrumb" aria-label="Ścieżka nawigacji"><a href="/">Strona główna</a><span aria-hidden="true">/</span><span aria-current="page">Aktualne projekty</span></nav>
        <div className="projects-opening-grid">
          <div className="projects-opening-title">
            <p className="eyebrow">Aktualne projekty</p>
            <h1 id="projects-title">Inicjatywy, które <em>łączą możliwości.</em></h1>
          </div>
          <div className="projects-opening-note">
            <div className="projects-opening-count"><span>{String(projects.length).padStart(2, '0')}</span><span>Aktualne<br />projekty</span><Icon name="Stack" size={36} /></div>
            <p>Poznaj aktualne projekty Fundacji Regina Purpurea Fundus. Każdy z nich ma własną stronę, na której znajdziesz więcej informacji.</p>
          </div>
        </div>
      </section>
      <ConnectedCollage />
      <section
        className="container section projects-directory"
        aria-label="Projekty fundacji"
      >
        <ProjectList />
      </section>
      <PartnershipCTA />
    </div>
  );
}
export function Partnership() {
  const page = useRef(null);
  useEffect(() => {
    let disposed = false, cleanup;
    import('./partnership-scroll-engine.js').then(({ mountPartnershipScrollMotion }) => {
      if (!disposed) cleanup = mountPartnershipScrollMotion(page.current);
    }).catch(() => { /* Optional enhancement: content and links stay visible. */ });
    return () => { disposed = true; cleanup?.(); };
  }, []);
  return (
    <div className="partnership-page" ref={page}>
      <PartnershipCollageHero />
      <section className="partnership-opening partnership-composition">
        <Artwork
          name="partnership-collaboration-v2"
          alt="Kolaż fotograficzny trzech osób wspólnie analizujących dokumenty; scena tematyczna, nie przedstawia zespołu fundacji."
        />
        <div>
          <p>{org.partnership}</p>
          <Button href="/kontakt/">Nawiąż współpracę</Button>
        </div>
      </section>
      <section className="partner-types">
        <div className="container section">
          <SectionIntro
            eyebrow="Partnerzy i współpraca"
            title={
              <>
                Różne perspektywy.
                <br />
                Wspólne działanie.
              </>
            }
          >
            <p>
              Współpracujemy z instytucjami publicznymi, samorządami,
              uczelniami, organizacjami pozarządowymi oraz partnerami
              biznesowymi.
            </p>
          </SectionIntro>
          <div className="partner-grid">
            {[
              ["GraduationCap", "Uczelnie i edukacja"],
              ["Briefcase", "Partnerzy biznesowi"],
              ["UsersThree", "Organizacje społeczne"],
              ["Bank", "Instytucje i samorządy"],
            ].map(([icon, title]) => (
              <article key={title}>
                <Icon name={icon} size={48} />
                <h3>{title}</h3>
              </article>
            ))}
          </div>
          <div className="network-block">
            <img
              src="/visual-library/network-institutions.svg"
              alt="Schemat współpracy: edukacja, przedsiębiorcy, administracja i społeczności wokół wspólnego działania."
              width="800"
              height="480"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">Przestrzeń współpracy</p>
              <h3>
                Doświadczenie eksperckie.
                <br />
                Praktyczne wsparcie.
              </h3>
              <p>
                Schemat pokazuje obszary współpracy fundacji, a nie listę
                konkretnych partnerów.
              </p>
              <TextLink href="/kontakt/">Rozpocznij rozmowę</TextLink>
            </div>
          </div>
        </div>
      </section>
      <section className="container section">
        <SectionIntro
          eyebrow="Możliwości współpracy"
          title="Co możemy robić wspólnie?"
        />
        <div className="offer-grid">
          {[
            [
              "Wspólne projekty",
              "Łączymy doświadczenie eksperckie z praktycznym wsparciem dla przedsiębiorców, instytucji edukacyjnych i społeczności lokalnych.",
            ],
            [
              "Doradztwo eksperckie",
              "Nasze programy łączą doradztwo, szkolenia i projekty badawcze.",
            ],
            [
              "Wsparcie finansowe",
              "Oferujemy partnerom wsparcie w pozyskiwaniu finansowania wspólnych inicjatyw.",
            ],
          ].map(([title, text], i) => (
            <article key={title}>
              <img
                src={`/visual-library/step-0${i + 1}.svg`}
                width="320"
                height="110"
                alt=""
              />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mauve-section">
        <div className="container section">
          <SectionIntro
            eyebrow="Doświadczenie instytucjonalne"
            title={
              <>
                Odpowiedzialna
                <br />
                współpraca.
              </>
            }
          >
            <p>
              Nasze doświadczenie obejmuje współpracę z organami centralnymi i
              lokalnymi w Polsce oraz partnerami w wielu krajach Europy, Afryki,
              Azji i Australii.
            </p>
          </SectionIntro>
          <p className="mauve-note">
            Współpraca z administracją i doświadczenie w partnerstwie
            publiczno-prywatnym uzupełniają nasze zaangażowanie w edukację,
            innowacje i rozwój społeczny.
          </p>
        </div>
      </section>
      <PartnershipCTA />
    </div>
  );
}
export function Contact() {
  const page = useRef(null);
  useEffect(() => {
    let disposed = false, cleanup;
    import('./contact-scroll-engine.js').then(({ mountContactScrollMotion }) => {
      if (!disposed) cleanup = mountContactScrollMotion(page.current);
    }).catch(() => { /* Keep contact controls usable without the motion enhancement. */ });
    return () => { disposed = true; cleanup?.(); };
  }, []);
  return (
    <div className="contact-page" ref={page}>
      <section className="contact-opening container" aria-labelledby="contact-title">
        <nav aria-label="Ścieżka nawigacji" className="contact-breadcrumb"><a href="/">Strona główna</a><span aria-hidden="true">/</span><span aria-current="page">Kontakt</span></nav>
        <div className="contact-opening-grid">
          <div><p className="eyebrow">Kontakt / Regina Purpurea Fundus</p><h1 id="contact-title">Dobry początek?<br /><em>Rozmowa.</em></h1></div>
          <div className="contact-opening-note"><Icon name="Handshake" size={56}/><p>Chcesz porozmawiać o współpracy, naszych programach lub projekcie? Skontaktuj się z nami.</p><TextLink href="#wiadomosc">Napisz do nas</TextLink></div>
        </div>
      </section>
      <section className="container contact-layout">
        <div className="contact-details">
          <header><p className="eyebrow">Bezpośredni kontakt</p><h2>Jesteśmy<br /><em>w kontakcie.</em></h2></header>
          <dl>
            <div className="contact-detail-row"><dt><EnvelopeSimple size={22} aria-hidden="true"/>Email</dt><dd><a href={"mailto:" + org.email}>{org.email}<ArrowUpRight size={22} aria-hidden="true"/></a></dd></div>
            <div className="contact-detail-row"><dt><Phone size={22} aria-hidden="true"/>Telefon</dt><dd><a href={"tel:" + org.telephone}>{org.phone}<ArrowUpRight size={22} aria-hidden="true"/></a></dd></div>
            <div className="contact-detail-row"><dt><MapPin size={22} aria-hidden="true"/>Siedziba</dt><dd>{org.city}</dd></div>
          </dl>
          <div className="contact-registration"><p>{org.name}</p><dl>{[['KRS',org.krs],['NIP',org.nip],['REGON',org.regon]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
        </div>
        <div className="contact-form-wrap" id="wiadomosc"><ContactForm /></div>
      </section>
      <section className="contact-faq container section">
        <header><p className="eyebrow">Przed pierwszą rozmową</p><h2>Warto<br /><em>wiedzieć.</em></h2></header>
        <Accordion
          items={[
            [
              "W jakich sprawach można się skontaktować?",
              "W sprawach programów edukacyjnych, innowacji i transformacji technologicznej, wsparcia przedsiębiorców, projektów społecznych, badań oraz współpracy międzynarodowej.",
            ],
            [
              "Gdzie znajdę informacje o projektach?",
              "W zakładce Projekty znajdują się linki do stron Accelerate Poland, ASEAN Business Council Poland i SAFTA Business Council Poland.",
            ],
            [
              "Czy fundacja jest funduszem inwestycyjnym?",
              "Nie. Fundacja Regina Purpurea Fundus jest organizacją pozarządową działającą na rzecz rozwoju społecznego i gospodarczego.",
            ],
          ]}
        />
      </section>
    </div>
  );
}
export function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Prywatność" title="Twoja prywatność." />
      <article className="container legal-content">
        <h2>Kontakt z fundacją</h2>
        <p>
          Fundacja Regina Purpurea Fundus, Warszawa, Polska. Pytania dotyczące
          danych osobowych można kierować na adres{" "}
          <a href={"mailto:" + org.email}>{org.email}</a>.
        </p>
        <h2>Formularz i poczta elektroniczna</h2>
        <p>
          W tej wersji strony formularz pomaga przygotować wiadomość w Twoim
          programie pocztowym. Samo wypełnienie pól nie wysyła danych do
          fundacji. Decydujesz o wysłaniu wiadomości w programie pocztowym.
        </p>
        <p>
          Nie wpisuj danych wrażliwych ani informacji o innych osobach, które
          nie są potrzebne do rozmowy. Treść wiadomości jest dostępna fundacji
          dopiero po jej wysłaniu przez Ciebie.
        </p>
        <h2>Ustawienia na urządzeniu</h2>
        <p>
          Strona zapamiętuje na Twoim urządzeniu wyłącznie zamknięcie informacji
          o prywatności. Możesz usunąć ten zapis w ustawieniach przeglądarki.
          Nie uruchamiamy narzędzi analitycznych ani reklamowych.
        </p>
        <h2>Zewnętrzne strony</h2>
        <p>
          Linki do projektów prowadzą do odrębnych witryn. Korzystanie z nich
          może podlegać zasadom prywatności ich operatorów.
        </p>
        <h2>Informacje techniczne</h2>
        <p>
          Dostawca hostingu może przetwarzać dane techniczne niezbędne do
          udostępnienia i zabezpieczenia strony. Zasady przyszłego formularza
          wysyłającego wiadomości bezpośrednio z witryny zostaną opisane przed
          jego uruchomieniem.
        </p>
        <TextLink href="/kontakt/">Przejdź do kontaktu</TextLink>
      </article>
    </>
  );
}
export function Legal() {
  return (
    <>
      <PageIntro eyebrow="Informacje" title="Dane fundacji i źródła." />
      <article className="container legal-content">
        <h2>Fundacja Regina Purpurea Fundus</h2>
        <p>{org.legal}</p>
        <dl className="registration-list">
          <div>
            <dt>Siedziba</dt>
            <dd>{org.city}</dd>
          </div>
          <div>
            <dt>KRS</dt>
            <dd>{org.krs}</dd>
          </div>
          <div>
            <dt>NIP</dt>
            <dd>{org.nip}</dd>
          </div>
          <div>
            <dt>REGON</dt>
            <dd>{org.regon}</dd>
          </div>
        </dl>
        <h2>Materiały wizualne</h2>
        <p>
          Ilustracje ludzi i scen współpracy są materiałami koncepcyjnymi. Nie
          przedstawiają konkretnych uczestników, pracowników ani projektów
          fundacji.
        </p>
        <p>
          Ikony: <a href="https://phosphoricons.com/">Phosphor Icons</a>,
          licencja MIT.{" "}
          <a href="/visual-library/PHOSPHOR-LICENSE.txt">Treść licencji</a>.
        </p>
        <p>
          Mapa Polski:{" "}
          <a href="https://www.naturalearthdata.com/about/terms-of-use/">
            Natural Earth
          </a>
          , domena publiczna. Uproszczona mapa poglądowa; nie przedstawia
          zasięgu projektów.
        </p>
        <h2>Fotografia Warszawy</h2>
        <p>
          „Warsaw skyline Świętokrzyski Bridge”, Arne Müseler /{" "}
          <a href="https://www.arne-mueseler.com/">www.arne-mueseler.com</a>.{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Warsaw_skyline_%C5%9Awi%C4%99tokrzyski_Bridge.jpg">
            Źródło
          </a>
          .{" "}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/de/deed.en">
            CC BY-SA 3.0 DE
          </a>
          . Zmiany: zmniejszenie rozmiaru, konwersja do WebP i kadrowanie w
          układzie strony; wersja po zmianach udostępniana na tej samej
          licencji. Zdjęcie kontekstowe miasta, nie dokumentacja działalności
          fundacji.
        </p>
        <h2 id="fotografie">Fotografie tematyczne</h2>
        <p>Obrazy w sekcjach „Wsparcie dla przedsiębiorców” i „Badania i publikacje” na stronie Działania zostały wygenerowane z użyciem AI. Przedstawiają fikcyjne sceny konsultacji biznesowych i analizy raportów, nie wydarzenia ani pracowników fundacji.</p>
        <p>Kolaż w sekcji „Działania” na stronie głównej został wygenerowany z użyciem AI. Przedstawia fikcyjne sceny współpracy, badań i edukacji; nie jest dokumentacją wydarzeń fundacji.</p>
        <p>Obraz warsztatu przy sekcji „Wiedza. Ludzie. Wspólne możliwości.” na stronie głównej został wygenerowany z użyciem AI. To scena tematyczna, nie dokumentacja wydarzenia ani zespołu fundacji.</p>
        <p>Zdjęcia edukacji, spotkań i pracy w laboratorium ilustrują tematykę strony. Nie przedstawiają pracowników, partnerów ani uczestników projektów fundacji i nie stanowią dokumentacji jej działalności. Nie przypisujemy im lokalizacji w Polsce.</p>
        <ul className="photo-source-list">{photoSources.map(([author,url,subject])=><li key={url}><a href={url}>{subject}</a> — {author}, Pexels.</li>)}</ul>
        <p><a href="https://www.pexels.com/license/">Licencja Pexels</a>. Zmiany: zmniejszenie rozmiaru, kadrowanie i prezentacja w odcieniach szarości.</p>
        <p>Kolaże na stronach Partnerstwo i Projekty są ilustracjami koncepcyjnymi wygenerowanymi z użyciem AI. Przedstawione osoby nie są zespołem fundacji; połączenia na mapie nie oznaczają rzeczywistych lokalizacji projektów.</p>
        <TextLink href="/kontakt/">Kontakt z fundacją</TextLink>
      </article>
    </>
  );
}
export function NotFound() {
  return (
    <>
      <PageIntro eyebrow="404" title="Nie znaleziono strony.">
        <p>Wróć na stronę główną lub wybierz jeden z obszarów w menu.</p>
        <Button href="/">Strona główna</Button>
      </PageIntro>
    </>
  );
}
