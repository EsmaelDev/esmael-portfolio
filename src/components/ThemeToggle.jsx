import { useEffect, useState } from "react";
import Icon from "./Icon";

/* Obsidian (default) / Ivory theme switch. Persisted in localStorage. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "obsidian"
  );

  useEffect(() => {
    const sync = () =>
      setTheme(document.documentElement.dataset.theme || "obsidian");
    window.addEventListener("eg-theme", sync);
    return () => window.removeEventListener("eg-theme", sync);
  }, []);

  const toggle = () => {
    const next = theme === "obsidian" ? "ivory" : "obsidian";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("eg-theme", next);
    } catch {
      /* private mode — fine */
    }
    window.dispatchEvent(new CustomEvent("eg-theme"));
    setTheme(next);
  };

  const isDark = theme === "obsidian";
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={
        isDark ? "Switch to Ivory (light) theme" : "Switch to Obsidian (dark) theme"
      }
      title={isDark ? "Ivory theme" : "Obsidian theme"}
    >
      <Icon name={isDark ? "sun" : "moon"} size={17} />
    </button>
  );
}
