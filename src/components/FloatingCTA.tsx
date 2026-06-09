import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface FloatingCTAProps {
  onOpenWhitelist: () => void;
}

export default function FloatingCTA({ onOpenWhitelist }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 300) {
        setIsVisible(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-[100] hidden md:block"
        >
          {/* Outer pulse ring */}
          {!reducedMotion && (
            <motion.div
              animate={{ scale: [1, 1.1], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 bg-blue/30 pointer-events-none"
            />
          )}

          <button
            onClick={onOpenWhitelist}
            className="group relative bg-blue hover:bg-green text-black px-8 py-4 font-mono text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-3 shadow-[0_8px_32px_rgba(59,130,246,0.4)] hover:shadow-[0_8px_40px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden"
          >
            {/* Shimmer */}
            <div className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-600 pointer-events-none" />

            <span className="relative w-2 h-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-black/30 animate-ping" />
              <span className="relative block w-2 h-2 rounded-full bg-black/40" />
            </span>

            Join Early Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
