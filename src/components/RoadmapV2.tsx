import { motion } from 'motion/react';

interface Phase {
  number: string;
  name: string;
  status: string;
  statusVariant: 'build' | 'soon' | 'future';
  items: string[];
  active: boolean;
}

const phases: Phase[] = [
  {
    number: '01',
    name: 'REPUTATION LAYER',
    status: 'In Build',
    statusVariant: 'build',
    active: true,
    items: [
      'Public trader passport',
      'Hyperliquid activity indexing',
      'Score and badge model',
      'Whitelist onboarding',
    ],
  },
  {
    number: '02',
    name: 'DISCOVERY LAYER',
    status: 'Coming Soon',
    statusVariant: 'soon',
    active: false,
    items: [
      'Public trader profiles',
      'Watchlists and following',
      'Rankings and leaderboards',
      'Capital provider dashboard',
    ],
  },
  {
    number: '03',
    name: 'VAULT LAYER',
    status: 'Future',
    statusVariant: 'future',
    active: false,
    items: [
      'Smart vault architecture',
      'Risk-gated allocation',
      'Non-custodial capital routes',
      'Protocol governance path',
    ],
  },
];

function StatusTag({
  variant,
  label,
}: {
  variant: 'build' | 'soon' | 'future';
  label: string;
}) {
  const styles: Record<string, string> = {
    build: 'text-blue border-blue/30 bg-blue/5',
    soon: 'text-sky-400 border-sky-400/30 bg-sky-400/5',
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

export default function RoadmapV2() {
  return (
    <section
      id="roadmap"
      className="bg-protocol-accent-bg border-t border-protocol-border py-20 md:py-28"
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
            Roadmap
          </p>
          <h2
            className="font-display uppercase tracking-[-0.02em] text-protocol-text"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            THE PATH TO PROTOCOL.
          </h2>
        </motion.div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {phases.map(({ number, name, status, statusVariant, items, active }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative bg-protocol-accent-bg p-6 transition-all duration-300 ${
                active
                  ? 'border border-blue/25'
                  : 'border border-protocol-border opacity-70'
              }`}
            >
              {/* Top accent line for active phase */}
              {active && (
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, #2F80ED 50%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Phase number + status */}
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[9px] text-protocol-text-dim/40 uppercase tracking-[0.35em]">
                  PHASE {number}
                </span>
                <StatusTag variant={statusVariant} label={status} />
              </div>

              {/* Phase name */}
              <h3 className="font-display text-[20px] uppercase tracking-[-0.01em] text-protocol-text mb-5">
                {name}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span
                      className={`w-[4px] h-[4px] rounded-full flex-shrink-0 ${
                        active ? 'bg-blue' : 'bg-protocol-text-dim/30'
                      }`}
                    />
                    <span className="font-mono text-[11px] text-protocol-text-dim leading-[1.9]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
