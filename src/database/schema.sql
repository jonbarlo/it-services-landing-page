-- Company metadata table
CREATE TABLE IF NOT EXISTS company (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,
  founded_year INTEGER NOT NULL,
  website TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  logo_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  features TEXT NOT NULL, -- JSON array of features
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Technologies table
CREATE TABLE IF NOT EXISTS technologies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category TEXT NOT NULL, -- 'backend', 'frontend', 'mobile', 'ai', 'database'
  icon TEXT NOT NULL,
  proficiency_level INTEGER NOT NULL, -- 1-5 scale
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bio TEXT NOT NULL,
  experience_years INTEGER NOT NULL,
  avatar_url TEXT,
  linkedin_url TEXT,
  github_url TEXT,
  website_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Projects/Portfolio table
CREATE TABLE IF NOT EXISTS portfolio (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL, -- 'web', 'mobile', 'iot', 'ai'
  technologies TEXT NOT NULL, -- JSON array
  image_url TEXT,
  demo_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
