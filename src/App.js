
import './App.css'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/service/Service';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="App wrapper">
      <Header />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Hero />
      <Skills />
      <Service />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
