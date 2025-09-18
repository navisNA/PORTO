import React from 'react';
import { CheckCircle } from 'lucide-react';
import { mockData } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-1 mb-8">{mockData.about.title}</h2>
            <p className="body-large mb-8 leading-relaxed">
              {mockData.about.description}
            </p>
            
            {/* Highlights */}
            <div className="space-y-4">
              {mockData.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-lime-400 mt-1 flex-shrink-0" size={20} />
                  <span className="body-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="card p-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-lime-400/20 to-lime-600/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="heading-3 mb-4">Engineering + Creativity</h3>
                <p className="body-medium text-gray-400">
                  Combining technical precision with creative vision to deliver innovative solutions
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-lime-400/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-lime-400/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;