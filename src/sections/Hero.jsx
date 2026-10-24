import { useEffect, useRef } from "react";
import Icon from "../components/Icon";
import EgMark from "../components/EgMark";
import { site } from "../data/site.config";
import portrait from "../assets/portrait.jpg";

/* Orbital geometry — decorative SVG artwork behind the portrait. */
function OrbitalArt() {
  return (
    <svg
      className="orbital"
      width="560"
      height="560"
      viewBox="0 0 560 560"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="280" cy="280" r="252" opacity="0.35" />
        <circle cx="280" cy="280" r="196" opacity="0.22" />
        <g className="spin" strokeDasharray="2 9" opacity="0.85">
          <circle cx="280" cy="280" r="224" />
        </g>
        <g className="thick" strokeDasharray="1 14" opacity="0.6">
          <circle cx="280" cy="280" r="148" />
        </g>
        <path d="M280 0 V560 M0 280 H560" opacity="0.12" />
      </g>
      <circle cx="280" cy="56" r="3.5" fill="currentColor" />
      <circle cx="478" cy="82" r="2.4" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const orbitalRef = useRef(null);

  /* subtle cursor parallax on the orbital artwork (desktop pointers only) */
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    const hero = heroRef.current;
    const art = orbitalRef.current;
    if (!hero || !art) return;
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      art.style.setProperty("--px", `${nx * 14}px`);
      art.style.setProperty("--py", `${ny * 10}px`);
    };
    hero.addEventListener("mousemove", onMove, { passive: true });
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  const { titleLines = [], serifWords = [] } = site.hero;

  return (
    <section className="hero" id="top" ref={heroRef} aria-label="Introduction">
      <div ref={orbitalRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <OrbitalArt />
      </div>

      <div className="container hero__grid">
        <div>
          <p className="overline hero__overline">{site.hero.overline}</p>

          <h1 className="hero__title">
            {titleLines.map((line, i) => (
              <span className="line" key={line}>
                <span className="line-inner">
                  {serifWords.includes(line) ? (
                    <span className="serif-accent">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero__lede">{site.hero.lede}</p>

          <div className="hero__ctas">
            <a href="#work" className="btn btn--gold">
              View selected work
              <Icon name="arrowRight" size={16} className="btn-arrow" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>

          <div className="hero__meta">
            {site.hero.chips.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <figure className="hero__portrait">
          <div className="portrait-ticks" aria-hidden="true" />
          <div className="portrait-frame">
            <img
              src={portrait}
              alt="Portrait of Esmael Gemechu — software engineering student"
              width={768}
              height={1024}
              decoding="async"
            />
            <figcaption className="portrait-caption">
              <b>EG</b> · Arba Minch University
            </figcaption>
          </div>
        </figure>
      </div>

      <a className="hero__scroll" href="#work" aria-label="Scroll to selected work">
        Scroll
        <i />
      </a>
    </section>
  );
}
