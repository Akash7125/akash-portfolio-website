
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';
import HeroSection from '@/components/portfolio/HeroSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ResumeSection from '@/components/portfolio/ResumeSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Navigation from '@/components/portfolio/Navigation';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded:", container);
  }, []);

  // Initial loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for navigation events from other components
  useEffect(() => {
    const handleNavigateToSection = (event: CustomEvent) => {
      setCurrentSection(event.detail.section);
    };

    window.addEventListener('navigateToSection', handleNavigateToSection as EventListener);
    
    return () => {
      window.removeEventListener('navigateToSection', handleNavigateToSection as EventListener);
    };
  }, []);

  const sections = [
    { id: 'hero', component: HeroSection },
    { id: 'projects', component: ProjectsSection },
    { id: 'skills', component: SkillsSection },
    { id: 'resume', component: ResumeSection },
    { id: 'contact', component: ContactSection },
  ];

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    in: {
      opacity: 1,
      scale: 1,
      y: 0
    },
    out: {
      opacity: 0,
      scale: 1.05,
      y: -20
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6
  };

  const loadingVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  if (isLoading) {
    return (
      <motion.div
        variants={loadingVariants}
        initial="initial"
        exit="exit"
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            AK
          </motion.div>
          <motion.div
            className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="portfolio"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative min-h-screen bg-black overflow-hidden"
      >
        {/* Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#8b5cf6",
              },
              links: {
                color: "#8b5cf6",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />

        {/* Gradient Overlays */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Navigation */}
        <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

        {/* Main Content */}
        <div className="relative z-20">
          <AnimatePresence mode="wait">
            {sections.map((section, index) => {
              if (currentSection !== index) return null;
              
              const Component = section.component;
              return (
                <motion.div
                  key={`${section.id}-${index}`}
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="min-h-screen"
                >
                  <Component />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
