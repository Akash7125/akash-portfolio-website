
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { Download, ArrowDown } from 'lucide-react';
import AnimatedCube from './AnimatedCube';

const HeroSection = () => {
  const downloadResume = () => {
    // This would trigger the resume download
    console.log('Downloading resume...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Akash V J
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-white/80">
              <span className="text-purple-400">Vibe</span> Coder
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Crafting digital experiences with code, creativity, and passion. 
            Bringing ideas to life through elegant solutions and immersive animations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
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
              className="group px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
