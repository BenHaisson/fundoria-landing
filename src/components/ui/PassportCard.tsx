import { motion } from 'motion/react';

interface PassportCardProps {
  className?: string;
}

const sparkY = [36, 32, 28, 30, 22, 18, 14, 16, 8, 4];
const svgW = 200;
const svgH = 40;
const xStep = svgW / (sparkY.length - 1);
const linePath = sparkY.map((y, i) => `${i === 0 ? 'M' : 'L'}${(i * xStep).toFixed(1)} ${y}`).join(' ');
const areaPath = `${linePath} L${svgW} ${svgH} L0 ${svgH} Z`;

const metrics = [
  { label: '90D PnL',       value: '+14.2%', color: '#00C896' },
  { label: 'Max DD',        value: '-4.8%',  color: '#F59E0B' },
  { label: 'Win Rate',      value: '71%',    color: '#2F80ED' },
  { label: 'Risk Grade',    value: 'High',   color: '#00C896' },
];

const badges = [
  { label: 'CONSISTENCY',   color: '#2F80ED' },
  { label: 'RISK CONTROL',  color: '#00C896' },
  { label: 'MOMENTUM',      color: '#A78BFA' },
  { label: 'LOW DRAWDOWN',  color: '#F59E0B' },
];

export default function PassportCard({ className = '' }: PassportCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative w-full max-w-sm card-glow-hover ${className}`}
      style={{
        background: 'rgba(4,8,15,0.97)',
        border: '1px solid rgba(47,128,237,0.2)',
        boxShadow:
          '0 0 40px rgba(47,128,237,0.08), 0 0 0 1px rgba(47,128,237,0.1), inset 0 1px 0 rgba(220,232,255,0.04)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #2F80ED 40%, #00C896 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="p-5 pt-6">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between mb-4 pb-3 border-b border-protocol-border/40">
          <div>
            <div className="font-mono text-[9px] tracking-[0.35em] text-protocol-text uppercase mb-1">
              Trader Passport
            </div>
            <div className="font-mono text-[8px] text-blue/50 uppercase tracking-wider">
              Hyperliquid Verified · Read-only
            </div>
          </div>
          <span className="font-mono text-[8px] tracking-widest text-protocol-text-dim/30 uppercase">
            Sample Profile
          </span>
        </div>

        {/* ── Wallet row ─────────────────────────────────────────────────── */}
        <div className="flex items-center gap-2 mb-5">
          <span className="font-mono text-[10px] text-protocol-text/60">0x7A3d...93F</span>
          <span className="w-[5px] h-[5px] rounded-full bg-green flex-shrink-0" />
          <span className="font-mono text-[8px] text-green/60 uppercase tracking-wider">Verified</span>
        </div>

        {/* ── Grade + Score ──────────────────────────────────────────────── */}
        <div className="flex items-end gap-4 mb-1">
          <div>
            <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-wider mb-1">
              Grade
            </div>
            <span className="font-display text-blue leading-none" style={{ fontSize: 52 }}>
              A-
            </span>
          </div>
          <div className="pb-1 flex-1">
            <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-wider mb-1">
              Fundoria Score
            </div>
            <div className="font-mono text-[17px] text-protocol-text leading-none">
              842{' '}
              <span className="text-[11px] text-protocol-text-dim/40">/ 1000</span>
            </div>
            <div className="font-mono text-[8px] text-green/60 uppercase tracking-wider mt-1">
              Top 12%
            </div>
          </div>
        </div>

        {/* Score bar */}
        <div className="mb-4">
          <div className="w-full h-[3px] bg-protocol-border rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: '84.2%',
                background: 'linear-gradient(90deg, #2F80ED, #00C896)',
              }}
            />
          </div>
        </div>

        {/* ── Metric grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {metrics.map(({ label, value, color }) => (
            <div
              key={label}
              className="bg-protocol-border/10 border border-protocol-border/30 px-2.5 py-2"
            >
              <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-wider mb-1">
                {label}
              </div>
              <div className="font-mono text-[12px] leading-none" style={{ color }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Sparkline ──────────────────────────────────────────────────── */}
        <div className="mb-4 bg-protocol-border/8 border border-protocol-border/30 p-2.5">
          <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-wider mb-2">
            90d PnL Curve
          </div>
          <svg
            width="100%"
            height="40"
            viewBox={`0 0 ${svgW} ${svgH}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pcAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00C896" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[10, 20, 30].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2={svgW}
                y2={y}
                stroke="rgba(74,100,132,0.15)"
                strokeWidth="0.5"
              />
            ))}
            <path d={areaPath} fill="url(#pcAreaGrad)" />
            <path
              d={linePath}
              stroke="#00C896"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* ── Badges ─────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {badges.map(({ label, color }) => (
            <div
              key={label}
              className="flex items-center gap-1 font-mono text-[7px] px-1.5 py-0.5 uppercase tracking-widest border"
              style={{
                borderColor: `${color}30`,
                color: `${color}bb`,
                backgroundColor: `${color}08`,
              }}
            >
              <span
                className="w-[4px] h-[4px] rounded-full flex-shrink-0"
                style={{ backgroundColor: color }}
              />
              {label}
            </div>
          ))}
        </div>

        {/* ── Footer stats ───────────────────────────────────────────────── */}
        <div className="border-t border-protocol-border/30 pt-3 flex items-center justify-between">
          <span className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-wider">
            Watchlists <span className="text-protocol-text/60">128</span>
          </span>
          <span className="font-mono text-[8px] text-blue/50 uppercase tracking-wider">
            Capital: Future Layer
          </span>
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
