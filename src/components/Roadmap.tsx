import { motion } from 'motion/react';

export default function Roadmap() {
  const items: { phase: string; meta: string; title: string; desc: string; active?: boolean; timeline: string }[] = [
    { phase: '01', meta: 'Foundation', title: 'Core Trading & Verification', desc: 'Deployment of protocol interface and simulated environments. Implementation of on-chain identity logic and Hyperliquid integration.', active: true, timeline: 'Q1–Q2 2026' },
    { phase: '02', meta: 'Scaling', title: 'Vault Markets & Capital', desc: 'Expansion of vault configurations and mandate-specific allocation strategies. Enhanced institutional reporting and capital scaling mechanisms.', timeline: 'Q3 2026' },
    { phase: '03', meta: 'Decentralization', title: 'Governance & Ecosystem', desc: 'Progressive decentralization of protocol parameters via DAO. Expansion of third-party integrations and composable financial products.', timeline: 'Q4 2026 – Q1 2027' }
  ];

  return (
    <section className="py-24 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">Lifecycle</div>
          <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase tracking-wider text-protocol-text">The Evolution.</h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-protocol-text-dim text-[13px] mt-3 italic"
          >
            From core infrastructure to institutional capital markets.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Scroll Progress Line */}
          <div className="absolute left-9.5 top-0 bottom-0 w-px bg-protocol-border hidden md:block">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-linear-to-b from-blue via-cyan to-transparent origin-top"
            />
          </div>
          
          <div className="space-y-8 relative">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`group relative flex flex-col md:flex-row gap-8 items-start border bg-protocol-bg transition-all duration-500 ${item.active ? 'border-blue/40 shadow-[0_0_40px_rgba(59,130,246,0.08)] hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]' : 'border-protocol-border opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)]'}`}
              >
                {/* Terminal Header Decoration */}
                <div className="absolute top-0 inset-x-0 h-6 border-b border-protocol-border bg-protocol-accent-bg flex items-center px-4 justify-between pointer-events-none">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-protocol-text/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-protocol-text/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-protocol-text/10" />
                  </div>
                  <div className="font-mono text-[8px] uppercase tracking-widest text-protocol-text/30">
                    MISSION_LOG_PHASE_0{i+1}.txt
                  </div>
                </div>

                <div className="p-5 pt-10 sm:p-8 sm:pt-12 md:p-10 md:pt-14 flex flex-col md:flex-row gap-6 sm:gap-8 items-start w-full">
                  <div className="shrink-0 relative z-10 hidden md:block">
                    <div className={`w-16 h-16 flex items-center justify-center border ${item.active ? 'border-blue text-blue bg-blue/10' : 'border-protocol-border text-protocol-text-dim'} bg-protocol-bg font-display text-4xl transition-all group-hover:scale-105 duration-300 relative`}>
                      {item.phase}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-protocol-bg border-r border-t border-protocol-border" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-protocol-bg border-l border-b border-protocol-border" />
                      
                      {item.active && (
                        <motion.div 
                          animate={{ opacity: [0.2, 0.6, 0.2] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 bg-blue/20 blur-sm"
                        />
                      )}
                    </div>
                    <div className="font-mono text-[9px] text-blue uppercase tracking-[0.3em] mt-4 text-center font-bold">{item.meta}</div>
                  </div>

                  <div className="flex-1 relative z-10">
                    <div className="flex flex-col gap-2 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="md:hidden font-display text-2xl text-protocol-text mr-1">{item.phase}</span>
                        <span className="font-mono text-[9px] text-blue/40 uppercase tracking-widest">SEQ_ENTRY_v1.0{i+1}</span>
                        <div className="h-px flex-1 bg-protocol-border/30" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-widest transition-colors group-hover:text-blue text-protocol-text flex items-center gap-3">
                        {item.title}
                        {item.active && (
                          <div className="flex gap-1.5">
                            <span className="w-1 h-1 bg-blue rounded-full animate-pulse" />
                            <span className="w-1 h-1 bg-blue rounded-full animate-pulse delay-100" />
                          </div>
                        )}
                      </h3>
                    </div>
                    <p className="text-[13px] text-protocol-text-dim leading-relaxed font-mono tracking-tight pb-2 max-w-xl">
                      <span className="text-protocol-text/40 mr-1">&gt;</span>
                      {item.desc}
                    </p>
                    
                    <div className="mt-6 flex flex-wrap gap-4">
                      {item.active ? (
                        <div className="px-3 py-1 border border-blue/30 bg-blue/5 rounded-sm font-mono text-[8px] text-blue uppercase tracking-widest flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue rounded-full animate-ping" />
                          Process: Active
                        </div>
                      ) : (
                        <div className="px-3 py-1 border border-protocol-border bg-protocol-accent-bg rounded-sm font-mono text-[8px] text-protocol-text/20 uppercase tracking-widest">
                          Process: Pending
                        </div>
                      )}
                      <div className="px-3 py-1 border border-protocol-border rounded-sm font-mono text-[8px] text-protocol-text/30 uppercase tracking-widest group-hover:text-protocol-text/60 transition-colors">
                        {item.timeline}
                      </div>
                      {item.active && (
                        <div className="px-3 py-1 border border-protocol-border rounded-sm font-mono text-[8px] text-protocol-text/30 uppercase tracking-widest group-hover:text-protocol-text/60 transition-colors">
                          Stability: 99.98%
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Scanline Overlay */}
                <div className="absolute inset-x-0 top-0 h-px bg-blue/10 group-hover:bg-blue/30 transition-colors hidden md:block" />
                <div className="absolute inset-y-0 left-0 w-px bg-blue/10 group-hover:bg-blue/30 transition-colors hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
