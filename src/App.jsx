import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import Marquee from "./components/Marquee";
import Skills from "./sections/Skills";
import Icon from "./components/Icon";
import { site } from "./data/site.config";

export default function App() {
  const roadmap = [
    {
      day: "Day 1",
      title: "Architecture & Design System Foundation",
      desc: "Project scaffolding, Obsidian/Gold design tokens, typography, and Git sprint roadmap.",
      status: "completed",
    },
    {
      day: "Day 2",
      title: "Navigation Architecture & AMU Time Radar",
      desc: "Sticky blur navbar, live Arba Minch timezone radar, mobile drawer, and theme switcher.",
      status: "completed",
    },
    {
      day: "Day 3",
      title: "Editorial Hero Section & Portrait Framing",
      desc: "Architectural portrait frame, headline typography, orbital geometry, and AMU academic positioning.",
      status: "completed",
    },
    {
      day: "Day 4 (Today)",
      title: "Interactive Skills & Engineering Arsenal",
      desc: "Categorized skill filters, project connection badges, context pills, and AMU curriculum breakdown.",
      status: "completed-today",
    },
    {
      day: "Day 5",
      title: "The 3 Featured Project Case Studies",
      desc: "Shakir Bakery, Bamrika Fashion, and Mekida Hotel QR Menu with interactive phone mockup.",
      status: "upcoming",
    },
    {
      day: "Day 6",
      title: "Development Journey & Engineering Process",
      desc: "Core software engineering principles, iterative methodology, and problem-solving pillars.",
      status: "upcoming",
    },
    {
      day: "Day 7",
      title: "Contact Hub, Digital vCard & Vercel Launch",
      desc: "Direct contact channels, one-click .vcf vCard export, and live production deployment.",
      status: "upcoming",
    },
  ];

  return (
    <div className="app is-booted" style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      {/* Viewport Reading Progress Bar */}
      <ScrollProgress />

      {/* Production Sticky Navigation Bar */}
      <Navbar onOpenPalette={() => {}} />

      {/* Hero Section */}
      <Hero />

      {/* Luxury Marquee Banner */}
      <Marquee items={site.marquee} />

      {/* Day 4 Interactive Skills & Toolkit Matrix */}
      <Skills />

      {/* Main Sprint Dashboard & Verification Hub */}
      <section style={{ maxWidth: "1100px", margin: "4rem auto 3.5rem", padding: "0 1.5rem" }}>
        {/* Sprint Status Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 0.85rem", borderRadius: "999px", background: "rgba(200, 169, 106, 0.12)", border: "1px solid rgba(200, 169, 106, 0.3)", color: "var(--gold)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          <span>⚡</span>
          <span>Daily Git Sprint • Day 4 of 7</span>
        </div>

        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 1.2rem", maxWidth: "820px" }}>
          Interactive Skills &amp;{" "}
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
            Engineering Arsenal
          </span>
          .
        </h2>

        <p style={{ fontSize: "1.05rem", color: "var(--text-body)", maxWidth: "680px", lineHeight: 1.65, margin: "0 0 2.5rem" }}>
          Day 4 integrates the multi-category technical skills matrix: instant discipline filtering, verified context badges (academic vs. production), project connection chips, and the Arba Minch University Software Engineering curriculum highlight.
        </p>

        {/* Feature Verification Callout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
          <div style={{ padding: "1.2rem", borderRadius: "16px", background: "var(--bg-card)", border: "1px solid var(--line)" }}>
            <span style={{ color: "var(--gold)", fontSize: "1.2rem", display: "block", marginBottom: "0.4rem" }}>🗂️</span>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 600, margin: "0 0 0.3rem", color: "var(--text)" }}>
              Interactive Category Filtering
            </h4>
            <p style={{ fontSize: "0.8rem", color: "var(--text-soft)", margin: 0, lineHeight: 1.5 }}>
              Filter by Languages &amp; Core Logic, Frontend, Computer Science (AMU), or Workflow with live module counts.
            </p>
          </div>

          <div style={{ padding: "1.2rem", borderRadius: "16px", background: "var(--bg-card)", border: "1px solid var(--line)" }}>
            <span style={{ color: "var(--gold)", fontSize: "1.2rem", display: "block", marginBottom: "0.4rem" }}>🔗</span>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 600, margin: "0 0 0.3rem", color: "var(--text)" }}>
              Project Connection Chips
            </h4>
            <p style={{ fontSize: "0.8rem", color: "var(--text-soft)", margin: 0, lineHeight: 1.5 }}>
              Every skill highlights where it was actively applied in your featured projects (e.g. Mekida QR Engine, Bamrika Fashion).
            </p>
          </div>

          <div style={{ padding: "1.2rem", borderRadius: "16px", background: "var(--bg-card)", border: "1px solid var(--line)" }}>
            <span style={{ color: "var(--gold)", fontSize: "1.2rem", display: "block", marginBottom: "0.4rem" }}>🎓</span>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 600, margin: "0 0 0.3rem", color: "var(--text)" }}>
              AMU Curriculum Banner
            </h4>
            <p style={{ fontSize: "0.8rem", color: "var(--text-soft)", margin: 0, lineHeight: 1.5 }}>
              Dedicated card honoring your academic Software Engineering curriculum at Arba Minch University for 2026.
            </p>
          </div>
        </div>

        {/* 7-Day Sprint Roadmap Table */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "20px", padding: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.8rem", borderBottom: "1px solid var(--line)", paddingBottom: "1rem" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 0.3rem" }}>
                Web Design Class Assignment
              </p>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, margin: 0, color: "var(--text)" }}>
                7-Day Git Commit Roadmap
              </h3>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", padding: "0.3rem 0.75rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.12)", color: "#4ade80", border: "1px solid rgba(34, 197, 94, 0.25)" }}>
              Day 4 of 7 Active
            </span>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            {roadmap.map((item) => {
              const isToday = item.status === "completed-today";
              const isDone = item.status === "completed";
              return (
                <div
                  key={item.day}
                  style={{
                    padding: "1.2rem 1.4rem",
                    borderRadius: "14px",
                    background: isToday ? "rgba(200, 169, 106, 0.08)" : isDone ? "rgba(34, 197, 94, 0.04)" : "rgba(255, 255, 255, 0.02)",
                    border: isToday ? "1px solid var(--gold)" : isDone ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid var(--line)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div style={{ maxWidth: "650px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: isToday ? "var(--gold)" : isDone ? "#4ade80" : "var(--text-soft)" }}>
                        {item.day}
                      </span>
                      <span style={{ color: "var(--gray-deep)" }}>•</span>
                      <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.98rem", fontWeight: 600, color: "var(--text)", margin: 0 }}>
                        {item.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-soft)", margin: 0, lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "6px",
                      background: isToday ? "rgba(200, 169, 106, 0.15)" : isDone ? "rgba(34, 197, 94, 0.15)" : "rgba(255, 255, 255, 0.04)",
                      color: isToday ? "var(--gold)" : isDone ? "#4ade80" : "var(--text-soft)",
                      border: isToday ? "1px solid var(--gold)" : isDone ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid var(--line)",
                    }}
                  >
                    {isToday ? "✓ Committing Today" : isDone ? "✓ Completed" : "⏳ Up Next"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ maxWidth: "1100px", margin: "3rem auto 0", padding: "1.5rem", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", fontSize: "0.78rem", color: "var(--text-soft)", fontFamily: "var(--font-mono)" }}>
        <p style={{ margin: 0 }}>
          © 2026 {site.name} • Arba Minch University, Ethiopia
        </p>
        <p style={{ margin: 0 }}>
          Day 4 Commit: Interactive Skills &amp; Engineering Arsenal
        </p>
      </footer>
    </div>
  );
}
