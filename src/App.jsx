import { useState, useEffect } from "react";
import EgMark from "./components/EgMark";
import Icon from "./components/Icon";
import { site } from "./data/site.config";

export default function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const d = new Date();
        const str = d.toLocaleTimeString("en-US", {
          timeZone: "Africa/Addis_Ababa",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setTime(str);
      } catch {
        setTime(new Date().toTimeString().slice(0, 8));
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const roadmap = [
    {
      day: "Day 1 (Today)",
      title: "Architecture & Design System Foundation",
      desc: "Project scaffolding, Obsidian/Gold design tokens, typography, and Git sprint roadmap.",
      status: "completed",
    },
    {
      day: "Day 2",
      title: "Navigation Architecture & AMU Time Radar",
      desc: "Sticky blur navbar, live Arba Minch timezone radar, mobile drawer, and keyboard controls.",
      status: "upcoming",
    },
    {
      day: "Day 3",
      title: "Editorial Hero Section & Portrait Framing",
      desc: "Architectural portrait frame, headline typography, and Arba Minch academic positioning.",
      status: "upcoming",
    },
    {
      day: "Day 4",
      title: "Interactive Skills & Engineering Arsenal",
      desc: "Categorized skill filters, project connection badges, and AMU curriculum breakdown.",
      status: "upcoming",
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
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", padding: "2rem 1.5rem" }}>
      {/* Top Header */}
      <header style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "2rem", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <EgMark size={40} withDash />
          <div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, margin: 0, color: "var(--text)" }}>
              {site.name}
            </h1>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-soft)", margin: 0, textTransform: "uppercase", letterSpacing: "0.15em" }}>
              {site.role} • {site.school}
            </p>
          </div>
        </div>

        {/* Live Arba Minch Time Radar */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0.85rem", borderRadius: "999px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: "0.76rem" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
          <span style={{ color: "var(--text)", fontWeight: 600 }}>{time || "11:30:00"}</span>
          <span style={{ color: "var(--gray-deep)", fontSize: "0.68rem" }}>AMU · GMT+3</span>
        </div>
      </header>

      {/* Main Sprint Dashboard */}
      <main style={{ maxWidth: "1100px", margin: "3.5rem auto" }}>
        {/* Sprint Status Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 0.85rem", borderRadius: "999px", background: "rgba(200, 169, 106, 0.12)", border: "1px solid rgba(200, 169, 106, 0.3)", color: "var(--gold)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          <span>🔥</span>
          <span>Daily Git Sprint • Day 1 of 7</span>
        </div>

        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 1.2rem", maxWidth: "800px" }}>
          Architecting a luxury developer portfolio with{" "}
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
            daily discipline
          </span>
          .
        </h2>

        <p style={{ fontSize: "1.05rem", color: "var(--text-body)", maxWidth: "680px", lineHeight: 1.65, margin: "0 0 2.5rem" }}>
          Engineered by <strong style={{ color: "var(--text)" }}>Esmael Gemechu</strong>, Software Engineering student at Arba Minch University, Ethiopia. Built day-by-day with daily commits demonstrating clean architecture, component design, and git mastery.
        </p>

        {/* Quick Actions */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "4rem" }}>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.4rem", borderRadius: "12px", background: "var(--gold)", color: "#090A0C", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none" }}
          >
            <Icon name="github" size={16} />
            <span>View GitHub Repository</span>
          </a>

          <a
            href={`mailto:${site.email}`}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.4rem", borderRadius: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)", color: "var(--text)", fontWeight: 500, fontSize: "0.88rem", textDecoration: "none" }}
          >
            <Icon name="mail" size={16} />
            <span>Contact ({site.email})</span>
          </a>
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
              Day 1 Active
            </span>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            {roadmap.map((item) => {
              const isDone = item.status === "completed";
              return (
                <div
                  key={item.day}
                  style={{
                    padding: "1.2rem 1.4rem",
                    borderRadius: "14px",
                    background: isDone ? "rgba(200, 169, 106, 0.06)" : "rgba(255, 255, 255, 0.02)",
                    border: isDone ? "1px solid rgba(200, 169, 106, 0.3)" : "1px solid var(--line)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div style={{ maxWidth: "650px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: isDone ? "var(--gold)" : "var(--text-soft)" }}>
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
                      background: isDone ? "rgba(34, 197, 94, 0.15)" : "rgba(255, 255, 255, 0.04)",
                      color: isDone ? "#4ade80" : "var(--text-soft)",
                      border: isDone ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid var(--line)",
                    }}
                  >
                    {isDone ? "✓ Committed Today" : "⏳ Up Next"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ maxWidth: "1100px", margin: "3rem auto 0", paddingTop: "1.5rem", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", fontSize: "0.78rem", color: "var(--text-soft)", fontFamily: "var(--font-mono)" }}>
        <p style={{ margin: 0 }}>
          © 2026 {site.name} • Arba Minch University, Ethiopia
        </p>
        <p style={{ margin: 0 }}>
          Day 1 Commit: Scaffolding &amp; Design Architecture
        </p>
      </footer>
    </div>
  );
}
