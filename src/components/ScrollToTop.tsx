import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-protocol-bg border border-protocol-border text-blue shadow-2xl flex items-center justify-center group hover:bg-blue hover:text-black transition-colors"
          aria-label="Scroll to top"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-blue/40 group-hover:border-black/40" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-blue/40 group-hover:border-black/40" />
          
          <ArrowUp className="w-5 h-5" />
          
          {/* Scanline Effect */}
          <motion.div 
            animate={{ y: [-24, 24] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-px bg-blue/20 blur-[1px] pointer-events-none"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
