import React, { useEffect } from "react";
import { Header, Footer, CookieNotice } from "./components.jsx";
import Home from "./Home.jsx";
import HeroJourney from "./HeroJourney.jsx";
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
        {normalised === "/" ? <Home hero={<HeroJourney />} /> : <Page />}
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
}
