import { motion } from 'motion/react';

const phases = [
  {
    num: '01',
    meta: 'Reputation MVP',
    title: 'Wallet, Passport & Public Profiles',
    desc: 'Wallet connection via Hyperliquid RPC, on-chain indexer, first-generation Trader Passport, basic analytics, and public trader profiles.',
    status: 'ACTIVE',
    statusColor: 'text-green border-green/30 bg-green/5',
    dotColor: 'bg-green',
    timeline: 'Now',
    active: true,
  },
  {
    num: '02',
    meta: 'Social Layer',
    title: 'Follow, Badges, Leaderboards & Feed',
    desc: 'Follow and watchlist system, achievement badges, public leaderboards, share cards, and live trader activity feed.',
    status: 'NEXT',
    statusColor: 'text-blue border-blue/30 bg-blue/5',
    dotColor: 'bg-blue',
    timeline: 'Next',
    active: false,
  },
  {
    num: '03',
    meta: 'Intelligence Layer',
    title: 'Fundoria Score, AI Journal & Risk Maps',
    desc: 'Full 10-dimension Score engine, AI Trading Journal, risk heatmaps, strategy tags, and score history tracking.',
    status: 'PLANNED',
    statusColor: 'text-protocol-text-dim border-protocol-border',
    dotColor: 'bg-protocol-border',
    timeline: 'Planned',
    active: false,
  },
  {
    num: '04',
    meta: 'Capital Provider Layer',
    title: 'Allocator Dashboard & Trader Discovery',
    desc: 'Capital provider dashboard, private watchlists, trader filters, verified candidate discovery pipeline, and risk intelligence reports.',
    status: 'PLANNED',
    statusColor: 'text-protocol-text-dim border-protocol-border',
    dotColor: 'bg-protocol-border',
    timeline: 'Planned',
    active: false,
  },
  {
    num: '05',
    meta: 'Tournament Layer',
    title: 'Sponsored Challenges & Seasonal Competitions',
    desc: 'Public and private tournaments, risk-adjusted challenge formats, sponsored seasonal competitions, and performance-based incentives.',
    status: 'FUTURE',
    statusColor: 'text-protocol-text-dim/50 border-protocol-border/50',
    dotColor: 'bg-protocol-border/50',
    timeline: 'Future',
    active: false,
  },
  {
    num: '06',
    meta: 'Vault Layer',
    title: 'Future Capital Access Infrastructure',
    desc: 'Eligibility tiers, mandate-based allocation workflows, protocol fee layer, vault reporting, and capital access infrastructure — subject to legal and operational constraints.',
    status: 'FUTURE',
    statusColor: 'text-protocol-text-dim/50 border-protocol-border/50',
    dotColor: 'bg-protocol-border/50',
    timeline: 'Future',
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
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Reputation First.</span>
          </h2>
          <p className="text-protocol-text-dim text-[15px] max-w-xl mx-auto leading-relaxed">
            From Reputation MVP to Social Layer, Intelligence Engine, Capital Discovery, Tournaments, and the future Vault Layer.
          </p>
          <p className="font-mono text-[9px] text-protocol-text-dim/40 uppercase tracking-wider mt-3 max-w-xl mx-auto">
            Timeline is milestone-gated and may evolve based on product, legal, security, and ecosystem readiness.
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
