import HeroText from '../components/HeroText';
import About from '../components/AboutUs';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <HeroText />
        <About />
        <Projects />
        <ContactSection />
      </div>
    </div>

  );
};

export default Home;
