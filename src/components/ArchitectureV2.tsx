import { useState } from 'react';
import { motion } from 'motion/react';
import { Database, Cpu, IdCard, TrendingUp } from 'lucide-react';

const nodes = [
  {
    stage: '01',
    icon: <Database className="w-4 h-4" />,
    title: 'Read-Only Indexer',
    sub: 'Hyperliquid RPC',
    detail: 'Non-custodial wallet connection. No keys, no permissions — trade history only.',
    color: 'text-blue',
    border: 'border-blue/30',
    bg: 'bg-blue/5',
    status: 'In Build',
    statusColor: 'text-blue border-blue/30 bg-blue/5',
  },
  {
    stage: '02',
    icon: <Cpu className="w-4 h-4" />,
    title: 'Score Engine',
    sub: '10 Dimensions',
    detail: 'Risk-adjusted scoring across performance, drawdown, consistency, discipline, and survival rate.',
    color: 'text-green',
    border: 'border-green/30',
    bg: 'bg-green/5',
    status: 'In Build',
    statusColor: 'text-green border-green/30 bg-green/5',
  },
  {
    stage: '03',
    icon: <IdCard className="w-4 h-4" />,
    title: 'Trader Passport',
    sub: 'Public Profile',
    detail: 'Wallet-verified identity. Score, grade, badges, and track record — on-chain and tamper-proof.',
    color: 'text-blue',
    border: 'border-blue/30',
    bg: 'bg-blue/5',
    status: 'In Build',
    statusColor: 'text-blue border-blue/30 bg-blue/5',
  },
  {
    stage: '04',
    icon: <TrendingUp className="w-4 h-4" />,
    title: 'Capital Visibility',
    sub: 'Discovery Layer',
    detail: 'Capital providers discover verified traders through score filters, watchlists, and public rankings.',
    color: 'text-green',
    border: 'border-green/30',
    bg: 'bg-green/5',
    status: 'Coming Soon',
    statusColor: 'text-sky-400 border-sky-400/30 bg-sky-400/5',
  },
];

const codeLines = [
  { text: '// Stage 1 · Read-Only Wallet Index', color: 'text-protocol-text-dim/50' },
  { text: 'wallet.connect(hyperliquid_rpc, { readonly: true })', color: 'text-blue' },
  { text: '', color: '' },
  { text: '// Stage 2 · Score Engine  [SAMPLE VALUES]', color: 'text-protocol-text-dim/50' },
  { text: 'score = fundoria.compute({', color: 'text-protocol-text' },
  { text: '  performance: 88,   // illustrative', color: 'text-green' },
  { text: '  risk_control: 92,  // illustrative', color: 'text-green' },
  { text: '  consistency: 79,   // illustrative', color: 'text-green' },
  { text: '  discipline: 85,    // illustrative', color: 'text-green' },
  { text: '  survival: 96       // illustrative', color: 'text-green' },
  { text: '})', color: 'text-protocol-text' },
  { text: '', color: '' },
  { text: '// Stage 3 · Passport', color: 'text-protocol-text-dim/50' },
  { text: 'passport.generate(wallet_hash, score)', color: 'text-blue' },
  { text: '', color: '' },
  { text: '// Stage 4 · Capital Visibility  [FUTURE LAYER]', color: 'text-protocol-text-dim/50' },
  { text: '// allocator.discover(score, filters)  // coming soon', color: 'text-protocol-text-dim/40' },
];

const claims = [
  { text: 'Read-only. No custody at any layer.', color: 'bg-blue' },
  { text: 'Score computed from on-chain data only.', color: 'bg-blue' },
  { text: 'Rank is public and wallet-verified.', color: 'bg-green' },
  { text: 'No self-reported data accepted.', color: 'bg-green' },
  { text: 'Capital matching is a future protocol layer.', color: 'bg-[#4A6484]' },
];

