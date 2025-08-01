import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import "./index.css";
import Skills from "./Components/Skills/Skills";
import java from "./assets/java.png";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import projectsData from "./Components/Projects/ProjectsData";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects projectsData={projectsData} />
      <Contact />
    </div>
  );
}

export default App;
