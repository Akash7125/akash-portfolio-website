
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Code, Zap, FileText, Mail, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

const Navigation = ({ currentSection, setCurrentSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Code, label: 'Projects' },
    { icon: Zap, label: 'Skills' },
    { icon: FileText, label: 'Resume' },
    { icon: Mail, label: 'Contact' },
  ];

  const handleNavClick = (index: number) => {
    setCurrentSection(index);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          AK
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={index}
                onClick={() => handleNavClick(index)}
                className={`group relative px-3 lg:px-4 py-2 rounded-full transition-all duration-300 ${
                  currentSection === index
                    ? 'text-purple-300'
                    : 'text-white/60 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <span className="text-sm font-medium hidden lg:block">{item.label}</span>
                </div>
                
                {/* Active indicator */}
                {currentSection === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full border border-purple-400/50"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={index}
                  onClick={() => handleNavClick(index)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentSection === index
                      ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 border border-purple-400/50'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