export default function ArchitectureV2() {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <section
      id="intelligence"
      aria-labelledby="intelligence-heading"
      className="py-28 md:py-36 border-t border-protocol-border bg-protocol-accent-bg px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* MVP badge */}
          <div className="inline-flex items-center gap-2 border border-blue/30 bg-blue/5 px-3 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-blue">MVP Intelligence Layer · Phase 1</span>
          </div>

          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue/40" />
            MVP Architecture
            <span className="w-4 h-px bg-blue/40" />
          </div>
          <h2
            id="intelligence-heading"
            className="font-display text-[clamp(36px,6vw,72px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5"
          >
            The Intelligence<br />
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Stack.</span>
          </h2>
          <p className="text-protocol-text-dim text-[15px] max-w-xl mx-auto leading-relaxed">
            Four stages. Read-only data in, verified trader profile out.
            No custody, no deposits, no key access — ever.
          </p>
        </motion.div>

        {/* Schematic Nodes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 relative"
          role="tablist"
          aria-label="Architecture stages"
        >
          {/* Connector lines desktop */}
          <div
            className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px bg-protocol-border hidden md:block -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />

          {nodes.map((node, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeNode === i}
              aria-label={`Stage ${node.stage}: ${node.title}`}
              onClick={() => setActiveNode(i)}
              className={`group relative border ${
                activeNode === i ? node.border : 'border-protocol-border hover:border-protocol-border/80'
              } ${
                activeNode === i ? node.bg : 'bg-protocol-bg'
              } p-4 sm:p-5 flex flex-col items-center gap-3 transition-all duration-300 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-protocol-bg`}
            >
              <div
                className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
              <div className={`${activeNode === i ? node.color : 'text-protocol-text-dim/50'} transition-colors`}>
                {node.icon}
              </div>
              <div>
                <div className={`font-mono text-[11px] font-black uppercase tracking-widest transition-colors ${activeNode === i ? 'text-protocol-text' : 'text-protocol-text-dim/60'}`}>
                  {node.title}
                </div>
                <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-wider mt-1">{node.sub}</div>
              </div>
              <span className={`font-mono text-[8px] uppercase tracking-widest border px-2 py-0.5 ${node.statusColor}`}>
                {node.status}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Active node detail */}
        <motion.div
          key={activeNode}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="border border-protocol-border bg-protocol-bg px-5 py-4 mb-6 flex items-start gap-3"
          role="tabpanel"
          aria-label={`Details for stage ${nodes[activeNode].stage}`}
        >
          <div className={`${nodes[activeNode].color} mt-0.5 shrink-0`}>{nodes[activeNode].icon}</div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/40 mb-1">
              Stage {nodes[activeNode].stage} · {nodes[activeNode].title}
            </div>
            <p className="text-[13px] text-protocol-text leading-relaxed">{nodes[activeNode].detail}</p>
          </div>
        </motion.div>

        {/* Code Panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border border-protocol-border overflow-hidden mb-8"
        >
          <div className="px-4 py-2.5 border-b border-protocol-border bg-protocol-bg flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/40" aria-hidden="true" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/40" aria-hidden="true" />
              <div className="w-2 h-2 rounded-full bg-green/40" aria-hidden="true" />
              <span className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/40 ml-1">FUNDORIA_CORE.ts</span>
            </div>
            <span className="font-mono text-[8px] text-amber-500/70 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-amber-500/60" aria-hidden="true" />SAMPLE DATA
            </span>
          </div>
          <div className="p-5 font-mono text-[12px] leading-[2] bg-black/20 overflow-x-auto">
            {codeLines.map((line, i) => (
              <div key={i} className={line.color || 'text-protocol-text'}>
                {line.text || <>&nbsp;</>}
              </div>
            ))}
          </div>
          <div className="h-[2px] bg-linear-to-r from-transparent via-blue to-transparent" />
        </motion.div>

        {/* Claims */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {claims.map((claim, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border border-protocol-border card-surface card-lift p-4 sm:p-5 group hover:border-blue/30"
            >
              <div className={`w-1.5 h-1.5 rounded-full ${claim.color} mb-3`} aria-hidden="true" />
              <p className="font-mono text-[11px] text-protocol-text-dim leading-[1.7] group-hover:text-protocol-text transition-colors duration-400">
                {claim.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
