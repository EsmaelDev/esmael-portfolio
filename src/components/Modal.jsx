import { useEffect, useRef } from "react";
import Icon from "./Icon";
import { useScrollLock } from "../hooks/useUi";

/* Accessible dialog shell: Esc to close, focus trap, focus restore. */
export default function Modal({ open, onClose, ariaLabel, children }) {
  const panelRef = useRef(null);
  const restoreRef = useRef(null);

  useScrollLock(open);

  useEffect(() => {
    if (open) {
      restoreRef.current = document.activeElement;
      const t = setTimeout(() => {
        const focusable = panelRef.current?.querySelector(
          "button:not([disabled]), a[href]"
        );
        focusable?.focus();
      }, 80);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open && restoreRef.current instanceof HTMLElement) {
      restoreRef.current.focus?.();
      restoreRef.current = null;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-backdrop is-open"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        ref={panelRef}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <Icon name="close" size={16} />
        </button>
        {children}
      </div>
    </div>
  );
}
