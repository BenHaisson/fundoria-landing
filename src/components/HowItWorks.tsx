import { motion } from 'motion/react';
import SectionHeader from './ui/SectionHeader';
import DisclosureBox from './ui/DisclosureBox';

const steps = [
  {
    num: '01',
    title: 'Trader Verifies Skill',
    desc: 'Connect a Hyperliquid wallet. The protocol indexes on-chain activity — no self-reporting, no screenshots.',
    color: '#2F80ED',
    icon: '◈',
    tag: 'Read-Only',
  },
  {
    num: '02',
    title: 'Risk Profile Created',
    desc: 'Fundoria Score is calculated across 10 dimensions — performance, drawdown, consistency, survival rate, and more.',
    color: '#00C896',
    icon: '◎',
    tag: 'Automated',
  },
  {
    num: '03',
    title: 'Capital Provider Deposits',
    desc: 'A capital provider deposits into a mandate-specific smart vault. Non-custodial. No key access to trader.',
    color: '#2F80ED',
    icon: '◇',
    tag: 'Future Layer',
  },
  {
    num: '04',
    title: 'Vault Allocates Capital',
    desc: 'The vault allocates according to the mandate — defined allocation size, risk limits, and execution scope.',
    color: '#00C896',
    icon: '⬡',
    tag: 'Future Layer',
  },
  {
    num: '05',
    title: 'Trader Executes on Hyperliquid',
    desc: 'The verified trader executes within their risk bounds. All activity is public and on-chain.',
    color: '#2F80ED',
    icon: '▶',
    tag: 'On-Chain',
  },
  {
    num: '06',
    title: 'Risk Engine Monitors Limits',
    desc: 'Automated risk enforcement monitors drawdown, position size, and mandate compliance in real time.',
    color: '#FB923C',
    icon: '⚡',
    tag: 'Enforced by Code',
  },
  {
    num: '07',
    title: 'Performance Checkpointed',
    desc: 'Periodic on-chain attestations record verifiable performance snapshots — immutable, tamper-proof.',
    color: '#00C896',
    icon: '◉',
    tag: 'On-Chain Proof',
  },
  {
    num: '08',
    title: 'Transparent Reporting',
    desc: 'Capital providers receive full performance visibility — no opaque dashboards, no trust assumptions.',
    color: '#2F80ED',
    icon: '▣',
    tag: 'Audit-Ready',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-accent-bg px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="How It Works"
          centered
          title={
            <>
              Eight Steps.<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">
                From Skill to Capital.
              </span>
            </>
          }
          subtitle="The full protocol journey — from a trader's first wallet connection to transparent on-chain reporting for capital providers."
        />

        {/* Desktop: 4-col grid, two rows */}
        <div className="hidden md:grid grid-cols-4 gap-4 mb-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-protocol-border bg-protocol-bg hover:border-blue/30 transition-colors duration-300 p-5 overflow-hidden"
            >
              {/* Step number watermark */}
              <div className="absolute -bottom-1 -right-1 font-display text-[52px] leading-none text-protocol-border select-none pointer-events-none">
                {step.num}
              </div>

              {/* Icon */}
              <div className="text-[20px] leading-none mb-3" style={{ color: step.color, opacity: 0.7 }}>
                {step.icon}
              </div>

              {/* Tag */}
              <div className="font-mono text-[7px] uppercase tracking-[0.3em] mb-2" style={{ color: step.color, opacity: 0.6 }}>
                {step.tag}
              </div>

              <h3 className="font-mono text-[11px] font-black uppercase tracking-wide text-protocol-text group-hover:text-blue transition-colors mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-[12px] text-protocol-text-dim leading-relaxed relative z-10">
                {step.desc}
              </p>

              {/* Top line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${step.color}60, transparent)` }}
              />

              {/* Step connector arrow */}
              {i % 4 < 3 && (
                <div
                  className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 font-mono text-[10px] text-protocol-border/60"
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stacked */}
        <div className="md:hidden space-y-3 mb-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4 border border-protocol-border bg-protocol-bg p-4"
            >
              <div
                className="font-display text-[24px] leading-none shrink-0 pt-0.5"
                style={{ color: step.color, opacity: 0.4 }}
              >
                {step.num}
              </div>
              <div>
                <div
                  className="font-mono text-[7px] uppercase tracking-[0.3em] mb-1"
                  style={{ color: step.color, opacity: 0.6 }}
                >
                  {step.tag}
                </div>
                <h3 className="font-mono text-[11px] font-black uppercase tracking-wide text-protocol-text mb-1">
                  {step.title}
                </h3>
                <p className="text-[12px] text-protocol-text-dim leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <DisclosureBox label="FUTURE LAYERS">
          Steps 3–8 (vault deposit, allocation, risk enforcement, and on-chain checkpointing) are future protocol layers currently in research and design. Steps 1–2 (wallet indexing and Fundoria Score) are the active MVP. No funds are custodied, deposited, or managed by Fundoria at this stage.
        </DisclosureBox>
      </div>
    </section>
  );
}
