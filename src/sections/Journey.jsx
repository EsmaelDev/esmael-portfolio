import { useState } from "react";
import Reveal from "../components/Reveal";
import { journeySteps } from "../data/journey.data";

export default function Journey() {
  const [active, setActive] = useState(0);
  const step = journeySteps[active];

  const onTabKey = (e, i) => {
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % journeySteps.length;
    if (e.key === "ArrowLeft")
      next = (i - 1 + journeySteps.length) % journeySteps.length;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      document.getElementById(`journey-tab-${next}`)?.focus();
    }
  };

  return (
    <section className="section" id="journey" aria-label="Development process">
      <div className="container">
        <Reveal className="section-head">
          <p className="overline">04 — Process</p>
          <h2 className="section-head__title">
            How I learn, build &amp;{" "}
            <span className="serif-accent">improve</span>.
          </h2>
          <p className="section-head__intro">
            An honest loop, repeated on every project — select a stage to see
            how I approach it.
          </p>
        </Reveal>

        <Reveal>
          <div className="stepper" role="tablist" aria-label="Development stages">
            <span
              className="stepper__track"
              aria-hidden="true"
              style={{
                width: `${(100 / journeySteps.length) * active}%`,
              }}
            />
            {journeySteps.map((s, i) => (
              <button
                key={s.id ?? s.num}
                type="button"
                role="tab"
                id={`journey-tab-${i}`}
                aria-selected={i === active}
                aria-controls="journey-panel"
                tabIndex={i === active ? 0 : -1}
                className="stepper__step"
                onClick={() => setActive(i)}
                onKeyDown={(e) => onTabKey(e, i)}
              >
                <span className="stepper__node">{s.num}</span>
                <span className="stepper__name">{s.name}</span>
              </button>
            ))}
          </div>

          <div
            className="stepper__panel"
            role="tabpanel"
            id="journey-panel"
            aria-labelledby={`journey-tab-${active}`}
          >
            <span className="stepper__panel-kicker">{step.kicker}</span>
            <h3 className="stepper__panel-title">{step.title}</h3>
            <p style={{ color: "var(--text-body)" }}>{step.copy}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
