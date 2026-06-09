import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'What is Fundoria?',
      a: 'Fundoria is a Hyperliquid-native trader intelligence and capital-access layer. It reads your on-chain trading history, computes a Fundoria Score across five dimensions, issues a public Trader Passport, and creates a pathway from verified reputation to capital allocation.'
    },
    {
      q: 'Does Fundoria custody funds?',
      a: 'No. Fundoria is read-only in its current architecture. It reads your existing Hyperliquid wallet history non-custodially — no deposits, no bridging, no custody at any layer. Capital matching is introduced only after verification maturity.'
    },
    {
      q: 'Do I need to trade through Fundoria?',
      a: 'No. You trade on Hyperliquid as you normally would. Fundoria indexes your wallet activity automatically. Your Trader Passport and Fundoria Score are built from your existing trading history — no special interface or routing required.'
    },
    {
      q: 'Why Hyperliquid?',
      a: 'Hyperliquid provides one of the most powerful on-chain execution environments in crypto — deep liquidity, fast settlement, and full transparency. Fundoria is built as the intelligence and reputation layer around that execution environment.'
    },
    {
      q: 'What is the Fundoria Score?',
      a: 'The Fundoria Score is a 0–1000 proprietary trader score computed across five dimensions: Performance, Risk Control, Consistency, Discipline, and Survival. It is updated daily from on-chain Hyperliquid data. A higher score improves your leaderboard rank and capital eligibility.'
    },
    {
      q: 'Is there an ICO or token sale?',
      a: 'No. Fundoria is focused first on product usage, trader intelligence, community growth, and verified reputation. Any future coordination layer will be tied to real utility and ecosystem participation — not a token sale. There is no ICO, presale, or investment opportunity.'
    },
    {
      q: 'How do traders access capital?',
      a: 'Traders build a verified Trader Passport through consistent trading activity over time. Once a minimum score threshold is met and a tournament record exists, traders become eligible to appear in the capital provider discovery layer. Capital matching is algorithmic — not discretionary.'
    },
    {
      q: 'How do capital providers use Fundoria?',
      a: 'Capital providers use the allocator dashboard to filter traders by Fundoria Score, maximum drawdown, consistency period, market type, and capital eligibility status. Fundoria provides verified performance intelligence without requiring capital providers to perform their own due diligence from scratch.'
    }
  ];

  return (
    <section id="faq" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">FAQ</div>
          <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase tracking-wider text-protocol-text">Common Questions.</h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-protocol-text-dim text-[15px] mt-3 italic"
          >
            Fundoria is trader intelligence, not a token sale.
          </motion.p>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <FAQItem q={faq.q} a={faq.a} isFirst={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, isFirst }: { q: string; a: string; isFirst?: boolean }) {
  const [open, setOpen] = useState(isFirst || false);

  return (
    <div className={`border-b border-protocol-border transition-all duration-500 ${open ? 'bg-protocol-accent-bg/60 shadow-[inset_0_0_40px_rgba(59,130,246,0.04)]' : 'hover:bg-protocol-accent-bg/40'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 sm:py-7 flex justify-between items-center text-left group transition-all px-4 sm:px-5 relative overflow-hidden"
      >
        {open && (
          <motion.div
            layoutId="active-bg"
            className="absolute inset-y-0 left-0 w-0.75 bg-blue shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />
        )}
        <div className="flex items-center gap-5 relative z-10">
          <span className={`font-mono text-[10px] font-bold transition-colors shrink-0 ${open ? 'text-blue' : 'text-blue/25'}`}>&gt;?</span>
          <span className={`text-[14px] sm:text-[16px] font-bold tracking-tight transition-colors ${open ? 'text-protocol-text' : 'text-protocol-text/80 group-hover:text-protocol-text'}`}>
            {q}
          </span>
        </div>
        <div className={`p-1.5 border shrink-0 ml-4 bg-protocol-bg transition-all relative z-10 ${open ? 'border-blue text-blue rotate-180 shadow-[0_0_12px_rgba(59,130,246,0.3)]' : 'border-protocol-border text-protocol-text-dim group-hover:text-blue group-hover:border-blue/40'}`}>
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-14 pb-8 sm:pb-10 text-[14px] sm:text-[15px] text-protocol-text-dim leading-[1.75] font-sans relative transition-colors font-medium max-w-2xl group/ans">
              {/* Vertical Guide Line */}
              <div className="absolute left-4 top-0 bottom-10 w-px bg-linear-to-b from-blue/30 via-blue/10 to-transparent" />
              
              {/* Header Label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="font-mono text-[9px] text-blue uppercase tracking-widest font-black">SYS::RESPONSE_STREAM</div>
                <div className="flex-1 h-px bg-protocol-border/30" />
              </div>
              
              <div className="relative">
                <span className="relative z-10 transition-colors group-hover/ans:text-protocol-text duration-500">
                  {a}
                </span>
                
                {/* Subtle Background Glow */}
                <div className="absolute -inset-4 bg-blue/2 blur-xl opacity-0 group-hover/ans:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {/* Status Footer */}
              <div className="mt-6 flex items-center gap-4 opacity-40">
                <div className="font-mono text-[8px] uppercase tracking-tighter">Integrity Check [OK]</div>
                <div className="w-8 h-px bg-protocol-border" />
                <div className="font-mono text-[8px] uppercase tracking-tighter">Source: PROTOCOL_DOC_0x4F</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
