import React from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUp, Zap, Linkedin, Youtube, Instagram, Globe } from 'lucide-react';
import { mockData } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'linkedin': return <Linkedin size={18} />;
      case 'youtube': return <Youtube size={18} />;
      case 'instagram': return <Instagram size={18} />;
      case 'behance': return <Globe size={18} />;
      default: return <Globe size={18} />;
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <g fill="#00D4FF" fill-opacity="0.1">
                  <circle cx="7" cy="7" r="1"/>
                  <circle cx="27" cy="7" r="1"/>
                  <circle cx="47" cy="7" r="1"/>
                  <circle cx="7" cy="27" r="1"/>
                  <circle cx="27" cy="27" r="1"/>
                  <circle cx="47" cy="27" r="1"/>
                  <circle cx="7" cy="47" r="1"/>
                  <circle cx="27" cy="47" r="1"/>
                  <circle cx="47" cy="47" r="1"/>
                </g>
              </g>
            </svg>
          `)}")`
        }}></div>
      </div>

      <div className="container relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="heading-2 text-white">Muhammad Navis Akbar</h3>
                  <p className="body-small text-cyan-400 font-medium">Engineering × Creative Excellence</p>
                </div>
              </div>
              
              <p className="body-medium text-gray-400 max-w-md leading-relaxed">
                Manufacturing Engineer & Multimedia Creator combining technical expertise with creative vision to deliver innovative solutions that make a difference.
              </p>
              
              {/* Enhanced Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={16} />
                  </div>
                  <a 
                    href={`mailto:${mockData.contact.email}`}
                    className="body-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {mockData.contact.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-green-500/30 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={16} />
                  </div>
                  <a 
                    href={`tel:${mockData.contact.phone}`}
                    className="body-medium text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {mockData.contact.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={16} />
                  </div>
                  <span className="body-medium text-gray-300">
                    {mockData.contact.location}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="heading-3 mb-6 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></div>
                Quick Links
              </h4>
              <nav className="space-y-3">
                {[
                  { label: 'About Me', id: 'about' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Portfolio', id: 'portfolio' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block body-medium text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="heading-3 mb-6 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-yellow-400 rounded-full"></div>
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  'CAD Design & Engineering',
                  'Manufacturing Consulting',
                  'Photography & Videography',
                  'Event Production',
                  'Multimedia Content Creation',
                  'Process Optimization'
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                    <span className="body-medium text-gray-400">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Enhanced Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400">
              <span className="body-small">
                © {currentYear} Muhammad Navis Akbar. Made with
              </span>
              <Heart className="text-red-500 fill-current animate-pulse" size={16} />
              <span className="body-small">
                in Indonesia
              </span>
            </div>
            
            {/* Enhanced Social Links */}
            <div className="flex items-center gap-4">
              {mockData.contact.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-transparent shadow-lg hover:shadow-2xl hover:transform hover:scale-110"
                  title={social.platform}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {getSocialIcon(social.platform)}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Enhanced Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-4 py-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 rounded-xl transition-all duration-300 border border-gray-700 hover:border-transparent"
            >
              <span className="body-small text-gray-300 group-hover:text-white">Back to Top</span>
              <ArrowUp className="text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" size={16} />
            </button>
          </div>

          {/* Additional Footer Note */}
          <div className="mt-6 pt-6 border-t border-gray-800/50 text-center">
            <p className="body-small text-gray-500">
              Open to exciting opportunities • Currently available for freelance projects
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;