import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Pause,
  Play,
  ArrowCounterClockwise,
  Cube,
} from "@phosphor-icons/react";
import { programmes } from "./content.js";
const Sculpture = lazy(() => import("../Sculpture.jsx"));
const chapters = [programmes[5], programmes[0], programmes[3]];
export default function HeroJourney() {
  const host = useRef(null),
    progress = useRef(0),
    bar = useRef(null);
  const [chapter, setChapter] = useState(0),
    [enhanced, setEnhanced] = useState(false),
    [motion, setMotion] = useState(true),
    [scene, setScene] = useState("loading");
  useEffect(() => {
    const media = matchMedia(
      "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
    );
    const update = () =>
      setEnhanced(media.matches && !navigator.connection?.saveData);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!enhanced) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = host.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const stage = el.querySelector(".hero-sticky").offsetHeight;
      const p = Math.max(
        0,
        Math.min(1, (16 - rect.top) / Math.max(1, el.offsetHeight - stage)),
      );
      progress.current = p;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      setChapter(p < 0.29 ? 0 : p < 0.72 ? 1 : 2);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
    };
  }, [enhanced]);
  const jump = (i) => {
    setChapter(i);
    progress.current = [0, 0.47, 0.94][i];
    if (enhanced) {
      const el = host.current;
      window.scrollTo({
        top:
          scrollY +
          el.getBoundingClientRect().top -
          16 +
          (el.offsetHeight - el.querySelector(".hero-sticky").offsetHeight) *
            progress.current,
        behavior: motion ? "smooth" : "instant",
      });
    }
  };
  const current = chapters[chapter];
  return (
    <section
      ref={host}
      className={`hero-journey ${enhanced ? "enhanced" : "compact"} hero-chapter-${chapter}`}
      aria-label="Edukacja, innowacje, współpraca"
    >
      <div className="hero-sticky">
        <div className="hero-scene">
          <div className="hero-canvas" aria-hidden="true">
            {enhanced && scene !== "failed" && (
              <Suspense fallback={null}>
                <Sculpture
                  progress={progress}
                  motion={motion}
                  onState={setScene}
                />
              </Suspense>
            )}
            {(!enhanced || scene !== "ready") && (
              <img
                className="hero-static"
                src={`/site/${current.image}.webp`}
                alt=""
                width="1536"
                height="1024"
              />
            )}
          </div>
          <div className="hero-toolbar">
            <span>
              <Cube size={18} weight="light" />
              Forma współpracy
            </span>
            {enhanced && scene !== "failed" && (
              <button
                onClick={() => setMotion((v) => !v)}
                aria-pressed={!motion}
              >
                {motion ? <Pause size={16} /> : <Play size={16} />}{" "}
                {motion ? "Zatrzymaj ruch" : "Włącz ruch"}
              </button>
            )}
          </div>
          <div className="hero-caption">
            <p className="eyebrow">
              0{chapter + 1} /{" "}
              {
                [
                  "Rozwój kompetencji",
                  "Transformacja technologiczna",
                  "Transfer wiedzy",
                ][chapter]
              }
            </p>
            <h2>{current.short}.</h2>
            <p>{current.text}</p>
            <a href={"/dzialania/#" + current.id}>
              Poznaj ten obszar <ArrowUpRight size={20} />
            </a>
          </div>
          <span className="hero-side-note">REGINA PURPUREA FUNDUS — NGO</span>
        </div>
        <div className="hero-controls">
          <a href="#obszary">
            <ArrowDown size={20} />
            <span>Przewiń, aby odkryć</span>
          </a>
          <div className="hero-chapters" aria-label="Obszary działania">
            {chapters.map((c, i) => (
              <button
                key={c.id}
                onClick={() => jump(i)}
                aria-pressed={chapter === i}
              >
                <span>0{i + 1}</span>
                {c.short}
              </button>
            ))}
          </div>
          <button
            className="hero-reset"
            onClick={() => jump(0)}
            aria-label="Wróć do pierwszego obszaru"
          >
            <ArrowCounterClockwise size={22} />
          </button>
        </div>
        <div className="hero-progress" aria-hidden="true">
          <span ref={bar} />
        </div>
      </div>
    </section>
  );
}
