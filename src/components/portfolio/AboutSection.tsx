
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Code, Zap } from 'lucide-react';

const AboutSection = () => {
  const journeySteps = [
    {
      year: "2020",
      title: "Started Coding Journey",
      description: "Began with HTML, CSS, and JavaScript fundamentals",
      icon: Code
    },
    {
      year: "2021",
      title: "Frontend Development",
      description: "Mastered React.js and modern frontend frameworks",
      icon: Zap
    },
    {
      year: "2022",
      title: "Full-Stack Development",
      description: "Expanded to backend technologies and databases",
      icon: Award
    },
    {
      year: "2024",
      title: "Vibe Coder",
      description: "Creating immersive digital experiences with animations",
      icon: Calendar
    }
  ];

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Startup",
      duration: "2022 - 2023",
      description: "Built responsive web applications using React and TypeScript"
    },
    {
      role: "Full-Stack Developer",
      company: "Digital Agency",
      duration: "2023 - Present",
      description: "Developing end-to-end solutions with modern tech stack"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 pt-32">
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
            A passionate developer who transforms ideas into digital reality through code, 
            creativity, and continuous learning.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">My Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + (index * 0.2) }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Icon size={16} className="text-white" />
                        </div>
                        <span className="text-purple-300 font-bold">{step.year}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-white/60">{step.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h4 className="text-xl font-bold text-white mb-2">{exp.role}</h4>
                <p className="text-purple-300 font-medium mb-2">{exp.company}</p>
                <p className="text-white/60 text-sm mb-3">{exp.duration}</p>
                <p className="text-white/70">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
