import { profile } from "../data/profile";

export default function Hero() {
  return (
    <div className="section">
      <h1>{profile.name}</h1>
      <p>{profile.roles.join(" | ")}</p>
      <p>{profile.summary}</p>
    </div>
  );
}
