
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Zap, Mail } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

const Navigation = ({ currentSection, setCurrentSection }: NavigationProps) => {
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: User, label: 'About' },
    { icon: Code, label: 'Projects' },
    { icon: Zap, label: 'Skills' },
    { icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50"
    >
      <div className="flex flex-col space-y-6">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`group relative p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
                currentSection === index
                  ? 'bg-purple-600/30 border-purple-400 text-purple-300'
                  : 'bg-white/10 border-white/20 text-white/60 hover:bg-white/20 hover:border-white/40'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap backdrop-blur-md"
              >
                {item.label}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navigation;
