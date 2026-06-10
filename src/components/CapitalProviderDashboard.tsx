import { motion } from 'motion/react';
import { SlidersHorizontal, CheckCircle, ArrowRight } from 'lucide-react';

const pipeline = [
  { step: 'Connected Wallet', sub: 'Hyperliquid identity verified', done: true },
  { step: '30 Days Activity', sub: 'Minimum history indexed', done: true },
  { step: 'Risk Score ≥ 750', sub: 'Fundoria Score threshold', done: true },
  { step: 'Verified Passport', sub: 'Passport issued on-chain', done: false },
  { step: 'Tournament Record', sub: 'Optional: season entry', done: false },
  { step: 'Capital Eligible', sub: 'Matched with allocators', done: false, highlight: true },
];

const filters = [
  { label: 'Min Score', value: '800+', pct: 80 },
  { label: 'Max Drawdown', value: '< 5%', pct: 50 },
  { label: 'Consistency', value: '> 85%', pct: 85 },
];

const results = [
  { address: '0x7a...f291', score: 924, pnl: '+42.1%', grade: 'A+' },
  { address: '0x3e...8bc4', score: 891, pnl: '+28.4%', grade: 'A' },
];

const benefits = [
  'Filter traders by Fundoria Score',
  'Build private watchlists',
  'Compare trader consistency and drawdown',
  'Track tournament records and verified history',
  'Discover emerging wallets before they become obvious',
  'Prepare future vault mandates',
  'Monitor trader reputation over time',
  'AI-generated trader summaries included',
];

interface CapitalProviderDashboardProps {
  onOpenWhitelist?: () => void;
}

export default function CapitalProviderDashboard({ onOpenWhitelist }: CapitalProviderDashboardProps) {
  return (
    <section id="capital-access" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-accent-bg px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-blue/40" />
            For Capital Providers
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-display text-[clamp(34px,5vw,64px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5">
                Discover Talent<br />
                <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Before Allocation.</span>
              </h2>
              <p className="text-protocol-text-dim text-[15px] leading-relaxed max-w-lg">
                Capital providers need more than social noise and raw PnL. Fundoria provides structured risk intelligence, trader discovery, private watchlists, and future vault candidate pipelines.
              </p>
            </div>
            <div>
              <ul className="space-y-2.5 mb-8">
                {benefits.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-green shrink-0 mt-0.5" />
                    <span className="text-[14px] text-protocol-text-dim leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onClick={onOpenWhitelist}
                className="group relative inline-flex items-center gap-3 border border-blue/40 hover:bg-blue text-blue hover:text-black font-mono text-[11px] font-black uppercase tracking-[0.2em] px-8 py-4 overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-blue translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative">Join Allocator Waitlist</span>
                <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 border border-protocol-border bg-protocol-bg overflow-hidden"
          >
            <div className="px-4 py-2.5 border-b border-protocol-border bg-protocol-accent-bg flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <div className="w-2 h-2 rounded-full bg-green/40" />
                <span className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/40 ml-1">ALLOCATOR_DASHBOARD</span>
              </div>
              <span className="font-mono text-[8px] text-blue/50 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-blue animate-pulse" />LIVE
              </span>
            </div>

            <div className="p-5 grid grid-cols-1 sm:grid-cols-5 gap-4">
              <div className="sm:col-span-2 border border-protocol-border bg-protocol-accent-bg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-blue" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim">Filters</span>
                </div>
                <div className="space-y-4">
                  {filters.map((f, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/60">{f.label}</span>
                        <span className="font-mono text-[9px] font-black text-blue">{f.value}</span>
                      </div>
                      <div className="h-1 bg-protocol-border overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${f.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                          className="h-full bg-linear-to-r from-blue to-green"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 border-t border-protocol-border pt-4">
                  <div className="font-mono text-[9px] text-green mb-3">3 matches found</div>
                  <div className="border border-blue/30 bg-blue/5 py-2 text-center font-mono text-[9px] uppercase tracking-widest text-blue">
                    Apply Filters
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3 space-y-3">
                {results.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="border border-protocol-border bg-protocol-accent-bg p-4 hover:border-blue/30 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-mono text-[11px] font-black text-blue">{r.address}</div>
                      <div className="px-2 py-0.5 border border-green/30 bg-green/5 font-mono text-[8px] text-green uppercase tracking-widest">Grade {r.grade}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-widest mb-0.5">Score</div>
                        <div className="font-display text-[16px] text-protocol-text">{r.score}</div>
                      </div>
                      <div>
                        <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-widest mb-0.5">30D PnL</div>
                        <div className="font-mono text-[13px] font-black text-green">{r.pnl}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <div className="border border-dashed border-protocol-border/50 p-4 flex items-center justify-center">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/30">+1 more match</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Eligibility Pipeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 border border-protocol-border bg-protocol-bg p-5"
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50 mb-5">Capital Eligibility Pipeline</div>
            <div className="space-y-0 relative">
              <div className="absolute left-[11px] top-3 bottom-3 w-px bg-protocol-border" />

              {pipeline.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className={`relative flex items-start gap-4 py-3 ${p.highlight ? 'bg-green/5 -mx-5 px-5 border-y border-green/20' : ''}`}
                >
                  <div className="relative z-10 shrink-0 mt-0.5">
                    {p.highlight ? (
                      <div className="w-5.5 h-5.5 rounded-full bg-green/20 border border-green/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green" />
                      </div>
                    ) : p.done ? (
                      <CheckCircle className="w-5 h-5 text-blue" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-protocol-border bg-protocol-bg flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-protocol-border" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className={`font-mono text-[11px] font-black uppercase tracking-widest ${p.highlight ? 'text-green' : p.done ? 'text-protocol-text' : 'text-protocol-text-dim/50'}`}>
                      {p.step}
                    </div>
                    <div className="font-mono text-[9px] text-protocol-text-dim/40 mt-0.5">{p.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
