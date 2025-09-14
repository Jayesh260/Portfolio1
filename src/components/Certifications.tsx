import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: 'Samsung Prism Certificate of Excellence',
      issuer: 'Samsung R&D Institute',
      date: '2024',
      description: 'AI Research Internship completion with excellence',
      category: 'AI Research',
      color: 'cyan'
    },
    {
      title: 'AWS Machine Learning Foundations',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Comprehensive ML foundations and AWS services',
      category: 'Cloud & ML',
      color: 'emerald'
    },
    {
      title: 'IBM Cybersecurity Analyst Professional Certificate',
      issuer: 'IBM',
      date: '2024',
      description: 'Professional cybersecurity analyst certification',
      category: 'Cybersecurity',
      color: 'purple'
    },
    {
      title: 'Microsoft Engage Cybersecurity',
      issuer: 'Microsoft',
      date: '2024',
      description: 'Cybersecurity mentorship program completion',
      category: 'Cybersecurity',
      color: 'blue'
    },
    {
      title: 'Cisco CCNA Security',
      issuer: 'Charles Sturt University',
      date: '2024',
      description: 'Network security and Cisco systems certification',
      category: 'Network Security',
      color: 'indigo'
    },
    {
      title: 'Palo Alto Networks Virtual Internship',
      issuer: 'Palo Alto Networks',
      date: '2024',
      description: 'Cybersecurity virtual internship program',
      category: 'Cybersecurity',
      color: 'rose'
    }
  ];

  const achievements = [
    {
      title: 'CodeChef 3-Star Coder',
      description: 'Competitive programming achievement',
      icon: '⭐',
      color: 'yellow'
    },
    {
      title: 'HackVerse Finalist',
      description: 'National hackathon finalist',
      icon: '🏆',
      color: 'gold'
    },
    {
      title: 'Tech Mesh Finalist',
      description: 'Technology competition finalist',
      icon: '🥉',
      color: 'bronze'
    },
    {
      title: 'Cintel Hackathon Finalist',
      description: 'AI/ML hackathon achievement',
      icon: '🎯',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string, darkMode: boolean) => {
    const colors = {
      cyan: darkMode ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/30' : 'bg-cyan-100 text-cyan-800 border-cyan-200',
      emerald: darkMode ? 'bg-emerald-400/20 text-emerald-400 border-emerald-400/30' : 'bg-emerald-100 text-emerald-800 border-emerald-200',
      purple: darkMode ? 'bg-purple-400/20 text-purple-400 border-purple-400/30' : 'bg-purple-100 text-purple-800 border-purple-200',
      blue: darkMode ? 'bg-blue-400/20 text-blue-400 border-blue-400/30' : 'bg-blue-100 text-blue-800 border-blue-200',
      indigo: darkMode ? 'bg-indigo-400/20 text-indigo-400 border-indigo-400/30' : 'bg-indigo-100 text-indigo-800 border-indigo-200',
      rose: darkMode ? 'bg-rose-400/20 text-rose-400 border-rose-400/30' : 'bg-rose-100 text-rose-800 border-rose-200',
      yellow: darkMode ? 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30' : 'bg-yellow-100 text-yellow-800 border-yellow-200',
      gold: 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white',
      bronze: 'bg-gradient-to-r from-orange-400 to-red-400 text-white',
      green: darkMode ? 'bg-green-400/20 text-green-400 border-green-400/30' : 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg group cursor-pointer ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700 hover:shadow-cyan-400/10' 
                  : 'bg-white/50 border-gray-200 hover:shadow-gray-200'
              }`}>
                <div className="flex items-start gap-3 mb-4">
                  <Award className={`text-${cert.color}-400 flex-shrink-0 mt-1`} size={24} />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {cert.issuer}
                    </p>
                    <p className={`text-xs mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {cert.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    getColorClasses(cert.color, darkMode)
                  }`}>
                    {cert.category}
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {cert.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Competition Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-6 rounded-2xl backdrop-blur-sm border text-center transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700 hover:shadow-cyan-400/10' 
                  : 'bg-white/50 border-gray-200 hover:shadow-gray-200'
              }`}>
                <div className="text-4xl mb-4">
                  {achievement.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">
                  {achievement.title}
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;