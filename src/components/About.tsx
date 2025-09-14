import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    'AI Research Intern at Samsung R&D',
    'Cybersecurity Trainee at PwC India',
    'B.Tech CSE - Cybersecurity, CGPA: 8.9',
    'Multiple Hackathon Finalist',
    'Research Publications in AI & Healthcare'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700' 
                : 'bg-white/50 border-gray-200'
            }`}>
              <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
              <p className={`text-lg mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Passionate AI Research and Cybersecurity Engineer with hands-on experience at 
                Samsung R&D and PwC India. Currently pursuing B.Tech in Computer Science & 
                Engineering with specialization in Cybersecurity at SRM Institute of Science and Technology.
              </p>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Specialized in developing secure AI systems, conducting threat assessments, 
                and building innovative solutions that bridge the gap between artificial intelligence 
                and cybersecurity.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`p-6 rounded-xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-slate-800/30 border-slate-700' 
                : 'bg-white/30 border-gray-200'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="text-cyan-400" size={24} />
                <h4 className="text-xl font-semibold">Education</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                B.Tech in CSE - Cybersecurity, Class of 2025
              </p>
              <p className="text-cyan-400 font-medium">CGPA: 8.9</p>
            </div>

            <div className={`p-6 rounded-xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-slate-800/30 border-slate-700' 
                : 'bg-white/30 border-gray-200'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-emerald-400" size={24} />
                <h4 className="text-xl font-semibold">Location</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Chennai, India
              </p>
            </div>

            <div className={`p-6 rounded-xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-slate-800/30 border-slate-700' 
                : 'bg-white/30 border-gray-200'
            }`}>
              <h4 className="text-xl font-semibold mb-4">Quick Highlights</h4>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className={`flex items-center gap-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;