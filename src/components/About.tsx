import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Award,
      title: 'NASA Hackathon Winner',
      description: '3rd Place in NASA Australia Hackathon',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      title: 'StackOverflow Top 5%',
      description: '8K+ reputation, helping developers worldwide',
      color: 'text-orange-400'
    },
    {
      icon: Code,
      title: 'BeHealthy Winner',
      description: '1st Place in Costa Rica Health Hackathon',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: '20+ Years Experience',
      description: 'Leading software development since 2004',
      color: 'text-blue-400'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the visionary leader behind 506 Software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JB</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Jonathan Barquero</h3>
                  <p className="text-blue-400 text-lg">Founder & Lead Developer</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                With 19+ years in software development—including 13+ years specializing in Ruby on Rails—I've designed and delivered high-performance, scalable systems for diverse industries. My expertise spans backend & cloud development, asynchronous workflows, database optimization, and modern frontend frameworks.
              </p>
              
              <div className="flex space-x-4">
                <motion.a
                  href="https://linkedin.com/in/jonathanbarquero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/jonathanbarquero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-full hover:border-blue-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Recognition & Achievements</h3>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass rounded-2xl p-6 hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700`}>
                    <achievement.icon size={24} className={achievement.color} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 glass rounded-3xl p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              For 19+ years, I've thrived at the intersection of creativity and technology, building software that solves real-world problems. My journey began with a passion for clean, efficient code—and evolved into deep expertise in Ruby on Rails, JavaScript frameworks (React, Svelte), and cloud-native systems.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              What excites me most is tackling complexity. Whether designing RESTful APIs, implementing async workflows with Sidekiq/AWS SQS, or bridging frontend and mobile ecosystems (Flutter, React Native), I love turning challenges into seamless user experiences. Today, I'm still driven by curiosity—exploring new tools, refining performance bottlenecks, and collaborating with teams to build things that matter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
