import React, { useState } from 'react';
import { ExternalLink, Github, Play, Eye, Zap, Wrench, Camera } from 'lucide-react';
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

  const getCategoryIcon = (categoryId) => {
    switch(categoryId) {
      case 'engineering': return <Wrench className="text-blue-400" size={20} />;
      case 'multimedia': return <Camera className="text-orange-400" size={20} />;
      default: return <Zap className="text-cyan-400" size={20} />;
    }
  };

  return (
    <section id="portfolio" className="section section-alt">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{mockData.portfolio.title}</h2>
          <p className="body-large text-gray-400 max-w-3xl mx-auto">
            Explore my work in engineering design and multimedia production, showcasing technical expertise and creative vision.
          </p>
        </div>
        
        {/* Enhanced Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-gray-800/50 p-3 rounded-2xl border border-gray-700 backdrop-blur-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                activeCategory === 'all' 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg transform scale-105' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <Zap size={20} />
              All Projects
            </button>
            {mockData.portfolio.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg transform scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {getCategoryIcon(category.id)}
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="card p-0 overflow-hidden hover:transform hover:scale-105 hover:rotate-1 transition-all duration-500 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="btn-primary flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300"
                    >
                      <Eye size={20} />
                      View Details
                    </button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="heading-3 mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="body-medium text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-cyan-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-yellow-400/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="flex-1 btn-secondary text-sm py-2"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={closeProjectModal}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500/70 transition-colors duration-300 border border-gray-600"
                >
                  ✕
                </button>
                
                {/* Project Image */}
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                
                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="heading-2 text-white">{selectedProject.title}</h3>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <p className="body-large text-gray-300 mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="heading-3 mb-4 text-white flex items-center gap-2">
                      <Zap className="text-cyan-400" size={20} />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-xl text-sm border border-gray-600 shadow-lg"
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
                    <button className="btn-accent flex items-center gap-2">
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