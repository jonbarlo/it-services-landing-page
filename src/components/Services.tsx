import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Smartphone, Cpu, Brain, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern, scalable web applications built with cutting-edge technologies',
      features: [
        'React & Next.js Applications',
        'Ruby on Rails Backend',
        'Node.js Microservices',
        'Progressive Web Apps (PWA)',
        'Real-time Applications',
        'E-commerce Solutions'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: [
        'Flutter Cross-platform Apps',
        'React Native Development',
        'Native iOS (Swift)',
        'Native Android (Kotlin)',
        'Mobile UI/UX Design',
        'App Store Optimization'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Internet of Things applications and smart device integration',
      features: [
        'Smart Device Integration',
        'IoT Data Analytics',
        'Real-time Monitoring',
        'Edge Computing Solutions',
        'Sensor Networks',
        'IoT Security'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Artificial Intelligence solutions including LLM training and agent AI',
      features: [
        'Large Language Model Training',
        'Supervised Fine-Tuning (SFT)',
        'Retrieval-Augmented Generation (RAG)',
        'Agent AI Development',
        'Machine Learning Pipelines',
        'AI Integration Services'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions across multiple platforms and industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="service-card rounded-2xl p-8 group cursor-pointer"
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} glow-effect`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 * featureIndex }}
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    className="mt-6 flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
