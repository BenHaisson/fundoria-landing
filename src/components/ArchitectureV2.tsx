import { useState } from 'react';
import { motion } from 'motion/react';
import { Database, Cpu, IdCard, Handshake } from 'lucide-react';

const nodes = [
  {
    icon: <Database className="w-4 h-4" />,
    title: 'Read-Only Indexer',
    sub: 'Hyperliquid RPC',
    color: 'text-blue',
    border: 'border-blue/30',
    bg: 'bg-blue/5',
  },
  {
    icon: <Cpu className="w-4 h-4" />,
    title: 'Score Engine',
    sub: '5 Dimensions',
    color: 'text-green',
    border: 'border-green/30',
    bg: 'bg-green/5',
  },
  {
    icon: <IdCard className="w-4 h-4" />,
    title: 'Trader Passport',
    sub: 'Verified Identity',
    color: 'text-blue',
    border: 'border-blue/30',
    bg: 'bg-blue/5',
  },
  {
    icon: <Handshake className="w-4 h-4" />,
    title: 'Capital Matching',
    sub: 'Algorithmic Match',
    color: 'text-green',
    border: 'border-green/30',
    bg: 'bg-green/5',
  },
];

const codeLines = [
  { text: '// Stage 1 · Wallet Read', color: 'text-protocol-text-dim/50' },
  { text: 'wallet.connect(hyperliquid_rpc)', color: 'text-blue' },
  { text: '', color: '' },
  { text: '// Stage 2 · Score Engine', color: 'text-protocol-text-dim/50' },
  { text: 'score = fundoria.compute({', color: 'text-protocol-text' },
  { text: '  performance: 88,', color: 'text-green' },
  { text: '  risk_control: 92,', color: 'text-green' },
  { text: '  consistency: 79,', color: 'text-green' },
  { text: '  discipline: 85,', color: 'text-green' },
  { text: '  survival: 96', color: 'text-green' },
  { text: '})', color: 'text-protocol-text' },
  { text: '', color: '' },
  { text: '// Stage 3 · Passport', color: 'text-protocol-text-dim/50' },
  { text: 'passport.issue(wallet_hash, score)', color: 'text-blue' },
  { text: '', color: '' },
  { text: '// Stage 4 · Capital Match', color: 'text-protocol-text-dim/50' },
  { text: 'allocator.match(score > 800)', color: 'text-green' },
];

const claims = [
  'Read-only. No custody at any layer.',
  'Score updated every 24 hours from on-chain data.',
  'Rank is public and tamper-proof.',
  'Capital matching is algorithmic, never discretionary.',
  'All data sourced from Hyperliquid on-chain history.',
];

export default function ArchitectureV2() {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <section id="intelligence" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-accent-bg px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue/40" />
            System Architecture
            <span className="w-4 h-px bg-blue/40" />
          </div>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5">
            How the<br />
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Intelligence Works.</span>
          </h2>
          <p className="text-protocol-text-dim text-[15px] max-w-xl mx-auto leading-relaxed">
            Four stages. Read-only data in, verified capital access out.
          </p>
        </motion.div>

        {/* Schematic Nodes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 relative"
        >
          {/* Connector lines desktop */}
          <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px bg-protocol-border hidden md:block -translate-y-1/2 pointer-events-none" />

          {nodes.map((node, i) => (
            <button
              key={i}
              onClick={() => setActiveNode(i)}
              className={`group relative border ${activeNode === i ? node.border : 'border-protocol-border'} ${activeNode === i ? node.bg : 'bg-protocol-bg'} p-4 sm:p-5 flex flex-col items-center gap-3 transition-all duration-300 text-center hover:${node.border}`}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`${activeNode === i ? node.color : 'text-protocol-text-dim/50 group-hover:' + node.color.replace('text-', 'text-')} transition-colors`}>
                {node.icon}
              </div>
              <div>
                <div className={`font-mono text-[10px] font-black uppercase tracking-widest transition-colors ${activeNode === i ? 'text-protocol-text' : 'text-protocol-text-dim/60 group-hover:text-protocol-text'}`}>
                  {node.title}
                </div>
                <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-wider mt-0.5">{node.sub}</div>
              </div>
              <div className={`font-mono text-[9px] font-black ${node.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                Stage {String(i + 1).padStart(2, '0')}
              </div>
            </button>
          ))}
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
              <div className="w-2 h-2 rounded-full bg-red-500/40" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
              <div className="w-2 h-2 rounded-full bg-green/40" />
              <span className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/40 ml-1">FUNDORIA_CORE.ts</span>
            </div>
            <span className="font-mono text-[8px] text-blue/50 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-blue animate-pulse" />LIVE
            </span>
          </div>
          <div className="p-5 font-mono text-[11px] leading-[2] bg-black/20 overflow-x-auto">
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
              className="border border-protocol-border bg-protocol-bg p-4 group hover:border-blue/30 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue/40 group-hover:bg-blue mb-3 transition-colors" />
              <p className="font-mono text-[10px] text-protocol-text-dim leading-relaxed group-hover:text-protocol-text transition-colors">{claim}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
