import { motion } from 'motion/react';
import { User, Star, Award, BarChart2, Zap, Globe } from 'lucide-react';
import CTAButton from './ui/CTAButton';

interface ForTradersV2Props {
  onOpenWhitelist?: () => void;
}

const features = [
  {
    Icon: User,
    title: 'Public Trader Resume',
    body: 'Your wallet becomes your trading resume — visible to capital providers worldwide.',
  },
  {
    Icon: Star,
    title: 'Reputation Score',
    body: 'A 1-1000 score built from 10 performance dimensions — not just PnL.',
  },
  {
    Icon: Award,
    title: 'Performance Badges',
    body: 'Earn verified badges for consistency, drawdown control, momentum, and survival rate.',
  },
  {
    Icon: BarChart2,
    title: 'Leaderboard Visibility',
    body: 'Rank among Hyperliquid traders and get discovered by capital looking for skill.',
  },
  {
    Icon: Zap,
    title: 'Future Capital Eligibility',
    body: 'High-scoring traders become eligible for non-custodial vault allocation in future protocol phases.',
  },
  {
    Icon: Globe,
    title: 'Portable Identity',
    body: 'Your passport travels with you across campaigns, competitions, and future protocol integrations.',
  },
];

export default function ForTradersV2({ onOpenWhitelist }: ForTradersV2Props) {
  return (
    <section
      id="traders"
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
            For Traders
          </p>
          <h2
            className="font-display uppercase tracking-[-0.02em] text-protocol-text mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            BUILD STATUS BEFORE CAPITAL.
          </h2>
          <p className="font-sans text-[15px] text-protocol-text-dim leading-[1.75] max-w-2xl">
            Fundoria helps traders turn skill into a visible, portable track record. No
            gatekeepers. No self-reporting. Just verifiable performance.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {features.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-protocol-border bg-protocol-accent-bg p-5 hover:border-blue/25 transition-all duration-300"
            >
              <Icon size={16} className="text-blue mb-3" />
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
          <CTAButton variant="primary" size="lg" onClick={onOpenWhitelist}>
            Create Your Passport at Launch
          </CTAButton>
          <p className="font-mono text-[9px] text-protocol-text-dim/40">
            Pre-launch · Join whitelist for early access
          </p>
        </motion.div>
      </div>
    </section>
  );
}
