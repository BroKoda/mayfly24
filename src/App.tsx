import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Activities } from './components/sections/Activities';
import { Community } from './components/sections/Community';
import { Collaboration } from './components/sections/Collaboration';
import { Values } from './components/sections/Values';
import { Vision } from './components/sections/Vision';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Activities />
        <Community />
        <Collaboration />
        <Values />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
