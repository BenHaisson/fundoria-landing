import { motion } from 'motion/react';
import { Monitor, Shield, Fingerprint, Zap, BarChart3, Users } from 'lucide-react';
import type { ReactNode } from 'react';

const accentMap = {
  blue: { dot: 'bg-blue', label: 'text-blue', hover: 'hover:bg-blue/5 hover:border-b-blue/60', bar: 'bg-blue/50', topLine: 'via-blue/30' },
  cyan: { dot: 'bg-cyan', label: 'text-cyan', hover: 'hover:bg-cyan/5 hover:border-b-cyan/60', bar: 'bg-cyan/50', topLine: 'via-cyan/30' },
  green: { dot: 'bg-green', label: 'text-green', hover: 'hover:bg-green/5 hover:border-b-green/60', bar: 'bg-green/50', topLine: 'via-green/30' },
};

export default function ProtocolLogic() {
  const properties: { num: string; title: string; desc: string; icon: ReactNode; accent: keyof typeof accentMap }[] = [
    { num: '01', title: 'UX Interface', desc: 'Standardized point of interaction mirroring live Hyperliquid order books, pricing, and liquidity metrics.', icon: <Monitor className="w-4 h-4" />, accent: 'blue' },
    { num: '02', title: 'Smart Vaults', desc: 'Programmable capital containers defining allocation limits, risk parity, and deterministic settlement pools.', icon: <Shield className="w-4 h-4" />, accent: 'blue' },
    { num: '03', title: 'Protocol Control', desc: 'Identity verification and risk enforcement layer on HyperEVM, authorizing orders before execution routing.', icon: <Fingerprint className="w-4 h-4" />, accent: 'cyan' },
    { num: '04', title: 'Execution Engine', desc: 'Canonical execution venue providing order matching, sub-second latency, and on-chain settlement guarantees.', icon: <Zap className="w-4 h-4" />, accent: 'cyan' },
    { num: '05', title: 'Off-Chain Indexer', desc: 'Deterministic computation layer for performance aggregation, drawdown auditing, and signed attestations.', icon: <BarChart3 className="w-4 h-4" />, accent: 'green' },
    { num: '06', title: 'DAO Governance [ Phase III ]', desc: 'Decentralized management of risk frameworks, fee structures, and protocol upgrade paths. Governance evolves progressively — beginning with protocol stewards toward full DAO authority.', icon: <Users className="w-4 h-4" />, accent: 'green' },
  ];

  return (
    <section id="protocol" className="py-28 md:py-36 bg-protocol-bg border-t border-protocol-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap gap-8 items-end justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">Protocol Logic</div>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] text-protocol-text">
              Non-Custodial. <br />
              <em className="text-blue not-italic">Not Discretionary.</em>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-[380px] text-protocol-text-dim text-[15px] leading-relaxed md:text-right italic"
          >
            Every constraint and settlement is enforced by code — not human gatekeepers. 
            Fundoria coordinates capital with zero intermediary trust.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-protocol-border bg-protocol-accent-bg rounded-xl overflow-hidden">
          {properties.map((prop, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-9 border-b border-protocol-border sm:border-r last:border-b-0 sm:nth-[2n]:border-r-0 lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0 group relative overflow-hidden transition-all hover:bg-protocol-accent-bg/80 hover:shadow-[inset_0_0_60px_rgba(59,130,246,0.04)] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-blue/[0.04] translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-30 transition-opacity duration-500 text-blue">
                <div className="font-mono text-[80px] leading-none mb-[-20px] select-none italic font-bold tracking-tighter">{prop.num}</div>
              </div>
              <div className={`absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent ${accentMap[prop.accent].topLine} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              <div className={`absolute bottom-0 left-0 w-full h-[2px] ${accentMap[prop.accent].bar} scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-7">
                  <div className={`font-mono text-[9px] tracking-[0.5em] flex items-center gap-2 font-bold ${accentMap[prop.accent].label}`}>
                    <span className={`w-1.5 h-1.5 ${accentMap[prop.accent].dot} rounded-full animate-pulse`} />
                    LOGIC_MODULE::{prop.num}
                  </div>
                  <div className={`w-9 h-9 border border-protocol-border flex items-center justify-center ${accentMap[prop.accent].label} opacity-20 group-hover:opacity-70 transition-opacity duration-300`}>
                    {prop.icon}
                  </div>
                </div>
                <h3 className="text-[13px] font-mono font-black uppercase tracking-[0.15em] mb-4 transition-all group-hover:translate-x-1 flex items-center gap-2 text-protocol-text">
                  <span className={accentMap[prop.accent].label}>[+]</span>
                  {prop.title}
                </h3>
                <p className="text-[13px] text-protocol-text-dim leading-relaxed font-sans font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {prop.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Flow Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-20 p-6 sm:p-10 border border-protocol-border bg-black/40 backdrop-blur-md rounded-xl relative overflow-hidden group shadow-2xl"
        >
          {/* Corner Decors */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue/40" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue/40" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue/40" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex-1 text-center lg:text-left">
              <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-blue mb-2 font-bold">Protocol Signal Flow</h4>
              <p className="text-[11px] text-protocol-text-dim/60 uppercase tracking-widest font-mono max-w-sm">Verifiable on-chain routing from capital container to execution venue.</p>
            </div>
            
            <div className="flex-2 w-full lg:w-auto overflow-x-auto scrollbar-none -mx-4 px-4 relative">
              <div className="absolute right-0 inset-y-0 w-10 bg-linear-to-l from-black/80 to-transparent pointer-events-none lg:hidden z-10" />
              <div className="flex items-center gap-4 min-w-[560px] py-4">
                <FlowStep label="CAPITAL" sub="Vaults" active />
                <FlowLine />
                <FlowStep label="IDENTITY" sub="HyperEVM" />
                <FlowLine />
                <FlowStep label="RISK" sub="Guardian" pulse />
                <FlowLine />
                <FlowStep label="EXEC" sub="Hyperliquid" />
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

function FlowStep({ label, sub, active, pulse }: { label: string; sub: string; active?: boolean; pulse?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2 group/step">
      <div className={`w-14 h-14 rounded-full border ${active ? 'border-blue bg-blue/10' : 'border-protocol-border bg-protocol-accent-bg'} flex items-center justify-center transition-all duration-500 group-hover/step:scale-110 relative`}>
        {pulse && <span className="absolute inset-0 rounded-full bg-blue/20 animate-ping" />}
        <div className={`w-2 h-2 rounded-full ${active ? 'bg-blue' : 'bg-protocol-text-dim/30'}`} />
      </div>
      <div className="text-center font-mono">
        <div className="text-[11px] font-black tracking-widest text-protocol-text">{label}</div>
        <div className="text-[9px] text-protocol-text-dim/60 uppercase tracking-tighter">{sub}</div>
      </div>
    </div>
  );
}

function FlowLine() {
  return (
    <div className="w-16 h-px bg-protocol-border relative">
      <motion.div 
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-4 h-full bg-linear-to-r from-transparent via-blue/50 to-transparent"
      />
    </div>
  );
}
