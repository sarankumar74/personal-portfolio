
import { Project, EducationItem, Skill } from './types';

export const PERSONAL_DETAILS = {
  name: "Sarankumar R",
  role: "AI/ML Engineer / GenAI Engineer",
  phone: "+91 81489-10090",
  location: "Tamil Nadu, India",
  email: "sarankumar9425@gmail.com",
  about: "I am a passionate AI/ML Engineer with a deep focus on Generative AI and Computer Vision. With a strong foundation in Machine Learning and Deep Learning, I build scalable AI solutions that solve real-world problems. I thrive in dynamic environments where I can apply my skills in RAG, LLMs, and Neural Networks to innovate and create impact.",
  linkedin: "https://linkedin.com/in/sarankumar9425",
  github: "https://github.com/sarankumar74"
};

export const SKILLS: Skill[] = [
  { name: "Python", percentage: 95 },
  { name: "MySQL", percentage: 85 },
  { name: "Data Science", percentage: 90 },
  { name: "Machine Learning", percentage: 92 },
  { name: "Deep Learning", percentage: 88 },
  { name: "Computer Vision", percentage: 70 },
  { name: "RAG", percentage: 80 },
  { name: "Generative AI", percentage: 85 },
];
export const PROJECTS: Project[] = [
  // GenAI Projects
  {
    id: '1',
    title: "RAG Q/A Chat Application",
    category: "Generative AI",
    description: "A RAG-based QA system leveraging Gemini API to retrieve context and answer user queries with high accuracy.",
    image: "/assets/projects/project-1.png",
    video: "https://drive.google.com/file/d/18IxpYLDqDw8o0D9U1RdP7PF_0IDS5naA/preview",
    githubLink: "https://github.com/sarankumar74/RAG-Architecture-QA-Chats"
  },
  {
    id: '2',
    title: "AI Voice to Voice Interview Bot",
    category: "Generative AI",
    description: "An interactive voice bot powered by LLMs to conduct mock interviews and provide real-time feedback.",
    image: "/assets/projects/project-2.png",
    video: "https://drive.google.com/file/d/1O4RpEX57NlSxggxToKE7SwdyFPiZW9Bf/preview",
    githubLink: "https://github.com/sarankumar74/AI-VoicetoVoice-Interview-Application"
  },
  {
    id: '3',
    title: "AI Powered Text to SQL Chat",
    category: "Generative AI",
    description: "A natural language interface that translates user questions into executable SQL queries for seamless database access.",
    image: "/assets/projects/project-3.png",
    video: "https://drive.google.com/file/d/1d3raW0MrKm9-v0lYlSDJjr00fW9j3oAd/preview",
    githubLink: "https://github.com/sarankumar74/Text-to-MYSQL-Chat-Application"
  },
  {
    id: '4',
    title: "VoltValidator AI",
    category: "Generative AI",
    description: "An AI-powered diagnostic tool for analyzing electrical cables, insulation integrity, wire sizes, and voltage compliance using AI models.",
    image: "/assets/projects/project-4-2.png",
    video: "https://drive.google.com/file/d/1HZllHHdELGu6omQMgbs7QYRSDQ14qQ0L/preview",
    githubLink: "https://github.com/sarankumar74/InnoVites-AI"
  },

  // Machine Learning Projects
  {
    id: '5',
    title: "EMI Prediction",
    category: "Machine Learning",
    description: "A machine learning model designed to estimate loan Equated Monthly Installments (EMI) and assess repayment capability based on financial profiles.",
    image: "/assets/projects/project-5.png",
    video: "https://drive.google.com/file/d/1K1SpvIiLhIaAUhMpwu4a1DGOyO3KxxlU/preview",
    githubLink: "https://github.com/sarankumar74/EMI-Prediction-AI-Platform"
  },
  {
    id: '6',
    title: "Bank Term Subscription Prediction",
    category: "Machine Learning",
    description: "A classification system used to predict whether a bank client will subscribe to a term deposit, optimizing marketing campaigns.",
    image: "/assets/projects/project-6.png",
    video: "https://drive.google.com/file/d/1u8oHUi0FT3askWQCPbqA-_drFI21aztj/preview",
    githubLink: "https://github.com/sarankumar74/Bank-Term-Deposit-Subscription-Prediction"
  },
  {
    id: '7',
    title: "PatrollQ-Smart Safety Analytics Platform",
    category: "Machine Learning",
    description: "An intelligent safety monitoring platform using predictive analytics to identify potential workplace hazards and enhance safety compliance.",
    image: "/assets/projects/project-7.png",
    video: "https://drive.google.com/file/d/1JlF-qufNFmbvYYguTsYyit9E4zhg5VJl/preview",
    githubLink: "https://github.com/sarankumar74/PatrollQ-Smart-Safety-Analytics-Platform"
  },
  // Deep Learning Projects
  {
    id: '8',
    title: "Tea Leaf Diseases Classification",
    category: "Deep Learning",
    description: "A deep learning application utilizing advanced CNN architectures to classify tea leaf diseases from images to aid precision agriculture.",
    image: "/assets/projects/project-8.png",
    video: "https://drive.google.com/file/d/1Z1CUAy5yXJBEIFEtsKcqkb2h24eTRJ_u/preview",
    githubLink: "https://github.com/sarankumar74/Tea-Leaf-Disease-Classifier"
  },
  {
    id: '9',
    title: "Covid 19 X-Ray Classification",
    category: "Deep Learning",
    description: "Medical diagnostic tool using deep learning to classify Chest X-Rays for COVID-19 detection with high sensitivity.",
    image: "/assets/projects/project-9.png",
    video: "https://drive.google.com/file/d/1n2JQMK0ifvutcaEKbxOJxaVCB-dKJASJ/preview",
    githubLink: "https://github.com/sarankumar74/Multi-class-COVID-19-Detection-from-Chest-X-ray-Images"
  },
  {
    id: '10',
    title: "Smart Vision in Computer Vision",
    category: "Deep Learning",
    description: "An advanced computer vision system capable of real-time object tracking, scene understanding, and anomaly detection.",
    image: "/assets/projects/project-10.png",
    video: "https://drive.google.com/file/d/1ckllZND7PxnjJh4-4DI5E1WxAG_L4CZA/preview",
    githubLink: "https://github.com/sarankumar74/SmartVision-AI"
  },
  
];


export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    institution: "GUVI HCL",
    degree: "Certification Courses",
    stream: "Artificial Intelligence And Machine Learning Program",
    years: "2025 - 2025"
  },
   {
    id: '2',
    institution: "Muthayammal College of Arts And Science",
    degree: "Bachelor's of Science",
    stream: "Electronics And  Communication",
    years: "2022 - 2025"
  },
];
