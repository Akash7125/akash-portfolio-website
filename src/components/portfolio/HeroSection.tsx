import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Download, ExternalLink } from 'lucide-react';
import AnimatedCube from './AnimatedCube';

const HeroSection = () => {
  const downloadResume = () => {
    // Open the FlowCV resume link in a new tab
    window.open('https://flowcv.com/resume/4epiegw9o6', '_blank');
    console.log('Resume link opened:', 'https://flowcv.com/resume/4epiegw9o6');
  };

  const connectWithMe = () => {
    // Scroll to contact section (section index 4)
    const event = new CustomEvent('navigateToSection', { detail: { section: 4 } });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
          
          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
              <AnimatedCube position={[-4, 2, 0]} />
            </Float>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
              <AnimatedCube position={[4, -2, -2]} />
            </Float>
            <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
              <AnimatedCube position={[2, 3, -3]} />
            </Float>
          </Suspense>
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            <img
              src="/lovable-uploads/b87ac518-efec-4598-bf7f-4a96cd628ab6.png"
              alt="Akash V J"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Akash V J
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-white/80">
              <span className="text-purple-400">Vibe</span> Coder
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Crafting digital experiences with code, creativity, and passion. 
            Bringing ideas to life through elegant solutions and immersive animations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              onClick={downloadResume}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
            </motion.button>

            <motion.button
              onClick={connectWithMe}
              className="group px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <ExternalLink size={20} />
                Let's Connect
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
