import { motion } from 'motion/react';
import { IdCard, BarChart3, Search, Trophy, BookOpen, Layers } from 'lucide-react';

const products = [
  {
    icon: <IdCard className="w-5 h-5" />,
    layer: 'Identity Layer',
    title: 'Trader Passport',
    desc: 'A wallet-native identity built from on-chain history. Verifiable, portable, and tamper-proof. Your proof-of-skill across the ecosystem.',
    color: 'text-blue',
    accent: 'border-blue/20 group-hover:border-blue/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    layer: 'Intelligence Engine',
    title: 'Fundoria Score',
    desc: 'A composite score across 5 dimensions: Performance, Risk Control, Consistency, Discipline, and Survival. Updated every 24 hours.',
    color: 'text-green',
    accent: 'border-green/20 group-hover:border-green/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
  {
    icon: <Search className="w-5 h-5" />,
    layer: 'Analytics Layer',
    title: 'Wallet Intelligence',
    desc: 'Deep on-chain analytics: PnL history, win rate, drawdown curves, pair-level performance, and risk-adjusted returns — all without a deposit.',
    color: 'text-blue',
    accent: 'border-blue/20 group-hover:border-blue/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    layer: 'Ranking System',
    title: 'Leaderboards & Tournaments',
    desc: 'Public performance rankings and competitive season tournaments. Score-gated entry. Transparent results. Proof of skill under pressure.',
    color: 'text-green',
    accent: 'border-green/20 group-hover:border-green/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    layer: 'Post-Trade AI',
    title: 'AI Trading Journal',
    desc: 'Automatic trade tagging, pattern recognition, and AI-generated performance reviews. Turn every trade into structured learning.',
    color: 'text-blue',
    accent: 'border-blue/20 group-hover:border-blue/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    layer: 'Matching Engine',
    title: 'Capital Access Layer',
    desc: 'Algorithmic matching between verified traders and capital providers. No discretionary gatekeeping — score determines eligibility.',
    color: 'text-green',
    accent: 'border-green/20 group-hover:border-green/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
];

export default function ProductStack() {
  return (
    <section id="product" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue/40" />
            The Protocol Stack
            <span className="w-4 h-px bg-blue/40" />
          </div>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5">
            Six Layers.<br />
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">One Unified System.</span>
          </h2>
          <p className="text-protocol-text-dim text-[15px] max-w-xl mx-auto leading-relaxed">
            From raw wallet data to verified capital access — every layer connects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`group relative border ${p.accent} bg-protocol-accent-bg p-7 transition-all duration-300 ${p.glow} overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-protocol-border to-transparent group-hover:opacity-0 transition-opacity" />
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className={`${p.color} mb-5 opacity-60 group-hover:opacity-100 transition-opacity`}>{p.icon}</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50 mb-2">{p.layer}</div>
              <h3 className="font-mono text-[14px] font-black uppercase tracking-wide text-protocol-text mb-3 group-hover:text-blue transition-colors">{p.title}</h3>
              <p className="text-[13px] text-protocol-text-dim leading-relaxed">{p.desc}</p>

              <div className="absolute bottom-4 right-5 font-mono text-[48px] font-black opacity-[0.04] leading-none select-none pointer-events-none text-protocol-text">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
