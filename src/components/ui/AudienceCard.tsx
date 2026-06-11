import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface AudienceCardProps {
  icon: ReactNode;
  audience: string;
  eyebrow: string;
  problem: string;
  benefits: string[];
  cta: string;
  onCta?: () => void;
  color: 'blue' | 'green' | 'violet';
  delay?: number;
}

const colorMap = {
  blue:   { text: 'text-blue',   border: 'border-blue/20',   hover: 'hover:border-blue/50',   bg: 'bg-blue/5',   glow: 'hover:shadow-[0_0_60px_rgba(47,128,237,0.08)]',   check: 'text-blue',   btn: 'border-blue/40 text-blue hover:bg-blue hover:text-black' },
  green:  { text: 'text-green',  border: 'border-green/20',  hover: 'hover:border-green/50',  bg: 'bg-green/5',  glow: 'hover:shadow-[0_0_60px_rgba(0,200,150,0.08)]',    check: 'text-green',  btn: 'border-green/40 text-green hover:bg-green hover:text-black' },
  violet: { text: 'text-purple-400', border: 'border-purple-400/20', hover: 'hover:border-purple-400/50', bg: 'bg-purple-400/5', glow: 'hover:shadow-[0_0_60px_rgba(167,139,250,0.08)]', check: 'text-purple-400', btn: 'border-purple-400/40 text-purple-400 hover:bg-purple-400 hover:text-black' },
};

export default function AudienceCard({
  icon,
  audience,
  eyebrow,
  problem,
  benefits,
  cta,
  onCta,
  color,
  delay = 0,
}: AudienceCardProps) {
  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative border ${c.border} ${c.hover} ${c.glow} bg-protocol-accent-bg flex flex-col overflow-hidden transition-all duration-300`}
    >
      {/* Top gradient bar */}
      <div className={`h-[2px] ${c.bg} opacity-80`} />

      {/* Header */}
      <div className={`px-6 py-5 border-b border-protocol-border ${c.bg}`}>
        <div className={`${c.text} mb-3 opacity-80 group-hover:opacity-100 transition-opacity`}>{icon}</div>
        <div className="font-mono text-[8px] uppercase tracking-[0.35em] text-protocol-text-dim/40 mb-1">{eyebrow}</div>
        <h3 className={`font-display text-[26px] uppercase tracking-tight leading-none ${c.text}`}>{audience}</h3>
      </div>

      {/* Problem */}
      <div className="px-6 pt-5 pb-3">
        <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-protocol-text-dim/40 mb-2">The Problem</div>
        <p className="text-[13px] text-protocol-text-dim leading-relaxed">{problem}</p>
      </div>

      {/* Benefits */}
      <div className="px-6 pt-2 pb-5 flex-1">
        <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-protocol-text-dim/40 mb-3">What Fundoria Gives You</div>
        <ul className="space-y-2">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle className={`w-3.5 h-3.5 ${c.check} shrink-0 mt-0.5 opacity-80`} />
              <span className="text-[12px] text-protocol-text-dim leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6">
        <button
          onClick={onCta}
          className={`group/btn w-full relative border ${c.btn} font-mono text-[10px] font-black uppercase tracking-[0.2em] py-3.5 flex items-center justify-center gap-3 overflow-hidden transition-all duration-300`}
        >
          <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          <span className="relative">{cta}</span>
          <ArrowRight className="w-3.5 h-3.5 relative group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
