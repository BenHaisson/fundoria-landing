import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Shield, Zap, Database, BarChart3 } from 'lucide-react';

interface VisionProps {
  onOpenWhitelist?: () => void;
}

const colorMap = {
  green: { border: 'border-green', text: 'text-green', bg: 'bg-green/5', shadow: 'shadow-[0_0_15px_rgba(57,211,146,0.2)]', bar: 'bg-green/60', dot: 'bg-green', glow: 'bg-green/10' },
  blue: { border: 'border-blue', text: 'text-blue', bg: 'bg-blue/5', shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.2)]', bar: 'bg-blue/60', dot: 'bg-blue', glow: 'bg-blue/10' },
  cyan: { border: 'border-cyan', text: 'text-cyan', bg: 'bg-cyan/5', shadow: 'shadow-[0_0_15px_rgba(6,182,212,0.2)]', bar: 'bg-cyan/60', dot: 'bg-cyan', glow: 'bg-cyan/10' },
};

export default function Vision({ onOpenWhitelist }: VisionProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const features = [
    {
      id: 'profile',
      title: 'Trader Persistence',
      subtitle: 'on-chain reputation',
      color: 'green' as const,
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-protocol-border bg-gradient-to-br from-green/20 to-blue/20 flex items-center justify-center">
                <Globe className="w-4.5 h-4.5 text-protocol-text opacity-70" />
              </div>
              <div>
                <div className="font-bold text-sm text-protocol-text">0x8f...2e91</div>
                <div className="font-mono text-[9px] text-protocol-text-dim uppercase">Trader Identity</div>
              </div>
            </div>
            <div className="px-2.5 py-1 bg-green/15 border border-green/30 rounded-sm font-mono text-[8px] text-green uppercase tracking-widest">
              Tier 04 / Prime
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-[0.15em]">Institutional Score</div>
              <div className="font-mono text-[7px] text-protocol-text-dim/40 uppercase tracking-widest">[ Illustrative ]</div>
            </div>
            <div className="h-1.5 bg-protocol-accent-bg rounded-full overflow-hidden border border-protocol-border/50">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '84%' }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-green rounded-full" 
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 bg-protocol-accent-bg border border-protocol-border rounded-sm">
              <div className="font-mono text-[8px] text-protocol-text-dim uppercase tracking-widest mb-1 text-blue">TRK_PNL</div>
              <div className="text-xl font-black text-protocol-text">$412.8k</div>
            </div>
            <div className="p-3.5 bg-protocol-accent-bg border border-protocol-border rounded-sm">
              <div className="font-mono text-[8px] text-protocol-text-dim uppercase tracking-widest mb-1 text-green">CONS_RT</div>
              <div className="text-xl font-black text-protocol-text">92.4%</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vault',
      title: 'Programmatic Vaults',
      subtitle: 'capital_allocation_v2',
      color: 'blue' as const,
      icon: <Database className="w-5 h-5" />,
      content: (
        <div className="space-y-5">
          <div className="p-4 border border-blue/20 bg-blue/5 rounded-sm">
            <div className="flex justify-between items-end mb-3">
              <div>
                <div className="font-mono text-[8px] text-blue uppercase mb-1">Active Allocation</div>
                <div className="text-2xl font-black">$12,480,000</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[8px] text-protocol-text-dim uppercase mb-1">Total_Yield</div>
                <div className="text-sm font-bold text-green">+14.2%</div>
              </div>
            </div>
            <div className="flex gap-1 h-2">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: [0.1, 0.8, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  className="flex-1 bg-blue rounded-full" 
                />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-[8px] text-protocol-text-dim opacity-50">
              <span>VAULT_ADDR: 0xFD...POOL_A</span>
              <span>UTIL: 76%</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 bg-protocol-accent-bg border border-protocol-border rounded-sm flex items-center justify-center font-mono text-[10px] text-protocol-text-dim opacity-60">USDC</div>
              <div className="h-10 bg-protocol-accent-bg border border-protocol-border rounded-sm flex items-center justify-center font-mono text-[10px] text-protocol-text-dim opacity-60">USDT</div>
              <div className="h-10 bg-blue/10 border border-blue/30 rounded-sm flex items-center justify-center font-mono text-[10px] text-blue">STAKE</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk',
      title: 'Deterministic Risk',
      subtitle: 'pre-execution_gating',
      color: 'blue' as const,
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="font-mono text-[10px] text-red-500 mb-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
            LIVE_RISK_ENFORCEMENT
          </div>
          <div className="space-y-3">
            {[
              { l: 'Max Drawdown', v: '5.00%', p: 65, c: 'bg-red-400' },
              { l: 'Daily Loss Limit', v: '2.50%', p: 20, c: 'bg-yellow-400' },
              { l: 'Exposure Cap', v: '10.0x', p: 85, c: 'bg-blue' }
            ].map((r, i) => (
              <div key={i} className="space-y-1.5 font-medium">
                <div className="flex justify-between font-mono text-[9px] uppercase">
                  <span className="text-protocol-text-dim opacity-60">{r.l}</span>
                  <span className="font-bold text-protocol-text">{r.v}</span>
                </div>
                <div className="h-1 bg-protocol-accent-bg rounded-full overflow-hidden border border-protocol-border/20">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${r.p}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={`h-full ${r.c}`} 
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-protocol-border">
            <div className="font-mono text-[8px] text-protocol-text-dim opacity-30 uppercase">Guardian Oracle Status: <span className="text-green font-bold">Active</span></div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % features.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <section id="vision" className="py-28 md:py-36 border-y border-protocol-border relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 font-mono text-[8px] text-protocol-text opacity-[0.02] pointer-events-none select-none break-all leading-tight">
        {Array(50).fill('01100110 01110101 01101110 01100100 01101111 01110010 01101001 01100001 ').join(' ')}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-green">Protocol Vision</div>
            <h2 className="font-display text-[clamp(40px,5vw,60px)] uppercase leading-[0.95] text-protocol-text">
              Protocol-Native <br />
              <em className="text-green not-italic lowercase">capital markets.</em>
            </h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-protocol-text-dim text-[15px] sm:text-[16px] leading-relaxed mt-6 max-w-lg italic"
            >
              Fundoria establishes a protocol-controlled infrastructure that coordinates traders 
              and capital within a unified, rule-enforced system. Trading skill becomes a 
              verifiable on-chain primitive, independent of custody.
            </motion.p>
            <ul className="mt-9 flex flex-col gap-3.5">
              <VisionItem text="programmatic capital allocation governed by code" index={0} />
              <VisionItem text="risk constraints enforced at protocol level" index={1} />
              <VisionItem text="verifiable performance regardless of balance size" index={2} />
              <VisionItem text="non-custodial capital managed via vaults" index={3} />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`absolute -inset-10 blur-[60px] rounded-full pointer-events-none -z-10 transition-colors duration-700 ${colorMap[features[activeSlide].color].glow}`} />

            <div className="relative z-10 p-5 sm:p-7 border border-protocol-border bg-protocol-accent-bg rounded-2xl backdrop-blur-2xl min-h-[360px] sm:min-h-[400px] flex flex-col overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-4 mb-2">
                {features.map((f, i) => {
                  const c = colorMap[f.color];
                  return (
                  <button
                    key={f.id}
                    onClick={() => setActiveSlide(i)}
                    className={`w-10 h-10 border flex items-center justify-center transition-all relative ${activeSlide === i ? `${c.border} ${c.text} ${c.bg} ${c.shadow}` : 'border-protocol-border text-protocol-text-dim hover:border-protocol-text'}`}
                  >
                    {f.icon}
                  </button>
                  );
                })}
                <div className="flex-1 h-px bg-protocol-border" />
                <div className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-widest hidden sm:block">
                  sys::module_0{activeSlide + 1}
                </div>
              </div>

              {/* Auto-play progress bar */}
              <div className="h-px bg-protocol-border mb-8 relative overflow-hidden">
                <motion.div
                  key={activeSlide}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                  className={`absolute inset-y-0 left-0 transition-colors duration-500 ${colorMap[features[activeSlide].color].bar}`}
                />
              </div>

              <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="absolute inset-0"
                  >
                    <div className="mb-6">
                      <h3 className="font-display text-2xl uppercase tracking-wider mb-1 text-protocol-text">{features[activeSlide].title}</h3>
                      <div className="font-mono text-[9px] text-blue/60 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue rounded-full animate-pulse" />
                        {features[activeSlide].subtitle}
                      </div>
                    </div>
                    <div className="text-protocol-text">
                      {features[activeSlide].content}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-6 border-t border-protocol-border flex items-center justify-between">
                <button 
                  onClick={onOpenWhitelist}
                  className="font-mono text-[10px] text-green hover:underline uppercase tracking-widest flex items-center gap-2 group"
                >
                  Join Whitelist
                  <Zap className="w-3 h-3 group-hover:scale-125 transition-transform" />
                </button>
                <div className="flex gap-1.5">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className={`h-1 transition-all rounded-full ${activeSlide === i ? `w-6 ${colorMap[f.color].dot}` : 'w-2 bg-protocol-border'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Accent Decor */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-protocol-border pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VisionItem({ text, index }: { text: string; index: number }) {
  return (
    <li className="flex items-center gap-3 text-sm font-medium group">
      <div className="font-mono text-green text-[10px] shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">0x_{index.toString().padStart(2, '0')}</div>
      <div className="w-1 h-3 bg-green/20 group-hover:bg-green transition-colors" />
      <span className="text-protocol-text-dim group-hover:text-protocol-text transition-colors lowercase font-mono text-[13px] leading-snug pt-0.5">{text}</span>
    </li>
  );
}
