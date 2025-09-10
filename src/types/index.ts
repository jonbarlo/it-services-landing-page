export interface Company {
  id: number;
  name: string;
  tagline: string;
  description: string;
  founded_year: number;
  website: string;
  email: string;
  phone: string;
  address: string;
  logo_url: string;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  features: string[];
  created_at: string;
}

export interface Technology {
  id: number;
  name: string;
  category: 'backend' | 'frontend' | 'mobile' | 'ai' | 'database';
  icon: string;
  proficiency_level: number;
  created_at: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  experience_years: number;
  avatar_url: string;
  linkedin_url: string;
  github_url: string;
  website_url: string;
  created_at: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'iot' | 'ai';
  technologies: string[];
  image_url: string;
  demo_url: string;
  github_url: string;
  featured: boolean;
  created_at: string;
}
