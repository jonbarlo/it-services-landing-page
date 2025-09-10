# 506 Software - IT Services Landing Page

A modern, cutting-edge React TypeScript landing page for 506 Software, featuring parallax animations, glass morphism effects, and a responsive design that showcases 20+ years of software development expertise.

## Features

- 🚀 **Modern React + TypeScript** with Vite for fast development
- 🎨 **Parallax Animations** using Framer Motion for smooth, engaging interactions
- 💎 **Glass Morphism UI** with Tailwind CSS for a cutting-edge look
- 📱 **Fully Responsive** design that works on all devices
- 🎯 **SQLite Database** for storing company metadata and configuration
- ⚡ **Performance Optimized** with lazy loading and efficient animations
- 🎭 **Particle Background** with interactive canvas animations

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion, React Intersection Observer
- **Database**: SQLite with better-sqlite3
- **Build Tool**: Vite
- **Icons**: Lucide React

## Services Highlighted

- **Web Applications**: React, Next.js, Ruby on Rails, Node.js
- **Mobile Applications**: Flutter, React Native, Native iOS/Android
- **IoT Solutions**: Smart devices, real-time monitoring, edge computing
- **AI & Machine Learning**: LLM training, SFT, RAG, Agent AI

## Technologies Showcased

- **Backend**: Ruby on Rails, Node.js, Python, PHP
- **Frontend**: React, TypeScript, Angular, Svelte
- **Mobile**: Flutter, React Native, Swift, Android
- **AI**: TensorFlow, PyTorch, OpenAI API, LangChain
- **Database**: PostgreSQL, MongoDB, Redis, SQLite

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd it-services-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Seed the database with company data:
```bash
npm run db:seed
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing hero section
│   ├── Services.tsx    # Services showcase
│   ├── Technologies.tsx # Technology stack
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer component
│   └── ParticleBackground.tsx # Animated background
├── database/           # Database schema and utilities
│   ├── schema.sql      # SQLite schema
│   └── index.ts        # Database connection
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Database Schema

The SQLite database includes tables for:
- **Company**: Company information and metadata
- **Services**: Service offerings and features
- **Technologies**: Technology stack with proficiency levels
- **Team Members**: Team member profiles
- **Portfolio**: Featured projects and case studies

## Customization

### Company Information
Update the company data in `scripts/seed.ts` to customize:
- Company name, tagline, and description
- Contact information
- Services and technologies
- Team member profiles

### Styling
Modify `tailwind.config.js` to customize:
- Color schemes
- Animation timings
- Typography
- Spacing and layout

### Content
Update component files in `src/components/` to modify:
- Text content
- Service descriptions
- Technology lists
- Contact information

## Performance Features

- **Lazy Loading**: Components load as they enter the viewport
- **Optimized Animations**: Smooth 60fps animations with Framer Motion
- **Efficient Rendering**: React.memo and useMemo for performance
- **Responsive Images**: Optimized for different screen sizes
- **Code Splitting**: Automatic code splitting with Vite

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- **Website**: [jonathan.506software.com](https://jonathan.506software.com)
- **Email**: contact@506software.com
- **LinkedIn**: [Jonathan Barquero](https://linkedin.com/in/jonathanbarquero)

---

Built with ❤️ by 506 Software - Transforming Ideas into Digital Reality
