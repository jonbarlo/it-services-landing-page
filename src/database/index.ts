import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { join } from 'path';

const db = new Database('company.db');

// Initialize database with schema
const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf8');
db.exec(schema);

export default db;

// Helper functions for database operations
export const getCompany = () => {
  const stmt = db.prepare('SELECT * FROM company LIMIT 1');
  return stmt.get();
};

export const getServices = () => {
  const stmt = db.prepare('SELECT * FROM services ORDER BY id');
  return stmt.all();
};

export const getTechnologies = () => {
  const stmt = db.prepare('SELECT * FROM technologies ORDER BY category, proficiency_level DESC');
  return stmt.all();
};

export const getTeamMembers = () => {
  const stmt = db.prepare('SELECT * FROM team_members ORDER BY experience_years DESC');
  return stmt.all();
};

export const getPortfolio = () => {
  const stmt = db.prepare('SELECT * FROM portfolio WHERE featured = 1 ORDER BY created_at DESC');
  return stmt.all();
};
