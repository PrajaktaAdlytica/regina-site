import React, { useEffect, useState } from "react";
import { Header, Footer, CookieNotice } from "./components.jsx";
import Home from "./Home.jsx";
import HeroLab from './HeroLab.jsx';
import {
  Mission,
  Activities,
  Projects,
  Partnership,
  Contact,
  Privacy,
  Legal,
  NotFound,
} from "./Pages.jsx";
const routes = {
  "/misja/": Mission,
  "/dzialania/": Activities,
  "/projekty/": Projects,
  "/partnerstwo/": Partnership,
  "/kontakt/": Contact,
  "/prywatnosc/": Privacy,
  "/informacje/": Legal,
};
export default function Site({ path = "/" }) {
  const [heroVariant, setHeroVariant] = useState(null);
  const [heroLab, setHeroLab] = useState(false);
  useEffect(() => {
    setHeroLab(new URLSearchParams(location.search).has('hero-lab'));
    const value = Number(new URLSearchParams(location.search).get('hero'));
    if ([1, 2, 3].includes(value)) setHeroVariant(value);
  }, []);
  useEffect(() => {
    // Vite's client-rendered preview has no anchor target until React mounts.
    // Wait for fonts so a cross-page programme link also lands accurately there.
    if (!location.hash) return;
    let cancelled = false;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    (document.fonts?.ready || Promise.resolve()).then(() => {
      if (!cancelled) document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    });
    return () => { cancelled = true; };
  }, [path]);
  const normalised = path === "/" ? "/" : path.replace(/\/$/, "") + "/";
  const Page = routes[normalised] || NotFound;
  return (
    <div id="top" data-page={normalised}>
      <Header path={normalised} />
      <main id="main">
        {normalised === "/" && heroLab ? <React.Suspense fallback={<p className="container">Ładowanie podglądu…</p>}><HeroLab /></React.Suspense> : normalised === "/" ? <Home variant={heroVariant} hero={<React.Suspense fallback={<p className="container">Ładowanie podglądu…</p>}><HeroLab bookOnly /></React.Suspense>} /> : <Page />}
      </main>
      {!heroLab && <><Footer /><CookieNotice /></>}
    </div>
  );
}
