import { motion } from 'motion/react';

interface ScrollCueProps {
  nextId: string;
  nextLabel: string;
  className?: string;
}

/**
 * Subtle "next section" cue shown at the bottom of a section.
 * Clicking it smooth-scrolls to the next section.
 */
export default function ScrollCue({ nextId, nextLabel, className = '' }: ScrollCueProps) {
  const scrollToNext = () => {
    document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.button
      onClick={scrollToNext}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: '-10%' }}
      transition={{ delay: 0.8, duration: 0.5 }}
      aria-label={`Continue to ${nextLabel}`}
      className={`group flex flex-col items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue/40 ${className}`}
    >
      <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-protocol-text-dim/30 group-hover:text-protocol-text-dim/60 transition-colors">
        {nextLabel}
      </span>
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="text-protocol-text-dim/25 group-hover:text-blue/50 transition-colors"
      >
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </motion.button>
  );
}
