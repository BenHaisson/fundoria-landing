import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const scoreDimensions = [
  { label: 'Performance', value: 88, color: '#2F80ED' },
  { label: 'Risk Control', value: 92, color: '#00C896' },
  { label: 'Consistency', value: 79, color: '#2F80ED' },
  { label: 'Discipline', value: 85, color: '#00C896' },
  { label: 'Survival', value: 96, color: '#2F80ED' },
];

const badges = [
  { label: 'Verified Activity', color: 'border-green/40 text-green bg-green/5' },
  { label: 'Low Drawdown', color: 'border-blue/40 text-blue bg-blue/5' },
  { label: 'Tournament Ready', color: 'border-blue/40 text-blue bg-blue/5' },
  { label: 'Capital Watchlist', color: 'border-green/40 text-green bg-green/5' },
];

const sparklinePoints = '10,38 30,28 50,33 70,15 90,20 110,10 130,18 150,8 170,14 190,5';

function FundoriaScoreRing({ score }: { score: number }) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const max = 1000;
  const fraction = score / max;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg width="128" height="128" viewBox="0 0 128 128" className="-rotate-90">
        {/* Background track */}
        <circle
          cx="64" cy="64" r={radius}
          fill="none"
          stroke="#0E1A2E"
          strokeWidth="8"
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2F80ED" />
            <stop offset="100%" stopColor="#00C896" />
          </linearGradient>
        </defs>
        {/* Score arc */}
        <motion.circle
          cx="64" cy="64" r={radius}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - fraction) }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-[28px] leading-none text-protocol-text">{score}</span>
        <span className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/50">/ 1000</span>
      </div>
    </div>
  );
}

function PassportCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative border border-protocol-border bg-protocol-bg w-full max-w-[360px] mx-auto overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
    >
      {/* Top gradient bar */}
      <div className="h-[2px] bg-linear-to-r from-blue via-green to-blue" />

      {/* Header */}
      <div className="px-5 py-4 border-b border-protocol-border bg-protocol-accent-bg flex items-center justify-between">
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50">Fundoria Trader Passport</div>
          <div className="font-mono text-[12px] font-black text-blue mt-0.5">0x7A...93F</div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 border border-amber-500/30 bg-amber-500/5">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-[8px] uppercase tracking-widest text-amber-500">Eligible Soon</span>
        </div>
      </div>

      {/* Score ring */}
      <div className="px-5 py-5 flex items-center gap-5 border-b border-protocol-border">
        <FundoriaScoreRing score={842} />
        <div className="flex-1">
          <div className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/50 mb-1">Fundoria Score</div>
          <div className="font-display text-[22px] text-protocol-text leading-none mb-1">842</div>
          <div className="flex items-center gap-2">
            <div className="px-2 py-0.5 border border-blue/30 bg-blue/5 font-mono text-[8px] uppercase tracking-widest text-blue">Grade A-</div>
            <div className="font-mono text-[9px] text-green">Top 3.2%</div>
          </div>
        </div>
      </div>

      {/* Stat bars */}
      <div className="px-5 py-4 space-y-2.5 border-b border-protocol-border">
        {scoreDimensions.map((d, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/60">{d.label}</span>
              <span className="font-mono text-[9px] font-black" style={{ color: d.color }}>{d.value}%</span>
            </div>
            <div className="h-0.5 bg-protocol-border overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${d.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.07 }}
                className="h-full"
                style={{ background: d.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Sparkline */}
      <div className="px-5 py-3 border-b border-protocol-border">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/50">30D PnL</span>
          <span className="font-mono text-[10px] font-black text-green">+19.8%</span>
        </div>
        <svg viewBox="0 0 200 48" className="w-full h-8" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00C896" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline
            points={sparklinePoints}
            fill="none"
            stroke="#00C896"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            points={`10,48 ${sparklinePoints} 190,48`}
            fill="url(#sparkGrad)"
          />
        </svg>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-px bg-protocol-border">
        {[['4.8%', 'Max DD'], ['91%', 'Consistency'], ['247', 'Trades']].map(([val, lbl], i) => (
          <div key={i} className="bg-protocol-bg px-3 py-3 flex flex-col items-center gap-0.5">
            <div className="font-mono text-[12px] font-black text-protocol-text">{val}</div>
            <div className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/40">{lbl}</div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="px-5 py-4 flex flex-wrap gap-1.5">
        {badges.map((b, i) => (
          <span key={i} className={`border font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 ${b.color}`}>
            {b.label}
          </span>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="h-[2px] bg-linear-to-r from-transparent via-green/30 to-transparent" />
    </motion.div>
  );
}

export default function TraderPassportSection() {
  return (
    <section id="passport" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-blue/40" />
              Trader Passport
            </div>
            <h2 className="font-display text-[clamp(34px,5vw,64px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-6">
              A Public Trading Identity<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Built From Wallet Activity.</span>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed mb-8 max-w-lg">
              The Trader Passport is the core social object of Fundoria. It turns live Hyperliquid activity into a shareable reputation profile that traders use to prove skill, build status, and become discoverable by capital providers.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Shareable, public, and visually premium — your trading resume',
                'Includes score, grade, PnL curve, badges, ranking percentile, and watchlist count',
                'Updated from live Hyperliquid data — no self-reporting required',
                'Portable across platforms, tournaments, and capital providers',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-green shrink-0 mt-0.5" />
                  <span className="text-[14px] text-protocol-text-dim leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 font-mono text-[10px] text-blue uppercase tracking-widest border-b border-blue/30 pb-0.5 group cursor-default">
                Generate Passport at launch
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Passport Card */}
          <div className="flex justify-center lg:justify-end">
            <PassportCard />
          </div>
        </div>
      </div>
    </section>
  );
}
