import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ staggerChildren: 0.12 }}
      className={`mb-14 ${centered ? 'text-center' : ''} ${className}`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
        }}
        className={`font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center gap-2 ${
          centered ? 'justify-center' : ''
        }`}
      >
        <span className="w-4 h-px bg-blue/40" aria-hidden="true" />
        {eyebrow}
        {centered && <span className="w-4 h-px bg-blue/40" aria-hidden="true" />}
      </motion.div>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 22 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
        }}
        className={`font-display text-[clamp(34px,5.5vw,70px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5 ${
          centered ? 'mx-auto' : ''
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.7, ease } },
          }}
          className={`text-protocol-text-dim text-[15px] md:text-[16px] leading-[1.75] ${
            centered ? 'max-w-xl mx-auto' : 'max-w-lg'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
