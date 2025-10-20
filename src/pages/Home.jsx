import HeroText from '../components/HeroText';
import About from '../components/AboutUs';


const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <HeroText />
        <About />
      </div>
    </div>

  );
};

export default Home;
