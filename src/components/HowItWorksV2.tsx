import { motion } from 'motion/react';
import { Wallet, Cpu, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'CONNECT + TRACK',
    body: 'Fundoria indexes your Hyperliquid activity and maps it to a wallet-verified trader identity.',
    Icon: Wallet,
  },
  {
    number: '02',
    title: 'SCORE + VERIFY',
    body: 'Performance, consistency, drawdown, and risk behavior are converted into a reputation score across 10 dimensions.',
    Icon: Cpu,
  },
  {
    number: '03',
    title: 'DISCOVER + ALLOCATE',
    body: 'Capital providers discover traders through public profiles. Skilled traders become eligible for future vault allocation.',
    Icon: TrendingUp,
  },
];

export default function HowItWorksV2() {
  return (
    <section
      id="how-it-works"
      className="bg-protocol-accent-bg border-t border-protocol-border py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[9px] tracking-[0.4em] text-blue uppercase mb-4">
            How It Works
          </p>
          <h2
            className="font-display uppercase tracking-[-0.02em] text-protocol-text"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            FROM ACTIVITY TO REPUTATION
          </h2>
        </motion.div>

        {/* Steps — desktop: row with arrows, mobile: vertical */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[72px] left-[calc(16.66%+2px)] right-[calc(16.66%+2px)] h-[1px] bg-protocol-border/60" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map(({ number, title, body, Icon }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col"
              >
                {/* Mobile connecting line */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute left-[27px] top-[56px] w-[1px] h-[calc(100%+2rem)] bg-protocol-border/40"
                    aria-hidden="true"
                  />
                )}

                {/* Step number (decorative) */}
                <div className="font-display text-[56px] text-blue/15 leading-none mb-2 select-none">
                  {number}
                </div>

                {/* Icon */}
                <Icon size={20} className="text-blue mb-3" />

                {/* Title */}
                <h3 className="font-display text-[16px] uppercase tracking-[-0.01em] text-protocol-text mb-2">
                  {title}
                </h3>

                {/* Body */}
                <p className="text-[13px] text-protocol-text-dim leading-[1.7]">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
