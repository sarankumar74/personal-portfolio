import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main className="animate-fade-in">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-8 text-center border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Sarankumar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;