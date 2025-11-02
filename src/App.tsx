import { useState } from 'react';
import Header from './components/Header';
import History from './components/History';
import Programming from './components/Programming';
import Visit from './components/Visit';
import Tickets from './components/Tickets';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />

      <main>
        <History />
        <Programming />
        <Visit />
        <Tickets />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
