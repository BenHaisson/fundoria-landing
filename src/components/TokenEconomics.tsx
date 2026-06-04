import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { ShieldCheck, Gavel, Coins, Activity } from 'lucide-react';

export default function TokenEconomics() {
  return (
    <section id="token" className="py-24 relative overflow-hidden bg-protocol-bg transition-colors duration-300 border-t border-protocol-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">Token Architecture</div>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] text-protocol-text">
              The $FND <br />
              Coordination <br />
              <span className="text-blue">Utility Layer.</span>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed mt-6 mb-8 italic">
              $FND aligns traders, capital providers, and contributors through native coordination mechanisms and verifiable access rules.
            </p>
            <div className="space-y-3">
              <TokenItem index={0} title="Verification & Tiers" desc="Required for trader progression and access to advanced capital access modules." />
              <TokenItem index={1} title="Ecosystem Incentives" desc="Incentive distribution tied to protocol activity, vault participation, and contributor engagement." />
              <TokenItem index={2} title="Governed Parameters" desc="Vote on global risk limits, fee structures, and protocol-level coordination hooks." />
            </div>

            {/* Token Allocation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-10 border border-protocol-border bg-protocol-accent-bg"
            >
              <div className="px-5 py-3 border-b border-protocol-border flex items-center justify-between">
                <div className="font-mono text-[9px] uppercase tracking-widest text-blue font-bold">Token Allocation</div>
                <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-widest">Supply: 100,000,000 $FND</div>
              </div>
              {[
                { label: 'Community & Ecosystem', pct: 40, color: 'bg-blue', note: '' },
                { label: 'Protocol Treasury', pct: 25, color: 'bg-cyan', note: '' },
                { label: 'Team & Contributors', pct: 20, color: 'bg-green', note: '24-mo vest · 6-mo cliff' },
                { label: 'Early Backers', pct: 10, color: 'bg-blue/60', note: '12-mo vest' },
                { label: 'Liquidity Provision', pct: 5, color: 'bg-cyan/50', note: '' },
              ].map((row, i) => (
                <div key={i} className="px-5 py-3 border-b border-protocol-border/40 last:border-b-0 flex items-center gap-4 group hover:bg-protocol-bg/50 transition-colors">
                  <div className="font-mono text-[9px] text-blue font-bold w-8 shrink-0">{row.pct}%</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-protocol-text">{row.label}</span>
                      {row.note && <span className="font-mono text-[7px] text-protocol-text-dim/40 uppercase tracking-tighter">{row.note}</span>}
                    </div>
                    <div className="h-[3px] bg-protocol-border/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.pct * 2.5}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.08 + 0.4, ease: 'easeOut' }}
                        className={`h-full ${row.color} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="mt-4 p-5 border border-blue/10 bg-blue/5 rounded-sm">
              <p className="text-[10px] font-mono leading-relaxed text-protocol-text-dim/60 uppercase tracking-tight">
                <span className="text-blue font-bold opacity-80">[ GLOBAL_DISCLOSURE ]</span> :: $FND is a coordination utility token. It is not an investment contract, security, or claim on protocol revenue or trader performance. Allocation figures are illustrative and subject to change. Participation is subject to protocol eligibility.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-[420px] sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden"
          >
            {/* Background Glows */}
            <div className="absolute inset-0 bg-blue/5 blur-[120px] rounded-full scale-150 animate-pulse" />

            {/* Scaled orbital system — fits any container size */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'scale(var(--orbital-scale, 1))' }}>
            {/* Orbital Rings - Enhanced Layering */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-70 h-70 sm:w-95 sm:h-95 lg:w-110 lg:h-110 rounded-full border border-blue/5 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-60 h-60 sm:w-80 sm:h-80 lg:w-95 lg:h-95 rounded-full border border-blue/10 border-dashed"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-50 h-50 sm:w-65 sm:h-65 lg:w-80 lg:h-80 rounded-full border border-blue/20"
            />

            {/* Rapid Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-35 h-35 sm:w-45 sm:h-45 lg:w-55 lg:h-55 rounded-full border border-blue/40 border-dotted opacity-30"
            />

            {/* Moving Data Particles on Rings */}
            {([200, 230, 260, 290] as const).map((size, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                className="absolute hidden sm:block"
                style={{ width: size, height: size }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue shadow-[0_0_15px_rgba(59,130,246,1)] rounded-full animate-pulse" />
              </motion.div>
            ))}
            </div>

            {/* Central Token - Energy Core Upgrade */}
            <div className="relative z-30 group">
              {/* Pulse Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute w-40 h-40 rounded-full border border-blue/30"
                />
                <motion.div 
                  animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                  className="absolute w-40 h-40 rounded-full border border-blue/20"
                />
              </div>

              {/* Main Core Sphere */}
              <motion.div 
                animate={{ 
                  boxShadow: ["0 0 30px rgba(59,130,246,0.2)", "0 0 60px rgba(59,130,246,0.6)", "0 0 30px rgba(59,130,246,0.2)"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-[150px] h-[150px] rounded-full border-2 border-blue bg-protocol-bg p-1 relative overflow-hidden flex items-center justify-center transition-all group-hover:scale-110 duration-500"
              >
                {/* Internal Plasma Effect */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-blue)_0%,transparent_70%)] animate-pulse" />
                
                {/* Secondary Rotating Inner Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border border-blue/20 rounded-full border-dashed"
                />

                <div className="relative z-10 w-full h-full rounded-full border border-blue/30 flex flex-col items-center justify-center bg-blue/5 backdrop-blur-md">
                  {/* Internal Vertical Scan */}
                  <motion.div 
                    animate={{ y: [-75, 75] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.8)] z-0 mix-blend-overlay"
                  />
                  
                  <div className="font-display text-5xl text-blue tracking-tighter relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">$FND</div>
                  <div className="font-mono text-[8px] text-blue/80 uppercase tracking-[0.4em] font-black relative z-10">CORE_COORD_v3</div>
                  
                  {/* Status Indicator */}
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <motion.div 
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }}
                        className="w-1 h-1 rounded-full bg-blue shadow-[0_0_5px_rgba(59,130,246,1)]"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Satellites - Positioning for 1.25x scale with enhanced orbital feel */}
            <Satellite
              delay={0.3}
              pos="top-[6%] left-[4%] sm:left-[8%]"
              label="Verification"
              val="Vault Isolation"
              icon={<ShieldCheck className="w-4 h-4 text-blue" />}
            />
            <Satellite
              delay={0.4}
              pos="top-[6%] right-[4%] sm:right-[8%]"
              label="Governance"
              val="DAO Governed"
              icon={<Gavel className="w-4 h-4 text-blue" />}
            />
            <Satellite
              delay={0.5}
              pos="bottom-[6%] left-[4%] sm:left-[8%]"
              label="Incentives"
              val="Protocol Rewards"
              icon={<Coins className="w-4 h-4 text-blue" />}
            />
            <Satellite
              delay={0.6}
              pos="bottom-[6%] right-[4%] sm:right-[8%]"
              label="Risk Engine"
              val="Hard Bounds Active"
              icon={<Activity className="w-4 h-4 text-blue" />}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TokenItem({ title, desc, index }: { title: string; desc: string; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.2 }}
      className="p-5 px-6 border border-protocol-border bg-protocol-accent-bg hover:bg-protocol-accent-bg/80 transition-all group border-l-2 border-l-blue/20 hover:border-l-blue"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1.5 h-1.5 bg-blue/40 group-hover:bg-blue animate-pulse" />
        <h4 className="text-[12px] font-bold uppercase tracking-wider text-protocol-text">{title}</h4>
      </div>
      <p className="text-[11px] text-protocol-text-dim leading-relaxed font-sans pl-4.5 font-medium">{desc}</p>
    </motion.div>
  );
}

function Satellite({ pos, label, val, delay, icon }: { pos: string; label: string; val: string; delay: number; icon: ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-30 ${pos}`}
    >
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center gap-2 group cursor-default"
      >
        {/* Floating Icon Sphere/Element */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue/20 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-10 h-10 flex items-center justify-center relative z-10">
            {icon}
          </div>
          
          {/* Subtle Orbiting Dot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-blue/10 rounded-full"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue rounded-full shadow-[0_0_8px_rgba(59,130,246,1)]" />
          </motion.div>
        </div>

        {/* Text Presentation without Square Outline */}
        <div className="flex flex-col items-center text-center">
          <div className="font-mono text-[9px] text-protocol-text/60 uppercase tracking-[0.3em] font-black group-hover:text-protocol-text transition-colors duration-300">
            {label}
          </div>
          <div className="font-mono text-[7px] font-bold text-blue/40 uppercase tracking-[0.1em] mt-0.5 group-hover:text-blue transition-colors duration-300">
            {val}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
