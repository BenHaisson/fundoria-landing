import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Thin scroll progress bar shown on mobile (hidden on xl+).
 * Positioned at the bottom of the fixed nav+ticker (top: 106px).
 * Uses spring physics for smooth tracking.
 */
export default function MobileProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 h-[1.5px] origin-left z-[1003] xl:hidden pointer-events-none"
      style={{
        top: 'calc(var(--nav-height) + var(--ticker-height))',
        scaleX,
        background: 'linear-gradient(90deg, #2F80ED 0%, #00C896 100%)',
        opacity: 0.75,
      }}
      aria-hidden="true"
    />
  );
}
