import { motion } from 'motion/react';
import { Users, Zap, Trophy, Building2, Code2, Vault } from 'lucide-react';

const models = [
  {
    num: '01',
    icon: <Users className="w-5 h-5" />,
    tier: 'Free Layer',
    title: 'Full Passport & Score',
    desc: 'Every trader gets a Trader Passport and Fundoria Score at no cost. The network grows first.',
    revenue: 'User Growth Hook',
    color: 'blue',
    features: ['Wallet connection', 'Basic Trader Passport', 'Basic PnL analytics', 'Public ranking', 'Leaderboard access'],
  },
  {
    num: '02',
    icon: <Zap className="w-5 h-5" />,
    tier: 'Pro Trader',
    title: 'Advanced Analytics & AI',
    desc: 'Subscription model for traders who want deeper insights, AI journal, and private dashboards.',
    revenue: 'Subscription',
    color: 'green',
    features: ['Advanced analytics', 'AI trading journal', 'Risk heatmaps', 'Strategy review', 'Private dashboards', 'Performance alerts'],
  },
  {
    num: '03',
    icon: <Trophy className="w-5 h-5" />,
    tier: 'Tournament Layer',
    title: 'Seasons & Competitions',
    desc: 'Entry fees, sponsored challenges, and prize pools power the competitive layer.',
    revenue: 'Event Revenue',
    color: 'blue',
    features: ['Season entry fees', 'Sponsored challenges', 'Prize pool distributions', 'Achievement badges', 'Partner campaigns'],
  },
  {
    num: '04',
    icon: <Building2 className="w-5 h-5" />,
    tier: 'Capital Provider',
    title: 'Allocator Dashboard',
    desc: 'B2B access for capital providers who need verified trader discovery and risk intelligence.',
    revenue: 'Platform Fee',
    color: 'green',
    features: ['Verified trader discovery', 'Risk filter tools', 'Allocator dashboard', 'Performance reports', 'Watchlists', 'Capital eligibility data'],
  },
  {
    num: '05',
    icon: <Code2 className="w-5 h-5" />,
    tier: 'Builder-Code',
    title: 'SDK & API Access',
    desc: 'Builders can embed Fundoria intelligence into their own products. Revenue through usage.',
    revenue: 'Usage Revenue',
    color: 'blue',
    features: ['API access', 'Score data feeds', 'Passport lookups', 'Builder SDK', 'Usage-based billing'],
  },
  {
    num: '06',
    icon: <Vault className="w-5 h-5" />,
    tier: 'Future Vault Layer',
    title: 'Programmable Capital',
    desc: 'Later-stage model: capital pools matched to verified traders with automated risk rules.',
    revenue: '% of Performance',
    color: 'green',
    features: ['Capital pools', 'Vault mandates', 'Automated allocation', 'Settlement logic', 'Profit splits'],
    future: true,
  },
];

export default function BusinessModel() {
  return (
    <section className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">Business Model</div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] text-protocol-text">
              Utility First.<br />
              <em className="text-green not-italic">No ICO Required.</em>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed max-w-[360px] italic">
              Six revenue layers stacked on top of real product usage. The free layer is the network effect.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-protocol-border border border-protocol-border">
          {models.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`group bg-protocol-bg p-8 relative overflow-hidden cursor-default card-glow-hover ${m.future ? 'opacity-60 hover:opacity-100' : ''}`}
            >
              {/* Ghosted number */}
              <div className={`absolute -bottom-4 -right-2 font-display text-[80px] ${m.color === 'green' ? 'text-green/[0.03]' : 'text-blue/[0.03]'} leading-none select-none pointer-events-none`}>
                {m.num}
              </div>

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-0 h-[1px] ${m.color === 'green' ? 'bg-green' : 'bg-blue'} group-hover:w-full transition-all duration-500`} />

              {/* Icon */}
              <div className={`w-9 h-9 border ${m.color === 'green' ? 'border-green/30 bg-green/5 text-green/60 group-hover:text-green group-hover:border-green/60' : 'border-blue/30 bg-blue/5 text-blue/60 group-hover:text-blue group-hover:border-blue/60'} flex items-center justify-center transition-all mb-5 relative z-10`}>
                {m.icon}
              </div>

              {/* Labels */}
              <div className={`font-mono text-[8px] uppercase tracking-[0.3em] mb-1.5 ${m.color === 'green' ? 'text-green/40 group-hover:text-green/70' : 'text-blue/40 group-hover:text-blue/70'} transition-colors relative z-10`}>
                TIER::{m.num} — {m.tier}
              </div>
              <h3 className="text-[16px] font-bold uppercase tracking-tight mb-2 text-protocol-text/80 group-hover:text-protocol-text transition-colors relative z-10">
                {m.title}
              </h3>
              <p className="text-[13px] text-protocol-text-dim leading-relaxed mb-4 relative z-10 font-medium">{m.desc}</p>

              {/* Revenue model badge */}
              <div className={`inline-block px-2.5 py-1 mb-4 border font-mono text-[9px] uppercase tracking-widest ${m.color === 'green' ? 'border-green/20 text-green/60 bg-green/5' : 'border-blue/20 text-blue/60 bg-blue/5'} relative z-10`}>
                {m.revenue}
              </div>

              {/* Features */}
              <ul className="space-y-1 relative z-10">
                {m.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className={`text-[8px] ${m.color === 'green' ? 'text-green/50' : 'text-blue/50'}`}>▸</span>
                    <span className="font-mono text-[9px] text-protocol-text-dim/60 uppercase tracking-wider">{f}</span>
                  </li>
                ))}
              </ul>

              {m.future && (
                <div className="mt-4 px-2.5 py-1 border border-protocol-border bg-protocol-accent-bg rounded font-mono text-[8px] uppercase tracking-widest text-protocol-text/30 inline-block relative z-10">
                  Future Layer
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
