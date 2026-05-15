import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center">
      <p className="font-hand text-sm mb-2 text-pencil opacity-60 uppercase tracking-widest">
        {isDark ? 'Lights Off' : 'Lights On'}
      </p>
      
      {/* Hand-drawn Light Switch */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="relative w-12 h-20 bg-paper border-2 border-ink sketch-border shadow-lg flex items-center justify-center group overflow-hidden"
        aria-label="Toggle Theme"
      >
        {/* Switch Plate Screws */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-ink rounded-full opacity-30"></div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-ink rounded-full opacity-30"></div>
        
        {/* The Actual Switch */}
        <motion.div 
          animate={{ 
            y: isDark ? 10 : -10,
            rotateX: isDark ? 20 : -20
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-6 h-10 bg-paper border-2 border-ink sketch-border shadow-inner relative flex items-center justify-center"
        >
          <div className="w-full h-[2px] bg-ink/10 absolute top-1/2 -translate-y-1/2"></div>
        </motion.div>
        
        {/* Glow effect */}
        <AnimatePresence>
          {!isDark && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-yellow-400 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default ThemeToggle;
