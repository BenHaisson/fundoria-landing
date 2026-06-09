import { motion } from 'motion/react';

const scoreDimensions = [
  { label: 'Performance', value: 88 },
  { label: 'Risk Control', value: 92 },
  { label: 'Consistency', value: 79 },
  { label: 'Discipline', value: 85 },
  { label: 'Survival', value: 96 },
];

const badges = [
  { label: 'Verified Activity', color: 'green' },
  { label: 'Low Drawdown', color: 'blue' },
  { label: 'Tournament Ready', color: 'blue' },
  { label: 'Capital Watchlist', color: 'green' },
];

const sparkPoints = '0,42 18,36 36,39 54,28 72,22 90,30 108,16 126,10';

function FundoriaScoreRing({ score = 842 }: { score?: number }) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const progress = score / 1000;

  return (
    <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
      <svg width="140" height="140" className="rotate-[-90deg]">
        <defs>
          <linearGradient id="score_ring_grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#2F80ED" />
            <stop offset="1" stopColor="#00C896" />
          </linearGradient>
        </defs>
        {/* Background ring */}
        <circle
          cx="70" cy="70" r={radius}
          fill="none"
          stroke="#0E1A2E"
          strokeWidth="10"
        />
        {/* Score ring */}
        <motion.circle
          cx="70" cy="70" r={radius}
          fill="none"
          stroke="url(#score_ring_grad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - progress) }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-display text-[40px] leading-none text-protocol-text"
        >
          {score}
        </motion.div>
        <div className="font-mono text-[8px] text-protocol-text-dim uppercase tracking-widest">/ 1000</div>
      </div>
    </div>
  );
}

function TraderPassportCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative border border-protocol-border bg-protocol-bg rounded-xl overflow-hidden shadow-[0_0_60px_rgba(47,128,237,0.12)] max-w-[380px] w-full mx-auto lg:mx-0"
    >
      {/* Top gradient bar */}
      <div className="h-[2px] bg-linear-to-r from-blue to-green w-full" />

      {/* Header */}
      <div className="py-3 px-4 border-b border-protocol-border bg-protocol-accent-bg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500/40" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
          <div className="w-2 h-2 rounded-full bg-green/40" />
          <span className="font-mono text-[9px] text-protocol-text-dim/40 ml-2 uppercase tracking-widest">TRADER_PASSPORT</span>
        </div>
        <span className="font-mono text-[9px] text-blue flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-blue animate-pulse" />
          LIVE
        </span>
      </div>

      <div className="p-6">
        {/* Wallet */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-widest mb-1">Wallet</div>
            <div className="font-mono text-[13px] text-protocol-text font-bold">0x7A...93F</div>
          </div>
          {/* Risk Grade badge */}
          <div className="px-3 py-1.5 border border-green/30 bg-green/5 rounded-lg">
            <div className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-widest">Risk Grade</div>
            <div className="font-mono text-[18px] text-green font-black leading-tight">A-</div>
          </div>
        </div>

        {/* Score ring — centered */}
        <div className="flex justify-center mb-6">
          <FundoriaScoreRing score={842} />
        </div>
        <div className="text-center mb-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-protocol-text-dim mb-1">Fundoria Score</div>
          <div className="font-mono text-[9px] text-blue uppercase tracking-widest">Rank: Top 3.2%</div>
        </div>

        {/* Dimension bars */}
        <div className="space-y-2.5 mb-6">
          {scoreDimensions.map((dim, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-wider w-[90px] shrink-0">{dim.label}</div>
              <div className="flex-1 h-1 bg-protocol-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${dim.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.08 }}
                  className="h-full bg-linear-to-r from-blue to-green rounded-full"
                />
              </div>
              <div className="font-mono text-[10px] text-protocol-text font-bold w-8 text-right shrink-0">{dim.value}</div>
            </div>
          ))}
        </div>

        {/* Mini PnL sparkline */}
        <div className="mb-5 border border-protocol-border/50 bg-protocol-accent-bg rounded-lg p-3">
          <div className="font-mono text-[8px] text-protocol-text-dim uppercase tracking-widest mb-2">30D PnL Curve</div>
          <svg width="100%" height="50" viewBox="0 0 140 52" preserveAspectRatio="none">
            <defs>
              <linearGradient id="spark_grad" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#2F80ED" />
                <stop offset="1" stopColor="#00C896" />
              </linearGradient>
            </defs>
            <polyline
              points={sparkPoints}
              fill="none"
              stroke="url(#spark_grad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex justify-between mt-1">
            <span className="font-mono text-[8px] text-protocol-text-dim/40">30 days ago</span>
            <span className="font-mono text-[8px] text-green">+19.8%</span>
          </div>
        </div>

        {/* Status badge */}
        <div className="mb-5 px-4 py-3 border border-yellow-500/30 bg-yellow-500/5 rounded-lg flex items-center justify-between">
          <div className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-widest">Status</div>
          <div className="font-mono text-[11px] text-yellow-400 font-bold">Capital Eligible Soon</div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map((b, i) => (
            <div
              key={i}
              className={`px-3 py-1.5 rounded-full border font-mono text-[9px] uppercase tracking-wider ${
                b.color === 'green'
                  ? 'border-green/30 bg-green/5 text-green/70'
                  : 'border-blue/30 bg-blue/5 text-blue/70'
              }`}
            >
              {b.label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom flash bar */}
      <div className="h-[2px] bg-linear-to-r from-transparent via-blue to-transparent animate-flash" />
    </motion.div>
  );
}

export default function TraderPassportSection() {
  return (
    <section className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 text-blue">Trader Passport</div>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] mb-6 text-protocol-text">
              Your On-Chain<br />
              <em className="text-green not-italic">Identity Card.</em>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed mb-8 italic max-w-[460px]">
              Every Hyperliquid trade you make builds your Trader Passport. It's a live, public, verifiable profile that shows exactly who you are as a trader — not just your PnL.
            </p>

            <ul className="space-y-4">
              {[
                { label: 'Wallet-linked identity', sub: 'Your passport is tied to your Hyperliquid wallet address. No fake accounts.' },
                { label: 'Fundoria Score', sub: 'A 0–1000 score across five dimensions, updated daily from on-chain data.' },
                { label: 'Capital eligibility status', sub: 'As your score grows and tournament record builds, capital access unlocks.' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-8 h-8 border border-blue/30 bg-blue/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-blue/60 group-hover:bg-blue/10 transition-all">
                    <span className="font-mono text-[10px] text-blue/60 group-hover:text-blue font-bold">0{i + 1}</span>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-protocol-text mb-1">{item.label}</div>
                    <div className="text-[13px] text-protocol-text-dim leading-relaxed">{item.sub}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Passport card */}
          <div>
            <TraderPassportCard />
          </div>
        </div>
      </div>
    </section>
  );
}
