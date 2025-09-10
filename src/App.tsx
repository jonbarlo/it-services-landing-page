import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Services />
        <Technologies />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
