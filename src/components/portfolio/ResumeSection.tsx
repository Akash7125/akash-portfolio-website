
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const ResumeSection = () => {
  const workExperience = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "2023 - Present",
      description: "Leading frontend development for enterprise applications using React, TypeScript, and modern UI frameworks.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented modern design systems"
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "2022 - 2023",
      description: "Developed end-to-end web applications with focus on user experience and scalable architecture.",
      achievements: [
        "Built 15+ production applications",
        "Reduced development time by 30%",
        "Mentored junior developers"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Creative Agency",
      duration: "2021 - 2022",
      description: "Created responsive web applications and interactive user interfaces for various clients.",
      achievements: [
        "Delivered 20+ client projects",
        "Achieved 98% client satisfaction",
        "Specialized in animation and UX"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      duration: "2018 - 2021",
      description: "Focused on software engineering, algorithms, and web development technologies.",
      grade: "First Class Honors"
    },
    {
      degree: "Diploma in Web Development",
      institution: "Tech Institute",
      duration: "2017 - 2018",
      description: "Comprehensive program covering frontend and backend web development.",
      grade: "Distinction"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: Award
    },
    {
      name: "React Professional Developer",
      issuer: "Meta",
      year: "2022",
      icon: Award
    },
    {
      name: "TypeScript Expert",
      issuer: "Microsoft",
      year: "2022",
      icon: Award
    },
    {
      name: "Google Cloud Platform Associate",
      issuer: "Google",
      year: "2021",
      icon: Award
    }
  ];

  const downloadResume = () => {
    // Create a more detailed resume download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKEFrYXNoIFYgSiAtIFJlc3VtZSk...';
    link.download = 'Akash_VJ_Complete_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Complete resume download initiated...');
  };

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
            Resume
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey, education, and achievements.
          </p>
          
          <motion.button
            onClick={downloadResume}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-2">
              <Download size={20} />
              Download Complete Resume
            </span>
          </motion.button>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-purple-400" size={28} />
            <h3 className="text-3xl font-bold text-white">Work Experience</h3>
          </div>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + (index * 0.2) }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{job.role}</h4>
                    <p className="text-purple-300 font-medium">{job.company}</p>
                  </div>
                  <span className="text-white/60 text-sm mt-2 md:mt-0">{job.duration}</span>
                </div>
                <p className="text-white/70 mb-4">{job.description}</p>
                <div className="space-y-2">
                  {job.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-purple-400" size={28} />
            <h3 className="text-3xl font-bold text-white">Education</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + (index * 0.2) }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                <p className="text-purple-300 font-medium mb-2">{edu.institution}</p>
                <p className="text-white/60 text-sm mb-3">{edu.duration}</p>
                <p className="text-white/70 mb-3">{edu.description}</p>
                <div className="text-purple-400 font-semibold">{edu.grade}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-purple-400" size={28} />
            <h3 className="text-3xl font-bold text-white">Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon className="text-purple-400 mx-auto mb-3" size={24} />
                  <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                  <p className="text-purple-300 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-white/60 text-sm">{cert.year}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeSection;
