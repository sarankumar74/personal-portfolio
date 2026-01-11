import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Introduction */}
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Transforming Data into <span className="text-indigo-600 dark:text-indigo-400">Intelligent Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {PERSONAL_DETAILS.about}
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
               <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-800/50">
                 <h3 className="font-bold text-2xl text-indigo-600 dark:text-indigo-400 mb-1">4+</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-sm">GenAI Projects</p>
               </div>
               {/*
                <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-800/50">
                 <h3 className="font-bold text-2xl text-indigo-600 dark:text-indigo-400 mb-1">0</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-sm">Years Coding</p>
               </div>
               */}
            </div>
          </div>

          {/* Right Side: Photo */}
          <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300 opacity-20 dark:opacity-40"></div>
                <div className="absolute inset-0 bg-slate-900 dark:bg-slate-700 rounded-2xl -rotate-6 group-hover:-rotate-3 transition-transform duration-300 opacity-10 dark:opacity-30"></div>
                <img 
                  src="/assets/about/about.jpg" 
                  alt="About Me" 
                  className="relative w-full h-full object-cover rounded-2xl shadow-lg dark:shadow-slate-900/50"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
