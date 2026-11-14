import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "./Icon";
import { navLinks, site } from "../data/site.config";
import { projects } from "../data/projects.data";
import { useScrollLock } from "../hooks/useUi";

/* ⌘K / Ctrl+K command palette — keyboard-first navigation. */
export default function CommandPalette({
  open,
  onClose,
  onNavigate,
  onOpenProject,
  onCopy,
  onToggleTheme,
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const activeRef = useRef(null);

  useScrollLock(open);

  const items = useMemo(() => {
    const nav = [
      {
        group: "Navigate",
        id: "nav-top",
        label: "Back to top",
        glyph: "home",
        hint: "↑",
        run: () => onNavigate("top"),
      },
      ...navLinks.map((l) => ({
        group: "Navigate",
        id: `nav-${l.id}`,
        label: l.label,
        glyph: "arrowRight",
        hint: l.num,
        run: () => onNavigate(l.id),
      })),
    ];
    const projs = projects.map((p) => ({
      group: "Projects",
      id: `pr-${p.id}`,
      label: `Open case study — ${p.name}`,
      glyph: "layers",
      hint: p.index,
      run: () => onOpenProject(p.id),
    }));
    const actions = [
      {
        group: "Actions",
        id: "act-email-copy",
        label: "Copy email address",
        glyph: "copy",
        hint: "clip",
        run: () => onCopy(site.email, "Email address copied"),
      },
      {
        group: "Actions",
        id: "act-email-open",
        label: "Write an email",
        glyph: "mail",
        hint: "open",
        run: () => {
          window.location.href = `mailto:${site.email}`;
        },
      },
      {
        group: "Actions",
        id: "act-phone-copy",
        label: "Copy phone number",
        glyph: "phone",
        hint: "clip",
        run: () => onCopy(site.phone, "Phone number copied"),
      },
      {
        group: "Actions",
        id: "act-theme",
        label: "Toggle Obsidian / Ivory theme",
        glyph: "command",
        hint: "theme",
        run: onToggleTheme,
      },
      {
        group: "Actions",
        id: "act-github",
        label: "Open GitHub profile",
        glyph: "github",
        hint: "link",
        run: () => window.open(site.github, "_blank", "noopener,noreferrer"),
      },
    ];
    return [...nav, ...projs, ...actions];
  }, [onNavigate, onOpenProject, onCopy, onToggleTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) => it.label.toLowerCase().includes(q));
  }, [items, query]);

  /* reset on open */
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  /* keep the active item in view */
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest" });
  }, [active, filtered]);

  if (!open) return null;

  const runItem = (item) => {
    onClose();
    // give the palette a frame to close before side effects run
    requestAnimationFrame(() => item.run());
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(filtered.length - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[active];
      if (item) runItem(item);
    }
  };

  let lastGroup = "";

  return (
    <div
      className="palette-backdrop is-open"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onKeyDown={onKeyDown}
      >
        <div className="palette__input-row">
          <Icon name="search" size={17} />
          <input
            ref={inputRef}
            className="palette__input"
            type="text"
            placeholder="Type a command or search…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={filtered[active]?.id}
            autoComplete="off"
            spellCheck="false"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="palette__empty">
            No matches for “{query}” — try “work”, “email” or “theme”.
          </div>
        ) : (
          <ul className="palette__list" id="palette-list" role="listbox">
            {filtered.map((it, i) => {
              const showGroup = it.group !== lastGroup;
              lastGroup = it.group;
              return (
                <li key={it.id} role="presentation">
                  {showGroup && <div className="palette__group">{it.group}</div>}
                  <button
                    type="button"
                    ref={i === active ? activeRef : null}
                    role="option"
                    aria-selected={i === active}
                    id={it.id}
                    className={`palette__item${i === active ? " is-active" : ""}`}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => runItem(it)}
                  >
                    <span className="glyph">
                      <Icon name={it.glyph} size={15} />
                    </span>
                    {it.label}
                    <span className="kbd-hint">{it.hint}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        <div className="palette__foot">
          <span>
            <kbd>↑↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> select
          </span>
          <span>
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
}
