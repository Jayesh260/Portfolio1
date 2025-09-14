import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Agriculture Assistant',
      emoji: '🌱',
      description: 'AI-powered crop disease detection with multilingual chatbot support',
      detailedDescription: 'Enhanced CNN-based plant disease detection model achieving 96% accuracy on image datasets. Built multilingual chatbot for real-time crop query handling with 80% user success rate. Implemented secure data pipeline and RESTful API architecture for scalable deployment.',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'REST API'],
      achievements: [
        'Improved model accuracy from 92% to 96%',
        'Multilingual support for farmers',
        '80% user success rate in query resolution',
        'Real-time image processing pipeline'
      ],
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Online Video KYC System',
      emoji: '🎯',
      description: 'Secure identity verification platform with facial recognition',
      detailedDescription: 'Developed Python/OpenCV platform for live ID capture and facial matching, reducing KYC verification effort by 40%. Implemented Firebase backend for secure user data handling with end-to-end encryption and compliance with privacy regulations.',
      techStack: ['Python', 'OpenCV', 'Firebase', 'Computer Vision', 'Security'],
      achievements: [
        'Reduced KYC effort by 40%',
        'Real-time facial recognition',
        'Secure Firebase integration',
        'Privacy-compliant design'
      ],
      category: 'Cybersecurity'
    },
    {
      id: 3,
      title: 'Diet Recommendation Engine',
      emoji: '🍎',
      description: 'Personalized nutrition planning with ML-based recommendations',
      detailedDescription: 'Built comprehensive web-based nutrition planner handling 50+ user inputs daily using advanced rule-based logic and machine learning algorithms. Delivered personalized daily diet suggestions improving user retention in demo testing by 60%.',
      techStack: ['Python', 'Scikit-learn', 'React.js', 'Node.js', 'MongoDB'],
      achievements: [
        'Handles 50+ users daily',
        'Personalized nutrition algorithms',
        '60% improvement in user retention',
        'Comprehensive health metrics tracking'
      ],
      category: 'Full Stack'
    },
    {
      id: 4,
      title: 'Think Art Marketplace',
      emoji: '🎨',
      description: 'Digital art marketplace with secure vendor management',
      detailedDescription: 'Designed comprehensive web platform with secure authentication, vendor review system, and advanced keyword-based product search. Facilitated seamless product uploads and vendor validation workflows using Firebase Auth and custom security protocols.',
      techStack: ['React.js', 'Node.js', 'Firebase', 'Payment Gateway', 'Security'],
      achievements: [
        'Secure vendor authentication system',
        'Advanced search algorithms',
        'Integrated payment processing',
        'Review and rating system'
      ],
      category: 'E-commerce'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg cursor-pointer ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700 hover:shadow-cyan-400/10 hover:border-cyan-400/30' 
                  : 'bg-white/50 border-gray-200 hover:shadow-gray-200 hover:border-cyan-400/30'
              }`}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {project.emoji}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode 
                      ? 'bg-cyan-400/20 text-cyan-400' 
                      : 'bg-cyan-100 text-cyan-800'
                  }`}>
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode 
                      ? 'bg-gray-600 text-gray-300' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>

              <div className="text-center">
                <button className="text-cyan-400 font-semibold hover:text-emerald-400 transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
              darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  <p className={`text-lg leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {projects.find(p => p.id === selectedProject)?.detailedDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {projects.find(p => p.id === selectedProject)?.achievements.map((achievement, idx) => (
                      <li key={idx} className={`flex items-center gap-3 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects.find(p => p.id === selectedProject)?.techStack.map((tech, idx) => (
                      <span key={idx} className={`px-3 py-2 rounded-full text-sm font-medium ${
                        darkMode 
                          ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30' 
                          : 'bg-cyan-100 text-cyan-800 border border-cyan-200'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-500 transition-colors">
                    <Github size={20} />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors">
                    <ExternalLink size={20} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;