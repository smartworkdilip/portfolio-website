import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">Hi, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">{profile.title}</h2>

        <div className="hero__cta">
          <a
            className="btn btn--primary"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </a>
          <a
            className="btn btn--secondary"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </a>
        </div>

        <div className="hero__meta">
          <span>{profile.location}</span>
          <span>&bull;</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>&bull;</span>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </div>
      </div>
    </section>
  );
}
