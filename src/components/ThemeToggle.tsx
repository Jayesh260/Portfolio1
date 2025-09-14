import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
        darkMode 
          ? 'bg-slate-800/80 border-slate-700 text-yellow-400 hover:shadow-lg hover:shadow-yellow-400/25' 
          : 'bg-white/80 border-gray-200 text-gray-600 hover:shadow-lg hover:shadow-gray-200'
      }`}
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;