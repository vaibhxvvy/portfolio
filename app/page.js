import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
