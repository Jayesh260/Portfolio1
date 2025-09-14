import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const titles = [
    'AI Research Engineer',
    'Cybersecurity Expert', 
    'Machine Learning Enthusiast',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = titles[currentIndex];
      
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        
        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Jayesh Poonia
          </h1>
          <div className="text-2xl md:text-3xl mb-4 h-12">
            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {text}
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </div>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Turning data into intelligence, and intelligence into security.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
          <button 
            className={`px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-2 justify-center`}
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        <div 
          className="animate-bounce cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} className="mx-auto text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;