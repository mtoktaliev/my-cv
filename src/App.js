
import './App.css'
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/service/Service';

function App() {
  return (
    <div className="App wrapper">
      {/* <Header /> */}
      <Hero />
      <Experience />
      <Service />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
