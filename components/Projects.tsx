
import React, { useState, useMemo, useEffect } from 'react';
import { ExternalLink, Github, Play, X } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const CATEGORIES = ['All', 'GenAI', 'Mini', 'CNN', 'Data Science'];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Explore my recent work in AI and Development</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 
                ${activeFilter === category 
                  ? 'bg-indigo-600 text-white shadow-md scale-105' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-56 bg-slate-200 dark:bg-slate-900 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-400 shadow-sm pointer-events-none z-10">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.video && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors cursor-pointer"
                    >
                      <Play size={18} />
                      <span>Watch Demo</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>
            
            <div className="aspect-video w-full bg-black">
              <video
                src={selectedProject.video}
                poster={selectedProject.image}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{selectedProject.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
