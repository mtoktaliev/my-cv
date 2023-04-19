
import './App.css'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/service/Service';

function App() {
  return (
    <div className="App wrapper">
      <Header />
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
