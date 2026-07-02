import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import CurrentProjects from "./pages/CurrentProjects";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/portfolio-website" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/current-projects"
          element={<CurrentProjects />}
        />
        <Route
          path="/certifications"
          element={<Certifications />}
        />
        <Route
          path="/experience"
          element={<Experience />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}

export default App;