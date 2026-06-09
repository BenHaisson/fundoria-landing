import { motion } from 'motion/react';
import { TrendingUp, Database, RefreshCw, Award, BrainCircuit, Lightbulb, DollarSign } from 'lucide-react';

const loopSteps = [
  { icon: <TrendingUp className="w-4 h-4" />, label: 'Trade', sub: 'On Hyperliquid', color: 'blue' },
  { icon: <Database className="w-4 h-4" />, label: 'Index', sub: 'Wallet activity captured', color: 'blue' },
  { icon: <RefreshCw className="w-4 h-4" />, label: 'Passport Updates', sub: 'Identity refreshed', color: 'blue' },
  { icon: <Award className="w-4 h-4" />, label: 'Score Changes', sub: 'Risk profile updated', color: 'green' },
  { icon: <Award className="w-4 h-4" />, label: 'Rank Updates', sub: 'Leaderboard moves', color: 'green' },
  { icon: <BrainCircuit className="w-4 h-4" />, label: 'AI Review', sub: 'Insights generated', color: 'green' },
  { icon: <Lightbulb className="w-4 h-4" />, label: 'Improve', sub: 'Or compete in tournaments', color: 'blue' },
  { icon: <DollarSign className="w-4 h-4" />, label: 'Capital Eligibility', sub: 'Increases over time', color: 'green' },
];

export default function DailyUseLoop() {
  return (
    <section id="daily-loop" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">Daily Utility</div>
          <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] text-protocol-text mb-4">
            Built to Be Open<br />
            <em className="text-green not-italic">Every Trading Day.</em>
          </h2>
          <p className="text-protocol-text-dim text-[15px] italic max-w-[480px] mx-auto">
            Fundoria is not a passive dashboard. Every trade on Hyperliquid feeds back into your score, rank, and capital eligibility in a continuous loop.
          </p>
        </motion.div>

        {/* Loop — desktop grid */}
        <div className="hidden md:grid grid-cols-4 gap-px bg-protocol-border border border-protocol-border mb-8">
          {loopSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-protocol-bg p-6 relative overflow-hidden cursor-default card-glow-hover"
            >
              {/* Arrow connector (except last) */}
              {i % 4 !== 3 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
                  <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent border-l-protocol-border" />
                </div>
              )}

              <div className={`w-9 h-9 border ${step.color === 'green' ? 'border-green/30 bg-green/5 text-green/60 group-hover:text-green group-hover:border-green/60' : 'border-blue/30 bg-blue/5 text-blue/60 group-hover:text-blue group-hover:border-blue/60'} flex items-center justify-center transition-all mb-4`}>
                {step.icon}
              </div>

              <div className={`font-mono text-[8px] uppercase tracking-[0.3em] mb-1 ${step.color === 'green' ? 'text-green/40 group-hover:text-green/70' : 'text-blue/40 group-hover:text-blue/70'} transition-colors`}>
                STEP::{String(i + 1).padStart(2, '0')}
              </div>
              <div className="font-bold text-[13px] uppercase tracking-tight text-protocol-text/80 group-hover:text-protocol-text transition-colors mb-1">
                {step.label}
              </div>
              <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-wider">
                {step.sub}
              </div>

              {/* Bottom glow line */}
              <div className={`absolute bottom-0 left-0 w-0 h-[1px] ${step.color === 'green' ? 'bg-green' : 'bg-blue'} group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Loop — mobile vertical */}
        <div className="flex md:hidden flex-col gap-0 border border-protocol-border bg-protocol-bg">
          {loopSteps.map((step, i) => (
            <div key={i}>
              <div className={`flex items-center gap-4 p-4 border-b border-protocol-border/40`}>
                <div className={`w-8 h-8 border ${step.color === 'green' ? 'border-green/30 bg-green/5 text-green/70' : 'border-blue/30 bg-blue/5 text-blue/70'} flex items-center justify-center shrink-0`}>
                  {step.icon}
                </div>
                <div>
                  <div className={`font-mono text-[8px] uppercase tracking-widest mb-0.5 ${step.color === 'green' ? 'text-green/50' : 'text-blue/50'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="font-bold text-[13px] uppercase tracking-tight text-protocol-text">{step.label}</div>
                  <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-wider mt-0.5">{step.sub}</div>
                </div>
              </div>
              {i < loopSteps.length - 1 && (
                <div className="flex justify-center py-1 bg-protocol-bg">
                  <div className="font-mono text-[9px] text-protocol-text-dim/30">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Loop indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-protocol-border bg-protocol-accent-bg rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            <span className="font-mono text-[10px] text-protocol-text-dim uppercase tracking-widest">Loop repeats every trading day</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
