
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Vibe Music Player",
      description: "A modern music streaming app with immersive visualizations and AI-powered recommendations.",
      tech: ["React", "Node.js", "Three.js", "Web Audio API"],
      image: "/placeholder.svg",
      github: "#",
      live: "#"
    },
    {
      title: "CodeFlow Dashboard",
      description: "An intuitive project management dashboard for developers with real-time collaboration features.",
      tech: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
      image: "/placeholder.svg",
      github: "#",
      live: "#"
    },
    {
      title: "Neural Art Generator",
      description: "AI-powered art generation platform using machine learning to create unique digital artworks.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      image: "/placeholder.svg",
      github: "#",
      live: "#"
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
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of my passion projects and professional work, each crafted with attention to detail and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-purple-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        className="p-3 bg-white/20 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="p-3 bg-white/20 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: -360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
