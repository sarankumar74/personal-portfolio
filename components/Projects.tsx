import React, { useState, useMemo, useEffect } from 'react';
import { ExternalLink, Github, Play, X } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const CATEGORIES = ['All', 'Generative AI', 'Machine Learning', 'Deep Learning'];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Explore my recent work in AI and Development
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  activeFilter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600"
                  >
                    <Github size={18} />
                    Code
                  </a>

                  {project.video && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600"
                    >
                      <Play size={18} />
                      Watch Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 text-white p-2 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="aspect-video w-full bg-black">
              {selectedProject.video.startsWith('http') ? (
                <iframe
                  src={selectedProject.video}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  src={selectedProject.video}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
