import { site } from "../data/site.config";

/* Slow, restrained ticker of disciplines. */
export default function Marquee() {
  const items = site.marquee;
  const list = (hidden) => (
    <ul
      className="marquee__item"
      style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: "3.4rem" }}
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        <li key={`${hidden ? "b" : "a"}-${item}`}>{item}</li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
}
