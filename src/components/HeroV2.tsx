import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import PassportCard from './ui/PassportCard';

interface HeroV2Props {
  onOpenWhitelist?: () => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HeroV2({ onOpenWhitelist }: HeroV2Props) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative bg-protocol-bg pt-[132px] pb-20 md:pt-[150px] md:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
              <span className="relative flex h-[8px] w-[8px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-blue" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-blue">
                Hyperliquid Trader Reputation Network
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="font-display uppercase leading-[0.95] tracking-[-0.03em] mb-4"
              style={{ fontSize: 'clamp(42px, 7vw, 96px)' }}
            >
              <span className="block text-protocol-text">TRADER</span>
              <span className="block text-protocol-text">REPUTATION</span>
              <span className="block bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
                NETWORK
              </span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-[11px] text-protocol-text-dim/70 uppercase tracking-[0.2em] mt-2 mb-6"
            >
              for Verified Hyperliquid Performance
            </motion.p>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-[15px] text-protocol-text-dim leading-[1.75] max-w-[480px] mb-8"
            >
              Fundoria turns live Hyperliquid trading activity into a public Trader Passport —
              giving traders a verified reputation score, grade, PnL curve, badges, and
              ranking, and giving capital providers a structured way to discover skill.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4"
            >
              <CTAButton
                variant="primary"
                size="lg"
                onClick={onOpenWhitelist}
              >
                Join Early Access
              </CTAButton>

              <CTAButton
                variant="secondary"
                size="lg"
                onClick={() => scrollTo('passport')}
              >
                View Trader Passport
              </CTAButton>

              <button
                onClick={() => scrollTo('protocol')}
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-protocol-text-dim hover:text-protocol-text transition-colors cursor-pointer px-2"
              >
                Read Protocol
                <ArrowRight size={12} />
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-[9px] text-protocol-text-dim/40"
            >
              Read-only MVP · No custody · No deposits · Pre-launch alpha
            </motion.p>
          </motion.div>

          {/* Right column — PassportCard with float animation */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-sm"
            >
              <PassportCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
