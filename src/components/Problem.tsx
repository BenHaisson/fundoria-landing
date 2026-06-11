import { motion } from 'motion/react';
import { Image, BarChart2, Trophy, Search } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const problems = [
  {
    icon: <Image className="w-5 h-5" />,
    title: 'Screenshots Are Not Verification',
    desc: 'Traders prove performance with social posts, Discord calls, and leaderboard screenshots. Capital providers cannot trust what they cannot verify.',
    color: 'text-blue',
    borderColor: 'group-hover:border-blue/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: 'PnL Does Not Explain Risk',
    desc: 'Raw profit numbers hide leverage, drawdown, and survivorship bias. A high return with extreme drawdown is not enough to establish repeatable skill.',
    color: 'text-green',
    borderColor: 'group-hover:border-green/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: 'Leaderboards Miss Discipline',
    desc: 'Most rankings reward short-term profit with no regard for risk management, consistency, or the behavior patterns that separate skill from luck.',
    color: 'text-blue',
    borderColor: 'group-hover:border-blue/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: 'Capital Lacks a Discovery Layer',
    desc: 'Capital providers have no structured way to find disciplined traders before they become obvious. The market has too much noise, not enough reputation.',
    color: 'text-green',
    borderColor: 'group-hover:border-green/40',
    glowColor: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
];

export default function Problem() {
  return (
    <section id="vision" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="The Problem"
          centered
          title={
            <>
              Trading Skill Is Public,<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">But Reputation Is Broken.</span>
            </>
          }
          subtitle="Crypto traders generate public activity every day, but the market still relies on screenshots, social noise, and raw PnL. Capital providers cannot separate skill from luck."
        />

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
