import EgMark from "../components/EgMark";
import Icon from "../components/Icon";
import { navLinks, site } from "../data/site.config";
import { scrollToId } from "../lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <EgMark size={40} withDash />
              <span className="footer__name">{site.name}</span>
            </div>
            <p className="footer__tag">
              {site.role} — {site.school}
              <br />
              {site.footer.message}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="footer__heading">Navigate</h3>
            <ul className="footer__links">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(l.id);
                    }}
                  >
                    {l.num} — {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="footer__heading">Connect</h3>
            <ul className="footer__links">
              <li>
                <a href={`mailto:${site.email}`}>
                  <Icon name="mail" size={13} /> {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`}>
                  <Icon name="phone" size={13} /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noreferrer noopener">
                  <Icon name="github" size={13} /> github.com/EsmaelDev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <span>
            © {year} {site.name} · {site.footer.credit}
          </span>
          <span className="footer__konami" aria-hidden="true">
            ↑ ↑ ↓ ↓ ← → ← → B A
          </span>
          <a href="#/404">Lost? 404</a>
        </div>
      </div>
    </footer>
  );
}
