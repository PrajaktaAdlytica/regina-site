import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import Site from "./App.jsx";
import "./styles.css";
import "./pages.css";
const root = document.getElementById("root");
const app = <Site path={location.pathname} />;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
