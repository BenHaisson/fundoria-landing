import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Star, Award, TrendingUp } from 'lucide-react';

const benefits = [
  'Create a public Trader Passport',
  'Track your Fundoria Score daily',
  'Share verified performance — not screenshots',
  'Join public leaderboards and tournaments',
  'Unlock badges and reputation streaks',
  'Receive AI-generated trading reviews',
  'Become visible to capital providers',
  'Prepare for future capital access',
];

const sparkPoints = '0,38 20,28 40,32 60,14 80,20 100,10 120,17 140,7 160,13 180,4';

const mockBadges = [
  { label: 'Low Drawdown', color: 'border-green/40 text-green bg-green/5' },
  { label: 'Consistency Streak', color: 'border-blue/40 text-blue bg-blue/5' },
  { label: 'Risk Controlled', color: 'border-green/40 text-green bg-green/5' },
  { label: 'Tournament Ready', color: 'border-blue/40 text-blue bg-blue/5' },
  { label: 'Top 5%', color: 'border-green/40 text-green bg-green/5' },
];

function TraderProfileMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[380px] mx-auto"
    >
      {/* Main card */}
      <div className="border border-protocol-border bg-protocol-bg shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="h-[2px] bg-linear-to-r from-blue via-green to-blue" />

        {/* Profile header */}
        <div className="px-5 py-4 border-b border-protocol-border bg-protocol-accent-bg flex items-center justify-between">
          <div>
            <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-protocol-text-dim/50">Trader Profile</div>
            <div className="font-mono text-[12px] font-black text-blue mt-0.5">0x9B...44E</div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 border border-green/30 bg-green/5">
            <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="font-mono text-[8px] uppercase tracking-widest text-green">Active</span>
          </div>
        </div>

        {/* Score + PnL */}
        <div className="px-5 py-4 flex items-center gap-4 border-b border-protocol-border">
          {/* Mini score ring */}
          <div className="relative w-16 h-16 shrink-0">
            <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
              <circle cx="32" cy="32" r="26" fill="none" stroke="#0E1A2E" strokeWidth="5" />
              <defs>
                <linearGradient id="traderScoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2F80ED" />
                  <stop offset="100%" stopColor="#00C896" />
                </linearGradient>
              </defs>
              <motion.circle
                cx="32" cy="32" r="26"
                fill="none"
                stroke="url(#traderScoreGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 26}
                initial={{ strokeDashoffset: 2 * Math.PI * 26 }}
                whileInView={{ strokeDashoffset: 2 * Math.PI * 26 * (1 - 0.879) }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[14px] text-protocol-text leading-none">879</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/50">Fundoria Score</span>
              <span className="border border-green/30 bg-green/5 font-mono text-[7px] uppercase tracking-widest text-green px-1.5 py-0.5">Verified</span>
            </div>
            <div className="font-display text-[20px] text-protocol-text leading-none mb-1">879</div>
            <div className="font-mono text-[9px] text-protocol-text-dim/50">Top 4.7% · Grade A</div>
          </div>
        </div>

        {/* PnL sparkline */}
        <div className="px-5 py-3 border-b border-protocol-border">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-green" />
              <span className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/50">30D Performance</span>
            </div>
            <span className="font-mono text-[11px] font-black text-green">+24.3%</span>
          </div>
          <svg viewBox="0 0 180 42" className="w-full h-7" preserveAspectRatio="none">
            <defs>
              <linearGradient id="traderSparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00C896" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline points={sparkPoints} fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <polygon points={`0,42 ${sparkPoints} 180,42`} fill="url(#traderSparkGrad)" />
          </svg>
        </div>

        {/* AI review snippet */}
        <div className="px-5 py-3 border-b border-protocol-border bg-protocol-accent-bg/50">
          <div className="flex items-center gap-1.5 mb-2">
            <Star className="w-3 h-3 text-blue" />
            <span className="font-mono text-[8px] uppercase tracking-widest text-blue">AI Daily Review</span>
          </div>
          <p className="font-mono text-[10px] text-protocol-text-dim/70 leading-relaxed italic">
            "Strong drawdown management this week. Risk control score improved +4pts. Position sizing is consistent with historical patterns."
          </p>
        </div>

        {/* Badges */}
        <div className="px-5 py-3">
          <div className="flex items-center gap-1.5 mb-2.5">
            <Award className="w-3 h-3 text-protocol-text-dim/50" />
            <span className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/50">Badges</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {mockBadges.map((b, i) => (
              <span key={i} className={`border font-mono text-[7px] uppercase tracking-widest px-1.5 py-0.5 ${b.color}`}>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="h-[2px] bg-linear-to-r from-transparent via-green/30 to-transparent" />
      </div>

      {/* Watchlist count card - overlapping bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute -bottom-5 -right-4 border border-blue/30 bg-protocol-bg/95 backdrop-blur-md px-4 py-3 shadow-lg"
      >
        <div className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/50 mb-1">Watchlist Count</div>
        <div className="font-display text-[22px] text-blue leading-none">47</div>
        <div className="font-mono text-[8px] text-protocol-text-dim/50 mt-0.5">allocators watching</div>
      </motion.div>
    </motion.div>
  );
}

interface ForTradersProps {
  onOpenWhitelist?: () => void;
}

export default function ForTraders({ onOpenWhitelist }: ForTradersProps) {
  return (
    <section id="for-traders" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-accent-bg px-4 sm:px-6 overflow-hidden">
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
              For Traders
            </div>
            <h2 className="font-display text-[clamp(34px,5vw,64px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-6">
              Build Status From<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Real Performance.</span>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed mb-8 max-w-lg">
              Fundoria gives traders a public reputation layer built from real trading behavior — not screenshots, claims, or social noise.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-green shrink-0 mt-0.5" />
                  <span className="text-[14px] text-protocol-text-dim leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              onClick={onOpenWhitelist}
              className="group relative inline-flex items-center gap-3 bg-blue hover:bg-green text-black font-mono text-[11px] font-black uppercase tracking-[0.2em] px-8 py-4 overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(47,128,237,0.3)] hover:shadow-[0_0_50px_rgba(0,200,150,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <span className="relative">Create Your Trader Passport</span>
              <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right — Mockup */}
          <div className="flex justify-center lg:justify-end pb-8">
            <TraderProfileMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
