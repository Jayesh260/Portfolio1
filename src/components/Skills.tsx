import React, { useEffect, useState } from 'react';
import { Code, Shield, Brain, Cloud, Database, PenTool as Tool } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimatedSkills(true);
        }
      });
    });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'cyan',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'C++', level: 85 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      color: 'emerald',
      skills: [
        { name: 'Threat Modeling', level: 90 },
        { name: 'Penetration Testing', level: 85 },
        { name: 'OWASP Top 10', level: 95 },
        { name: 'Kali Linux', level: 80 },
        { name: 'Wireshark', level: 85 }
      ]
    },
    {
      icon: Brain,
      title: 'AI/ML Frameworks',
      color: 'purple',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'OpenCV', level: 85 },
        { name: 'Pandas/NumPy', level: 95 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'blue',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 70 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Frameworks & Tools',
      color: 'indigo',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Flask/Django', level: 90 },
        { name: 'MySQL', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'Linux Shell', level: 85 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan': return 'from-cyan-400 to-cyan-600';
      case 'emerald': return 'from-emerald-400 to-emerald-600';
      case 'purple': return 'from-purple-400 to-purple-600';
      case 'blue': return 'from-blue-400 to-blue-600';
      case 'indigo': return 'from-indigo-400 to-indigo-600';
      default: return 'from-cyan-400 to-emerald-600';
    }
  };

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-slate-800/30' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg ${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700 hover:shadow-cyan-400/10' 
                : 'bg-white/50 border-gray-200 hover:shadow-gray-200'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`text-${category.color}-400`} size={28} />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full ${
                      darkMode ? 'bg-slate-700' : 'bg-gray-200'
                    }`}>
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${getColorClasses(category.color)} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animatedSkills ? `${skill.level}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP',
              'API Security', 'Secure Coding', 'Identity Management', 'Incident Response',
              'Vulnerability Assessment', 'Malware Analysis', 'Network Security',
              'Team Leadership', 'Technical Writing', 'Project Management'
            ].map((skill, index) => (
              <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-slate-700 text-gray-300 border border-slate-600 hover:border-cyan-400/50' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-cyan-400/50 shadow-sm'
              }`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;