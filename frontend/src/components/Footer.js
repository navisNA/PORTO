import React from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
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

  return (
    <footer className="bg-gray-900/80 border-t border-gray-800">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="heading-2 mb-4">Muhammad Navis Akbar</h3>
              <p className="body-medium text-gray-400 mb-6 max-w-md">
                Manufacturing Engineer & Multimedia Creator combining technical expertise with creative vision to deliver innovative solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-lime-400" size={18} />
                  <a 
                    href={`mailto:${mockData.contact.email}`}
                    className="body-medium text-gray-400 hover:text-lime-400 transition-colors"
                  >
                    {mockData.contact.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-lime-400" size={18} />
                  <a 
                    href={`tel:${mockData.contact.phone}`}
                    className="body-medium text-gray-400 hover:text-lime-400 transition-colors"
                  >
                    {mockData.contact.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="text-lime-400" size={18} />
                  <span className="body-medium text-gray-400">
                    {mockData.contact.location}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="heading-3 mb-6">Quick Links</h4>
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
                    className="block body-medium text-gray-400 hover:text-lime-400 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="heading-3 mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  'CAD Design & Engineering',
                  'Manufacturing Consulting',
                  'Photography & Videography',
                  'Event Production',
                  'Multimedia Content Creation',
                  'Process Optimization'
                ].map((service, index) => (
                  <li key={index} className="body-medium text-gray-400">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="body-small">
                © {currentYear} Muhammad Navis Akbar. Made with
              </span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span className="body-small">
                in Indonesia
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              {mockData.contact.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-small text-gray-400 hover:text-lime-400 transition-colors capitalize"
                >
                  {social.platform}
                </a>
              ))}
            </div>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors group"
            >
              <span className="body-small">Back to Top</span>
              <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;