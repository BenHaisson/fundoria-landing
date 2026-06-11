import { motion } from 'motion/react';
import SectionHeader from './ui/SectionHeader';
import StatusTag from './ui/StatusTag';
import DisclosureBox from './ui/DisclosureBox';

const protocolFlow = [
  {
    id: 'capital-provider',
    label: 'Capital Provider',
    sub: 'Deposits into mandate-gated vault',
    icon: '◇',
    color: '#A78BFA',
    tagVariant: 'planned' as const,
    tagLabel: 'Future',
  },
  {
    id: 'smart-vault',
    label: 'Smart Vault',
    sub: 'Non-custodial · mandate-enforced',
    icon: '⬡',
    color: '#2F80ED',
    tagVariant: 'research' as const,
    tagLabel: 'In Design',
  },
  {
    id: 'risk-engine',
    label: 'Risk Engine',
    sub: 'Monitors limits · enforces rules',
    icon: '⚡',
    color: '#FB923C',
    tagVariant: 'research' as const,
    tagLabel: 'In Design',
  },
  {
    id: 'verified-trader',
    label: 'Verified Trader',
    sub: 'Executes within protocol bounds',
    icon: '◈',
    color: '#00C896',
    tagVariant: 'in-build' as const,
    tagLabel: 'In Build',
  },
  {
    id: 'hyperliquid',
    label: 'Hyperliquid',
    sub: 'On-chain trade execution',
    icon: '▶',
    color: '#00C896',
    tagVariant: 'live' as const,
    tagLabel: 'Live',
  },
  {
    id: 'onchain-proof',
    label: 'On-chain Proof',
    sub: 'Performance attestation · audit-ready',
    icon: '◉',
    color: '#2F80ED',
    tagVariant: 'planned' as const,
    tagLabel: 'Future',
  },
];

const stats = [
  { value: '1000', label: 'Score Range' },
  { value: '10',   label: 'Score Dimensions' },
  { value: '$0',   label: 'Custody — Read-Only MVP' },
];

function ConnectorArrow({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="hidden lg:flex items-center justify-center w-6 shrink-0 origin-left"
    >
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
        <path d="M0 5H16M16 5L11 1M16 5L11 9" stroke="rgba(47,128,237,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}

export default function Solution() {
  return (
    <section
      id="solution"
      className="py-28 md:py-36 border-t border-protocol-border bg-protocol-accent-bg px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header + stats */}
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
            subtitle="Fundoria converts Hyperliquid wallet activity into public trader profiles, risk-adjusted scores, rankings, and future programmable capital-access workflows."
            className="mb-0"
          />

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
                  <div className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/60 text-center leading-relaxed">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Protocol Architecture Flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-protocol-border" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/40">
              Future Protocol Architecture
            </span>
            <div className="h-px flex-1 bg-protocol-border" />
          </div>
          <p className="font-mono text-[8px] text-protocol-text-dim/30 uppercase tracking-wider text-center mb-5">
            Full capital layer — subject to legal, security, and technical review · not yet deployed
          </p>

          {/* Desktop: horizontal flow with arrows */}
          <div className="hidden lg:flex items-stretch gap-0 mb-4">
            {protocolFlow.map((node, i) => (
              <div key={node.id} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative border border-protocol-border bg-protocol-bg hover:border-blue/30 transition-colors duration-300 p-4 flex flex-col gap-2 overflow-hidden w-[160px] shrink-0"
                  style={{ minHeight: '140px' }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${node.color}, transparent)` }}
                  />
                  <div className="font-mono text-[18px] leading-none" style={{ color: node.color, opacity: 0.6 }}>
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
                  <StatusTag
                    variant={node.tagVariant}
                    label={node.tagLabel}
                    pulse={node.tagVariant === 'live' || node.tagVariant === 'in-build'}
                  />
                </motion.div>
                {i < protocolFlow.length - 1 && <ConnectorArrow index={i} />}
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="lg:hidden space-y-0 mb-4">
            {protocolFlow.map((node, i) => (
              <div key={node.id}>
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 border border-protocol-border bg-protocol-bg p-4 hover:border-blue/30 transition-colors group"
                >
                  <div className="font-mono text-[20px] leading-none shrink-0 pt-0.5" style={{ color: node.color, opacity: 0.7 }}>
                    {node.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[11px] font-black uppercase text-protocol-text mb-0.5">{node.label}</div>
                    <div className="font-mono text-[9px] text-protocol-text-dim/50 mb-2">{node.sub}</div>
                    <StatusTag
                      variant={node.tagVariant}
                      label={node.tagLabel}
                      pulse={node.tagVariant === 'live' || node.tagVariant === 'in-build'}
                    />
                  </div>
                </motion.div>
                {i < protocolFlow.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.07 }}
                    className="w-px h-6 mx-auto origin-top"
                    style={{ background: 'linear-gradient(180deg, rgba(47,128,237,0.3) 0%, transparent 100%)' }}
                  />
                )}
              </div>
            ))}
          </div>

          <DisclosureBox label="READ-ONLY MVP">
            Fundoria does not custody funds, execute trades, or accept deposits.
            Smart vault, risk engine, and on-chain proof layers are future protocol phases currently in research and design.
          </DisclosureBox>
        </motion.div>
      </div>
    </section>
  );
}
