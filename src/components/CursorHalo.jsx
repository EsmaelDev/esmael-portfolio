import { useEffect, useRef } from "react";

/* Subtle gold cursor halo — desktop pointers only.
   The native cursor stays visible; this is an accent, never a replacement. */
export default function CursorHalo() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;
    let shown = false;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        shown = true;
        document.body.classList.add("has-cursor");
      }
      let interactive = false;
      if (e.target instanceof Element) {
        interactive = !!e.target.closest(
          'a, button, [role="button"], input, textarea, select, [data-cursor]'
        );
      }
      ringRef.current?.classList.toggle("is-active", interactive);
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
