import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 ${centered ? 'text-center' : ''} ${className}`}
    >
      <div
        className={`font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center gap-2 ${
          centered ? 'justify-center' : ''
        }`}
      >
        <span className="w-4 h-px bg-blue/40" />
        {eyebrow}
        {centered && <span className="w-4 h-px bg-blue/40" />}
      </div>
      <h2
        className={`font-display text-[clamp(34px,5.5vw,70px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5 ${
          centered ? 'mx-auto' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-protocol-text-dim text-[15px] leading-relaxed ${
            centered ? 'max-w-xl mx-auto' : 'max-w-lg'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
