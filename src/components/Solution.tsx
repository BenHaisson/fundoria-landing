import { motion } from 'motion/react';

const flowSteps = [
  { label: 'WALLET', sub: 'Connect' },
  { label: 'HISTORY', sub: '90-Day Log' },
  { label: 'SCORE', sub: '5 Dimensions' },
  { label: 'PASSPORT', sub: 'Public Identity' },
  { label: 'CAPITAL', sub: 'Eligible Access' },
];

const stats = [
  { value: '5', label: 'Score Dimensions' },
  { value: '24h', label: 'Update Cycle' },
  { value: '$0', label: 'Min Deposit' },
];

export default function Solution() {
  return (
    <section className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — positioning statement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 text-blue">The Solution</div>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] mb-6 text-protocol-text">
              One Score.<br />
              One Passport.<br />
              <em className="text-green not-italic">One Network.</em>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed mb-8 italic max-w-[460px]">
              Fundoria reads your on-chain trading history, computes a live Fundoria Score across five dimensions, and issues a Trader Passport that travels with your wallet — from leaderboards to capital matching, automatically.
            </p>
            <blockquote className="border-l-2 border-blue pl-5 text-[14px] font-mono text-protocol-text/60 leading-relaxed">
              Hyperliquid is the execution venue.<br />
              Fundoria is the intelligence, reputation, and capital-access layer built around it.
            </blockquote>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-px bg-protocol-border border border-protocol-border mt-10">
              {stats.map((s, i) => (
                <div key={i} className="bg-protocol-bg px-5 py-4 text-center">
                  <div className="font-mono text-[22px] font-black text-blue tabular-nums">{s.value}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — flow diagram */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Desktop: horizontal flow */}
            <div className="hidden md:flex items-center justify-between gap-0 border border-protocol-border bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
              {/* Terminal chrome */}
              <div className="absolute top-0 left-0 right-0 py-2.5 px-4 border-b border-protocol-border bg-protocol-accent-bg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <div className="w-2 h-2 rounded-full bg-green/40" />
                <span className="font-mono text-[9px] text-protocol-text-dim/40 ml-2 uppercase tracking-widest font-black flex-1">
                  FUNDORIA :: INTELLIGENCE_PIPELINE
                </span>
              </div>

              <div className="flex items-stretch w-full mt-10">
                {flowSteps.map((step, i) => (
                  <div key={i} className="flex items-center flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                      className="flex-1 group cursor-default"
                    >
                      <div className={`relative border ${i === flowSteps.length - 1 ? 'border-green/40 bg-green/5 hover:border-green/70 hover:bg-green/10' : 'border-blue/30 bg-blue/5 hover:border-blue/60 hover:bg-blue/10'} p-5 transition-all duration-300 mx-1`}>
                        <div className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${i === flowSteps.length - 1 ? 'border-green/40' : 'border-blue/40'}`} />
                        <div className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${i === flowSteps.length - 1 ? 'border-green/40' : 'border-blue/40'}`} />
                        <div className={`font-mono text-[8px] font-black uppercase tracking-[0.3em] mb-2 ${i === flowSteps.length - 1 ? 'text-green/60' : 'text-blue/50 group-hover:text-blue'} transition-colors`}>
                          STAGE::{String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="font-bold text-[12px] uppercase tracking-tight text-protocol-text mb-1">{step.label}</div>
                        <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-widest">{step.sub}</div>
                        <div className={`absolute bottom-0 left-0 w-0 h-[1px] ${i === flowSteps.length - 1 ? 'bg-green' : 'bg-blue'} group-hover:w-full transition-all duration-500`} />
                      </div>
                    </motion.div>

                    {i < flowSteps.length - 1 && (
                      <div className="flex items-center gap-0 shrink-0 relative z-20">
                        <div className="w-5 h-px bg-protocol-border relative overflow-hidden">
                          <motion.div
                            animate={{ left: ['-100%', '200%'] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                            className="absolute top-0 w-3 h-full bg-linear-to-r from-transparent via-blue/60 to-transparent"
                          />
                        </div>
                        <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-t-transparent border-b-transparent border-l-blue/40" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical flow */}
            <div className="flex md:hidden flex-col gap-0 border border-protocol-border bg-black/40 backdrop-blur-md rounded-xl overflow-hidden">
              <div className="py-2.5 px-4 border-b border-protocol-border bg-protocol-accent-bg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <div className="w-2 h-2 rounded-full bg-green/40" />
                <span className="font-mono text-[9px] text-protocol-text-dim/40 ml-2 uppercase tracking-widest">PIPELINE</span>
              </div>
              {flowSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-full border-b border-protocol-border/30 ${i === flowSteps.length - 1 ? 'bg-green/5' : 'bg-blue/5'} p-4`}>
                    <div className={`font-mono text-[8px] uppercase tracking-widest mb-1 ${i === flowSteps.length - 1 ? 'text-green/60' : 'text-blue/60'}`}>
                      STAGE::{String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="font-bold text-[13px] uppercase tracking-tight text-protocol-text">{step.label}</div>
                    <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-widest mt-0.5">{step.sub}</div>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="py-1 relative">
                      <div className="w-px h-5 bg-protocol-border relative overflow-hidden">
                        <motion.div
                          animate={{ top: ['-100%', '200%'] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                          className="absolute left-0 h-2 w-full bg-linear-to-b from-transparent via-blue/60 to-transparent"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
