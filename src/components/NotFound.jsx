import EgMark from "./EgMark";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "../data/site.config";

/* Custom 404 — reached via the #/404 hash route. */
export default function NotFound({ onReturn }) {
  return (
    <section className="nf" aria-label="Page not found">
      <Reveal>
        <div className="nf__code" aria-hidden="true">
          404
        </div>
        <h1 className="nf__title">This route is still being compiled.</h1>
        <p className="nf__copy">
          The page you were looking for doesn't exist — yet. It might be in the
          backlog, or it never got past the whiteboard. Either way, the rest of
          the site is very much alive.
        </p>
        <div className="nf__actions">
          <button type="button" className="btn btn--gold" onClick={onReturn}>
            <Icon name="home" size={15} />
            Return home
          </button>
          <a
            className="btn btn--ghost"
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon name="github" size={15} />
            View GitHub
          </a>
        </div>
        <div style={{ marginTop: "2.6rem", opacity: 0.6 }}>
          <EgMark size={54} withDash />
        </div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.24em",
            color: "var(--text-soft)",
            marginTop: "1.2rem",
            textTransform: "uppercase",
          }}
        >
          error 404 · route not found
        </p>
      </Reveal>
    </section>
  );
}
