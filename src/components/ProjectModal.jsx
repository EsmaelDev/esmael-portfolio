import { useEffect, useState } from "react";
import Modal from "./Modal";
import Icon from "./Icon";

/* Full case-study view for a featured project. */
export default function ProjectModal({ project, open, onClose }) {
  if (!project) return null;

  const { images = [], tech = [] } = project;

  return (
    <Modal
      open={open}
      onClose={onClose}
      ariaLabel={`${project.name} — case study`}
    >
      <div className="modal__hero">
        <img src={images[0]?.src} alt={images[0]?.alt} width={1600} height={1000} />
        <span className="chip chip--gold modal__hero-chip">
          {project.index} · {project.label}
        </span>
      </div>

      <div className="modal__body">
        <div className="modal__meta">
          <span className="chip">{project.status}</span>
          <span className="chip">Project {project.index}</span>
        </div>

        <h2 className="modal__title">{project.name}</h2>
        <p className="modal__tagline">{project.tagline}</p>

        <p>{project.overview}</p>

        <div className="modal__grid">
          {images[1] && (
            <figure className="modal__figure">
              <img
                src={images[1].src}
                alt={images[1].alt}
                width={1000}
                height={1250}
              />
            </figure>
          )}

          <div>
            <h3 className="modal__section-title">The approach</h3>
            <p>{project.approach}</p>

            <h3 className="modal__section-title">Toolkit</h3>
            <ul className="project-card__tags" style={{ marginBottom: 0 }}>
              {tech.map((t) => (
                <li className="chip" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="modal__links">
          {project.liveUrl ? (
            <a
              className="btn btn--gold"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Visit live site
              <Icon name="arrowUpRight" size={15} className="btn-arrow" />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              className="btn btn--ghost"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              View source on GitHub
              <Icon name="github" size={15} />
            </a>
          ) : null}
          {!project.liveUrl && !project.repoUrl && (
            <p
              className="modal__note"
              style={{ marginTop: 0, padding: 0, border: "none" }}
            >
              Links not added yet — set liveUrl / repoUrl in
              src/data/projects.data.js when they exist. No dead buttons here.
            </p>
          )}
        </div>

        <p className="modal__note">
          Imagery shown is representative placeholder photography — it does not
          depict the real interface. Swap in your own screenshots in
          src/data/projects.data.js.
        </p>
      </div>
    </Modal>
  );
}
