
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
  { name: "Generative AI", percentage: 85 },
];
export const PROJECTS: Project[] = [
  // GenAI Projects
  {
    id: '1',
    title: "RAG Q/A Chat Application",
    category: "GenAI",
    description: "A RAG-based QA system leveraging Gemini API to retrieve context and answer user queries with high accuracy.",
    image: "/assets/projects/project-1.jpg",
    video: "/assets/projects/project-1.mp4",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    id: '2',
    title: "AI Voice to Voice Interview Bot",
    category: "GenAI",
    description: "An interactive voice bot powered by LLMs to conduct mock interviews and provide real-time feedback.",
    image: "/assets/projects/project-2.jpg",
    video: "/assets/projects/project-2.mp4",
    githubLink: "https://github.com"
  },
  {
    id: '3',
    title: "AI Powered Text to SQL Chat",
    category: "GenAI",
    description: "A natural language interface that translates user questions into executable SQL queries for seamless database access.",
    image: "/assets/projects/project-3.jpg",
    video: "/assets/projects/project-3.mp4",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    id: 'genai-4',
    title: "Gemma Based Blog Generator",
    category: "GenAI",
    description: "A specialized blog generation tool using Google's Gemma models to create structured and engaging content.",
    image: "/assets/projects/project-4.jpg",
    video: "/assets/projects/project-4.mp4",
    githubLink: "https://github.com"
  },
  // Machine Learning Projects
  {
    id: '5',
    title: "EMI Prediction",
    category: "Machine Learning",
    description: "A machine learning model designed to estimate loan Equated Monthly Installments (EMI) and assess repayment capability based on financial profiles.",
    image: "/assets/projects/project-5.jpg",
    video: "/assets/projects/project-5.mp4",
    githubLink: "https://github.com"
  },
  {
    id: '6',
    title: "Bank Term Subscription Prediction",
    category: "Machine Learning",
    description: "A classification system used to predict whether a bank client will subscribe to a term deposit, optimizing marketing campaigns.",
    image: "/assets/projects/project-6.jpg",
    video: "/assets/projects/project-6.mp4",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    id: '7',
    title: "Breast Cancer Prediction",
    category: "Machine Learning",
    description: "A healthcare diagnostic tool employing machine learning algorithms to classify breast tumors as malignant or benign with high precision.",
    image: "/assets/projects/project-7.jpg",
    video: "/assets/projects/project-7.mp4",
    githubLink: "https://github.com"
  },
  {
    id: '8',
    title: "PatrollQ-Smart Safety Analytics Platform",
    category: "Machine Learning",
    description: "An intelligent safety monitoring platform using predictive analytics to identify potential workplace hazards and enhance safety compliance.",
    image: "/assets/projects/project-8.jpg",
    video: "/assets/projects/project-8.mp4",
    githubLink: "https://github.com"
  },
  // Deep Learning Projects
  {
    id: '9',
    title: "Tea Leaf Diseases Classification",
    category: "Deep Learning",
    description: "A deep learning application utilizing advanced CNN architectures to classify tea leaf diseases from images to aid precision agriculture.",
    image: "/assets/projects/project-9.jpg",
    video: "/assets/projects/project-9.mp4",
    githubLink: "https://github.com"
  },
  {
    id: '10',
    title: "Covid 19 X-Ray Classification",
    category: "Deep Learning",
    description: "Medical diagnostic tool using deep learning to classify Chest X-Rays for COVID-19 detection with high sensitivity.",
    image: "/assets/projects/project-10.jpg",
    video: "/assets/projects/project-10.mp4",
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    id: '11',
    title: "Smart Vision in Computer Vision",
    category: "Deep Learning",
    description: "An advanced computer vision system capable of real-time object tracking, scene understanding, and anomaly detection.",
    image: "/assets/projects/project-11.jpg",
    video: "/assets/projects/project-11.mp4",
    githubLink: "https://github.com"
  },
  // Data Science Projects
  {
    id: '12',
    title: "Customer Churn Prediction",
    category: "Data Science",
    description: "Analyzed telecom datasets to predict customer churn using Random Forest and XGBoost classifiers.",
    image: "/assets/projects/project-12.jpg",
    video: "/assets/projects/project-12.mp4",
    githubLink: "https://github.com"
  },
  {
    id: '13',
    title: "Housing Price Analysis",
    category: "Data Science",
    description: "Exploratory Data Analysis (EDA) and regression modeling to predict housing prices in major metropolitan areas.",
    image: "/assets/projects/project-13.jpg",
    video: "/assets/projects/project-13.mp4",
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
    stream: "Maths-Computer",
    years: "2020 - 2022"
  }
];