import { useEffect, useState } from "react";
import EgMark from "./EgMark";

/* Fast EG intro — the monogram draws itself, then the curtain lifts.
   Skipped entirely for users who prefer reduced motion. */
export default function Preloader({ onDone }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      return;
    }
    const t1 = setTimeout(() => setExiting(true), 1450);
    const t2 = setTimeout(onDone, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div className={`preloader${exiting ? " is-done" : ""}`} aria-hidden="true">
      <div className="preloader__inner">
        <EgMark size={92} animated />
        <div className="preloader__name">Esmael Gemechu</div>
        <div className="preloader__bar">
          <i />
        </div>
      </div>
    </div>
  );
}
