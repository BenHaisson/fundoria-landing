import { motion } from 'motion/react';
import { TrendingUp, Cpu, Star, BarChart2, Brain, Target, Unlock, RefreshCw } from 'lucide-react';

const steps = [
  { icon: <TrendingUp className="w-4 h-4" />, label: 'Trade', sub: 'Execute on Hyperliquid', color: 'text-blue', border: 'border-blue/30' },
  { icon: <Cpu className="w-4 h-4" />, label: 'Index', sub: 'On-chain data captured', color: 'text-green', border: 'border-green/30' },
  { icon: <Star className="w-4 h-4" />, label: 'Score', sub: 'Fundoria updates rank', color: 'text-blue', border: 'border-blue/30' },
  { icon: <BarChart2 className="w-4 h-4" />, label: 'Rank', sub: 'Public leaderboard', color: 'text-green', border: 'border-green/30' },
  { icon: <Brain className="w-4 h-4" />, label: 'Review', sub: 'AI journal analysis', color: 'text-blue', border: 'border-blue/30' },
  { icon: <Target className="w-4 h-4" />, label: 'Improve', sub: 'Act on insights', color: 'text-green', border: 'border-green/30' },
  { icon: <Unlock className="w-4 h-4" />, label: 'Capital', sub: 'Eligibility unlocked', color: 'text-blue', border: 'border-blue/30' },
  { icon: <RefreshCw className="w-4 h-4" />, label: 'Repeat', sub: 'Loop continues', color: 'text-green', border: 'border-green/30' },
];

export default function DailyUseLoop() {
  return (
    <section id="daily-loop" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-accent-bg px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue/40" />
            The Reputation Loop
            <span className="w-4 h-px bg-blue/40" />
          </div>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] uppercase leading-[1.05] tracking-[-0.02em] text-protocol-text mb-5">
            Reputation Creates<br />
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Visibility. Visibility Attracts Capital.</span>
          </h2>
          <p className="text-protocol-text-dim text-[15px] max-w-xl mx-auto leading-relaxed">
            Every trade feeds your Passport. Every score update builds your reputation. Every badge earns you visibility with capital providers.
          </p>
        </motion.div>

        {/* Loop Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 relative">
          {/* Connecting Lines — desktop only */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-linear-to-r from-blue/10 via-green/10 to-blue/10 hidden sm:block pointer-events-none" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative border ${step.border} bg-protocol-bg hover:bg-protocol-accent-bg transition-all duration-300 p-5 flex flex-col items-center text-center gap-3 overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue/20 to-transparent group-hover:via-blue/50 transition-colors" />

              <div className={`w-10 h-10 flex items-center justify-center border ${step.border} ${step.color} bg-protocol-bg/60 group-hover:bg-protocol-accent-bg transition-colors`}>
                {step.icon}
              </div>
              <div>
                <div className="font-mono text-[12px] font-black uppercase tracking-widest text-protocol-text group-hover:text-blue transition-colors">
                  {step.label}
                </div>
                <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-wider mt-0.5">
                  {step.sub}
                </div>
              </div>
              <div className="absolute bottom-2 right-3 font-mono text-[32px] font-black opacity-[0.04] leading-none select-none pointer-events-none text-protocol-text">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loop indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-[120px] bg-protocol-border" />
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-protocol-text-dim/40 flex items-center gap-2">
            <RefreshCw className="w-3 h-3" />
            Continuous Loop — No Manual Steps
          </div>
          <div className="h-px flex-1 max-w-[120px] bg-protocol-border" />
        </motion.div>
      </div>
    </section>
  );
}
