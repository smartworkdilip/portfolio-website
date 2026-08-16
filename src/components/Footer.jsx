import { profile } from "../data/resumeData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        &copy; {year} {profile.name}. Built with React.
      </p>
    </footer>
  );
}
