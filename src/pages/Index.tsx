
import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded:", container);
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

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

      {/* Navigation */}
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {/* Main Content */}
      <div className="relative z-20">
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: currentSection === index ? 1 : 0,
                y: currentSection === index ? 0 : 50,
                display: currentSection === index ? 'block' : 'none'
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="min-h-screen"
            >
              <Component />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
