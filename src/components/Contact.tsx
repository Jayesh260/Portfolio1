import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jp0102@srmist.edu.in',
      href: 'mailto:jp0102@srmist.edu.in',
      color: 'cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 85294 80740',
      href: 'tel:+918529480740',
      color: 'emerald'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jodhpur, India',
      href: '#',
      color: 'purple'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/Jayesh260',
      color: 'blue',
      username: 'Jayesh260'
    },
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/Jayesh260',
      color: 'gray',
      username: 'Jayesh260'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm always open to discussing new opportunities, collaborations, or just having a chat 
            about AI, cybersecurity, or technology in general.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className={`text-lg mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Whether you're interested in collaborating on research, discussing career opportunities, 
                or exploring innovative projects in AI and cybersecurity, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg group ${
                    darkMode 
                      ? 'bg-slate-800/50 border-slate-700 hover:shadow-cyan-400/10 hover:border-cyan-400/30' 
                      : 'bg-white/50 border-gray-200 hover:shadow-gray-200 hover:border-cyan-400/30'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    contact.color === 'cyan' ? 'bg-cyan-400/20 text-cyan-400' :
                    contact.color === 'emerald' ? 'bg-emerald-400/20 text-emerald-400' :
                    'bg-purple-400/20 text-purple-400'
                  }`}>
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-cyan-400 transition-colors">
                      {contact.label}
                    </h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg group ${
                      darkMode 
                        ? 'bg-slate-800/50 border-slate-700 hover:shadow-cyan-400/10 hover:border-cyan-400/30' 
                        : 'bg-white/50 border-gray-200 hover:shadow-gray-200 hover:border-cyan-400/30'
                    }`}
                  >
                    <social.icon size={20} className="group-hover:text-cyan-400 transition-colors" />
                    <div>
                      <div className="font-medium group-hover:text-cyan-400 transition-colors">
                        {social.name}
                      </div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {social.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
            darkMode 
              ? 'bg-slate-800/50 border-slate-700' 
              : 'bg-white/50 border-gray-200'
          }`}>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="text-emerald-400 w-16 h-16 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-emerald-400 mb-2">Message Sent!</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 ${
                        darkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 ${
                        darkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 resize-none ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;