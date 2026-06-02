import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'How is risk enforced?',
      a: 'Risk rules are encoded in vault contracts and enforced by the guardian oracle. Breaches trigger automated constraints on exposure, drawdown, and trading limits — with no path for manual override.'
    },
    {
      q: 'What if the oracle fails?',
      a: 'Oracle failure triggers a circuit breaker that halts new order routing. Existing positions remain in their current state until the oracle is restored. Emergency governance controls are narrowly scoped and time-limited.'
    },
    {
      q: 'How is off-chain data verified?',
      a: 'Off-chain indexing computes PnL and drawdown metrics, which are then attested by the oracle and written to the on-chain audit stream. Auditors can reconstruct full vault history without relying on off-chain attestations alone.'
    },
    {
      q: 'Is the protocol non-custodial?',
      a: 'Yes. Capital is held in on-chain vaults with explicit ownership and per-strategy provisioning scopes. Fundoria never takes custody — the protocol enforces constraints through smart contracts, not asset control.'
    },
    {
      q: 'Who can become a verified trader?',
      a: 'Any trader who passes the on-chain evaluation process. Performance is verified against protocol-defined thresholds — Sharpe ratio, max drawdown, and consistency metrics — over a defined evaluation window. There is no manual approval or subjective review.'
    },
    {
      q: 'What blockchain does Fundoria run on?',
      a: 'Fundoria is native to HyperEVM, the EVM-compatible execution layer of Hyperliquid. All vaults, risk logic, and settlement occur on-chain via HyperEVM smart contracts. This gives traders direct access to Hyperliquid\'s order book without bridging.'
    },
    {
      q: 'Are the smart contracts audited?',
      a: 'The core vault and risk contracts are currently undergoing an independent security audit. Audit reports will be published prior to mainnet deployment. Protocol components are designed with upgradeability constraints to limit post-audit surface area.'
    },
    {
      q: 'How do investors allocate to traders?',
      a: 'Capital providers deposit into strategy-specific vaults. Allocation is governed by on-chain parameters — minimum capital requirements, lockup schedules, and performance-based fee structures. Withdrawals are processed at epoch boundaries defined in the vault contract.'
    }
  ];

  return (
    <section id="faq" className="py-24 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">Knowledge Base</div>
          <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase tracking-wider text-protocol-text">Technical FAQ.</h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-protocol-text-dim text-[13px] mt-3 italic"
          >
            Direct answers for protocol-native capital markets.
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
    <div className={`border-b border-protocol-border transition-all duration-500 ${open ? 'bg-protocol-accent-bg/60 shadow-[inset_0_0_40px_rgba(59,130,246,0.03)]' : 'hover:bg-protocol-accent-bg'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-7 flex justify-between items-center text-left group transition-all px-5 relative overflow-hidden"
      >
        {open && (
          <motion.div
            layoutId="active-bg"
            className="absolute inset-y-0 left-0 w-[3px] bg-blue shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />
        )}
        <div className="flex items-center gap-5 relative z-10">
          <span className={`font-mono text-[10px] font-bold transition-colors shrink-0 ${open ? 'text-blue' : 'text-blue/25'}`}>&gt;?</span>
          <span className={`text-[16px] font-bold tracking-tight transition-colors ${open ? 'text-protocol-text' : 'text-protocol-text/80 group-hover:text-protocol-text'}`}>
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
            <div className="px-14 pb-10 text-[14px] text-protocol-text-dim leading-[1.7] font-sans relative transition-colors font-medium max-w-2xl group/ans">
              {/* Vertical Guide Line */}
              <div className="absolute left-4 top-0 bottom-10 w-px bg-gradient-to-b from-blue/30 via-blue/10 to-transparent" />
              
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
                <div className="absolute -inset-4 bg-blue/[0.02] blur-xl opacity-0 group-hover/ans:opacity-100 transition-opacity pointer-events-none" />
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
