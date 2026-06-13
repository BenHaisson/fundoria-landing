import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is Fundoria?',
    a: 'Fundoria is a Hyperliquid Trader Reputation Network. It indexes live on-chain trading activity and converts it into a public Trader Passport with a score, grade, badges, PnL curve, and ranking.',
  },
  {
    q: 'Is Fundoria a prop firm?',
    a: 'No. Fundoria does not deploy capital, run prop trading operations, or profit from trader losses. It is a reputation and discovery infrastructure layer.',
  },
  {
    q: 'What is a Trader Passport?',
    a: 'A Trader Passport is a public reputation profile generated from your Hyperliquid on-chain activity. It includes your score, grade, performance history, badges, and ranking.',
  },
  {
    q: 'Does Fundoria custody funds?',
    a: 'No. The MVP is read-only and does not custody funds, accept deposits, or execute trades. The smart vault layer is a future protocol phase.',
  },
  {
    q: 'Is this only for Hyperliquid traders?',
    a: 'Yes, in the initial phase. Fundoria is built natively on Hyperliquid and HyperEVM. Support for other chains may be explored in future phases.',
  },
  {
    q: 'How is performance verified?',
    a: 'Performance is indexed directly from Hyperliquid on-chain data — no self-reporting, no screenshots, no manual submissions. Verification is automatic and tamper-proof.',
  },
  {
    q: 'When can I create a passport?',
    a: 'Trader Passport creation is planned for an upcoming alpha release. Join the whitelist to be notified when it opens.',
  },
  {
    q: 'What can capital providers do?',
    a: 'Capital providers can discover verified traders through public profiles, score-based filtering, and watchlists. Direct vault allocation is a future protocol phase.',
  },
  {
    q: 'Is there a token sale or ICO?',
    a: 'No token sale or ICO is being promoted on this landing page. Fundoria is focused on product development, trader reputation, and whitelist onboarding.',
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
              transition={{ duration: 0.4, delay: i * 0.05 }}
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
