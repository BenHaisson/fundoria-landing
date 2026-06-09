import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'What is Fundoria?',
    a: "Fundoria is a Hyperliquid-native trader intelligence layer. It reads your on-chain wallet activity, structures it into a verified Trader Passport, and computes a Fundoria Score across five dimensions: Performance, Risk Control, Consistency, Discipline, and Survival. The result is a portable, tamper-proof record of your trading track record.",
  },
  {
    q: 'Does Fundoria custody funds?',
    a: 'No. Fundoria is read-only in the MVP. There are no deposits, no wallet connections that grant trading permissions, and no custody of any kind. Your funds stay where they are — Fundoria only reads your on-chain history from Hyperliquid.',
  },
  {
    q: 'Do I need to trade through Fundoria?',
    a: 'No. You trade on Hyperliquid as you normally would. Fundoria indexes your public on-chain activity automatically. There is nothing to install, no routing to change, and no fees paid to Fundoria to be indexed.',
  },
  {
    q: 'Why Hyperliquid?',
    a: "Hyperliquid is the highest-performance on-chain perpetuals venue with fully public trade data. Every trade, liquidation, and position change is on-chain and auditable. This makes it the ideal foundation for a trust-minimized trader intelligence layer — there's nothing to self-report.",
  },
  {
    q: 'What is the Fundoria Score?',
    a: 'The Fundoria Score is a composite 0–1000 score computed across five dimensions: Performance (raw returns), Risk Control (drawdown management), Consistency (return stability), Discipline (position sizing and leverage behavior), and Survival (account longevity under adverse conditions). It updates every 24 hours.',
  },
  {
    q: 'Is there an ICO or token sale?',
    a: 'No. There is no ICO, no token sale, no presale, and no $FND token. Fundoria is a product-first protocol. Revenue comes from Pro subscriptions, tournament fees, capital provider platform fees, and the Builder API. There is no speculative token component.',
  },
  {
    q: 'How do traders access capital?',
    a: 'Capital access is a future, eligibility-based feature. Traders who meet Score thresholds, maintain verified Passports, and build consistent track records will be eligible for matching with capital providers through the Capital Access Layer. Eligibility is algorithmic — there is no discretionary gatekeeping. This feature is subject to legal, operational, and risk constraints.',
  },
  {
    q: 'How do capital providers use Fundoria?',
    a: 'Capital providers access the Allocator Dashboard to filter traders by Score, maximum drawdown, consistency, and time range. The dashboard surfaces verified traders who meet their criteria. Matching is algorithmic. Capital providers pay a platform fee for dashboard access and successful matches.',
  },
];

function FAQItem({ q, a, isFirst }: { q: string; a: string; isFirst?: boolean }) {
  const [open, setOpen] = useState(isFirst || false);

  return (
    <div className={`border-b border-protocol-border transition-all duration-300 ${open ? 'bg-protocol-accent-bg/60' : 'hover:bg-protocol-accent-bg/40'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 sm:py-6 flex justify-between items-center text-left group px-4 sm:px-5 relative overflow-hidden"
      >
        {open && (
          <motion.div
            layoutId="faq-active"
            className="absolute inset-y-0 left-0 w-0.5 bg-blue shadow-[0_0_12px_rgba(47,128,237,0.6)]"
          />
        )}
        <div className="flex items-center gap-4 relative z-10">
          <span className={`font-mono text-[10px] font-bold shrink-0 transition-colors ${open ? 'text-blue' : 'text-blue/25'}`}>&gt;?</span>
          <span className={`text-[14px] sm:text-[15px] font-bold tracking-tight transition-colors leading-snug ${open ? 'text-protocol-text' : 'text-protocol-text/80 group-hover:text-protocol-text'}`}>
            {q}
          </span>
        </div>
        <div className={`p-1.5 border shrink-0 ml-4 bg-protocol-bg transition-all relative z-10 ${open ? 'border-blue text-blue rotate-180' : 'border-protocol-border text-protocol-text-dim group-hover:border-blue/40 group-hover:text-blue'}`}>
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-14 pb-7 relative">
              <div className="absolute left-4 top-0 bottom-6 w-px bg-linear-to-b from-blue/30 to-transparent" />
              <p className="text-[14px] text-protocol-text-dim leading-[1.75]">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue/40" />
            FAQ
            <span className="w-4 h-px bg-blue/40" />
          </div>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5">
            Common<br />
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Questions.</span>
          </h2>
          <p className="text-protocol-text-dim text-[15px] max-w-xl mx-auto leading-relaxed">
            Straight answers about what Fundoria is, how it works, and what it never does.
          </p>
        </motion.div>

        <div className="border-t border-protocol-border">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <FAQItem q={faq.q} a={faq.a} isFirst={i === 0} />
            </motion.div>
          ))}
        </div>

        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 border border-blue/20 bg-blue/[0.03] p-7 sm:p-8 text-center"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue mb-3">Still have questions?</div>
          <p className="text-[14px] text-protocol-text-dim mb-5">
            Join early access and get direct access to the team during our feedback sessions.
          </p>
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-blue border-b border-blue/30 pb-0.5 group cursor-default">
            More answers at launch
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
