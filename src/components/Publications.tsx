import React from 'react';
import { BookOpen, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface PublicationsProps {
  darkMode: boolean;
}

const Publications: React.FC<PublicationsProps> = ({ darkMode }) => {
  const publications = [
    {
      title: 'AI-Powered Sustainable Agriculture: A Comprehensive Review',
      conference: 'ICDSBS 2025',
      fullConference: 'International Conference on Data Science and Business Statistics',
      year: '2025',
      location: 'Malaysia',
      abstract: 'Comprehensive review of artificial intelligence applications in sustainable agriculture, focusing on crop disease detection, yield prediction, and resource optimization using machine learning algorithms.',
      keywords: ['Artificial Intelligence', 'Sustainable Agriculture', 'Machine Learning', 'Crop Disease Detection'],
      status: 'Accepted',
      type: 'Conference Paper'
    },
    {
      title: 'Healthcare AI Applications in Telemedicine: Security and Privacy Considerations',
      conference: 'ICIOT 2025',
      fullConference: 'International Conference on Internet of Things',
      year: '2025',
      location: 'India',
      abstract: 'Investigation of AI applications in telemedicine with emphasis on security protocols, privacy preservation, and data protection in healthcare IoT systems.',
      keywords: ['Healthcare AI', 'Telemedicine', 'IoT Security', 'Privacy Preservation'],
      status: 'Under Review',
      type: 'Conference Paper'
    },
    {
      title: 'Reinforcement Learning for Cybersecurity: Threat Detection and Response',
      conference: 'ICSIE 2025',
      fullConference: 'International Conference on Security and Information Engineering',
      year: '2025',
      location: 'Malaysia',
      abstract: 'Novel approach to cybersecurity threat detection using reinforcement learning algorithms, with focus on automated incident response and adaptive security measures.',
      keywords: ['Reinforcement Learning', 'Cybersecurity', 'Threat Detection', 'Automated Response'],
      status: 'In Preparation',
      type: 'Conference Paper'
    }
  ];

  const getStatusColor = (status: string, darkMode: boolean) => {
    switch (status) {
      case 'Accepted':
        return darkMode ? 'bg-emerald-400/20 text-emerald-400 border-emerald-400/30' : 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Under Review':
        return darkMode ? 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30' : 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'In Preparation':
        return darkMode ? 'bg-blue-400/20 text-blue-400 border-blue-400/30' : 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return darkMode ? 'bg-gray-400/20 text-gray-400 border-gray-400/30' : 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="publications" className={`py-20 ${
      darkMode ? 'bg-slate-800/30' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Research Publications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((paper, index) => (
            <div key={index} className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg ${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700 hover:shadow-cyan-400/10' 
                : 'bg-white/50 border-gray-200 hover:shadow-gray-200'
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="text-cyan-400 flex-shrink-0" size={24} />
                    <h3 className="text-xl font-bold leading-tight">
                      {paper.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <span>{paper.conference}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <Calendar size={16} />
                      <span>{paper.year}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <MapPin size={16} />
                      <span>{paper.location}</span>
                    </div>
                  </div>
                  
                  <p className={`text-sm mb-2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {paper.fullConference}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    getStatusColor(paper.status, darkMode)
                  }`}>
                    {paper.status}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {paper.type}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Abstract</h4>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {paper.abstract}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode 
                        ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30' 
                        : 'bg-cyan-100 text-cyan-800 border border-cyan-200'
                    }`}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {paper.status === 'Accepted' && (
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-500 transition-colors text-sm">
                    <ExternalLink size={16} />
                    View Paper
                  </button>
                  <button className={`flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors text-sm`}>
                    <BookOpen size={16} />
                    Cite Paper
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Research Interests */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Research Interests</h3>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Artificial Intelligence in Agriculture',
                'Cybersecurity & AI',
                'Machine Learning Security',
                'IoT Security',
                'Healthcare AI',
                'Reinforcement Learning',
                'Computer Vision',
                'Threat Intelligence',
                'Secure AI Systems',
                'Privacy-Preserving ML'
              ].map((interest, index) => (
                <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-700 text-gray-300 border border-slate-600 hover:border-cyan-400/50' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-cyan-400/50 shadow-sm'
                }`}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;