import { motion } from 'motion/react';
import { Search } from 'lucide-react';

const gradeFilters = ['All', 'A', 'B', 'C'];

const traders = [
  {
    wallet: '0x91A...7F2',
    score: 884,
    grade: 'A',
    gradeColor: '#00C896',
    maxDD: '-3.9%',
    action: 'WATCHLISTED',
    actionColor: '#00C896',
  },
  {
    wallet: '0x42C...19B',
    score: 812,
    grade: 'A-',
    gradeColor: '#2F80ED',
    maxDD: '-5.2%',
    action: 'REVIEW',
    actionColor: '#2F80ED',
  },
  {
    wallet: '0x83D...AA0',
    score: 776,
    grade: 'B+',
    gradeColor: '#A78BFA',
    maxDD: '-6.4%',
    action: 'TRACK',
    actionColor: '#4A6484',
  },
];

interface CapitalDiscoveryCardProps {
  className?: string;
}

export default function CapitalDiscoveryCard({ className = '' }: CapitalDiscoveryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      className={`relative w-full card-glow-hover ${className}`}
      style={{
        background: 'rgba(4,8,15,0.97)',
        border: '1px solid rgba(47,128,237,0.15)',
        boxShadow: '0 0 30px rgba(47,128,237,0.06), inset 0 1px 0 rgba(220,232,255,0.03)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #2F80ED 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="p-4 pt-5">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between mb-3 pb-3 border-b border-protocol-border/40">
          <div>
            <div className="font-mono text-[9px] tracking-[0.35em] text-protocol-text uppercase mb-1">
              Capital Discovery
            </div>
            <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-wider">
              Verified Hyperliquid Traders
            </div>
          </div>
          <span className="font-mono text-[7px] text-protocol-text-dim/25 uppercase tracking-widest">
            Sample UI
          </span>
        </div>

        {/* ── Search bar ─────────────────────────────────────────────────── */}
        <div className="flex items-center gap-2 border border-protocol-border/50 bg-protocol-border/8 px-2.5 py-1.5 mb-3">
          <Search size={10} className="text-protocol-text-dim/30 flex-shrink-0" />
          <span className="font-mono text-[9px] text-protocol-text-dim/25 uppercase tracking-wider">
            Filter by wallet, score, grade...
          </span>
        </div>

        {/* ── Grade filters ──────────────────────────────────────────────── */}
        <div className="flex items-center gap-1.5 mb-3">
          {gradeFilters.map((g, i) => (
            <span
              key={g}
              className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 border cursor-default"
              style={
                i === 0
                  ? {
                      borderColor: 'rgba(47,128,237,0.5)',
                      color: '#2F80ED',
                      backgroundColor: 'rgba(47,128,237,0.08)',
                    }
                  : {
                      borderColor: 'rgba(14,26,46,0.8)',
                      color: 'rgba(74,100,132,0.55)',
                    }
              }
            >
              {g}
            </span>
          ))}
          <span className="font-mono text-[8px] text-protocol-text-dim/30 uppercase tracking-wider px-2 py-0.5 ml-auto cursor-default">
            Risk ↓
          </span>
        </div>

        {/* ── Trader rows ────────────────────────────────────────────────── */}
        <div className="space-y-1.5">
          {traders.map(({ wallet, score, grade, gradeColor, maxDD, action, actionColor }) => (
            <div
              key={wallet}
              className="flex items-center gap-2 px-2.5 py-2.5 border border-protocol-border/30 bg-protocol-border/5 hover:border-blue/20 transition-colors duration-200"
            >
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[9px] text-protocol-text/55 mb-1">{wallet}</div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono text-[8px] text-protocol-text-dim/40">
                    Score{' '}
                    <span className="text-protocol-text/65">{score}</span>
                  </span>
                  <span
                    className="font-mono text-[8px] font-bold"
                    style={{ color: gradeColor }}
                  >
                    {grade}
                  </span>
                  <span className="font-mono text-[8px] text-amber-400/55">DD {maxDD}</span>
                </div>
              </div>
              <span
                className="font-mono text-[7px] uppercase tracking-wider px-1.5 py-0.5 border flex-shrink-0"
                style={{
                  borderColor: `${actionColor}35`,
                  color: actionColor,
                  backgroundColor: `${actionColor}0a`,
                }}
              >
                {action}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-protocol-border/20 px-4 py-2">
        <span className="font-mono text-[7px] text-protocol-text-dim/20 uppercase tracking-[0.2em]">
          Sample Data · Illustrative Only
        </span>
      </div>
    </motion.div>
  );
}
