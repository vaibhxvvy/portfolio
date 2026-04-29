import { profile } from "../data/profile";

export default function Contact() {
  return (
    <div className="section">
      <h2>Contact</h2>

      <p>
        Email:{" "}
        <a href={"mailto:" + profile.contact.email}>
          {profile.contact.email}
        </a>
      </p>

      <p>
        LinkedIn:{" "}
        <a
          href={profile.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.contact.linkedin}
        </a>
      </p>

      <p>
        GitHub:{" "}
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.contact.github}
        </a>
      </p>
    </div>
  );
}
