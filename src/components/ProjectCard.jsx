import Icon from "./Icon";
import Reveal from "./Reveal";

/* Editorial project card — the whole media area is one big button. */
export default function ProjectCard({ project, onOpen, variant = "" }) {
  const { images = [], tech = [] } = project;

  return (
    <Reveal
      as="article"
      className={`project-card ${variant}`.trim()}
      aria-label={project.name}
    >
      <div className="project-card__media">
        <img
          src={images[0]?.src}
          alt={images[0]?.alt}
          loading="lazy"
          decoding="async"
          width={1600}
          height={1000}
        />
        <span className="chip chip--gold project-card__chip">
          {project.index} · {project.label}
        </span>
        <span className="project-card__view">
          View case study <Icon name="arrowUpRight" size={14} />
        </span>
        {/* one interactive layer for the whole media card */}
        <button
          type="button"
          className="project-card__open"
          aria-label={`Open case study — ${project.name}`}
          onClick={() => onOpen(project.id)}
        />
      </div>

      <div className="project-card__content">
        <span className="project-card__index" aria-hidden="true">
          {project.index}
        </span>
        <span className="project-card__label">
          {project.label} — {project.index}
        </span>
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>
        <ul className="project-card__tags">
          {tech.map((t) => (
            <li className="chip" key={t}>
              {t}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn--ghost btn--small project-card__cta"
          onClick={() => onOpen(project.id)}
        >
          View case study
          <Icon name="arrowRight" size={15} className="btn-arrow" />
        </button>
      </div>
    </Reveal>
  );
}
