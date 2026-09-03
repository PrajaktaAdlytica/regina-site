import React, { useEffect, useRef } from "react";
import { PhotoPillars } from "./Editorial.jsx";
import ProgrammeExplorer from "./ProgrammeExplorer.jsx";
import { organisation as org, projects } from "./content.js";
import {
  Button,
  TextLink,
  SectionIntro,
  Artwork,
  ProjectList,
  PartnershipCTA,
} from "./components.jsx";
export default function Home({ hero }) {
  const page = useRef(null);
  useEffect(() => {
    let disposed = false, cleanup;
    import('./home-scroll-engine.js').then(({ mountHomeScrollMotion }) => {
      if (!disposed) cleanup = mountHomeScrollMotion(page.current);
    }).catch(() => { /* Progressive enhancement: the complete page stays usable. */ });
    return () => { disposed = true; cleanup?.(); };
  }, []);
  return (
    <div ref={page} className="home-page">
      <section className="home-intro-surface">
      <div className="home-intro container">
        <div>
          <h1>
            <span className="home-title-name">Fundacja Regina Purpurea Fundus</span>{" "}
            od ponad 20 lat działamy na rzecz rozwoju społecznego i gospodarczego{" "}
            <em>Polski i społeczności międzynarodowej.</em>
          </h1>
        </div>
        <div className="home-intro-aside">
          <span className="intro-marker">
            Polska · Współpraca międzynarodowa
          </span>
          <p className="muted">
            Wspieramy edukację zawodową, transformację technologiczną
            przedsiębiorstw oraz międzynarodową współpracę społeczną.
          </p>
          <div className="home-programme-cta">
            <span className="home-programme-name">ACCELERATE POLAND</span>
            <Button href={projects[0].url} external>Poznaj nasze programy</Button>
          </div>
        </div>
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
          <p>{org.purpose}</p>
          <TextLink href="/misja/">Poznaj naszą misję</TextLink>
        </div>
      </section>
      <section className="container section accelerate-banner">
        <div>
          <p className="eyebrow">Poznaj nasze programy</p>
          <h2 className="accelerate-brand-heading">
            <img src={projects[0].logo} alt="ACCELERATE POLAND" width="1200" height="792" loading="lazy" decoding="async" />
          </h2>
          <Button href={projects[0].url} external>
            Poznaj nasze programy
          </Button>
        </div>
        <Artwork
          name="technology"
          alt="Ilustracja współpracy przy projektowaniu i wdrażaniu technologii."
        />
      </section>
      <PhotoPillars />
      <ProgrammeExplorer />
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
      <PartnershipCTA />
    </div>
  );
}
