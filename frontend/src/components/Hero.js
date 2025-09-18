import React from 'react';
import { Download, Eye, ArrowDown, Zap, Star } from 'lucide-react';
import { mockData } from '../data/mockData';

const Hero = () => {
  const handleDownloadCV = () => {
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
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <span className="text-cyan-400 font-semibold text-lg">Available for Projects</span>
            </div>
            
            <h1 className="hero-title mb-6">
              {mockData.hero.name}
            </h1>
            
            <div className="text-2xl lg:text-3xl font-semibold text-white mb-8 leading-tight">
              {mockData.hero.tagline}
            </div>
            
            <p className="body-large mb-12 max-w-2xl leading-relaxed">
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

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8">
              {mockData.hero.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left group">
                  <div className="relative">
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Star className="text-yellow-400 fill-current" size={16} />
                    </div>
                  </div>
                  <div className="body-small text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-500 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <img 
                      src={mockData.hero.profileImage}
                      alt={mockData.hero.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-12 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Skills Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 backdrop-blur-sm border border-gray-600 rounded-full px-6 py-3 flex items-center gap-3 shadow-2xl">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-sm">Engineering + Creative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;