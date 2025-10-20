import HeroText from '../components/HeroText';
import About from '../components/AboutUs';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
   const location = useLocation();

  useEffect(() => {
    // si hay hash, intenta scrollear a ese id
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // pequeño delay para asegurar render
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
      }
    }
  }, [location.hash]);
  const sectionClass = "scroll-mt-28 md:scroll-mt-36";
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <section id="home" className={sectionClass}><HeroText /></section>
        <section id="about" className={sectionClass}><About /></section>
        <section id="projects" className={sectionClass}><Projects /></section>
        <section id="contact" className={sectionClass}><ContactSection /></section>
      </div>
    </div>
  );
};

export default Home;
