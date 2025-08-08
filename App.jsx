import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
