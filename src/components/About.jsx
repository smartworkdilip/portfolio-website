import { profile } from "../data/resumeData";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section__title">About Me</h2>
      <div className="about__content">
        <p>{profile.summary}</p>
        <div className="about__stats">
          <div className="stat">
            <span className="stat__value">6+</span>
            <span className="stat__label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat__value">3</span>
            <span className="stat__label">Companies</span>
          </div>
          <div className="stat">
            <span className="stat__value">1M+</span>
            <span className="stat__label">Users Served</span>
          </div>
          <div className="stat">
            <span className="stat__value">11</span>
            <span className="stat__label">Projects Shipped</span>
          </div>
        </div>
      </div>
    </section>
  );
}
