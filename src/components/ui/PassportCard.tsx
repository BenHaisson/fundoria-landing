import { motion } from 'motion/react';

interface PassportCardProps {
  className?: string;
}

export default function PassportCard({ className = '' }: PassportCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative w-full max-w-sm ${className}`}
      style={{
        background: 'rgba(4,8,15,0.95)',
        border: '1px solid rgba(47,128,237,0.25)',
        boxShadow:
          '0 0 40px rgba(47,128,237,0.12), 0 0 0 1px rgba(47,128,237,0.15), inset 0 1px 0 rgba(220,232,255,0.06)',
      }}
    >
      {/* Top gradient accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #2F80ED 40%, #00C896 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="p-5 pt-6">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img
              src="/brand/fundoria-icon-light.png"
              alt="Fundoria"
              style={{ height: 20 }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="font-mono text-[9px] tracking-[0.3em] text-protocol-text-dim/60 uppercase">
              Trader Passport
            </span>
          </div>
          <span className="font-mono text-[8px] tracking-widest text-protocol-text-dim/30 uppercase">
            SAMPLE PROFILE
          </span>
        </div>

        {/* Wallet address */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[11px] text-protocol-text/70">
            0x7A3d...93F
          </span>
          <span className="w-[6px] h-[6px] rounded-full bg-green flex-shrink-0" title="Verified" />
          <span className="font-mono text-[8px] text-green/70 tracking-wider">HYPERLIQUID VERIFIED</span>
        </div>

        {/* Grade + Score */}
        <div className="flex items-end gap-4 mb-4">
          <div>
            <span
              className="font-display leading-none text-blue"
              style={{ fontSize: 48 }}
            >
              A-
            </span>
          </div>
          <div className="pb-1">
            <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-wider mb-1">
              Reputation Score
            </div>
            <div className="font-mono text-[13px] text-protocol-text">
              842{' '}
              <span className="text-protocol-text-dim/50 text-[11px]">/ 1000</span>
            </div>
          </div>
        </div>

        {/* Score bar */}
        <div className="mb-4">
          <div className="w-full h-[4px] bg-protocol-border rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: '84.2%',
                background: 'linear-gradient(90deg, #2F80ED, #00C896)',
              }}
            />
          </div>
        </div>

        {/* PnL sparkline */}
        <div className="flex items-center justify-between mb-4 p-3 bg-protocol-border/20 border border-protocol-border/40">
          <div>
            <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-wider mb-1">
              90d PnL
            </div>
            <div className="font-mono text-[13px] text-green">+14.2%</div>
          </div>
          <svg
            width="80"
            height="32"
            viewBox="0 0 80 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 28 L12 24 L22 20 L30 22 L38 16 L46 12 L54 8 L62 10 L70 5 L78 2"
              stroke="#00C896"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M2 28 L12 24 L22 20 L30 22 L38 16 L46 12 L54 8 L62 10 L70 5 L78 2 L78 32 L2 32 Z"
              fill="url(#sparkGrad)"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00C896" />
                <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Drawdown badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[9px] border border-amber-400/30 bg-amber-400/5 text-amber-400 px-2 py-1 uppercase tracking-widest">
            Max DD -4.8%
          </span>
          <span className="font-mono text-[8px] text-protocol-text-dim/35 uppercase tracking-wider">
            Max Drawdown
          </span>
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { label: 'CONSISTENCY', color: '#2F80ED' },
            { label: 'RISK CONTROL', color: '#00C896' },
            { label: 'MOMENTUM', color: '#A78BFA' },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-1.5 font-mono text-[8px] text-protocol-text-dim/70 border border-protocol-border px-2 py-1 uppercase tracking-widest"
            >
              <span
                className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                style={{ backgroundColor: badge.color }}
              />
              {badge.label}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-protocol-border/40 pt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[9px] text-protocol-text-dim/50">
              Watchlists: <span className="text-protocol-text/70">128</span>
            </span>
            <span className="font-mono text-[9px] text-protocol-text-dim/50">
              Rank: <span className="text-protocol-text/70">Top 12%</span>
            </span>
          </div>
          <div className="font-mono text-[8px] text-blue/60 uppercase tracking-wider">
            Capital Eligibility: Future Layer
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-protocol-border/30 px-5 py-2">
        <span className="font-mono text-[7px] text-protocol-text-dim/25 uppercase tracking-[0.2em]">
          Sample Data · Illustrative Only
        </span>
      </div>
    </motion.div>
  );
}
