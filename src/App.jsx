import { useCallback, useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import CursorHalo from "./components/CursorHalo";
import Navbar from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import ProjectModal from "./components/ProjectModal";
import ToastStack from "./components/ToastStack";
import NotFound from "./components/NotFound";
import Hero from "./sections/Hero";
import Marquee from "./components/Marquee";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { projects } from "./data/projects.data";
import { copyText, scrollToId, toast } from "./lib/utils";

const KONAMI = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];

const isNotFoundHash = () => window.location.hash === "#/404";

export default function App() {
  const [booted, setBooted] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [notFound, setNotFound] = useState(isNotFoundHash);

  const activeProject = projects.find((p) => p.id === activeProjectId) || null;

  /* ——— #/404 hash route ——— */
  useEffect(() => {
    const onHash = () => {
      const nf = isNotFoundHash();
      setNotFound(nf);
      if (nf) window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const leaveNotFound = useCallback(() => {
    if (isNotFoundHash()) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    setNotFound(false);
  }, []);

  /* ——— global shortcuts ——— */
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ——— Konami easter egg ——— */
  useEffect(() => {
    let buffer = [];
    const onKey = (e) => {
      buffer.push(e.key.toLowerCase());
      buffer = buffer.slice(-KONAMI.length);
      if (buffer.join(",") === KONAMI.join(",")) {
        document.body.classList.add("gold-mode");
        toast("Konami code accepted — gold mode engaged.");
        setTimeout(
          () => document.body.classList.remove("gold-mode"),
          6100
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ——— palette actions ——— */
  const navigate = useCallback(
    (id) => {
      leaveNotFound();
      requestAnimationFrame(() => scrollToId(id));
    },
    [leaveNotFound]
  );

  const openProject = useCallback((id) => setActiveProjectId(id), []);
  const closeProject = useCallback(() => setActiveProjectId(null), []);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const next =
      (root.dataset.theme || "obsidian") === "obsidian" ? "ivory" : "obsidian";
    root.dataset.theme = next;
    try {
      localStorage.setItem("eg-theme", next);
    } catch {
      /* private mode */
    }
    window.dispatchEvent(new CustomEvent("eg-theme"));
  }, []);

  return (
    <div className={`app${booted ? " is-booted" : ""}`}>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {!booted && <Preloader onDone={() => setBooted(true)} />}
      <ScrollProgress />
      <CursorHalo />
      <div className="grid-backdrop" aria-hidden="true" />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />

      {notFound ? (
        <NotFound onReturn={navigate.bind(null, "top")} />
      ) : (
        <main id="main">
          <Hero />
          <Marquee />
          <Projects onOpen={openProject} />
          <About />
          <Skills />
          <Journey />
          <Contact />
        </main>
      )}

      <Footer />

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={navigate}
        onOpenProject={openProject}
        onCopy={copyText}
        onToggleTheme={toggleTheme}
      />
      <ProjectModal
        project={activeProject}
        open={!!activeProject}
        onClose={closeProject}
      />
      <ToastStack />
    </div>
  );
}
