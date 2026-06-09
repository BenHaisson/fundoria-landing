import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const flow = [
  { label: 'Wallet', sub: 'Identity anchor' },
  { label: 'History', sub: 'On-chain trades' },
  { label: 'Score', sub: '5 dimensions' },
  { label: 'Passport', sub: 'Verified identity' },
  { label: 'Capital', sub: 'Eligibility layer' },
];

const stats = [
  { value: '5', label: 'Score Dimensions' },
  { value: '24h', label: 'Update Cycle' },
  { value: '$0', label: 'Min. Deposit' },
];

export default function Solution() {
  return (
    <section id="solution" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-accent-bg px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-blue/40" />
              The Solution
            </div>
            <h2 className="font-display text-[clamp(34px,5vw,64px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-6">
              Your Trading History.<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Made Verifiable.</span>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed mb-8 max-w-lg">
              Fundoria reads your Hyperliquid wallet history and structures it into a verified Trader Passport — a portable reputation that travels with you across platforms, capital providers, and tournaments.
            </p>

            <div className="grid grid-cols-3 gap-px bg-protocol-border border border-protocol-border">
              {stats.map((s, i) => (
                <div key={i} className="bg-protocol-bg px-4 py-5 flex flex-col items-center gap-1.5">
                  <div className="font-display text-[clamp(24px,4vw,36px)] text-blue leading-none">{s.value}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/60 text-center">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Flow */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {flow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.07 }}
                className="flex items-center gap-4"
              >
                <div className="flex-1 group border border-protocol-border bg-protocol-bg hover:border-blue/30 hover:bg-blue/[0.02] transition-all duration-300 px-5 py-4 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[12px] font-black uppercase tracking-widest text-protocol-text group-hover:text-blue transition-colors">{step.label}</div>
                    <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-widest mt-0.5">{step.sub}</div>
                  </div>
                  <div className="font-mono text-[10px] text-protocol-text-dim/30 group-hover:text-blue/40 transition-colors font-black">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-blue/30 shrink-0" />
                )}
                {i === flow.length - 1 && (
                  <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
