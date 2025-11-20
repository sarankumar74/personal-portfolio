import { Project, EducationItem, Skill } from './types';

export const PERSONAL_DETAILS = {
  name: "Sarankumar R",
  role: "AI/ML Engineer / GenAI Engineer",
  phone: "+91 81489-10090",
  location: "Tamil Nadu, India",
  email: "sarankumar9425@gmail.com",
  about: "I am a passionate AI/ML Engineer with a deep focus on Generative AI and Computer Vision. With a strong foundation in Data Science and Deep Learning, I build scalable AI solutions that solve real-world problems. I thrive in dynamic environments where I can apply my skills in RAG, LLMs, and Neural Networks to innovate and create impact.",
  linkedin: "https://linkedin.com/in/sarankumar9425",
  github: "https://github.com/sarankumar74"
};

export const SKILLS: Skill[] = [
  { name: "Python", percentage: 95 },
  { name: "MySQL", percentage: 85 },
  { name: "Data Science", percentage: 90 },
  { name: "Machine Learning", percentage: 92 },
  { name: "Deep Learning", percentage: 88 },
  { name: "CNN", percentage: 85 },
  { name: "RAG", percentage: 80 },
  { name: "Generative AI", percentage: 80 },
];

export const PROJECTS: Project[] = [
  // GenAI Projects
  {
    id: '1',
    title: "AI Content Generator",
    category: "GenAI",
    description: "A RAG-based content generation tool using Gemini API to draft marketing copy tailored to specific brand voices.",
    image: "/assets/projects/project-1.jpg",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    id: '2',
    title: "Code Assistant Bot",
    category: "GenAI",
    description: "A VS Code extension powered by LLMs to suggest code refactoring and generate documentation automatically.",
    image: "/assets/projects/project-2.jpg",
    githubLink: "https://github.com"
  },
  {
    id: '3',
    title: "Personalized Tutor",
    category: "GenAI",
    description: "An adaptive learning platform that uses GenAI to create personalized quizzes and study plans for students.",
    image: "/assets/projects/project-3.jpg",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  // Mini Projects
  {
    id: '4',
    title: "Task Manager CLI",
    category: "Mini",
    description: "A lightweight command-line interface for managing daily tasks with local storage persistence.",
    image: "/assets/projects/project-4.jpg",
    githubLink: "https://github.com"
  },
  {
    id: '5',
    title: "Weather Dashboard",
    category: "Mini",
    description: "A simple React app fetching real-time weather data using OpenWeatherMap API.",
    image: "/assets/projects/project-5.jpg",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    id: '6',
    title: "Expense Tracker",
    category: "Mini",
    description: "A visual expense tracker using Chart.js to visualize monthly spending habits.",
    image: "/assets/projects/project-6.jpg",
    githubLink: "https://github.com"
  },
  // CNN Projects
  {
    id: '7',
    title: "Plant Disease Detection",
    category: "CNN",
    description: "A Convolutional Neural Network model trained to classify plant diseases from leaf images with 98% accuracy.",
    image: "/assets/projects/project-7.jpg",
    githubLink: "https://github.com"
  },
  {
    id: '8',
    title: "Traffic Sign Recognition",
    category: "CNN",
    description: "Real-time traffic sign recognition system for autonomous vehicle simulation using YOLO architecture.",
    image: "/assets/projects/project-8.jpg",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  // Data Science Projects
  {
    id: '9',
    title: "Customer Churn Prediction",
    category: "Data Science",
    description: "Analyzed telecom datasets to predict customer churn using Random Forest and XGBoost classifiers.",
    image: "/assets/projects/project-9.jpg",
    githubLink: "https://github.com"
  },
  {
    id: '10',
    title: "Housing Price Analysis",
    category: "Data Science",
    description: "Exploratory Data Analysis (EDA) and regression modeling to predict housing prices in major metropolitan areas.",
    image: "/assets/projects/project-10.jpg",
    githubLink: "https://github.com"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    institution: "Muthayammlal College of Arts & Science",
    degree: "Bachelor of Science",
    stream: "Electronice & Communication",
    years: "2022 - 2025"
  },
  {
    id: '2',
    institution: "Sree Vidhya Vihash Martic High School",
    degree: "Higher Secondary School",
    stream: "Maths-Commputer",
    years: "2020 - 2021"
  }
];