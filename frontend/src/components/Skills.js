import React from 'react';
import { Award } from 'lucide-react';
import { mockData } from '../data/mockData';

const Skills = () => {
  const getSkillBarColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-lime-400';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <section id="skills" className="section bg-gray-900/50">
      <div className="container">
        <h2 className="heading-1 text-center mb-16">{mockData.skills.title}</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {mockData.skills.categories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="heading-2 mb-8 text-center">{category.category}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="body-medium font-semibold">{skill.name}</span>
                        {skill.certified && (
                          <Award className="text-lime-400 fill-current" size={16} />
                        )}
                      </div>
                      <span className="body-small text-gray-400">{skill.level}%</span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillBarColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="card p-6">
              <div className="heading-2 mb-2">15+</div>
              <div className="body-small text-gray-400">Core Skills</div>
            </div>
            <div className="card p-6">
              <div className="heading-2 mb-2">5+</div>
              <div className="body-small text-gray-400">Years Experience</div>
            </div>
            <div className="card p-6">
              <div className="heading-2 mb-2">3</div>
              <div className="body-small text-gray-400">Certifications</div>
            </div>
            <div className="card p-6">
              <div className="heading-2 mb-2">90%</div>
              <div className="body-small text-gray-400">Avg. Proficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;