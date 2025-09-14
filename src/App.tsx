import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-cyan-400 text-lg font-medium">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Header darkMode={darkMode} />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Publications darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <footer className={`py-8 text-center border-t ${
        darkMode ? 'border-slate-800' : 'border-gray-200'
      }`}>
        <p className="text-sm opacity-70">
          © 2025 Jayesh Poonia. Built with React & TypeScript.
        </p>
      </footer>
    </div>
  );
}

export default App;