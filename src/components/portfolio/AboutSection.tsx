
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Heart, Coffee } from 'lucide-react';

const AboutSection = () => {
  const traits = [
    {
      icon: Code,
      title: "Clean Code Enthusiast",
      description: "Passionate about writing elegant, maintainable code that tells a story."
    },
    {
      icon: Zap,
      title: "Performance Optimizer",
      description: "Always seeking ways to make applications faster and more efficient."
    },
    {
      icon: Heart,
      title: "User Experience Focused",
      description: "Believing that great code should create amazing user experiences."
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Constantly exploring new technologies and best practices in development."
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I'm Akash V J, a passionate developer who believes in the power of code to create 
            meaningful digital experiences. My journey in programming is driven by curiosity, 
            creativity, and the endless possibilities that technology offers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <motion.div
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{trait.title}</h3>
                  <p className="text-white/60 text-sm">{trait.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">My Philosophy</h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              "Code is poetry in motion. Every function, every component, every line should 
              contribute to a beautiful symphony of logic and creativity. I don't just write 
              code – I craft digital experiences that resonate with users and inspire fellow developers."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
