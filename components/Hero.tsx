
import React from 'react';
import { Download, Github, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center md:items-start justify-center pt-28 pb-16 md:pt-28 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Photo */}
        <div className="order-1 md:order-1 flex justify-center md:justify-start pl-4 animate-fade-in-up">
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500 rounded-full opacity-20 blur-lg dark:opacity-30"></div>
            <img 
              src="/assets/home/profile.jpg" 
              alt="Profile" 
              className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Info */}
        <div className="order-2 md:order-2 text-center md:text-left space-y-6 animate-fade-in-up delay-200">
          <div>
            <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg uppercase tracking-wide mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {PERSONAL_DETAILS.name}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
              {PERSONAL_DETAILS.role}
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start gap-4 text-slate-600 dark:text-slate-400 text-sm md:text-base animate-fade-in-up delay-300">
             <div className="flex items-center gap-2">
               <Mail size={20} className="text-indigo-500 dark:text-indigo-400" />
               <span>{PERSONAL_DETAILS.email}</span>
             </div>
             <div className="flex items-center gap-2">
               <Phone size={20} className="text-indigo-500 dark:text-indigo-400" />
               <span>{PERSONAL_DETAILS.phone}</span>
             </div>
             <div className="flex items-center gap-2">
               <MapPin size={20} className="text-indigo-500 dark:text-indigo-400" />
               <span>{PERSONAL_DETAILS.location}</span>
             </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 animate-fade-in-up delay-500">
            <a 
              href="https://drive.google.com/file/d/1EKHMEAf1Rnnx7-_AGIBcJzIxcXXmXXgz/view?usp=sharing" 
              download
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all hover:scale-105 shadow-md"
            >
              <Download size={20} />
              Download Resume
            </a>
            
            <div className="flex gap-3">
              <a 
                href={PERSONAL_DETAILS.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-md hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={PERSONAL_DETAILS.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-md hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg transition-all"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
