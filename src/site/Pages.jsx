import React from "react";
import { organisation as org, programmes, goals, projects } from "./content.js";
import {
  PageIntro,
  SectionIntro,
  PartnershipCTA,
  Button,
  TextLink,
  Artwork,
  Icon,
  Accordion,
} from "./components.jsx";
import ContactForm from "./ContactForm.jsx";
export function Mission() {
  return (
    <>
      <PageIntro
        eyebrow="Misja i cele"
        title={
          <>
            Wiedza, która wzmacnia.
            <br />
            <em>Współpraca, która łączy.</em>
          </>
        }
      >
        <p>
          Od ponad dwóch dekad działamy na rzecz rozwoju społecznego i
          gospodarczego Polski i społeczności międzynarodowej.
        </p>
      </PageIntro>
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
      <section className="container section">
        <SectionIntro
          eyebrow="Kierunki zaangażowania"
          title={
            <>
              Sześć celów.
              <br />
              Wspólna odpowiedzialność.
            </>
          }
        >
          <p>{org.purpose}</p>
        </SectionIntro>
        <div className="goal-grid">
          {goals.map(([icon, title, text], i) => (
            <article key={title}>
              <span className="goal-number">0{i + 1}</span>
              <Icon name={icon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="geography-section">
        <div className="container section geography-grid">
          <div>
            <p className="eyebrow">
              Polskie korzenie. Międzynarodowa współpraca.
            </p>
            <h2>
              Blisko potrzeb.
              <br />
              <em>Ponad granicami.</em>
            </h2>
            <p>{org.intro}</p>
            <ul className="region-list" aria-label="Regiony współpracy">
              <li>Europa</li>
              <li>Afryka</li>
              <li>Azja</li>
              <li>Australia</li>
            </ul>
            <TextLink href="/partnerstwo/">
              Poznaj możliwości współpracy
            </TextLink>
          </div>
          <figure>
            <img
              src="/visual-library/poland-outline.svg"
              alt="Kontur Polski."
              width="800"
              height="480"
              loading="lazy"
            />
            <figcaption>Polska — miejsce, z którego działamy.</figcaption>
          </figure>
        </div>
      </section>
      <section className="container section illustration-statement">
        <Artwork
          name="community"
          alt="Ilustracja ludzi wspólnie pracujących na rzecz społeczności."
        />
        <div>
          <p className="eyebrow">Rozwój społeczny</p>
          <h2>
            Kompetencje ludzi.
            <br />
            Potencjał społeczności.
          </h2>
          <p>
            Inicjatywy lokalne na rzecz integracji, aktywizacji zawodowej i
            rozwoju kompetencji społecznych.
          </p>
          <TextLink href="/dzialania/#spolecznosc">
            Poznaj nasze działania
          </TextLink>
        </div>
      </section>
      <section className="city-context"><figure><img src="/site/warsaw.webp" width="1600" height="900" alt="Panorama Warszawy nad Wisłą z Mostem Świętokrzyskim." loading="lazy"/><figcaption><span>Warszawa, Polska — kontekst miejsca.</span><a href="/informacje/">Fot. Arne Müseler · CC BY-SA 3.0 DE</a></figcaption></figure></section>
      <PartnershipCTA />
    </>
  );
}
export function Activities() {
  return (
    <>
      <PageIntro
        eyebrow="Działania"
        title={
          <>
            Praktyczna wiedza.
            <br />
            <em>Rzeczywiste możliwości.</em>
          </>
        }
      >
        <p>
          Nasze programy łączą doradztwo, szkolenia i projekty badawcze, aby
          dostarczać praktyczne rozwiązania dla przedsiębiorstw i społeczności.
        </p>
      </PageIntro>
      <nav className="programme-jump container" aria-label="Obszary działania">
        {programmes.map((p, i) => (
          <a key={p.id} href={"#" + p.id}>
            <span>0{i + 1}</span>
            {p.short}
          </a>
        ))}
      </nav>
      <div className="programme-chapters">
        {programmes.map((p, i) => (
          <section
            className={"programme-chapter " + (i % 2 ? "reversed" : "")}
            id={p.id}
            key={p.id}
          >
            <div className="container programme-chapter-inner">
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
                {p.image ? (
                  <Artwork
                    name={p.image}
                    alt={"Ilustracja: " + p.title + "."}
                  />
                ) : (
                  <img
                    src={"/visual-library/" + p.vector + ".svg"}
                    alt=""
                    width="800"
                    height="480"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
      <PartnershipCTA />
    </>
  );
}
export function Projects() {
  return (
    <>
      <PageIntro
        eyebrow="Aktualne projekty"
        title={
          <>
            Inicjatywy, które
            <br />
            <em>łączą możliwości.</em>
          </>
        }
      >
        <p>
          Poznaj aktualne projekty Fundacji Regina Purpurea Fundus. Każdy z nich
          ma własną stronę, na której znajdziesz więcej informacji.
        </p>
      </PageIntro>
      <section
        className="container project-showcase"
        aria-label="Projekty fundacji"
      >
        {projects.map((p) => (
          <article key={p.id} className={"project-panel " + p.theme}>
            <div className="project-panel-top">
              <span>Projekt / {p.number}</span>
              <Icon
                name={
                  p.id === "accelerate" ? "Lightbulb" : "GlobeHemisphereEast"
                }
                size={56}
              />
            </div>
            <h2>{p.title}</h2>
            <div className="project-panel-bottom">
              <span>{p.domain}</span>
              <Button href={p.url} external secondary={p.theme === "stone"}>
                Odwiedź stronę projektu
              </Button>
            </div>
          </article>
        ))}
      </section>
      <section className="container section project-context">
        <div>
          <p className="eyebrow">Wspólne obszary</p>
          <h2>
            Edukacja. Innowacje.
            <br />
            Współpraca.
          </h2>
          <p>{org.intro}</p>
          <TextLink href="/dzialania/">Poznaj działania fundacji</TextLink>
        </div>
        <Artwork
          name="international"
          alt="Ilustracja międzynarodowej wymiany wiedzy i współpracy."
        />
      </section>
      <PartnershipCTA />
    </>
  );
}
export function Partnership() {
  return (
    <>
      <PageIntro
        eyebrow="Partnerstwo"
        title={
          <>
            Łączymy wiedzę,
            <br />
            ludzi <em>i instytucje.</em>
          </>
        }
      >
        <p>
          Wspólne projekty, doradztwo eksperckie i wsparcie w pozyskiwaniu
          finansowania.
        </p>
      </PageIntro>
      <section className="partnership-opening container">
        <Artwork
          name="international"
          alt="Ilustracja rozmów i współpracy osób z różnych środowisk."
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
              "Wsparcie w pozyskiwaniu finansowania",
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
    </>
  );
}
export function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Kontakt"
        title={
          <>
            Dobry początek?
            <br />
            <em>Rozmowa.</em>
          </>
        }
      >
        <p>
          Chcesz porozmawiać o współpracy, naszych programach lub projekcie?
          Skontaktuj się z nami.
        </p>
      </PageIntro>
      <section className="container contact-layout">
        <div className="contact-details">
          <p className="eyebrow">Fundacja Regina Purpurea Fundus</p>
          <h2>Jesteśmy w kontakcie.</h2>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={"mailto:" + org.email}>{org.email}</a>
              </dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href={"tel:" + org.telephone}>{org.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Siedziba</dt>
              <dd>{org.city}</dd>
            </div>
          </dl>
          <img
            src="/visual-library/poland-warsaw.svg"
            alt="Polska z zaznaczoną Warszawą — miastem siedziby fundacji."
            width="800"
            height="480"
          />
          <p className="small-muted">
            KRS {org.krs} · NIP {org.nip}
            <br />
            REGON {org.regon}
          </p>
        </div>
        <ContactForm />
      </section>
      <section className="container section">
        <SectionIntro
          eyebrow="Przed pierwszą rozmową"
          title="Warto wiedzieć."
        />
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
    </>
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
