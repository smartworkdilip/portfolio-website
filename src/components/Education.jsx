import { education, courses, achievements } from "../data/resumeData";

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section__title">Education &amp; More</h2>
      <div className="edu__grid">
        <div className="edu-card">
          <h3>Education</h3>
          <ul>
            {education.map((edu) => (
              <li key={edu.degree}>
                <strong>{edu.degree}</strong>
                <span>{edu.school}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="edu-card">
          <h3>Courses &amp; Certifications</h3>
          <ul>
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>

        <div className="edu-card">
          <h3>Achievements</h3>
          <ul>
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
