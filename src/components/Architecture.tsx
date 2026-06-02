import { motion } from 'motion/react';

const steps = [
  { num: '01', tag: 'Vault Layer', title: 'Trader Vaults', desc: 'Isolated capital with enforced drawdown and exposure constraints. Non-custodial by design.' },
  { num: '02', tag: 'Risk Layer', title: 'Risk Engine (Oracle)', desc: 'Monitors NAV, validates limits, and triggers automatic halts when constraints are breached.' },
  { num: '03', tag: 'Coordination Layer', title: 'Master Hub', desc: 'Capital allocation and settlement logic across all vaults and strategies.' },
  { num: '04', tag: 'Market Access', title: 'Execution Layer', desc: 'Trades executed on Hyperliquid with on-chain references for continuous verification.' },
];

const codeLines = [
  { type: 'comment', text: '// Stage 1 · Data Ingress' },
  { type: 'code', parts: [{ color: 'blue', text: 'vault_state' }, { color: 'dim', text: '.update_on_fill(trade)' }] },
  { type: 'blank' },
  { type: 'comment', text: '// Stage 2 · Guardian Verification' },
  { type: 'code', parts: [{ color: 'green', text: 'oracle.validate_metrics(sharpe, vol)' }] },
  { type: 'blank' },
  { type: 'comment', text: '// Stage 3 · Continuous NAV' },
  { type: 'code', parts: [{ color: 'blue', text: 'nav' }, { color: 'dim', text: '.stream_live()' }] },
  { type: 'blank' },
  { type: 'comment', text: '// Stage 4 · Immutable Checkpoint' },
  { type: 'code', parts: [{ color: 'blue', text: 'ledger.write_checkpoint(epoch_id)' }], cursor: true },
];

const schematicNodes = [
  { id: '01', label: 'Trader Vaults', tag: 'Vault Layer', sub: 'Capital Isolation', color: 'blue' as const },
  { id: '02', label: 'Risk Engine', tag: 'Oracle Layer', sub: 'Guard & Validate', color: 'blue' as const },
  { id: '03', label: 'Master Hub', tag: 'Coord Layer', sub: 'Allocate & Settle', color: 'blue' as const },
  { id: '04', label: 'Execution', tag: 'Market Access', sub: 'Hyperliquid Native', color: 'green' as const },
];

