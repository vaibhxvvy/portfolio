import { profile } from "../data/profile";

export default function Projects() {
  return (
    <div className="section">
      <h2>Projects</h2>
      {profile.projects.map((p, i) => (
        <div key={i}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}
