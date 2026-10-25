import { useState } from "react";
import Reveal from "../components/Reveal";
import { skillCategories, skillGroups, currentlyLearning } from "../data/skills.data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredGroups = activeCategory === "all"
    ? skillGroups
    : skillGroups.filter((g) => g.category === activeCategory);

  const totalSkillsCount = filteredGroups.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <section className="section" id="skills" aria-label="Skills and engineering toolkit">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="overline">03 — Technical Arsenal</p>
            <h2 className="section-head__title">
              Software engineering &amp;{" "}
              <span className="serif-accent">digital craft</span>.
            </h2>
          </div>
          <p className="section-head__intro">
            An honest, verified overview of computer science fundamentals at Arba Minch University
            and active web engineering tools applied directly across my three featured projects.
          </p>
        </Reveal>

        {/* Interactive Filter Pills */}
        <Reveal>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2.4rem",
              alignItems: "center",
            }}
            role="tablist"
            aria-label="Filter skills by discipline"
          >
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`chip ${isActive ? "chip--gold" : ""}`}
                  style={{
                    cursor: "pointer",
                    padding: "0.45rem 0.95rem",
                    fontSize: "var(--fs-micro)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-mono)",
                    border: isActive ? "1px solid var(--gold)" : "1px solid var(--line)",
                    background: isActive ? "rgba(200, 169, 106, 0.15)" : "var(--bg-card)",
                    color: isActive ? "var(--gold)" : "var(--text-soft)",
                    transition: "all 0.25s ease",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}

            <span
              style={{
                marginLeft: "auto",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-micro)",
                color: "var(--gray-deep)",
                letterSpacing: "0.1em",
              }}
            >
              Showing {String(totalSkillsCount).padStart(2, "0")} capabilities
            </span>
          </div>
        </Reveal>

        {/* Skills Groups & Cards */}
        <Reveal>
          {filteredGroups.map((group) => (
            <div className="skills-group" key={group.group}>
              <div className="skills-group__head">
                <span className="skills-group__name">{group.group}</span>
                <span className="skills-group__count">
                  {String(group.items.length).padStart(2, "0")} modules
                </span>
              </div>

              <div className="skills-grid">
                {group.items.map((item) => (
                  <div className="skill-card" key={item.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                      <div className="skill-card__name">{item.name}</div>
                      {item.context && (
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.68rem",
                            letterSpacing: "0.08em",
                            padding: "0.2rem 0.45rem",
                            borderRadius: "4px",
                            background: "rgba(200, 169, 106, 0.08)",
                            color: "var(--gold)",
                            border: "1px solid rgba(200, 169, 106, 0.2)",
                            whiteSpace: "nowrap",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.context}
                        </span>
                      )}
                    </div>

                    <p className="skill-card__blurb">{item.blurb}</p>

                    {item.appliedIn && (
                      <div
                        style={{
                          marginTop: "0.85rem",
                          paddingTop: "0.65rem",
                          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontSize: "0.74rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-soft)",
                        }}
                      >
                        <span style={{ color: "var(--gold)", opacity: 0.8 }}>↳</span>
                        <span>{item.appliedIn}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Arba Minch Academic Engineering Banner */}
          <div
            style={{
              marginTop: "2.4rem",
              padding: "1.2rem 1.4rem",
              borderRadius: "var(--radius)",
              background: "linear-gradient(135deg, rgba(24, 27, 34, 0.7) 0%, rgba(17, 19, 24, 0.9) 100%)",
              border: "1px solid rgba(200, 169, 106, 0.25)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fs-micro)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.25rem",
                }}
              >
                Arba Minch University • Software Engineering Curriculum
              </p>
              <p style={{ fontSize: "0.86rem", color: "var(--text-body)", margin: 0 }}>
                Coursework integrates theoretical computer science rigor with active, daily hands-on implementation.
              </p>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                padding: "0.35rem 0.75rem",
                borderRadius: "999px",
                background: "rgba(34, 197, 94, 0.12)",
                color: "#4ade80",
                border: "1px solid rgba(34, 197, 94, 0.25)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }}></span>
              Academic Year 2026 Active
            </span>
          </div>

          {/* Currently Learning Pill Strip */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.55rem",
              marginTop: "1.6rem",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-micro)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginRight: "0.5rem",
              }}
            >
              Continuous Growth
            </span>
            {currentlyLearning.map((c) => (
              <span className="chip chip--gold" key={c}>
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
