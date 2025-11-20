import React, { useEffect, useState, useRef } from 'react';
import { SKILLS } from '../constants';

interface CircularProgressProps {
  percentage: number;
  label: string;
  color?: string;
  isVisible: boolean;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  percentage, 
  label, 
  color = "text-indigo-600 dark:text-indigo-400",
  isVisible
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  // If visible, calculate offset based on percentage. If not, full offset (empty circle).
  const strokeDashoffset = isVisible ? circumference - (percentage / 100) * circumference : circumference;
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let startTimestamp: number | null = null;
      const duration = 1500; // Animation duration in ms

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progressTime = timestamp - startTimestamp;
        const progressRatio = Math.min(progressTime / duration, 1);
        
        // Ease out cubic function for smooth counting
        const easeOut = 1 - Math.pow(1 - progressRatio, 3);
        
        setCount(Math.floor(easeOut * percentage));

        if (progressTime < duration) {
          window.requestAnimationFrame(step);
        } else {
          setCount(percentage); // Ensure it lands exactly on the target
        }
      };

      window.requestAnimationFrame(step);
    } else {
      setCount(0);
    }
  }, [isVisible, percentage]);

  return (
    <div className="flex flex-col items-center p-4 group hover:scale-105 transition-transform duration-300">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            className="text-slate-200 dark:text-slate-800"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <circle
            className={`${color} transition-all duration-[1500ms] ease-out`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
        </svg>
        {/* Percentage Text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-2xl font-bold text-slate-700 dark:text-slate-200">
            {count}%
          </span>
        </div>
      </div>
      <h3 className="mt-4 font-semibold text-slate-800 dark:text-slate-200 text-lg text-center">{label}</h3>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">My proficiency in various technologies</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CircularProgress 
                label={skill.name} 
                percentage={skill.percentage} 
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;