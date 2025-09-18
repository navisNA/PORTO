import React, { useState } from 'react';
import { ExternalLink, Github, Play, Eye } from 'lucide-react';
import { mockData } from '../data/mockData';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const allProjects = mockData.portfolio.categories.flatMap(category => 
    category.projects.map(project => ({ ...project, categoryName: category.name }))
  );

  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : mockData.portfolio.categories
        .find(cat => cat.id === activeCategory)?.projects || [];

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="heading-1 text-center mb-8">{mockData.portfolio.title}</h2>
        <p className="body-large text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Explore my work in engineering design and multimedia production, showcasing technical expertise and creative vision.
        </p>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-gray-900/50 p-2 rounded-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'all' 
                  ? 'btn-primary' 
                  : 'text-gray-400 hover:text-lime-400'
              }`}
            >
              All Projects
            </button>
            {mockData.portfolio.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id 
                    ? 'btn-primary' 
                    : 'text-gray-400 hover:text-lime-400'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="card p-0 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="btn-primary flex items-center gap-2"
                    >
                      <Eye size={20} />
                      View Details
                    </button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-lime-400/90 text-black rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="heading-3 mb-3">{project.title}</h3>
                  <p className="body-medium text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
                
                {/* Project Image */}
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="heading-2">{selectedProject.title}</h3>
                    <span className="px-3 py-1 bg-lime-400/20 text-lime-400 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <p className="body-large text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="heading-3 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="btn-primary flex items-center gap-2">
                      <ExternalLink size={20} />
                      View Project
                    </button>
                    <button className="btn-secondary flex items-center gap-2">
                      <Github size={20} />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;