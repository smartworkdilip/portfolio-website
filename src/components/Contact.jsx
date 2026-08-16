import { profile, links } from "../data/resumeData";

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <h2 className="section__title">Get In Touch</h2>
      <p className="section__subtitle">
        Open to interesting backend, platform, and AI engineering opportunities.
      </p>

      <div className="contact__actions">
        <a className="btn btn--secondary" href={`mailto:${profile.email}`}>
          Email Me
        </a>
        <a className="btn btn--secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn btn--secondary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {links.map((link) => (
          <a key={link.label} className="btn btn--secondary" href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
