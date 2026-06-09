import { motion } from 'motion/react';

const phases = [
  {
    num: '01',
    meta: 'Pre-Launch',
    title: 'Brand, Community & Landing',
    desc: 'Landing page, early access community, brand positioning, and Hyperliquid partnership development.',
    status: 'ACTIVE',
    statusColor: 'text-green border-green/30 bg-green/5',
    dotColor: 'bg-green',
    timeline: 'Now',
    active: true,
  },
  {
    num: '02',
    meta: 'MVP',
    title: 'Wallet Connection & Basic Passport',
    desc: 'Wallet connect via Hyperliquid RPC, on-chain indexer, first-generation Trader Passport, and base Fundoria Score.',
    status: 'NEXT',
    statusColor: 'text-blue border-blue/30 bg-blue/5',
    dotColor: 'bg-blue',
    timeline: 'Q3 2026',
    active: false,
  },
  {
    num: '03',
    meta: 'Beta',
    title: 'Fundoria Score, Profiles & Tournaments',
    desc: 'Full 5-dimension score engine, public trader profiles, AI Trading Journal, and Tournament Season 1.',
    status: 'PLANNED',
    statusColor: 'text-protocol-text-dim border-protocol-border',
    dotColor: 'bg-protocol-border',
    timeline: 'Q4 2026',
    active: false,
  },
  {
    num: '04',
    meta: 'Growth',
    title: 'Scale, Pro Tier & Capital Dashboard',
    desc: '100k trader acquisition milestone, Pro subscription launch, and capital provider dashboard with verified trader discovery.',
    status: 'PLANNED',
    statusColor: 'text-protocol-text-dim border-protocol-border',
    dotColor: 'bg-protocol-border',
    timeline: 'Q1 2027',
    active: false,
  },
  {
    num: '05',
    meta: 'Capital Access',
    title: 'Verified Tiers & Funded Challenges',
    desc: 'Capital eligibility tiers, funded trader challenges, allocator discovery marketplace, and institutional onboarding.',
    status: 'FUTURE',
    statusColor: 'text-protocol-text-dim/50 border-protocol-border/50',
    dotColor: 'bg-protocol-border/50',
    timeline: 'Q2–Q3 2027',
    active: false,
  },
  {
    num: '06',
    meta: 'Vault Layer',
    title: 'Capital Pools & Vault Mandates',
    desc: 'Protocol-level infrastructure for capital pools, mandate-specific vault strategies, and automated algorithmic allocation.',
    status: 'FUTURE',
    statusColor: 'text-protocol-text-dim/50 border-protocol-border/50',
    dotColor: 'bg-protocol-border/50',
    timeline: 'Q4 2027+',
    active: false,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue/40" />
            Roadmap
            <span className="w-4 h-px bg-blue/40" />
          </div>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5">
            Six Phases.<br />
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">One Direction.</span>
          </h2>
          <p className="text-protocol-text-dim text-[15px] max-w-xl mx-auto leading-relaxed">
            From pre-launch community to protocol-level capital infrastructure.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-protocol-border hidden md:block">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="w-full h-full bg-linear-to-b from-green via-blue to-protocol-border origin-top"
            />
          </div>

          <div className="space-y-4 relative">
            {phases.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex gap-6 md:gap-8 items-start ${!p.active && i > 1 ? 'opacity-50 hover:opacity-100 transition-opacity duration-300' : ''}`}
              >
                {/* Timeline dot */}
                <div className="shrink-0 hidden md:flex flex-col items-center gap-2 pt-1">
                  <div className={`w-9.5 h-9.5 rounded-full border flex items-center justify-center ${p.active ? 'border-green/50 bg-green/10' : 'border-protocol-border bg-protocol-bg'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${p.dotColor} ${p.active ? 'animate-pulse' : ''}`} />
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 border ${p.active ? 'border-green/30 bg-green/[0.02]' : 'border-protocol-border bg-protocol-accent-bg'} p-5 sm:p-6 group-hover:border-blue/30 transition-colors duration-300 relative overflow-hidden`}>
                  <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-protocol-border to-transparent group-hover:via-blue/20 transition-colors" />

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-[20px] text-protocol-text-dim/30">0{i + 1}</span>
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50">{p.meta}</div>
                        <h3 className="font-mono text-[13px] font-black uppercase tracking-wide text-protocol-text group-hover:text-blue transition-colors">{p.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest ${p.statusColor}`}>
                        {p.active && <div className="w-1 h-1 rounded-full bg-green animate-ping" />}
                        {p.status}
                      </div>
                      <div className="border border-protocol-border px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/40">
                        {p.timeline}
                      </div>
                    </div>
                  </div>

                  <p className="text-[13px] text-protocol-text-dim leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
