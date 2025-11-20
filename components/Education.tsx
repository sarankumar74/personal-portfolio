import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Education</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">My academic journey</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-900/50 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EDUCATION.map((item, index) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-950 z-10"></div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                  <div className={`bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 group
                    ${index % 2 !== 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
                    
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 !== 0 ? 'flex-row' : 'md:flex-row-reverse flex-row'}`}>
                       <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                         <GraduationCap size={20} />
                       </div>
                       <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.institution}</h3>
                    </div>

                    <h4 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{item.degree}</h4>
                    {item.stream && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{item.stream}</p>
                    )}
                    
                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-500 dark:text-slate-300 
                      ${index % 2 !== 0 ? '' : 'md:flex-row-reverse'}`}>
                      <Calendar size={14} />
                      <span>{item.years}</span>
                    </div>
                  </div>
                </div>

                {/* Empty Side for Desktop spacing */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;