import { motion } from 'motion/react';
import { UserCheck, Zap, Trophy, Building2, Code2, Vault } from 'lucide-react';

const tiers = [
  {
    icon: <UserCheck className="w-4 h-4" />,
    num: '01',
    title: 'Free Tier',
    sub: 'Core Access',
    desc: 'Full Trader Passport, Fundoria Score, public leaderboard ranking, and wallet analytics. No subscription required.',
    tag: 'Always Free',
    tagColor: 'text-green border-green/30 bg-green/5',
    color: 'text-green',
  },
  {
    icon: <Zap className="w-4 h-4" />,
    num: '02',
    title: 'Pro',
    sub: 'Subscription',
    desc: 'Advanced analytics dashboard, AI Trading Journal, historical deep-dives, and performance benchmarking.',
    tag: 'Subscription',
    tagColor: 'text-blue border-blue/30 bg-blue/5',
    color: 'text-blue',
  },
  {
    icon: <Trophy className="w-4 h-4" />,
    num: '03',
    title: 'Tournament',
    sub: 'Event Revenue',
    desc: 'Season entry fees for score-gated competitive tournaments with verifiable public results.',
    tag: 'Per Season',
    tagColor: 'text-blue border-blue/30 bg-blue/5',
    color: 'text-blue',
  },
  {
    icon: <Building2 className="w-4 h-4" />,
    num: '04',
    title: 'Capital Provider',
    sub: 'Platform Fee',
    desc: 'Dashboard access for allocators to filter, discover, and match with verified traders. Fee on successful matches.',
    tag: 'Platform Fee',
    tagColor: 'text-green border-green/30 bg-green/5',
    color: 'text-green',
  },
  {
    icon: <Code2 className="w-4 h-4" />,
    num: '05',
    title: 'Builder API',
    sub: 'Usage Revenue',
    desc: 'Programmatic access to the Fundoria Score API, Trader Passport data, and leaderboard feeds for third-party integrations.',
    tag: 'Usage-Based',
    tagColor: 'text-blue border-blue/30 bg-blue/5',
    color: 'text-blue',
  },
  {
    icon: <Vault className="w-4 h-4" />,
    num: '06',
    title: 'Vault Layer',
    sub: 'Future',
    desc: 'Protocol-level infrastructure for capital pools and vault mandates. Fee structure: mandate-based protocol fee on managed capital.',
    tag: 'Protocol Fee',
    tagColor: 'text-protocol-text-dim border-protocol-border',
    color: 'text-protocol-text-dim',
    future: true,
  },
];

export default function BusinessModel() {
  return (
    <section className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue/40" />
            Business Model
            <span className="w-4 h-px bg-blue/40" />
          </div>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5">
            Built for<br />
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Sustainable Growth.</span>
          </h2>
          <p className="text-protocol-text-dim text-[15px] max-w-xl mx-auto leading-relaxed">
            Multiple revenue layers aligned with value creation. No token emissions. No speculation. Pure product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`group relative border border-protocol-border bg-protocol-accent-bg p-7 transition-all duration-300 card-glow-hover overflow-hidden ${t.future ? 'opacity-60 hover:opacity-100' : ''}`}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-protocol-border to-transparent group-hover:via-blue/30 transition-colors duration-500" />

              <div className="flex items-start justify-between mb-5">
                <div className={`${t.color} opacity-70 group-hover:opacity-100 transition-opacity`}>{t.icon}</div>
                <span className={`border font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 ${t.tagColor}`}>{t.tag}</span>
              </div>

              <div className="font-mono text-[9px] text-protocol-text-dim/40 uppercase tracking-widest mb-1">{t.sub}</div>
              <h3 className="font-mono text-[14px] font-black uppercase tracking-wide text-protocol-text mb-3 group-hover:text-blue transition-colors">{t.title}</h3>
              <p className="text-[13px] text-protocol-text-dim leading-relaxed">{t.desc}</p>

              <div className="absolute bottom-4 right-5 font-mono text-[48px] font-black opacity-[0.04] leading-none select-none pointer-events-none text-protocol-text">
                {t.num}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 border border-protocol-border/50 p-5 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-[80px] bg-protocol-border/50" />
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-protocol-text-dim/40 text-center">
            No ICO · No Token Sale · No Passive Income Claims · No Guaranteed Returns
          </p>
          <div className="h-px flex-1 max-w-[80px] bg-protocol-border/50" />
        </motion.div>
      </div>
    </section>
  );
}
