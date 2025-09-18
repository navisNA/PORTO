import React from 'react';
import { CheckCircle, Zap, Target, Award } from 'lucide-react';
import { mockData } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{mockData.about.title}</h2>
          <p className="body-large text-gray-400 max-w-3xl mx-auto">
            Menggabungkan keahlian teknis manufaktur dengan kreativitas multimedia untuk menciptakan solusi inovatif
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="body-large leading-relaxed text-gray-300">
                {mockData.about.description}
              </p>
            </div>
            
            {/* Highlights */}
            <div className="space-y-4">
              {mockData.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="body-medium text-gray-200">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">2025</div>
                <div className="body-small text-gray-400">Graduation Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent mb-2">UNY</div>
                <div className="body-small text-gray-400">University</div>
              </div>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="space-y-6">
            {/* Main Feature Card */}
            <div className="card-accent">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="heading-2 mb-4 text-white">Engineering + Creativity</h3>
                <p className="body-medium text-gray-300 leading-relaxed">
                  Combining technical precision with creative vision to deliver innovative solutions that bridge engineering excellence and multimedia artistry.
                </p>
              </div>
            </div>

            {/* Skills Preview Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 text-center hover:border-blue-500/50 transition-colors duration-300">
                <Target className="text-blue-400 mx-auto mb-3" size={24} />
                <h4 className="heading-3 mb-2 text-white">Technical</h4>
                <p className="body-small text-gray-400">CAD Design, Manufacturing, Process Analysis</p>
              </div>
              
              <div className="card p-6 text-center hover:border-orange-500/50 transition-colors duration-300">
                <Award className="text-orange-400 mx-auto mb-3" size={24} />
                <h4 className="heading-3 mb-2 text-white">Creative</h4>
                <p className="body-small text-gray-400">Photography, Videography, Event Production</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;