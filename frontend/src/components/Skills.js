import React, { useState } from 'react';
import { Award, TrendingUp, Code, Camera } from 'lucide-react';
import { mockData } from '../data/mockData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const getSkillBarColor = (level) => {
    if (level >= 90) return 'from-green-500 to-emerald-400';
    if (level >= 80) return 'from-blue-500 to-cyan-400';
    if (level >= 70) return 'from-orange-500 to-yellow-400';
    return 'from-gray-500 to-gray-400';
  };

  const getCategoryIcon = (category) => {
    if (category.includes('Engineering')) return <Code className="text-blue-400" size={24} />;
    if (category.includes('Multimedia')) return <Camera className="text-orange-400" size={24} />;
    return <TrendingUp className="text-cyan-400" size={24} />;
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="body-large text-gray-400 max-w-3xl mx-auto">
            Comprehensive skill set spanning engineering precision and creative multimedia production
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap bg-gray-800/50 p-2 rounded-2xl border border-gray-700">
            {mockData.skills.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeCategory === index 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {getCategoryIcon(category.category)}
                <span className="font-medium">{category.category}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mockData.skills.categories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`transition-all duration-500 ${
                activeCategory === categoryIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
              }`}
            >
              <div className="card h-full">
                <div className="flex items-center gap-3 mb-8">
                  {getCategoryIcon(category.category)}
                  <h3 className="heading-2 text-white">{category.category}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <span className="body-medium font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {skill.name}
                          </span>
                          {skill.certified && (
                            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                              <Award className="text-white" size={12} />
                            </div>
                          )}
                        </div>
                        <span className="body-small text-gray-400 font-bold">{skill.level}%</span>
                      </div>
                      
                      {/* Enhanced Skill Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${getSkillBarColor(skill.level)} transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ width: `${skill.level}%` }}
                          >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                        {/* Glow Effect */}
                        <div 
                          className={`absolute top-0 h-full bg-gradient-to-r ${getSkillBarColor(skill.level)} opacity-30 blur-sm transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Skills Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: '15+', label: 'Core Skills', gradient: 'from-blue-500 to-cyan-400', icon: <Code size={24} /> },
            { value: '5+', label: 'Years Experience', gradient: 'from-purple-500 to-pink-400', icon: <TrendingUp size={24} /> },
            { value: '3', label: 'Certifications', gradient: 'from-yellow-500 to-orange-400', icon: <Award size={24} /> },
            { value: '90%', label: 'Avg. Proficiency', gradient: 'from-green-500 to-emerald-400', icon: <TrendingUp size={24} /> }
          ].map((stat, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                <span className="text-white">{stat.icon}</span>
              </div>
              <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="body-small text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;