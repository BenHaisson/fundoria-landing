import { motion } from 'motion/react';

const pipelineSteps = [
  { label: 'Connected Wallet', sub: 'Hyperliquid wallet verified', active: true },
  { label: '30 Days Activity', sub: 'Minimum trading history', active: true },
  { label: 'Risk Score ≥ 750', sub: 'Fundoria Score threshold', active: false },
  { label: 'Verified Passport', sub: 'Identity confirmed', active: false },
  { label: 'Tournament Record', sub: 'Season participation', active: false },
  { label: 'Capital Eligible', sub: 'Allocator matching enabled', active: false, final: true },
];

const filters = [
  { label: 'Min Score', value: '800+', pct: 80 },
  { label: 'Max Drawdown', value: '< 5%', pct: 50 },
  { label: 'Consistency', value: '> 85%', pct: 85 },
];

function AllocatorMockup() {
  return (
    <div className="border border-protocol-border bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
      {/* Chrome */}
      <div className="py-2.5 px-4 border-b border-protocol-border bg-protocol-accent-bg flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500/40" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
        <div className="w-2 h-2 rounded-full bg-green/40" />
        <span className="font-mono text-[9px] text-protocol-text-dim/40 ml-2 uppercase tracking-widest font-black flex-1">
          ALLOCATOR_DASHBOARD :: FILTER_VIEW
        </span>
        <span className="font-mono text-[8px] text-blue/50 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-blue animate-pulse" />
          BETA
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-protocol-border">
        {/* Left: filter panel */}
        <div className="md:col-span-2 p-5 border-r border-protocol-border">
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue mb-4">Filter Panel</div>
          <div className="space-y-5">
            {filters.map((f, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-wider">{f.label}</span>
                  <span className="font-mono text-[9px] text-blue">{f.value}</span>
                </div>
                <div className="h-1.5 bg-protocol-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${f.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                    className="h-full bg-linear-to-r from-blue to-green rounded-full"
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 border-t border-protocol-border/40">
              <span className="font-mono text-[9px] text-green uppercase tracking-wider">3 matches found</span>
            </div>
            <div className="px-4 py-2.5 bg-blue text-black font-mono text-[10px] font-bold uppercase tracking-widest text-center rounded-sm cursor-default hover:bg-green transition-colors">
              Apply Filters
            </div>
          </div>
        </div>

        {/* Right: trader results */}
        <div className="md:col-span-3 p-5">
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue mb-4">Top Matches</div>
          <div className="space-y-4">
            {[
              { wallet: '0x7a...f291', score: 924, dd: '2.1%', consistency: '97%' },
              { wallet: '0x3e...8bc4', score: 891, dd: '3.4%', consistency: '94%' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="border border-protocol-border bg-protocol-accent-bg rounded-lg p-4 flex items-center justify-between gap-4 hover:border-blue/30 hover:bg-blue/5 transition-all group cursor-default"
              >
                <div className="flex items-center gap-4">
                  {/* Small score ring */}
                  <div className="relative w-10 h-10 shrink-0">
                    <svg width="40" height="40" className="rotate-[-90deg]">
                      <circle cx="20" cy="20" r="14" fill="none" stroke="#0E1A2E" strokeWidth="4" />
                      <circle
                        cx="20" cy="20" r="14"
                        fill="none"
                        stroke="#2F80ED"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 14}
                        strokeDashoffset={2 * Math.PI * 14 * (1 - t.score / 1000)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[8px] text-blue font-black">{Math.round(t.score / 10)}</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-protocol-text font-bold">{t.wallet}</div>
                    <div className="font-mono text-[9px] text-protocol-text-dim mt-0.5">
                      Score: {t.score} · DD: {t.dd} · {t.consistency}
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 border border-blue/30 bg-blue/5 rounded font-mono text-[9px] text-blue uppercase tracking-wider group-hover:bg-blue group-hover:text-black transition-all">
                  Connect
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[2px] bg-linear-to-r from-transparent via-blue to-transparent animate-flash" />
    </div>
  );
}

function CapitalEligibilityPipeline() {
  return (
    <div className="relative">
      <div className="absolute left-[8px] top-0 bottom-0 w-px bg-protocol-border/40 z-0">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="w-full h-full bg-linear-to-b from-blue/60 via-green/40 to-green/10 origin-top"
        />
      </div>

      <div className="flex flex-col relative">
        {pipelineSteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            className="flex gap-6 py-3 group relative z-10"
          >
            {/* Node */}
            <div className="shrink-0 flex flex-col items-center pt-1.5">
              <div className={`w-4 h-4 border-2 flex items-center justify-center transition-all ${
                step.final ? 'border-green bg-green/20' :
                step.active ? 'border-blue bg-blue/20' :
                'border-protocol-border bg-protocol-bg'
              }`}>
                <div className={`w-1.5 h-1.5 rounded-full ${
                  step.final ? 'bg-green' :
                  step.active ? 'bg-blue' :
                  'bg-protocol-text-dim/20'
                }`} />
              </div>
            </div>

            {/* Content */}
            <div className={`flex-1 pb-2 ${step.final ? 'border-l-0' : ''}`}>
              <div className={`font-bold text-[14px] uppercase tracking-tight ${
                step.final ? 'text-green' :
                step.active ? 'text-protocol-text' :
                'text-protocol-text/50'
              }`}>
                {step.label}
              </div>
              <div className="font-mono text-[10px] text-protocol-text-dim/50 uppercase tracking-wider">
                {step.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function CapitalProviderDashboard() {
  return (
    <section className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">For Capital Providers</div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] text-protocol-text">
              Allocate to<br />
              <em className="text-green not-italic">Verified Skill.</em>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed max-w-[360px] italic">
              Filter traders by score, drawdown, consistency, and capital eligibility. No guesswork. No discretionary selection.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left — pipeline */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-8">Capital Eligibility Pipeline</div>
            <CapitalEligibilityPipeline />
          </div>

          {/* Right — allocator dashboard */}
          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-8">Allocator Dashboard</div>
            <AllocatorMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
