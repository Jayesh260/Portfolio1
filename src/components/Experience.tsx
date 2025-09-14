import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      company: 'Samsung R&D Institute',
      role: 'AI Research Intern',
      period: 'Sept 2023 - Mar 2024',
      location: 'Samsung Prism Program',
      achievements: [
        'Engineered RLHF reward models using TensorFlow and PyTorch, improving training precision by 15%',
        'Collaborated in a 6-member team, boosting model accuracy to 81%',
        'Reduced false reward tagging by 12% through advanced ML techniques',
        'Integrated secure data handling and RESTful API communication into reinforcement pipelines'
      ],
      skills: ['TensorFlow', 'PyTorch', 'RLHF', 'RESTful APIs', 'Team Collaboration'],
      color: 'cyan'
    },
    {
      company: 'PwC India',
      role: 'Cybersecurity Launchpad Trainee',
      period: 'Feb 2024 - Aug 2024',
      location: 'Professional Training Program',
      achievements: [
        'Developed modular OOP-based Python/Java applications for secure workflows',
        'Executed threat modeling and vulnerability assessments for simulated environments',
        'Practiced incident response planning and penetration testing on lab systems',
        'Gained hands-on experience with industry-standard cybersecurity tools'
      ],
      skills: ['Python', 'Java', 'Threat Modeling', 'Penetration Testing', 'Incident Response'],
      color: 'emerald'
    }
  ];

  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-slate-800/30' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className={`absolute left-8 top-24 w-0.5 h-32 ${
                  exp.color === 'cyan' ? 'bg-cyan-400/30' : 'bg-emerald-400/30'
                }`}></div>
              )}
              
              {/* Timeline Dot */}
              <div className={`absolute left-6 top-8 w-4 h-4 rounded-full ${
                exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-emerald-400'
              } shadow-lg`}></div>

              {/* Content Card */}
              <div className={`ml-16 p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700 hover:shadow-cyan-400/10' 
                  : 'bg-white/50 border-gray-200 hover:shadow-gray-200'
              }`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <h4 className={`text-xl font-semibold mb-3 ${
                      exp.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                    }`}>
                      {exp.company}
                    </h4>
                  </div>
                  <div className={`text-right ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className={`flex items-start gap-3 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-emerald-400'
                        }`}></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">Technologies & Skills:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.color === 'cyan' 
                          ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30' 
                          : 'bg-emerald-400/20 text-emerald-400 border border-emerald-400/30'
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;