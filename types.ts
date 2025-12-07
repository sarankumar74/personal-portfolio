
export interface Project {
  id: string;
  title: string;
  category: 'GenAI' | 'Mini' | 'CNN' | 'Data Science';
  description: string;
  image: string;
  video?: string;
  githubLink: string;
  liveLink?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  stream?: string;
  years: string;
}

export interface Skill {
  name: string;
  percentage: number;
}
