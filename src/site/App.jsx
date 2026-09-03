import React from "react";
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
  const normalised = path === "/" ? "/" : path.replace(/\/$/, "") + "/";
  const Page = routes[normalised] || NotFound;
  return (
    <div id="top">
      <Header path={normalised} />
      <main id="main">
        {normalised === "/" ? <Home hero={<HeroJourney />} /> : <Page />}
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
}
