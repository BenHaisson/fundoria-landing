import { motion } from 'motion/react';

interface ProtocolBlock {
  number: string;
  title: string;
  dotColor: string;
  status: string;
  statusVariant: 'build' | 'design' | 'future';
  body: string;
}

const blocks: ProtocolBlock[] = [
  {
    number: '01',
    title: 'IDENTITY LAYER',
    dotColor: '#2F80ED',
    status: 'In Build',
    statusVariant: 'build',
    body: 'Wallet-verified trader identity anchored to live Hyperliquid on-chain activity — no manual claims, no self-reporting.',
  },
  {
    number: '02',
    title: 'REPUTATION INDEXER',
    dotColor: '#2F80ED',
    status: 'In Build',
    statusVariant: 'build',
    body: '10-dimension scoring engine computing performance, consistency, drawdown, discipline, and risk-adjusted signals from on-chain data.',
  },
  {
    number: '03',
    title: 'RISK ENGINE',
    dotColor: '#F59E0B',
    status: 'In Design',
    statusVariant: 'design',
    body: 'Protocol-level risk parameters and mandate enforcement designed for future non-custodial allocation — in early design phase.',
  },
  {
    number: '04',
    title: 'SMART VAULTS',
    dotColor: '#A78BFA',
    status: 'Future',
    statusVariant: 'future',
    body: 'Future HyperEVM-native vaults for non-custodial capital routing with on-chain settlement. Not yet live. No deposits accepted.',
  },
];

function StatusTag({ variant, label }: { variant: 'build' | 'design' | 'future'; label: string }) {
  const styles: Record<string, string> = {
    build: 'text-blue border-blue/30 bg-blue/5',
    design: 'text-amber-400 border-amber-400/30 bg-amber-400/5',
    future: 'text-protocol-text-dim/60 border-protocol-border bg-transparent',
  };
  return (
    <span
      className={`inline-flex font-mono text-[8px] border px-2 py-0.5 uppercase tracking-widest ${styles[variant]}`}
    >
      {label}
    </span>
  );
}

export default function ProtocolSection() {
  return (
    <section
      id="protocol"
      className="bg-protocol-bg border-t border-protocol-border py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-[9px] tracking-[0.4em] text-blue uppercase mb-4">
            The Protocol Layer
          </p>
          <h2
            className="font-display uppercase tracking-[-0.02em] text-protocol-text mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            <span className="block">REPUTATION FIRST.</span>
            <span className="block bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
              CAPITAL LATER.
            </span>
          </h2>
          <p className="font-sans text-[15px] text-protocol-text-dim leading-[1.75] max-w-2xl mb-3">
            Fundoria starts with public trader reputation and expands toward a programmable
            capital layer — built on Hyperliquid and HyperEVM, with deterministic risk
            limits and mandate-enforced allocation.
          </p>
          <p className="font-sans text-[13px] text-protocol-text-dim/60 leading-[1.75] max-w-2xl">
            Smart vaults and capital routing are future research phases. The current MVP is
            read-only — no custody, no deposits, no active capital flows.
          </p>
        </motion.div>

        {/* Protocol blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {blocks.map(({ number, title, dotColor, status, statusVariant, body }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-protocol-border bg-protocol-accent-bg p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                    style={{ backgroundColor: dotColor }}
                  />
                  <span className="font-mono text-[9px] text-protocol-text-dim/40 uppercase tracking-[0.3em]">
                    {number}
                  </span>
                </div>
                <StatusTag variant={statusVariant} label={status} />
              </div>
              <h3 className="font-display text-[15px] uppercase tracking-[-0.01em] text-protocol-text mb-1.5">
                {title}
              </h3>
              <p className="text-[12px] text-protocol-text-dim leading-[1.65]">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclosure box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border border-protocol-border/30 bg-blue/[0.02] px-4 py-3"
        >
          <p className="font-mono text-[10px] text-protocol-text-dim/50">
            [READ-ONLY MVP] · Fundoria does not custody funds, accept deposits, or execute
            trades. Smart vaults are a future research phase and are not deployed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
