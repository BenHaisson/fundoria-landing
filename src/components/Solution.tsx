import { motion } from 'motion/react';
import SectionHeader from './ui/SectionHeader';
import StatusTag from './ui/StatusTag';

const archNodes = [
  {
    id: 'hyperliquid',
    layer: 'Input',
    label: 'Hyperliquid Chain',
    sub: 'On-chain trade activity, positions, PnL',
    tag: { variant: 'live' as const, label: 'Data Source' },
    color: '#00C896',
    icon: '⬡',
  },
  {
    id: 'indexer',
    layer: 'Ingestion',
    label: 'Read-Only Indexer',
    sub: 'No custody · no keys · no deposits',
    tag: { variant: 'in-build' as const, label: 'In Build' },
    color: '#2F80ED',
    icon: '◈',
  },
  {
    id: 'passport',
    layer: 'Core',
    label: 'Trader Passport',
    sub: 'Public profile · Fundoria Score · Grade',
    tag: { variant: 'alpha' as const, label: 'Alpha' },
    color: '#2F80ED',
    icon: '⬛',
  },
  {
    id: 'social',
    layer: 'Social',
    label: 'Social Layer',
    sub: 'Rankings · Badges · Follow · Feed',
    tag: { variant: 'coming-soon' as const, label: 'Coming Soon' },
    color: '#38BDF8',
    icon: '◎',
  },
  {
    id: 'capital',
    layer: 'Capital',
    label: 'Capital Discovery',
    sub: 'Allocator watchlists · Verified signals',
    tag: { variant: 'planned' as const, label: 'Planned' },
    color: '#A78BFA',
    icon: '◇',
  },
  {
    id: 'vaults',
    layer: 'Future',
    label: 'Vault Layer',
    sub: 'Eligibility-based · Mandate-gated · Future',
    tag: { variant: 'future' as const, label: 'Future Layer' },
    color: '#4A6484',
    icon: '△',
  },
];

const stats = [
  { value: '1000', label: 'Score Range' },
  { value: '10',   label: 'Score Dimensions' },
  { value: '$0',   label: 'Custody — Read-Only MVP' },
];

const CONN_COLOR = 'rgba(47,128,237,0.25)';

function ArchLine({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="w-px h-6 mx-auto origin-top"
      style={{ background: `linear-gradient(180deg, ${CONN_COLOR} 0%, transparent 100%)` }}
    />
  );
}

export default function Solution() {
  return (
    <section
      id="solution"
      className="py-28 md:py-36 border-t border-protocol-border bg-protocol-accent-bg px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start mb-16">
          <SectionHeader
            eyebrow="The Solution"
            title={
              <>
                A Social Reputation Layer<br />
                <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">
                  for Traders and Capital.
                </span>
              </>
            }
            subtitle="Fundoria converts Hyperliquid wallet activity into public trader profiles, risk-adjusted scores, rankings, badges, AI reviews, and future capital-access workflows."
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 pt-2"
          >
            <p className="text-protocol-text font-mono text-[13px] italic border-l-2 border-blue/40 pl-4">
              "Your wallet becomes your trading resume."
            </p>
            <div className="grid grid-cols-3 gap-px bg-protocol-border border border-protocol-border">
              {stats.map((s, i) => (
                <div key={i} className="bg-protocol-bg px-4 py-5 flex flex-col items-center gap-1.5">
                  <div className="font-display text-[clamp(22px,3vw,32px)] text-blue leading-none">{s.value}</div>
                  <div className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/60 text-center leading-relaxed">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Architecture Flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header bar */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-protocol-border" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/40">
              Protocol Stack
            </span>
            <div className="h-px flex-1 bg-protocol-border" />
          </div>

          {/* Desktop: horizontal flow */}
          <div className="hidden md:block">
            <div className="grid grid-cols-6 gap-3">
              {archNodes.map((node, i) => (
                <div key={node.id} className="flex flex-col items-stretch">
                  {/* Layer label */}
                  <div className="font-mono text-[7px] uppercase tracking-[0.3em] text-protocol-text-dim/30 mb-2 text-center">
                    {node.layer}
                  </div>

                  {/* Node card */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 relative border border-protocol-border bg-protocol-bg hover:border-blue/30 transition-colors duration-300 p-3 flex flex-col gap-2 group overflow-hidden"
                  >
                    {/* Top accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(90deg, transparent, ${node.color}, transparent)` }}
                    />

                    {/* Icon */}
                    <div
                      className="font-mono text-[16px] leading-none"
                      style={{ color: node.color, opacity: 0.6 }}
                    >
                      {node.icon}
                    </div>

                    <div>
                      <div className="font-mono text-[10px] font-black uppercase tracking-wide text-protocol-text group-hover:text-blue transition-colors leading-tight mb-1">
                        {node.label}
                      </div>
                      <div className="font-mono text-[8px] text-protocol-text-dim/40 leading-relaxed">
                        {node.sub}
                      </div>
                    </div>

                    <StatusTag variant={node.tag.variant} label={node.tag.label} pulse={node.tag.variant === 'live' || node.tag.variant === 'alpha'} />

                    {/* Arrow connector */}
                    {i < archNodes.length - 1 && (
                      <div
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 font-mono text-[10px] hidden lg:block"
                        style={{ color: CONN_COLOR }}
                      >
                        →
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Connecting line */}
            <div className="mt-3 h-px bg-linear-to-r from-transparent via-protocol-border to-transparent" />
          </div>

          {/* Mobile: vertical flow */}
          <div className="md:hidden space-y-0">
            {archNodes.map((node, i) => (
              <div key={node.id}>
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 border border-protocol-border bg-protocol-bg p-4 relative group hover:border-blue/30 transition-colors"
                >
                  <div
                    className="font-mono text-[18px] leading-none shrink-0 pt-0.5"
                    style={{ color: node.color, opacity: 0.7 }}
                  >
                    {node.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[7px] uppercase tracking-[0.3em] text-protocol-text-dim/30 mb-0.5">
                      {node.layer}
                    </div>
                    <div className="font-mono text-[11px] font-black uppercase text-protocol-text mb-1">
                      {node.label}
                    </div>
                    <div className="font-mono text-[9px] text-protocol-text-dim/50 mb-2">{node.sub}</div>
                    <StatusTag variant={node.tag.variant} label={node.tag.label} pulse={node.tag.variant === 'live' || node.tag.variant === 'alpha'} />
                  </div>
                </motion.div>
                {i < archNodes.length - 1 && <ArchLine delay={0.05 + i * 0.07} />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Disclosure */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 border border-protocol-border/30 px-5 py-3 bg-protocol-bg/50"
        >
          <p className="font-mono text-[9px] text-protocol-text-dim/40 uppercase tracking-wider leading-relaxed">
            <span className="text-blue/50 font-bold">[READ-ONLY MVP]</span>
            {' '}Fundoria does not custody funds, execute trades, or accept deposits.
            Capital access and vault features are future layers subject to legal, technical, and operational constraints.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
