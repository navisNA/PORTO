import React from 'react';
import { Download, Eye, ArrowDown } from 'lucide-react';
import { mockData } from '../data/mockData';

const Hero = () => {
  const handleDownloadCV = () => {
    // Mock download functionality - will be replaced with actual file download
    console.log('Downloading CV...');
    alert('CV download feature will be implemented with backend!');
  };

  const handleViewPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Hero Content */}
          <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
            <div className="max-w-3xl">
              <h1 className="brand-display mb-6">
                {mockData.hero.name}
              </h1>
              <div className="heading-3 mb-8 text-white">
                {mockData.hero.tagline}
              </div>
              <p className="body-large mb-12 max-w-2xl">
                {mockData.hero.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <button 
                  onClick={handleDownloadCV}
                  className="btn-primary flex items-center gap-3"
                >
                  <Download size={20} />
                  Download CV
                </button>
                <button 
                  onClick={handleViewPortfolio}
                  className="btn-secondary flex items-center gap-3"
                >
                  <Eye size={20} />
                  View Portfolio
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                {mockData.hero.stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="heading-2 mb-2">{stat.value}</div>
                    <div className="body-small text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                <img 
                  src={mockData.hero.profileImage}
                  alt={mockData.hero.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-lime-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-lime-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-lime-400 transition-colors duration-300 animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;