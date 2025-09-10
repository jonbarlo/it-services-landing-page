import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Technologies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = {
    backend: [
      { name: 'Ruby on Rails', level: 5, color: 'text-red-400' },
      { name: 'Node.js', level: 5, color: 'text-green-400' },
      { name: 'Python', level: 4, color: 'text-yellow-400' },
      { name: 'PHP', level: 4, color: 'text-purple-400' },
    ],
    frontend: [
      { name: 'React', level: 5, color: 'text-blue-400' },
      { name: 'TypeScript', level: 5, color: 'text-blue-300' },
      { name: 'Angular', level: 4, color: 'text-red-500' },
      { name: 'Svelte', level: 4, color: 'text-orange-400' },
    ],
    mobile: [
      { name: 'Flutter', level: 5, color: 'text-cyan-400' },
      { name: 'React Native', level: 5, color: 'text-blue-400' },
      { name: 'Swift', level: 4, color: 'text-orange-400' },
      { name: 'Android', level: 4, color: 'text-green-400' },
    ],
    ai: [
      { name: 'TensorFlow', level: 4, color: 'text-orange-400' },
      { name: 'PyTorch', level: 4, color: 'text-red-400' },
      { name: 'OpenAI API', level: 5, color: 'text-green-400' },
      { name: 'LangChain', level: 4, color: 'text-blue-400' },
    ],
    database: [
      { name: 'PostgreSQL', level: 5, color: 'text-blue-400' },
      { name: 'MongoDB', level: 4, color: 'text-green-400' },
      { name: 'Redis', level: 4, color: 'text-red-400' },
      { name: 'SQLite', level: 5, color: 'text-blue-300' },
    ]
  };

  const categoryColors = {
    backend: 'from-red-500/20 to-orange-500/20',
    frontend: 'from-blue-500/20 to-purple-500/20',
    mobile: 'from-green-500/20 to-cyan-500/20',
    ai: 'from-purple-500/20 to-pink-500/20',
    database: 'from-yellow-500/20 to-orange-500/20',
  };

  const categoryLabels = {
    backend: 'Backend',
    frontend: 'Frontend',
    mobile: 'Mobile',
    ai: 'AI & ML',
    database: 'Database',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

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
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our expertise spans across multiple technology stacks and platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {Object.entries(technologies).map(([category, techs]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className={`glass rounded-3xl p-8 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]}`}
            >
              <h3 className="text-2xl font-bold mb-8 text-white text-center">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="glass rounded-2xl p-6 mb-4 group-hover:glow-effect transition-all duration-300">
                      <div className={`text-2xl font-bold ${tech.color} mb-2`}>
                        {tech.name}
                      </div>
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < tech.level ? 'bg-blue-400' : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
