import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { mockData } from '../data/mockData';

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJobDetails = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const getJobTypeColor = (type) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-500/20 text-blue-400';
      case 'Freelance':
        return 'bg-green-500/20 text-green-400';
      case 'Contract':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="heading-1 text-center mb-16">{mockData.experience.title}</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            
            {mockData.experience.jobs.map((job, index) => (
              <div key={job.id} className="relative mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-lime-400 rounded-full border-4 border-gray-900 z-10"></div>
                
                {/* Job Card */}
                <div className="ml-20">
                  <div className="card">
                    {/* Job Header */}
                    <div 
                      className="cursor-pointer"
                      onClick={() => toggleJobDetails(job.id)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="heading-3">{job.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getJobTypeColor(job.type)}`}>
                              {job.type}
                            </span>
                          </div>
                          <p className="body-medium text-lime-400 mb-2">{job.company}</p>
                          <p className="body-small text-gray-400 flex items-center gap-2">
                            <Calendar size={16} />
                            {job.period}
                          </p>
                        </div>
                        
                        <button className="text-gray-400 hover:text-lime-400 transition-colors">
                          {expandedJob === job.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </button>
                      </div>
                      
                      <p className="body-medium text-gray-300 mb-4">{job.description}</p>
                    </div>
                    
                    {/* Expanded Details */}
                    {expandedJob === job.id && (
                      <div className="border-t border-gray-700 pt-6 animate-in slide-in-from-top-2 duration-300">
                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h4 className="heading-3 mb-4">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="body-medium text-gray-300">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Skills */}
                        <div>
                          <h4 className="heading-3 mb-4">Technologies & Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;