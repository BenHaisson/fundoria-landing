import { motion } from 'motion/react';
import { Zap, TrendingUp, Database, Building2, CheckCircle2, Shield, BarChart3, Globe, Lock, Users } from 'lucide-react';

interface ParticipationProps {
  onOpenWhitelist?: () => void;
}

export default function Participation({ onOpenWhitelist }: ParticipationProps) {
  const cards = [
    {
      role: 'Skill Verification',
      type: 'Traders',
      icon: <TrendingUp className="w-5 h-5" />,
      accent: 'blue' as const,
      glow: 'rgba(59,130,246,0.35)',
      borderColor: 'group-hover:border-blue/50',
      dotColor: 'bg-blue',
      typeColor: 'group-hover:text-blue',
      btnBg: 'bg-blue',
      topAccent: 'from-blue/0 via-blue/40 to-blue/0',
      hoverShadow: 'hover:shadow-[0_24px_64px_rgba(59,130,246,0.25)]',
      stat: { label: 'Track Record', value: 'On-Chain' },
      perkIcons: [<BarChart3 className="w-3 h-3" />, <Globe className="w-3 h-3" />, <CheckCircle2 className="w-3 h-3" />],
      perks: ['Simulated & Funded Environments', 'Persistent On-Chain Track Record', 'Protocol-Mediated Capital Access'],
      btnText: 'Apply for Whitelist'
    },
    {
      role: 'Capital Provision',
      type: 'Providers',
      icon: <Database className="w-5 h-5" />,
      accent: 'green' as const,
      glow: 'rgba(16,185,129,0.30)',
      borderColor: 'group-hover:border-green/50',
      dotColor: 'bg-green',
      typeColor: 'group-hover:text-green',
      btnBg: 'bg-green',
      topAccent: 'from-green/0 via-green/40 to-green/0',
      hoverShadow: 'hover:shadow-[0_24px_64px_rgba(16,185,129,0.20)]',
      stat: { label: 'Settlement', value: 'Non-Custodial' },
      perkIcons: [<Lock className="w-3 h-3" />, <CheckCircle2 className="w-3 h-3" />, <Shield className="w-3 h-3" />],
      perks: ['Programmable, Non-custodial Vaults', 'Automated Accounting & Settlement', 'Rule-Enforced Risk Management'],
      btnText: 'Pre-Register Interest'
    },
    {
      role: 'Treasury Scaling',
      type: 'DAOs & Institutions',
      icon: <Building2 className="w-5 h-5" />,
      accent: 'cyan' as const,
      glow: 'rgba(6,182,212,0.30)',
      borderColor: 'group-hover:border-cyan/50',
      dotColor: 'bg-cyan',
      typeColor: 'group-hover:text-cyan',
      btnBg: 'bg-cyan',
      topAccent: 'from-cyan/0 via-cyan/40 to-cyan/0',
      hoverShadow: 'hover:shadow-[0_24px_64px_rgba(6,182,212,0.20)]',
      stat: { label: 'Integration', value: 'DAO Native' },
      perkIcons: [<Users className="w-3 h-3" />, <BarChart3 className="w-3 h-3" />, <CheckCircle2 className="w-3 h-3" />],
      perks: ['Custom Mandate-Specific Profiles', 'On-Chain Performance Attestations', 'Direct Governance Integration'],
      btnText: 'Get Institutional Access'
    }
  ];

  return (
    <section id="participation" className="py-24 border-t border-protocol-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-green">Participation</div>
            <h2 className="font-display text-[clamp(44px,8vw,90px)] uppercase italic leading-[0.95] text-protocol-text">
              Direct Access.
            </h2>
            <p className="text-protocol-text-dim text-[13px] mt-2.5 italic">Positioning skill as infrastructure. No discretionary gates.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-3.5 py-1.5 border border-green/40 bg-green/5 text-green font-mono text-[9px] font-bold uppercase tracking-[0.15em] shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Phased Onboarding Active
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
              className={`group relative flex flex-col bg-protocol-bg border border-protocol-border ${card.borderColor} ${card.hoverShadow} overflow-hidden transition-all duration-300`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${card.topAccent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10`} />

              {/* Dot grid bg */}
              <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px] group-hover:opacity-[0.05] transition-opacity duration-500" />

              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: card.glow }}
              />

              {/* Scan beam */}
              <motion.div
                className="absolute inset-x-0 h-[1px] z-20 pointer-events-none opacity-0 group-hover:opacity-100 will-change-transform"
                style={{ background: `linear-gradient(to right, transparent, ${card.glow}, transparent)` }}
                animate={{ y: [-20, 700] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Header */}
              <div className="relative z-10 px-6 py-4 border-b border-protocol-border bg-protocol-accent-bg/40 flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${card.dotColor} animate-pulse`} />
                  <span className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-[0.2em]">{card.role}</span>
                </div>
                <span className="font-mono text-[8px] text-protocol-text-dim/30">FND_CLS_0{i + 1}</span>
              </div>

              {/* Body */}
              <div className="relative z-10 p-8 pt-9 flex flex-col flex-1">
                {/* Icon + Title */}
                <div className="flex items-start justify-between mb-8">
                  <div className="font-display text-[46px] leading-none transition-all group-hover:translate-x-1 duration-300">
                    <span className="text-protocol-text-dim/30 italic lowercase text-2xl">class</span>
                    <br />
                    <span className={`uppercase tracking-tight text-protocol-text ${card.typeColor} transition-colors duration-300`}>
                      {card.type}
                    </span>
                  </div>
                  <div className="w-10 h-10 border border-protocol-border flex items-center justify-center text-protocol-text-dim/40 group-hover:text-protocol-text/60 group-hover:border-protocol-border/60 transition-all duration-300 shrink-0 mt-1">
                    {card.icon}
                  </div>
                </div>

                {/* Stat badge */}
                <div className="flex items-center gap-3 mb-7 pb-7 border-b border-protocol-border">
                  <div className={`w-1 h-6 ${card.dotColor} opacity-30 group-hover:opacity-80 transition-opacity`} />
                  <div>
                    <div className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-widest">{card.stat.label}</div>
                    <div className="font-mono text-[11px] font-bold text-protocol-text">{card.stat.value}</div>
                  </div>
                </div>

                {/* Perks */}
                <ul className="flex flex-col gap-4 flex-1 mb-10">
                  {card.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-3 text-[12px] text-protocol-text-dim group/item cursor-default">
                      <div className={`font-mono text-[9px] mt-0.5 opacity-30 group-hover/item:opacity-100 transition-opacity font-bold shrink-0 ${
                        card.accent === 'blue' ? 'text-blue' : card.accent === 'green' ? 'text-green' : 'text-cyan'
                      }`}>
                        {String(j + 1).padStart(2, '0')}
                      </div>
                      <div className={`mt-0.5 opacity-20 group-hover/item:opacity-70 transition-opacity shrink-0 ${
                        card.accent === 'blue' ? 'text-blue' : card.accent === 'green' ? 'text-green' : 'text-cyan'
                      }`}>
                        {card.perkIcons[j]}
                      </div>
                      <span className="group-hover/item:text-protocol-text transition-colors leading-relaxed font-medium">{perk}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={onOpenWhitelist}
                  className="relative w-full py-4 bg-protocol-bg border border-protocol-border overflow-hidden font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current"
                >
                  <div className={`absolute inset-0 ${card.btnBg} translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300`} />
                  <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300 flex items-center justify-center gap-3">
                    <Zap className="w-3 h-3 group-hover/btn:fill-current transition-all" />
                    {card.btnText}
                  </span>
                </button>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-protocol-border/60 group-hover:border-protocol-text/20 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-protocol-border/60 group-hover:border-protocol-text/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
