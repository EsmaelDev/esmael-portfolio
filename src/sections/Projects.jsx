import ProjectCard from "../components/ProjectCard";
import PhoneMockup from "../components/PhoneMockup";
import QrDecoration from "../components/QrDecoration";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects.data";

export default function Projects({ onOpen }) {
  const [shakir, bamrika, mekida] = projects;

  return (
    <section className="section" id="work" aria-label="Selected work">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="overline">01 — Selected Work</p>
            <h2 className="section-head__title">
              Projects with{" "}
              <span className="serif-accent">purpose</span>.
            </h2>
          </div>
          <p className="section-head__intro">
            Each project below started with a real need and one simple question
            — how can software make this better? Case studies open in place,
            right here.
          </p>
        </Reveal>

        <div className="projects-list">
          {/* ——— 01 · Shakir Cake & Bakery ——— */}
          <ProjectCard project={shakir} onOpen={onOpen} />

          {/* ——— 02 · Bamrika Islamic Cloth Center (mirrored) ——— */}
          <ProjectCard project={bamrika} onOpen={onOpen} variant="project-card--flip" />

          {/* ——— 03 · Mekida Hotel QR Digital Menu (feature composition) ——— */}
          <Reveal as="article" className="project-feature">
            <div className="project-feature__stage">
              <div className="project-card__media">
                <img
                  src={mekida.images[0]?.src}
                  alt={mekida.images[0]?.alt}
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={1000}
                />
                <span className="chip chip--gold project-card__chip">
                  {mekida.index} · {mekida.label}
                </span>
                <span className="project-card__view">
                  View case study <Icon name="arrowUpRight" size={14} />
                </span>
                <button
                  type="button"
                  className="project-card__open"
                  aria-label={`Open case study — ${mekida.name}`}
                  onClick={() => onOpen(mekida.id)}
                />
              </div>
              <div className="project-feature__phone">
                <PhoneMockup />
              </div>
            </div>

            <div className="project-card__content">
              <span className="project-card__index" aria-hidden="true">
                {mekida.index}
              </span>
              <span className="project-card__label">
                {mekida.label} — {mekida.index}
              </span>
              <h3 className="project-card__title">{mekida.name}</h3>
              <p className="project-card__desc">{mekida.description}</p>
              <ul className="project-card__tags">
                {mekida.tech.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="btn btn--ghost btn--small"
                onClick={() => onOpen(mekida.id)}
              >
                View case study
                <Icon name="arrowRight" size={15} className="btn-arrow" />
              </button>
              <div style={{ marginTop: "1.8rem" }}>
                <QrDecoration size={104} />
              </div>
            </div>
          </Reveal>
        </div>

        <p className="projects-note">
          Representative imagery throughout — swap in real screenshots from
          src/data/projects.data.js
        </p>
      </div>
    </section>
  );
}
