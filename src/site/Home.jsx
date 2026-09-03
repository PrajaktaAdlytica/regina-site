import React from "react";
import { organisation as org, programmes } from "./content.js";
import {
  Button,
  TextLink,
  SectionIntro,
  Artwork,
  Icon,
  ProjectList,
  PartnershipCTA,
} from "./components.jsx";
export default function Home({ hero }) {
  const pillars = [programmes[5], programmes[0], programmes[3]];
  return (
    <>
      <section className="home-intro container">
        <div>
          <p className="eyebrow">Fundacja Regina Purpurea Fundus</p>
          <h1>
            Od ponad 20 lat
            <br />
            działamy na rzecz
            <br />
            <em>wspólnego rozwoju.</em>
          </h1>
        </div>
        <div className="home-intro-aside">
          <span className="intro-marker">
            Polska · Współpraca międzynarodowa
          </span>
          <p>
            Wspieramy rozwój społeczny i gospodarczy Polski i społeczności
            międzynarodowej.
          </p>
          <p className="muted">
            Wspieramy edukację zawodową, transformację technologiczną
            przedsiębiorstw oraz międzynarodową współpracę społeczną.
          </p>
          <Button href="/dzialania/">Poznaj nasze programy</Button>
        </div>
      </section>
      {hero}
      <section className="container section mission-intro">
        <p className="eyebrow">Doświadczenie, które łączy</p>
        <div>
          <h2>
            Wiedza. Ludzie.
            <br />
            <em>Wspólne możliwości.</em>
          </h2>
          <p>{org.intro}</p>
          <TextLink href="/misja/">Poznaj naszą misję</TextLink>
        </div>
      </section>
      <section className="programmes-section" id="obszary">
        <div className="container section">
          <SectionIntro
            eyebrow="Obszary zaangażowania"
            title={
              <>
                Od kompetencji
                <br />
                do działania.
              </>
            }
          >
            <p>
              Nasze programy łączą doradztwo, szkolenia i projekty badawcze, aby
              dostarczać praktyczne rozwiązania dla przedsiębiorstw i
              społeczności.
            </p>
          </SectionIntro>
          <div className="pillar-grid">
            {pillars.map((p, i) => (
              <article key={p.id}>
                <div className="pillar-heading">
                  <span>0{i + 1}</span>
                  <Icon name={p.icon} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a
                  href={"/dzialania/#" + p.id}
                  className="pillar-art"
                  aria-label={"Poznaj: " + p.title}
                >
                  <Artwork name={p.image} />
                </a>
                <TextLink href={"/dzialania/#" + p.id}>
                  Dowiedz się więcej
                </TextLink>
              </article>
            ))}
          </div>
          <div className="section-end">
            <TextLink href="/dzialania/">Wszystkie obszary działania</TextLink>
          </div>
        </div>
      </section>
      <section className="projects-band">
        <div className="container section">
          <SectionIntro
            eyebrow="Nasze inicjatywy"
            title={
              <>
                Aktualne
                <br />
                projekty.
              </>
            }
          >
            <p>
              Poznaj projekty Fundacji Regina Purpurea Fundus i przejdź do ich
              stron.
            </p>
          </SectionIntro>
          <ProjectList />
          <TextLink href="/projekty/">Poznaj wszystkie projekty</TextLink>
        </div>
      </section>
      <section className="container section accelerate-banner">
        <div>
          <p className="eyebrow">Poznaj nasze programy</p>
          <h2>
            ACCELERATE
            <br />
            <em>POLAND</em>
          </h2>
          <Button href="https://www.acceleratepoland.org.pl" external>
            Przejdź do projektu
          </Button>
        </div>
        <Artwork
          name="technology"
          alt="Ilustracja współpracy przy projektowaniu i wdrażaniu technologii."
        />
      </section>
      <PartnershipCTA />
    </>
  );
}
