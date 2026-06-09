import { motion } from 'motion/react';
import { IdCard, Target, BarChart2, Trophy, BrainCircuit, Wallet } from 'lucide-react';

const products = [
  {
    num: '01',
    icon: <IdCard className="w-5 h-5" />,
    tag: 'Identity Layer',
    title: 'Trader Passport',
    desc: 'A public, shareable profile that turns wallet activity into a verified trading identity.',
    features: ['Wallet-linked identity', 'Non-custodial', 'Globally visible', 'Score + Risk Grade', 'PnL history', 'Capital eligibility status'],
    color: 'blue',
  },
  {
    num: '02',
    icon: <Target className="w-5 h-5" />,
    tag: 'Intelligence Engine',
    title: 'Fundoria Score',
    desc: 'A 0–1000 proprietary score built from risk-adjusted performance, consistency, and discipline.',
    features: ['Performance (0–1000)', 'Risk Control', 'Consistency', 'Discipline', 'Survival Rate', 'Daily updates'],
    color: 'green',
  },
  {
    num: '03',
    icon: <BarChart2 className="w-5 h-5" />,
    tag: 'Analytics Layer',
    title: 'Wallet Intelligence',
    desc: 'Real-time analytics for traders who want to understand their behaviour like professionals.',
    features: ['PnL decomposition', 'Win/loss distribution', 'Leverage behaviour', 'Risk heatmaps', 'Trading frequency', 'Mistake detection'],
    color: 'blue',
  },
  {
    num: '04',
    icon: <Trophy className="w-5 h-5" />,
    tag: 'Ranking System',
    title: 'Leaderboards & Tournaments',
    desc: 'Skill-based rankings and competitive seasons that go far beyond raw profit.',
    features: ['Best risk-adjusted trader', 'Lowest drawdown', 'Most consistent', 'Best comeback', 'Tournament champions', 'Capital eligibility feeds'],
    color: 'green',
  },
  {
    num: '05',
    icon: <BrainCircuit className="w-5 h-5" />,
    tag: 'Post-Trade AI',
    title: 'AI Trading Journal',
    desc: 'A daily review layer that helps traders understand what they did and where risk changed.',
    features: ['Daily performance summary', 'Mistake detection', 'Risk notes', 'Behavioural patterns', 'Strategy review', 'Improvement suggestions'],
    color: 'blue',
  },
  {
    num: '06',
    icon: <Wallet className="w-5 h-5" />,
    tag: 'Matching Engine',
    title: 'Capital Access Layer',
    desc: 'Verified traders become eligible for funded challenges, capital pools, and allocator discovery.',
    features: ['Score-gated eligibility', 'Algorithmic matching', 'No discretion', 'Allocator discovery', 'Funded challenges', 'Risk compliance'],
    color: 'green',
  },
];

export default function ProductStack() {
  return (
    <section id="product" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">Product Stack</div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] text-protocol-text">
              From Wallet Activity to<br />
              <em className="text-green not-italic">Verified Trader Identity.</em>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed max-w-[360px] italic">
              Six interconnected layers that transform raw trading data into a portable reputation network.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-protocol-border border border-protocol-border">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-protocol-bg p-8 relative overflow-hidden cursor-default card-glow-hover"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-0 h-[1px] ${p.color === 'green' ? 'bg-green' : 'bg-blue'} group-hover:w-full transition-all duration-500`} />

              {/* Corner decorations */}
              <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r ${p.color === 'green' ? 'border-green/20' : 'border-blue/20'} group-hover:border-opacity-60 transition-colors`} />
              <div className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l ${p.color === 'green' ? 'border-green/20' : 'border-blue/20'} group-hover:border-opacity-60 transition-colors`} />

              {/* Ghosted number */}
              <div className={`absolute -bottom-4 -right-2 font-display text-[80px] ${p.color === 'green' ? 'text-green/[0.03]' : 'text-blue/[0.03]'} group-hover:opacity-[1.5] leading-none select-none pointer-events-none transition-opacity`}>
                {p.num}
              </div>

              {/* Icon */}
              <div className={`w-10 h-10 border ${p.color === 'green' ? 'border-green/30 bg-green/5 text-green/60 group-hover:text-green group-hover:border-green/60' : 'border-blue/30 bg-blue/5 text-blue/60 group-hover:text-blue group-hover:border-blue/60'} flex items-center justify-center transition-all mb-5 relative z-10`}>
                {p.icon}
              </div>

              {/* Tag + Number */}
              <div className={`font-mono text-[8px] uppercase tracking-[0.3em] ${p.color === 'green' ? 'text-green/40 group-hover:text-green/70' : 'text-blue/40 group-hover:text-blue/70'} transition-colors mb-2 relative z-10`}>
                LAYER::{p.num} — {p.tag}
              </div>

              <h3 className="text-[17px] font-bold uppercase tracking-tight mb-3 text-protocol-text/80 group-hover:text-protocol-text transition-colors relative z-10">
                {p.title}
              </h3>
              <p className="text-[13px] text-protocol-text-dim leading-relaxed mb-5 relative z-10 font-medium">
                {p.desc}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 relative z-10">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <span className={`text-[8px] ${p.color === 'green' ? 'text-green/50' : 'text-blue/50'} font-mono`}>▸</span>
                    <span className="font-mono text-[10px] text-protocol-text-dim/70 uppercase tracking-wider">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
