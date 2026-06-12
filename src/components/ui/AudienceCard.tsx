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
  blue:   { text: 'text-blue',   border: 'border-blue/20',   hover: 'hover:border-blue/50',   bg: 'bg-blue/5',   accent: '#2F80ED', check: 'text-blue',   btn: 'border-blue/40 text-blue hover:bg-blue hover:text-black' },
  green:  { text: 'text-green',  border: 'border-green/20',  hover: 'hover:border-green/50',  bg: 'bg-green/5',  accent: '#00C896', check: 'text-green',  btn: 'border-green/40 text-green hover:bg-green hover:text-black' },
  violet: { text: 'text-purple-400', border: 'border-purple-400/20', hover: 'hover:border-purple-400/50', bg: 'bg-purple-400/5', accent: '#A78BFA', check: 'text-purple-400', btn: 'border-purple-400/40 text-purple-400 hover:bg-purple-400 hover:text-black' },
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative border ${c.border} ${c.hover} card-lift card-surface flex flex-col overflow-hidden`}
    >
      {/* Top gradient bar */}
      <div
        className="h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)` }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className={`px-6 sm:px-7 py-6 border-b border-protocol-border ${c.bg}`}>
        <div className={`${c.text} mb-3.5 opacity-80 group-hover:opacity-100 group-hover:scale-110 origin-left transition-all duration-500`}>{icon}</div>
        <div className="font-mono text-[9px] uppercase tracking-[0.35em] text-protocol-text-dim/50 mb-1.5">{eyebrow}</div>
        <h3 className={`font-display text-[30px] uppercase tracking-tight leading-none ${c.text}`}>{audience}</h3>
      </div>

      {/* Problem */}
      <div className="px-6 sm:px-7 pt-5 pb-3">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50 mb-2.5">The Problem</div>
        <p className="text-[14px] text-protocol-text-dim leading-[1.7]">{problem}</p>
      </div>

      {/* Benefits */}
      <div className="px-6 sm:px-7 pt-3 pb-6 flex-1">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50 mb-3.5">What Fundoria Gives You</div>
        <ul className="space-y-2.5">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className={`w-4 h-4 ${c.check} shrink-0 mt-0.5 opacity-80`} aria-hidden="true" />
              <span className="text-[13px] text-protocol-text-dim group-hover:text-protocol-text/85 leading-[1.65] transition-colors duration-500">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-6 sm:px-7 pb-7">
        <button
          onClick={onCta}
          className={`group/btn w-full relative border ${c.btn} font-mono text-[11px] font-black uppercase tracking-[0.2em] min-h-[48px] py-3.5 flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 active:scale-[0.98]`}
        >
          <span className="relative">{cta}</span>
          <ArrowRight className="w-4 h-4 relative group-hover/btn:translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
        </button>
      </div>

      {/* Corner glow */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(circle at 100% 100%, ${c.accent}12, transparent 70%)` }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
