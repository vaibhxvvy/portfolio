import { profile } from "../data/profile";

export default function Skills() {
  return (
    <div className="section">
      <h2>Skills</h2>
      <p><strong>Languages:</strong> {profile.skills.languages.join(", ")}</p>
      <p><strong>Tools:</strong> {profile.skills.tools.join(", ")}</p>
      <p><strong>Concepts:</strong> {profile.skills.concepts.join(", ")}</p>
    </div>
  );
}
