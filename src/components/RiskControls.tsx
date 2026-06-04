import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import { Shield, Lock, AlertTriangle, Activity, Eye, ZapOff } from 'lucide-react';

export default function RiskControls() {
  const [activeSlide, setActiveSlide] = useState(0);
  const logId = useMemo(() => Math.random().toString(16).substring(2, 8).toUpperCase(), []);

  const controls = [
    {
      id: 'drawdown',
      title: 'Drawdown Caps',
      subtitle: 'absolute_loss_ceiling',
      icon: <ZapOff className="w-5 h-5" />,
      tag: 'Root-Level',
      content: (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-protocol-border bg-blue/10 flex items-center justify-center">
                <AlertTriangle className="w-4.5 h-4.5 text-blue" />
              </div>
              <div>
                <div className="font-bold text-sm text-protocol-text">DD_THRESHOLD_01</div>
                <div className="font-mono text-[9px] text-protocol-text-dim uppercase">Protocol Guard</div>
              </div>
            </div>
            <div className="px-2.5 py-1 bg-blue/15 border border-blue/30 rounded-sm font-mono text-[8px] text-blue uppercase tracking-widest">
              HARD_CAP: 15%
            </div>
          </div>
          <p className="text-[12px] text-protocol-text-dim leading-relaxed font-sans italic border-l border-blue/30 pl-4 py-1">
            Deterministic loss ceilings enforced at the sub-account level. Liquidation triggers are calculated pre-tick.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 border border-protocol-border bg-protocol-accent-bg">
              <div className="font-mono text-[8px] text-protocol-text-dim uppercase mb-1">Latency</div>
              <div className="font-bold text-protocol-text text-xs">&lt; 1.2ms</div>
            </div>
            <div className="p-3 border border-protocol-border bg-protocol-accent-bg">
              <div className="font-mono text-[8px] text-protocol-text-dim uppercase mb-1">Priority</div>
              <div className="font-bold text-blue text-xs">CRITICAL</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gating',
      title: 'Execution Gating',
      subtitle: 'pre-trade_validation',
      icon: <Lock className="w-5 h-5" />,
      tag: 'Gatekeeper',
      content: (
        <div className="space-y-4">
          <div className="p-4 border border-blue/20 bg-blue/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-blue animate-pulse" />
              <div className="font-mono text-[10px] text-protocol-text uppercase">Order_Validation_Stream</div>
            </div>
            <div className="text-[9px] font-mono text-green">PASSING</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-[8px] text-protocol-text-dim uppercase">
              <span>Gating Efficiency</span>
              <span className="flex items-center gap-2">99.99% <span className="text-[7px] opacity-40 normal-case">[ Illustrative ]</span></span>
            </div>
            <div className="h-1.5 bg-protocol-accent-bg border border-protocol-border/50 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '99%' }}
                transition={{ duration: 1 }}
                className="h-full bg-blue shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 pt-2">
            {[
              { l: 'Balance Verifier', s: 'Verified' },
              { l: 'Margin Requirement', s: 'Satisfied' },
              { l: 'Risk Profile Match', s: 'Matched' }
            ].map((check, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] text-protocol-text-dim">
                <div className="w-1 h-1 rounded-full bg-blue" />
                <span className="font-mono uppercase tracking-tighter">{check.l}</span>
                <span className="ml-auto text-[8px] opacity-40 italic">{check.s}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'oracle',
      title: 'Guardian Oracles',
      subtitle: 'independent_verification',
      icon: <Eye className="w-5 h-5" />,
      tag: 'Oracle-Level',
      content: (
        <div className="space-y-5">
          <div className="relative h-20 border border-protocol-border bg-protocol-bg overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-blue/20" />
            <motion.div 
              animate={{ x: [0, 100, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue/50 blur-lg" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-mono text-[10px] text-protocol-text opacity-40 animate-pulse">SCANNING::NETWORK_STATE</div>
            </div>
          </div>
          <p className="text-[11px] text-protocol-text-dim leading-relaxed italic">
            On-chain state verification ensures vault collateral and exposure markers remain accurate across all active protocol positions.
          </p>
          <div className="flex flex-col gap-2 pt-2">
            <div className="flex justify-between items-center p-3 border border-protocol-border bg-protocol-accent-bg">
              <span className="font-mono text-[9px] text-protocol-text-dim uppercase">Heartbeat</span>
              <span className="text-[9px] text-green font-bold">18ms</span>
            </div>
            <div className="flex justify-between items-center p-3 border border-protocol-border bg-protocol-accent-bg">
              <span className="font-mono text-[9px] text-protocol-text-dim uppercase">Nodes Active</span>
              <span className="text-[9px] text-protocol-text font-bold flex items-center gap-2">128/128 <span className="font-mono text-[7px] opacity-40 normal-case">[ Illustrative ]</span></span>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % controls.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [controls.length]);

  return (
    <section id="risk" className="py-24 bg-protocol-bg border-y border-protocol-border relative overflow-hidden transition-colors duration-300">
      <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 rotate-90 font-display text-[10vw] text-protocol-text opacity-[0.02] pointer-events-none whitespace-nowrap">
        DETERMINISTIC_RULES
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">Risk Controls</div>
            <h2 className="font-display text-[clamp(40px,5vw,60px)] uppercase leading-[0.95] text-protocol-text">
              Risk as <em className="text-blue not-italic">Code.</em> <br /> Not Policy.
            </h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-protocol-text-dim text-[15px] leading-relaxed mt-6 max-w-lg italic"
            >
              Constraints are enforced pre-execution through protocol-level gating. No manual overrides. No discretionary exceptions. Fundoria operates as a headless risk manager.
            </motion.p>
            <ul className="mt-9 flex flex-col gap-3.5">
              <RiskItem text="deterministic drawdown protection" index={0} />
              <RiskItem text="non-custodial risk enforcement" index={1} />
              <RiskItem text="real-time execution gating" index={2} />
              <RiskItem text="independent oracle verification" index={3} />
              <RiskItem text="smart contracts under independent security audit" index={4} />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-blue/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse" />
            
            {/* System Console Aesthetic */}
            <div className="relative z-10 p-1 border border-protocol-border bg-black shadow-2xl overflow-hidden group">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-protocol-border bg-protocol-accent-bg">
                <div className="flex gap-1.5 focus-within:ring-0">
                  <div className="w-2 h-2 rounded-full bg-red-500/40" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                  <div className="w-2 h-2 rounded-full bg-green-500/40" />
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-protocol-text/40 font-bold">
                  SECURE_MONITOR_v1.07
                </div>
                <div className="font-mono text-[9px] text-blue font-black animate-pulse">
                  ALIVE
                </div>
              </div>

              <div className="p-5 sm:p-8 md:p-10 min-h-[420px] sm:min-h-[480px] flex flex-col relative">
                {/* Holographic Scanline Overlay */}
                <div className="absolute inset-x-0 h-40 bg-linear-to-b from-blue/5 to-transparent pointer-events-none animate-scanline z-20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] bg-[length:100%_2px,3px_100%] pointer-events-none z-20 opacity-50" />

                <div className="flex items-center gap-4 mb-3 overflow-x-auto pb-2 scrollbar-none">
                  {controls.map((c, i) => (
                    <button 
                      key={c.id}
                      onClick={() => setActiveSlide(i)}
                      className={`shrink-0 w-12 h-12 border flex flex-col items-center justify-center transition-all relative group/btn ${activeSlide === i ? 'border-blue text-blue bg-blue/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'border-protocol-border text-protocol-text-dim hover:border-protocol-text'}`}
                    >
                      {c.icon}
                      <div className={`absolute -bottom-[1px] left-0 h-[2px] bg-blue transition-all ${activeSlide === i ? 'w-full' : 'w-0 group-hover/btn:w-1/2'}`} />
                    </button>
                  ))}
                  <div className="flex-1 h-px bg-protocol-border opacity-50" />
                  <div className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-widest hidden sm:block whitespace-nowrap">
                    LOG_ID::{logId}
                  </div>
                </div>

                {/* Auto-play progress bar */}
                <div className="h-px bg-protocol-border mb-8 relative overflow-hidden">
                  <motion.div
                    key={activeSlide}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                    className="absolute inset-y-0 left-0 bg-blue/50"
                  />
                </div>

                <div className="flex-1 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "circOut" }}
                      className="absolute inset-0"
                    >
                      <div className="mb-8 border-l-2 border-blue pl-6">
                        <div className="font-mono text-[10px] text-blue uppercase tracking-[0.4em] mb-2 font-black leading-none italic">
                          #{controls[activeSlide].tag}
                        </div>
                        <h3 className="font-display text-3xl uppercase tracking-wider mb-2 text-protocol-text leading-none">{controls[activeSlide].title}</h3>
                        <div className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-widest flex items-center gap-3">
                          <span className="flex gap-0.5">
                            <span className="w-1 h-3 bg-blue/20" />
                            <span className="w-1 h-3 bg-blue/40" />
                            <span className="w-1 h-3 bg-blue/60" />
                          </span>
                          {controls[activeSlide].subtitle}
                        </div>
                      </div>
                      <div className="text-protocol-text max-w-lg">
                        {controls[activeSlide].content}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-10 pt-8 border-t border-protocol-border flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="font-mono text-[10px] text-blue uppercase tracking-[0.4em] flex items-center gap-2 font-black">
                      <Shield className="w-3.5 h-3.5 animate-pulse" />
                      SECURE_LINK
                    </div>
                    <div className="flex gap-2">
                      {controls.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1.5 transition-all rounded-full ${activeSlide === i ? 'w-8 bg-blue shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'w-2 bg-protocol-border'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="font-mono text-[9px] text-protocol-text-dim/40 uppercase tracking-tighter italic">
                    Smart Contracts: Under Audit
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Brackets */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-blue/20" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-blue/20" />
            
            {/* Float Accents */}
            <div className="absolute -top-10 right-10 p-2 border border-protocol-border bg-protocol-bg font-mono text-[8px] text-protocol-text/30 uppercase tracking-widest -z-10 rotate-12">
              ENFORCE_ENGINE::v.alpha
            </div>
            <div className="absolute -bottom-10 left-10 p-2 border border-protocol-border bg-protocol-bg font-mono text-[8px] text-protocol-text/30 uppercase tracking-widest -z-10 -rotate-6">
              AUDIT_TRAIL::ON_CHAIN
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RiskItem({ text, index }: { text: string; index: number }) {
  return (
    <li className="flex items-center gap-3 text-sm font-medium group">
      <div className="font-mono text-blue text-[10px] shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">RC_{index.toString().padStart(2, '0')}</div>
      <div className="w-1 h-3 bg-blue/20 group-hover:bg-blue transition-colors" />
      <span className="text-protocol-text-dim group-hover:text-protocol-text transition-colors lowercase font-mono leading-none pt-0.5">{text}</span>
    </li>
  );
}

