import { motion } from 'motion/react';

const dimensions = [
  { label: 'Performance',         value: 86, color: '#2F80ED' },
  { label: 'Consistency',         value: 79, color: '#2F80ED' },
  { label: 'Risk Control',        value: 91, color: '#00C896' },
  { label: 'Drawdown Discipline', value: 88, color: '#00C896' },
  { label: 'Survival Rate',       value: 82, color: '#2F80ED' },
];

interface ScoreBreakdownCardProps {
  className?: string;
}

export default function ScoreBreakdownCard({ className = '' }: ScoreBreakdownCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }}
      className={`relative w-full max-w-sm card-glow-hover ${className}`}
      style={{
        background: 'rgba(4,8,15,0.97)',
        border: '1px solid rgba(47,128,237,0.15)',
        boxShadow: 'inset 0 1px 0 rgba(220,232,255,0.03)',
      }}
    >
      <div className="p-5 pt-5">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between mb-4 pb-3 border-b border-protocol-border/40">
          <div>
            <div className="font-mono text-[9px] tracking-[0.35em] text-protocol-text uppercase mb-1">
              Score Breakdown
            </div>
            <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-wider">
              10-Dimension Model
            </div>
          </div>
          <span className="font-mono text-[7px] text-protocol-text-dim/25 uppercase tracking-widest">
            Sample
          </span>
        </div>

        {/* ── Dimension rows ─────────────────────────────────────────────── */}
        <div className="space-y-3.5">
          {dimensions.map(({ label, value, color }, i) => (
            <div key={label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9px] text-protocol-text-dim/55 uppercase tracking-wider">
                  {label}
                </span>
                <span className="font-mono text-[9px] text-protocol-text/65">{value}</span>
              </div>
              <div className="w-full h-[3px] bg-protocol-border/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 + i * 0.08 }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${color}80, ${color})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-protocol-border/20 px-5 py-2">
        <span className="font-mono text-[7px] text-protocol-text-dim/20 uppercase tracking-[0.2em]">
          Sample Data · Illustrative Only
        </span>
      </div>
    </motion.div>
  );
}
