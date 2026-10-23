import { useEffect, useState } from "react";
import EgMark from "./EgMark";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "../data/site.config";
import { scrollToId } from "../lib/utils";
import { useScrollLock } from "../hooks/useUi";

export default function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [time, setTime] = useState("");

  useScrollLock(menuOpen);

  /* Live Arba Minch / Ethiopia Time (GMT+3) */
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in view */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    // let the menu close before scrolling on mobile
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <>
      <header className={`navbar${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}`}>
        <div className="container navbar__inner">
          <a
            href="#top"
            className="navbar__brand"
            onClick={(e) => {
              e.preventDefault();
              go("top");
            }}
            aria-label="Esmael Gemechu — back to top"
          >
            <EgMark size={36} withDash />
            <span className="navbar__brand-text">
              <span className="navbar__brand-name">{site.name}</span>
              <span className="navbar__brand-sub">
                Software Engineering · ET
              </span>
            </span>
          </a>

          <nav aria-label="Primary">
            <ul className="navbar__links">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className={`navbar__link${
                      activeId === l.id ? " is-active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(l.id);
                    }}
                  >
                    <span className="num">{l.num}</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            {/* Live Arba Minch Ethiopia Time Radar */}
            <div
              className="navbar__radar"
              title="Live Local Time in Arba Minch, Ethiopia (GMT+3)"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.28rem 0.65rem",
                borderRadius: "999px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--line)",
                fontSize: "0.72rem",
                fontFamily: "var(--font-mono)",
                color: "var(--text-soft)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 8px #4ade80",
                  display: "inline-block",
                }}
              />
              <span style={{ color: "var(--text)", fontWeight: 500 }}>{time || "10:15:00"}</span>
              <span style={{ color: "var(--gray-deep)", fontSize: "0.66rem" }}>AMU·GMT+3</span>
            </div>

            <button
              type="button"
              className="icon-btn"
              onClick={onOpenPalette}
              aria-label="Open command menu (Ctrl+K)"
              title="Command menu · Ctrl+K"
            >
              <Icon name="command" size={16} />
            </button>
            <ThemeToggle />
            <button
              type="button"
              className="btn btn--gold navbar__cta"
              onClick={() => go("contact")}
            >
              Get in touch
            </button>
            <button
              type="button"
              className="icon-btn burger"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ——— mobile menu ——— */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul className="mobile-menu__links">
            {navLinks.map((l, i) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="mobile-menu__link"
                  style={{
                    transitionDelay: menuOpen ? `${0.08 + i * 0.06}s` : "0s",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.id);
                  }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className="num">{l.num}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__footer">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github} target="_blank" rel="noreferrer noopener">
            GitHub ↗
          </a>
        </div>
      </div>
    </>
  );
}
