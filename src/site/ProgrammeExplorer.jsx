import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { programmes } from "./content.js";
import "./programme-explorer.css";

export default function ProgrammeExplorer() {
  return <section className="programme-explorer" id="programy" aria-labelledby="explorer-title">
    <div className="container section">
      <div className="explorer-heading">
        <div><p className="eyebrow">Sześć obszarów. Wspólny cel.</p><h2 id="explorer-title">Działania</h2></div>
        <p>Nasze programy łączą doradztwo, szkolenia i projekty badawcze, aby dostarczać praktyczne rozwiązania dla przedsiębiorstw i społeczności.</p>
      </div>
      <div className="explorer-overview">
        <figure className="explorer-art">
          <img src="/site/activities-collage.webp" width="1254" height="1254" loading="lazy" decoding="async" alt="Kolaż tematyczny: współpraca nad raportami, badania laboratoryjne i dzielenie się wiedzą — obraz wygenerowany z użyciem AI." />
          <figcaption>Wiedza i współpraca na rzecz wspólnego rozwoju.</figcaption>
        </figure>
        <nav className="explorer-links" aria-label="Obszary działania">
          <ol>{programmes.map((programme, index) => <li key={programme.id}>
            <a href={`/dzialania/#${programme.id}`}>
              <span className="explorer-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="explorer-title">{programme.title}</span>
              <ArrowRight size={22} aria-hidden="true" />
            </a>
          </li>)}</ol>
        </nav>
      </div>
    </div>
  </section>;
}
