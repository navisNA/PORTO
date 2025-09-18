import React from 'react';
import { GraduationCap, Award, Calendar, Star } from 'lucide-react';
import { mockData } from '../data/mockData';

const Education = () => {
  return (
    <section id="education" className="section bg-gray-900/50">
      <div className="container">
        <h2 className="heading-1 text-center mb-16">{mockData.education.title}</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Degrees */}
          <div>
            <h3 className="heading-2 mb-8 flex items-center gap-3">
              <GraduationCap className="text-lime-400" size={32} />
              Academic Background
            </h3>
            
            {mockData.education.degrees.map((degree) => (
              <div key={degree.id} className="card mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="heading-3 mb-2">{degree.degree}</h4>
                    <p className="body-medium text-lime-400 mb-2">{degree.institution}</p>
                    <p className="body-small text-gray-400 flex items-center gap-2">
                      <Calendar size={16} />
                      {degree.period}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="text-lime-400 fill-current" size={16} />
                      <span className="heading-3">{degree.gpa}</span>
                    </div>
                    <span className="body-small text-gray-400">GPA</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="body-medium text-gray-300">{degree.focus}</p>
                </div>
                
                {/* Achievements */}
                <div className="space-y-2">
                  {degree.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                      <span className="body-small text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="heading-2 mb-8 flex items-center gap-3">
              <Award className="text-lime-400" size={32} />
              Certifications
            </h3>
            
            {mockData.education.certifications.map((cert) => (
              <div key={cert.id} className="card mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="heading-3 mb-2">{cert.name}</h4>
                    <p className="body-medium text-lime-400 mb-2">{cert.issuer}</p>
                    <p className="body-small text-gray-400">{cert.credential}</p>
                  </div>
                  <div className="text-right">
                    <span className="heading-3">{cert.year}</span>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-lime-400/20 text-lime-400 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;