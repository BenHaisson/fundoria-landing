import { motion } from 'motion/react';
import { SlidersHorizontal, Bookmark, History, Lock } from 'lucide-react';
import CTAButton from './ui/CTAButton';

interface ForCapitalV2Props {
  onOpenWhitelist?: () => void;
}

const features = [
  {
    Icon: SlidersHorizontal,
    title: 'Score-Based Filtering',
    body: 'Filter traders by grade, score, drawdown profile, and strategy behavior — not just PnL.',
    future: false,
  },
  {
    Icon: Bookmark,
    title: 'Watchlist Traders',
    body: "Save and monitor traders you're evaluating. Track their reputation over time.",
    future: false,
  },
  {
    Icon: History,
    title: 'Public Performance History',
    body: 'Review verified on-chain performance history before considering any allocation.',
    future: false,
  },
  {
    Icon: Lock,
    title: 'Future Non-Custodial Allocation',
    body: 'Prepare for future protocol phases where capital routes to verified traders through mandate-enforced smart vaults.',
    future: true,
  },
];

export default function ForCapitalV2({ onOpenWhitelist }: ForCapitalV2Props) {
  return (
    <section
      id="capital"
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
            For Capital Providers
          </p>
          <h2
            className="font-display uppercase tracking-[-0.02em] text-protocol-text mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            DISCOVER VERIFIED TRADING TALENT.
          </h2>
          <p className="font-sans text-[15px] text-protocol-text-dim leading-[1.75] max-w-2xl">
            Capital providers need more than screenshots and private referrals. Fundoria
            creates a structured discovery layer for evaluating trader skill, consistency,
            and risk behavior.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {features.map(({ Icon, title, body, future }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-protocol-border bg-protocol-accent-bg p-5 hover:border-blue/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <Icon size={16} className="text-blue" />
                {future && (
                  <span className="font-mono text-[8px] border border-amber-400/30 bg-amber-400/5 text-amber-400 px-2 py-0.5 uppercase tracking-widest">
                    Future Layer
                  </span>
                )}
              </div>
              <h3 className="font-display text-[15px] tracking-[-0.01em] text-protocol-text mb-1.5">
                {title}
              </h3>
              <p className="text-[12px] text-protocol-text-dim leading-[1.7]">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <CTAButton variant="secondary" size="lg" onClick={onOpenWhitelist}>
            Pre-Register Capital Interest
          </CTAButton>
          <p className="font-mono text-[9px] text-protocol-text-dim/40">
            No custody. No deposits. Eligibility-based allocation only. · Future protocol layer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
