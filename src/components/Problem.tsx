import { motion } from 'motion/react';
import { EyeOff, Lock, BarChart2, Puzzle } from 'lucide-react';

const problems = [
  {
    num: '01',
    icon: <EyeOff className="w-5 h-5" />,
    title: 'Skill is Invisible',
    desc: 'Talented traders have no portable, verifiable record of their performance. PnL screenshots prove nothing. Edge disappears without a system to capture it.',
  },
  {
    num: '02',
    icon: <Lock className="w-5 h-5" />,
    title: 'Capital is Gated',
    desc: 'Access to institutional capital requires connections, geography, and reputation — not demonstrated skill. The best traders are often the least funded.',
  },
  {
    num: '03',
    icon: <BarChart2 className="w-5 h-5" />,
    title: 'Risk is Opaque',
    desc: "Capital providers have no reliable way to evaluate trader discipline, drawdown behaviour, or consistency over time. Leaderboards show profit, not intelligence.",
  },
  {
    num: '04',
    icon: <Puzzle className="w-5 h-5" />,
    title: 'Tools are Fragmented',
    desc: 'Traders juggle separate tools for journaling, analytics, rankings, and capital outreach. None of them talk to each other. None of them build a reputation.',
  },
];

export default function Problem() {
  return (
    <section id="vision" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">The Problem</div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] text-protocol-text">
              Markets Have Execution.<br />
              <em className="text-blue not-italic">Traders Still Lack Reputation.</em>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed max-w-[360px] italic">
              You're already generating the data. Nobody is listening.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-protocol-border border border-protocol-border">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-protocol-bg p-8 relative overflow-hidden cursor-default card-glow-hover"
            >
              {/* Ghosted number */}
              <div className="absolute -bottom-4 -right-2 font-display text-[80px] text-protocol-text/[0.03] leading-none select-none pointer-events-none group-hover:text-blue/[0.06] transition-colors duration-500">
                {p.num}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 border border-protocol-border bg-protocol-accent-bg flex items-center justify-center text-blue/60 group-hover:text-blue group-hover:border-blue/40 transition-all mb-6 relative z-10">
                {p.icon}
              </div>

              {/* Content */}
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue/40 group-hover:text-blue/70 transition-colors mb-3 relative z-10">
                PROBLEM::{p.num}
              </div>
              <h3 className="text-[16px] font-bold uppercase tracking-tight mb-3 text-protocol-text/80 group-hover:text-protocol-text transition-colors relative z-10">
                {p.title}
              </h3>
              <p className="text-[13px] text-protocol-text-dim leading-relaxed relative z-10 font-medium">
                {p.desc}
              </p>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
