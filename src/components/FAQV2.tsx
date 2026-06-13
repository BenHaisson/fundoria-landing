import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is Fundoria?',
    a: 'Fundoria is a Hyperliquid Trader Reputation Network. It turns live Hyperliquid trading activity into a public Trader Passport with a reputation score, grade, PnL curve, badges, ranking, and future capital eligibility.',
  },
  {
    q: 'What is a Trader Passport?',
    a: 'A Trader Passport is a public reputation profile generated from Hyperliquid trading activity. It helps traders prove performance, show discipline, build ranking, and become discoverable by capital providers.',
  },
  {
    q: 'Is Fundoria a prop firm?',
    a: 'No. Fundoria is not a prop firm and does not run trader challenges, custody capital, or profit from trader losses. Fundoria is a reputation and discovery infrastructure layer.',
  },
  {
    q: 'Does Fundoria custody funds?',
    a: 'No. The current MVP is read-only. Fundoria does not custody funds, accept deposits, execute trades, or manage user assets.',
  },
  {
    q: 'Is Fundoria only for Hyperliquid traders?',
    a: 'The first phase is focused on Hyperliquid traders because Hyperliquid provides the activity data needed for verified trader reputation. Future integrations may expand beyond Hyperliquid.',
  },
  {
    q: 'How is performance verified?',
    a: 'Fundoria indexes public Hyperliquid trading activity and converts it into structured reputation signals. The goal is to reduce reliance on screenshots, manual claims, and private referrals.',
  },
  {
    q: 'What is the Fundoria Score?',
    a: 'The Fundoria Score is a planned 1–1000 reputation score based on performance, consistency, drawdown behavior, risk discipline, and other trader reputation signals.',
  },
  {
    q: 'Can capital providers allocate funds now?',
    a: 'No. Capital allocation is not live. Capital providers can join the waitlist to follow product updates and future discovery tools.',
  },
  {
    q: 'Are smart vaults live?',
    a: 'No. Smart vaults are a future protocol layer. The current phase focuses on trader reputation, public profiles, scoring, and discovery infrastructure.',
  },
  {
    q: 'Is there a token sale or ICO?',
    a: 'No token sale or ICO is being promoted on this landing page. Fundoria is focused on product development, trader reputation, whitelist onboarding, and protocol infrastructure.',
  },
  {
    q: 'When can I create a Trader Passport?',
    a: 'Trader Passport creation is planned for an upcoming alpha release. Join the whitelist to receive early access updates.',
  },
  {
    q: 'Who should join the whitelist?',
    a: 'Hyperliquid traders, capital providers, builders, researchers, and ecosystem contributors who want early access to Fundoria\'s reputation and discovery tools.',
  },
];

export default function FAQV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="bg-protocol-bg border-t border-protocol-border py-20 md:py-28"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-[9px] tracking-[0.4em] text-blue uppercase mb-4">
            FAQ
          </p>
          <h2
            className="font-display uppercase tracking-[-0.02em] text-protocol-text"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            COMMON QUESTIONS.
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div>
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
              className="border-b border-protocol-border/40"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full py-4 flex items-center justify-between gap-4 text-left cursor-pointer group"
                aria-expanded={openIndex === i}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-protocol-text/80 group-hover:text-protocol-text transition-colors duration-200">
                  {q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-protocol-text-dim/50"
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-[13px] text-protocol-text-dim leading-[1.75] pb-4">
                      {a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
