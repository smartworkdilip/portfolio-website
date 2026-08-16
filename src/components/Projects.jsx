import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Projects</h2>
      <p className="section__subtitle">
        A selection of work spanning platform migrations, AI agents, and API optimization.
      </p>
      <div className="projects__grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-card__header">
              <h3>{project.title}</h3>
              <span className="project-card__context">{project.context}</span>
            </div>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
