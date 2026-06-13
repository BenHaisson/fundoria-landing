import { motion } from 'motion/react';
import { SlidersHorizontal, Bookmark, History, Lock } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import CapitalDiscoveryCard from './ui/CapitalDiscoveryCard';

interface ForCapitalV2Props {
  onOpenWhitelist?: () => void;
}

const features = [
  {
    Icon: SlidersHorizontal,
    title: 'Score-Based Filtering',
    body: 'Filter and compare traders using reputation scores, grades, drawdown profiles, and multi-dimension behavioral signals — not just raw returns.',
    future: false,
  },
  {
    Icon: Bookmark,
    title: 'Watchlist Traders',
    body: 'Save traders to watchlists and monitor how their Fundoria Score and public performance history evolve over time.',
    future: false,
  },
  {
    Icon: History,
    title: 'Public Performance History',
    body: 'Review on-chain verified performance history — including drawdown behavior, consistency periods, and PnL curve — before making any decisions.',
    future: false,
  },
  {
    Icon: Lock,
    title: 'Future Non-Custodial Allocation',
    body: 'Future protocol phases will route capital to score-eligible traders through mandate-enforced smart vaults. Non-custodial. No guarantees. Eligibility-based only.',
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
        {/* Section header — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-[9px] tracking-[0.4em] text-blue uppercase mb-4">
            For Capital Providers
          </p>
          <h2
            className="font-display uppercase tracking-[-0.02em] text-protocol-text mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            <span className="block">DISCOVER VERIFIED</span>
            <span className="block text-protocol-text-dim/70">TRADING TALENT.</span>
          </h2>
          <p className="font-sans text-[15px] text-protocol-text-dim leading-[1.75] max-w-2xl">
            Move beyond screenshots and referral networks. Fundoria creates a structured
            discovery layer for evaluating verified Hyperliquid trader skill, consistency,
            and risk behavior before considering any allocation.
          </p>
        </motion.div>

        {/* Two-column layout: features left, dashboard mockup right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — feature cards + CTA */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map(({ Icon, title, body, future }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
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

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              <CTAButton variant="secondary" size="lg" onClick={onOpenWhitelist}>
                Pre-Register Capital Interest
              </CTAButton>
              <p className="font-mono text-[9px] text-protocol-text-dim/40">
                No custody. No deposits. Discovery and watchlisting only. Future allocation
                routes are non-custodial and not yet live.
              </p>
            </motion.div>
          </div>

          {/* Right — Capital Discovery dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <CapitalDiscoveryCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
