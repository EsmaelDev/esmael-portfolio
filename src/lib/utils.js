/* Small shared utilities. */

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function scrollToId(id) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: prefersReduced() ? "auto" : "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "start" });
}

export function toast(message) {
  window.dispatchEvent(new CustomEvent("eg:toast", { detail: { message } }));
}

export async function copyText(text, message = "Copied to clipboard") {
  let ok = false;
  try {
    await navigator.clipboard.writeText(text);
    ok = true;
  } catch {
    // Fallback for non-secure contexts (http, file://)
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      ok = document.execCommand("copy");
      document.body.removeChild(ta);
    } catch {
      ok = false;
    }
  }
  toast(ok ? message : "Copy failed — your browser blocked it");
}

export function openExternal(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
