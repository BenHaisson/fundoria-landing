import { motion } from 'motion/react';
import { EyeOff, Lock, AlertTriangle, Puzzle } from 'lucide-react';

const problems = [
  {
    icon: <EyeOff className="w-5 h-5" />,
    title: 'Skill Is Invisible',
    desc: 'There is no portable, verifiable record of trading performance. Your PnL lives in your exchange account and dies there.',
    color: 'text-blue',
    borderColor: 'group-hover:border-blue/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Capital Is Gated',
    desc: 'Access to institutional capital is determined by who you know, not how well you trade. Connections beat demonstrated skill.',
    color: 'text-green',
    borderColor: 'group-hover:border-green/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: 'Risk Is Opaque',
    desc: "There's no reliable way to evaluate a trader's discipline, drawdown control, or long-term consistency from the outside.",
    color: 'text-blue',
    borderColor: 'group-hover:border-blue/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <Puzzle className="w-5 h-5" />,
    title: 'Tools Are Fragmented',
    desc: 'Analytics, journals, rankings, and capital access are separate silos. Nothing connects your trading history to your financial future.',
    color: 'text-green',
    borderColor: 'group-hover:border-green/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
];

export default function Problem() {
  return (
    <section id="vision" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue/40" />
            The Problem
            <span className="w-4 h-px bg-blue/40" />
          </div>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5">
            Trading Skill Has No<br />
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Infrastructure.</span>
          </h2>
          <p className="text-protocol-text-dim text-[15px] max-w-xl mx-auto leading-relaxed">
            The on-chain economy generates more trading data than any previous era — yet none of it is structured, portable, or actionable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative border border-protocol-border bg-protocol-accent-bg p-7 sm:p-8 transition-all duration-300 card-glow-hover ${p.borderColor} ${p.glowColor} overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-protocol-border to-transparent group-hover:via-blue/30 transition-all duration-500" />
              <div className={`${p.color} mb-5 opacity-70 group-hover:opacity-100 transition-opacity`}>{p.icon}</div>
              <h3 className="font-mono text-[13px] font-black uppercase tracking-widest text-protocol-text mb-3">{p.title}</h3>
              <p className="text-[14px] text-protocol-text-dim leading-relaxed">{p.desc}</p>
              <div className="absolute bottom-0 right-0 font-mono text-[60px] font-black text-protocol-border/20 leading-none select-none pointer-events-none pr-4 pb-2">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