function SchematicDiagram() {
  return (
    <div className="mb-20 border border-protocol-border bg-black/40 backdrop-blur-sm relative overflow-hidden">
      {/* Header bar */}
      <div className="py-2.5 px-4 border-b border-protocol-border bg-protocol-accent-bg flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500/40" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
        <div className="w-2 h-2 rounded-full bg-green/40" />
        <span className="font-mono text-[9px] text-protocol-text-dim/40 ml-2 uppercase tracking-widest font-black flex-1">
          SCHEMATIC :: PROTOCOL_EXECUTION_FLOW_v1
        </span>
        <span className="font-mono text-[8px] text-blue/50 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-blue animate-pulse" />
          LIVE
        </span>
      </div>

      <div className="p-8 md:p-10 relative">
        {/* Scanline */}
        <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-blue/[0.03] to-transparent pointer-events-none animate-scanline z-0" />

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-center justify-between gap-0 relative z-10">
          {schematicNodes.map((node, i) => (
            <div key={i} className="flex items-center flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 group cursor-default"
              >
                <div className={`relative border ${node.color === 'green' ? 'border-green/40 bg-green/5 hover:border-green/70 hover:bg-green/10' : 'border-blue/30 bg-blue/5 hover:border-blue/60 hover:bg-blue/10'} p-5 transition-all duration-300 mx-1 hover:shadow-[0_4px_24px_rgba(59,130,246,0.08)]`}>
                  {/* Corner decors */}
                  <div className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${node.color === 'green' ? 'border-green/40' : 'border-blue/40'}`} />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${node.color === 'green' ? 'border-green/40' : 'border-blue/40'}`} />

                  <div className={`font-mono text-[8px] font-black uppercase tracking-[0.3em] mb-2 ${node.color === 'green' ? 'text-green/50 group-hover:text-green' : 'text-blue/50 group-hover:text-blue'} transition-colors`}>
                    STAGE::{node.id}
                  </div>
                  <div className="font-bold text-[13px] uppercase tracking-tight text-protocol-text mb-1">{node.label}</div>
                  <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-widest">{node.sub}</div>

                  {/* Tag badge */}
                  <div className={`mt-3 inline-block px-2 py-0.5 text-[8px] font-mono font-black uppercase tracking-widest border ${node.color === 'green' ? 'border-green/20 text-green/60' : 'border-blue/20 text-blue/60'}`}>
                    {node.tag}
                  </div>

                  {/* Bottom glow line */}
                  <div className={`absolute bottom-0 left-0 w-0 h-[1px] ${node.color === 'green' ? 'bg-green' : 'bg-blue'} group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>

              {/* Arrow connector */}
              {i < schematicNodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.3 }}
                  className="flex items-center gap-0 shrink-0 relative z-20"
                >
                  {/* Animated dashed line */}
                  <div className="w-6 h-px bg-protocol-border relative overflow-hidden">
                    <motion.div
                      animate={{ left: ['-100%', '200%'] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                      className="absolute top-0 w-3 h-full bg-gradient-to-r from-transparent via-blue/60 to-transparent"
                    />
                  </div>
                  {/* Arrow head */}
                  <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-t-transparent border-b-transparent border-l-blue/40" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex md:hidden flex-col gap-0 relative z-10">
          {schematicNodes.map((node, i) => (
            <div key={i} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`w-full border ${node.color === 'green' ? 'border-green/30 bg-green/5' : 'border-blue/20 bg-blue/5'} p-4 relative`}
              >
                <div className={`font-mono text-[8px] font-black uppercase tracking-[0.3em] mb-1 ${node.color === 'green' ? 'text-green/60' : 'text-blue/60'}`}>
                  STAGE::{node.id} · {node.tag}
                </div>
                <div className="font-bold text-[13px] uppercase tracking-tight text-protocol-text">{node.label}</div>
                <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-widest mt-0.5">{node.sub}</div>
              </motion.div>
              {i < schematicNodes.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <div className="w-px h-4 bg-protocol-border relative overflow-hidden">
                    <motion.div
                      animate={{ top: ['-100%', '200%'] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-0 h-2 w-full bg-gradient-to-b from-transparent via-blue/60 to-transparent"
                    />
                  </div>
                  <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-blue/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data flow labels row */}
        <div className="hidden md:flex items-center justify-around mt-5 relative z-10">
          {['CAPITAL_IN', 'ORACLE_VALIDATED', 'SETTLEMENT', 'HYPERLIQUID_EXEC'].map((lbl, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="font-mono text-[7px] text-protocol-text-dim/30 uppercase tracking-widest text-center flex-1"
            >
              ↑ {lbl}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom flash bar */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-blue to-transparent animate-flash" />
    </div>
  );
}

export default function Architecture() {
  return (
    <section id="protocol" className="py-24 bg-protocol-bg border-t border-protocol-border overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">Architecture</div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] text-protocol-text">
              Protocol <br />
              Components & <br />
              <em className="text-blue not-italic">Execution Flow.</em>
            </h2>
            <p className="text-protocol-text-dim text-[13px] leading-relaxed max-w-[360px] italic">
              Fundoria separates capital custody, execution, and risk enforcement into verifiable, auditable components.
            </p>
          </div>
        </motion.div>

        {/* Schematic diagram — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <SchematicDiagram />
        </motion.div>

        {/* Steps + code panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col relative">
              {/* Animated connecting line */}
              <div className="absolute left-[8px] top-0 bottom-0 w-px bg-protocol-border/40 z-0">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                  className="w-full h-full bg-gradient-to-b from-blue/60 via-blue/20 to-transparent origin-top"
                />
              </div>

              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-10 py-5 lg:py-6 group relative z-10"
                >
                  {/* Node */}
                  <div className="shrink-0 flex flex-col items-center pt-2">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-[18px] h-[18px] border-2 border-protocol-border bg-protocol-bg flex items-center justify-center group-hover:border-blue transition-colors duration-300 cursor-default"
                    >
                      <div className="w-1.5 h-1.5 bg-protocol-text-dim/20 group-hover:bg-blue transition-colors rounded-full" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-5 lg:p-6 border border-protocol-border bg-protocol-bg/40 backdrop-blur-sm group-hover:bg-protocol-accent-bg group-hover:border-blue/40 group-hover:shadow-[0_4px_24px_rgba(59,130,246,0.06)] transition-all duration-500 relative">
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-protocol-border group-hover:bg-blue transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-blue group-hover:w-full transition-all duration-700" />

                    <div className="font-mono text-[10px] text-blue uppercase tracking-[0.3em] font-black mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                      STAGE::{step.num} / {step.tag}
                    </div>
                    <h3 className="text-[15px] font-bold uppercase tracking-tight mb-2 text-protocol-text/80 group-hover:text-protocol-text transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[12px] text-protocol-text-dim leading-relaxed max-w-[340px] font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Code panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:pt-0"
          >
            <div className="sticky top-32 border border-protocol-border bg-protocol-bg overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.06)]">
              {/* Title bar */}
              <div className="py-2.5 px-3.5 border-b border-protocol-border bg-protocol-accent-bg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green/50" />
                <span className="font-mono text-[9px] text-protocol-text-dim/40 ml-2 uppercase tracking-widest font-black flex-1">
                  TRACE_LOG :: STAGE_02
                </span>
                <span className="font-mono text-[8px] text-blue/50 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-blue animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Code body */}
              <div className="p-6 font-mono text-[11px] leading-[2] text-protocol-text font-medium relative overflow-hidden">
                {/* Scanline */}
                <div className="absolute inset-x-0 h-20 bg-gradient-to-b from-blue/[0.03] to-transparent pointer-events-none animate-scanline z-10" />

                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  >
                    {line.type === 'blank' && <div className="h-2" />}
                    {line.type === 'comment' && (
                      <div className="text-protocol-text-dim opacity-40 italic">{line.text}</div>
                    )}
                    {line.type === 'code' && (
                      <div>
                        {line.parts?.map((part, j) => (
                          <span
                            key={j}
                            className={
                              part.color === 'blue' ? 'text-blue font-bold' :
                              part.color === 'green' ? 'text-green font-bold' :
                              'text-protocol-text-dim'
                            }
                          >
                            {part.text}
                          </span>
                        ))}
                        {line.cursor && <span className="animate-pulse opacity-70 text-blue">_</span>}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom flash bar */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-blue to-transparent animate-flash" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
