import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database('company.db');

// Initialize database with schema
const schema = readFileSync(join(__dirname, '../src/database/schema.sql'), 'utf8');
db.exec(schema);

// Seed company data
const insertCompany = db.prepare(`
  INSERT OR REPLACE INTO company (id, name, tagline, description, founded_year, website, email, phone, address, logo_url)
  VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

insertCompany.run(
  '506 Software',
  'Transforming Ideas into Digital Reality',
  'Leading IT services company with 20+ years of experience in software development, specializing in web applications, mobile apps, IoT solutions, and cutting-edge AI technologies.',
  2004,
  'https://jonathan.506software.com',
  'contact@506software.com',
  '+(506) 85842192',
  'San José, Costa Rica',
  '/logo.svg'
);

// Seed services data
const insertService = db.prepare(`
  INSERT OR REPLACE INTO services (id, name, description, icon, features)
  VALUES (?, ?, ?, ?, ?)
`);

const services = [
  {
    id: 1,
    name: 'Web Applications',
    description: 'Modern, scalable web applications built with cutting-edge technologies',
    icon: 'Globe',
    features: JSON.stringify([
      'React & Next.js Applications',
      'Ruby on Rails Backend',
      'Node.js Microservices',
      'Progressive Web Apps (PWA)',
      'Real-time Applications',
      'E-commerce Solutions'
    ])
  },
  {
    id: 2,
    name: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android',
    icon: 'Smartphone',
    features: JSON.stringify([
      'Flutter Cross-platform Apps',
      'React Native Development',
      'Native iOS (Swift)',
      'Native Android (Kotlin)',
      'Mobile UI/UX Design',
      'App Store Optimization'
    ])
  },
  {
    id: 3,
    name: 'IoT Solutions',
    description: 'Internet of Things applications and smart device integration',
    icon: 'Cpu',
    features: JSON.stringify([
      'Smart Device Integration',
      'IoT Data Analytics',
      'Real-time Monitoring',
      'Edge Computing Solutions',
      'Sensor Networks',
      'IoT Security'
    ])
  },
  {
    id: 4,
    name: 'AI & Machine Learning',
    description: 'Artificial Intelligence solutions including LLM training and agent AI',
    icon: 'Brain',
    features: JSON.stringify([
      'Large Language Model Training',
      'Supervised Fine-Tuning (SFT)',
      'Retrieval-Augmented Generation (RAG)',
      'Agent AI Development',
      'Machine Learning Pipelines',
      'AI Integration Services'
    ])
  }
];

services.forEach(service => {
  insertService.run(service.id, service.name, service.description, service.icon, service.features);
});

// Seed technologies data
const insertTechnology = db.prepare(`
  INSERT OR REPLACE INTO technologies (id, name, category, icon, proficiency_level)
  VALUES (?, ?, ?, ?, ?)
`);

const technologies = [
  // Backend
  { id: 1, name: 'Ruby on Rails', category: 'backend', icon: 'Ruby', proficiency_level: 5 },
  { id: 2, name: 'Node.js', category: 'backend', icon: 'Node', proficiency_level: 5 },
  { id: 3, name: 'Python', category: 'backend', icon: 'Python', proficiency_level: 4 },
  { id: 4, name: 'PHP', category: 'backend', icon: 'Php', proficiency_level: 4 },
  
  // Frontend
  { id: 5, name: 'React', category: 'frontend', icon: 'React', proficiency_level: 5 },
  { id: 6, name: 'TypeScript', category: 'frontend', icon: 'TypeScript', proficiency_level: 5 },
  { id: 7, name: 'Angular', category: 'frontend', icon: 'Angular', proficiency_level: 4 },
  { id: 8, name: 'Svelte', category: 'frontend', icon: 'Svelte', proficiency_level: 4 },
  
  // Mobile
  { id: 9, name: 'Flutter', category: 'mobile', icon: 'Flutter', proficiency_level: 5 },
  { id: 10, name: 'React Native', category: 'mobile', icon: 'ReactNative', proficiency_level: 5 },
  { id: 11, name: 'Swift', category: 'mobile', icon: 'Swift', proficiency_level: 4 },
  { id: 12, name: 'Android', category: 'mobile', icon: 'Android', proficiency_level: 4 },
  
  // AI
  { id: 13, name: 'TensorFlow', category: 'ai', icon: 'TensorFlow', proficiency_level: 4 },
  { id: 14, name: 'PyTorch', category: 'ai', icon: 'PyTorch', proficiency_level: 4 },
  { id: 15, name: 'OpenAI API', category: 'ai', icon: 'OpenAI', proficiency_level: 5 },
  { id: 16, name: 'LangChain', category: 'ai', icon: 'LangChain', proficiency_level: 4 },
  
  // Database
  { id: 17, name: 'PostgreSQL', category: 'database', icon: 'PostgreSQL', proficiency_level: 5 },
  { id: 18, name: 'MongoDB', category: 'database', icon: 'MongoDB', proficiency_level: 4 },
  { id: 19, name: 'Redis', category: 'database', icon: 'Redis', proficiency_level: 4 },
  { id: 20, name: 'SQLite', category: 'database', icon: 'SQLite', proficiency_level: 5 }
];

technologies.forEach(tech => {
  insertTechnology.run(tech.id, tech.name, tech.category, tech.icon, tech.proficiency_level);
});

// Seed team member data
const insertTeamMember = db.prepare(`
  INSERT OR REPLACE INTO team_members (id, name, position, bio, experience_years, avatar_url, linkedin_url, github_url, website_url)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

insertTeamMember.run(
  1,
  'Jonathan Barquero',
  'Founder & Lead Developer',
  'With 19+ years in software development—including 13+ years specializing in Ruby on Rails—I\'ve designed and delivered high-performance, scalable systems for diverse industries. My expertise spans backend & cloud development, asynchronous workflows, database optimization, and modern frontend frameworks.',
  20,
  '/jonathan-avatar.jpg',
  'https://linkedin.com/in/jonathanbarquero',
  'https://github.com/jonbarlo',
  'https://jonathan.506software.com'
);

// Seed portfolio data
const insertPortfolio = db.prepare(`
  INSERT OR REPLACE INTO portfolio (id, title, description, category, technologies, image_url, demo_url, github_url, featured)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Scalable e-commerce solution with real-time inventory management and AI-powered recommendations',
    category: 'web',
    technologies: JSON.stringify(['Ruby on Rails', 'React', 'PostgreSQL', 'Redis']),
    image_url: '/portfolio/ecommerce.jpg',
    demo_url: 'https://demo.506software.com/ecommerce',
    github_url: 'https://github.com/506software/ecommerce',
    featured: true
  },
  {
    id: 2,
    title: 'IoT Fleet Management',
    description: 'Real-time fleet tracking and management system with predictive analytics',
    category: 'iot',
    technologies: JSON.stringify(['Node.js', 'React Native', 'MongoDB', 'AWS IoT']),
    image_url: '/portfolio/fleet-management.jpg',
    demo_url: 'https://demo.506software.com/fleet',
    github_url: 'https://github.com/506software/fleet-management',
    featured: true
  },
  {
    id: 3,
    title: 'AI Customer Support',
    description: 'Intelligent customer support system with LLM-powered chatbots and sentiment analysis',
    category: 'ai',
    technologies: JSON.stringify(['Python', 'OpenAI API', 'LangChain', 'FastAPI']),
    image_url: '/portfolio/ai-support.jpg',
    demo_url: 'https://demo.506software.com/ai-support',
    github_url: 'https://github.com/506software/ai-support',
    featured: true
  }
];

portfolioItems.forEach(item => {
  insertPortfolio.run(
    item.id,
    item.title,
    item.description,
    item.category,
    item.technologies,
    item.image_url,
    item.demo_url,
    item.github_url,
    item.featured ? 1 : 0
  );
});

console.log('Database seeded successfully!');
db.close();
