import { motion } from 'motion/react';
import PassportCard from './ui/PassportCard';
import ScoreBreakdownCard from './ui/ScoreBreakdownCard';
import CTAButton from './ui/CTAButton';

const features = [
  'Performance score and grade (1–1000)',
  'PnL curve and maximum drawdown',
  'Badges for consistency and discipline',
  'Ranking percentile and watchlist count',
  'Public profile for capital discovery',
  'No self-reporting — on-chain only',
  'Future eligibility for non-custodial capital routes',
];

export default function PassportSection() {
  const scrollToWhitelist = () => {
    const el = document.getElementById('whitelist');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="passport"
      className="bg-protocol-bg border-t border-protocol-border py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[9px] tracking-[0.4em] text-blue uppercase mb-4">
              The Trader Passport
            </p>

            <h2
              className="font-display uppercase tracking-[-0.02em] text-protocol-text mb-5"
              style={{ fontSize: 'clamp(32px, 5vw, 62px)' }}
            >
              <span className="block">YOUR TRADING RECORD.</span>
              <span className="block bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
                MADE PUBLIC.
              </span>
            </h2>

            <p className="font-sans text-[15px] text-protocol-text-dim leading-[1.75] mb-4">
              A public reputation profile built entirely from live Hyperliquid on-chain
              activity. No self-reporting. No screenshots. No manipulation — just verified
              performance converted into a structured public record.
            </p>
            <p className="font-sans text-[13px] text-protocol-text-dim/70 leading-[1.75] mb-8">
              Every metric is derived from wallet-verified on-chain activity. No human
              curation, no platform bias, no ability to cherry-pick results.
            </p>

            {/* Feature bullets */}
            <ul className="space-y-3 mb-10">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3 font-mono text-[11px] text-protocol-text"
                >
                  <span
                    className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                    style={{
                      background: i % 2 === 0 ? '#2F80ED' : '#00C896',
                    }}
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <CTAButton variant="secondary" onClick={scrollToWhitelist}>
              Join Whitelist for Early Access
            </CTAButton>
          </motion.div>

          {/* Right column — stacked prototype cards */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <PassportCard className="w-full max-w-sm" />
            <ScoreBreakdownCard className="w-full max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
