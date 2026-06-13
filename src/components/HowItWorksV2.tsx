import { motion } from 'motion/react';
import { Wallet, Cpu, IdCard, TrendingUp } from 'lucide-react';
import ScoreBreakdownCard from './ui/ScoreBreakdownCard';

const steps = [
  {
    number: '01',
    title: 'TRACK HYPERLIQUID ACTIVITY',
    body: 'Fundoria indexes public Hyperliquid trading activity and maps it to a wallet-verified trader identity.',
    Icon: Wallet,
  },
  {
    number: '02',
    title: 'SCORE PERFORMANCE AND RISK',
    body: 'Trading behavior is converted into reputation signals across performance, consistency, drawdown, discipline, and risk-adjusted execution.',
    Icon: Cpu,
  },
  {
    number: '03',
    title: 'BUILD A PUBLIC PASSPORT',
    body: 'Traders receive a public profile with score, grade, badges, PnL curve, ranking, and watchlist visibility.',
    Icon: IdCard,
  },
  {
    number: '04',
    title: 'BECOME DISCOVERABLE',
    body: 'Capital providers can discover verified traders through transparent profiles, structured filters, and future vault eligibility.',
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
            <span className="block">FROM ACTIVITY</span>
            <span className="block text-protocol-text-dim/70">TO REPUTATION</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-20">
          {steps.map(({ number, title, body, Icon }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col"
            >
              {/* Mobile connecting line */}
              {i < steps.length - 1 && (
                <div
                  className="sm:hidden absolute left-[27px] top-[56px] w-[1px] h-[calc(100%+2rem)] bg-protocol-border/40"
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
              <h3 className="font-display text-[15px] uppercase tracking-[-0.01em] text-protocol-text mb-2">
                {title}
              </h3>

              {/* Body */}
              <p className="text-[13px] text-protocol-text-dim leading-[1.7]">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Score Model ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left — explanation */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.4em] text-blue uppercase mb-4">
              The Score Model
            </p>
            <h3
              className="font-display uppercase tracking-[-0.02em] text-protocol-text mb-5"
              style={{ fontSize: 'clamp(22px, 3.5vw, 36px)' }}
            >
              HOW FUNDORIA CONVERTS ACTIVITY INTO REPUTATION
            </h3>
            <p className="font-sans text-[14px] text-protocol-text-dim leading-[1.75] mb-4">
              The Fundoria Score is built across five core dimensions — each derived entirely
              from verified on-chain behavior to produce a 1–1000 reputation signal.
            </p>
            <p className="font-sans text-[13px] text-protocol-text-dim/60 leading-[1.75]">
              No self-reporting. No cherry-picked timeframes. No manual overrides.
            </p>
          </div>

          {/* Right — ScoreBreakdownCard */}
          <div className="flex justify-center lg:justify-end">
            <ScoreBreakdownCard className="w-full max-w-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
