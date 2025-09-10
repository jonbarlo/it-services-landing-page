import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="gradient-text">506 Software</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into digital reality with 20+ years of experience in software development, 
              specializing in web applications, mobile apps, IoT solutions, and cutting-edge AI technologies.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/jonathanbarquero"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} className="text-gray-400 hover:text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jonathanbarquero"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} className="text-gray-400 hover:text-white" />
              </motion.a>
              <motion.a
                href="mailto:contact@506software.com"
                className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} className="text-gray-400 hover:text-white" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">IoT Solutions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">AI & Machine Learning</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Ruby on Rails</span></li>
              <li><span className="text-gray-400">React & TypeScript</span></li>
              <li><span className="text-gray-400">Flutter & React Native</span></li>
              <li><span className="text-gray-400">Python & AI/ML</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} 506 Software. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <motion.a
                href="https://jonathan.506software.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                whileHover={{ x: 2 }}
              >
                <span>Founder's Website</span>
                <ExternalLink size={14} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
