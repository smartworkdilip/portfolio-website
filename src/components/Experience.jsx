import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section__title">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline__item" key={job.company + job.duration}>
            <div className="timeline__dot" />
            <div className="timeline__content">
              <div className="timeline__header">
                <h3>{job.role}</h3>
                <span className="timeline__duration">{job.duration}</span>
              </div>
              <div className="timeline__subheader">
                <span className="timeline__company">{job.company}</span>
                <span className="timeline__location">{job.location}</span>
              </div>
              <ul className="timeline__points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
