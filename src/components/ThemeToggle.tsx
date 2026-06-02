import React from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 p-1 bg-white/5 dark:bg-white/5 bg-slate-200 border border-protocol-border rounded-full transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-blue/10 translate-y-full group-hover:translate-y-0 transition-transform" />
      
      <div className="relative flex items-center gap-1 px-2 py-1">
        <motion.div
          animate={{ x: theme === 'dark' ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-blue shadow-[0_0_15px_rgba(50,130,246,0.5)] rounded-full z-0"
        />
        
        <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${theme === 'dark' ? 'text-black' : 'text-slate-500'}`}>
          <Moon className="w-4 h-4" />
        </div>
        
        <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${theme === 'light' ? 'text-black' : 'text-white/40'}`}>
          <Sun className="w-4 h-4" />
        </div>
      </div>
      
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
