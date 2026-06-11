import { motion } from 'motion/react';
import { IdCard, Star, Eye, ChevronRight, Vault, AlertTriangle } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const pipelineSteps = [
  {
    icon: <IdCard className="w-4 h-4" />,
    label: 'Trader Passport',
    sub: 'Public reputation profile',
    color: 'text-blue border-blue/30 bg-blue/5',
    done: true,
  },
  {
    icon: <Star className="w-4 h-4" />,
    label: 'Fundoria Score',
    sub: 'Risk-adjusted track record',
    color: 'text-blue border-blue/30 bg-blue/5',
    done: true,
  },
  {
    icon: <Eye className="w-4 h-4" />,
    label: 'Watchlist',
    sub: 'Capital providers watching',
    color: 'text-blue border-blue/30 bg-blue/5',
    done: true,
  },
  {
    label: 'Eligibility Tier',
    sub: 'Score threshold reached',
    color: 'text-protocol-text-dim/50 border-protocol-border/50',
    future: true,
  },
  {
    label: 'Mandate Design',
    sub: 'Allocation rules defined',
    color: 'text-protocol-text-dim/40 border-protocol-border/40',
    future: true,
  },
  {
    icon: <Vault className="w-4 h-4" />,
    label: 'Future Vault Access',
    sub: 'Subject to legal constraints',
    color: 'text-protocol-text-dim/30 border-protocol-border/30',
    future: true,
    last: true,
  },
];

const benefits = [
  'Better trader discovery through verified reputation',
  'Better risk filtering before capital is deployed',
  'Better capital matching with mandate design',
  'Better long-term trust through transparent track records',
  'Reputation feeds back into improved vault performance',
];

const traditionalVault = ['Capital', '→ Trader', '→ Limited pre-allocation context'];
const fundoriaVault = ['Reputation', '→ Verification', '→ Risk Score', '→ Watchlist', '→ Eligibility', '→ Capital Access'];

export default function FundoriaVaults() {
  return (
    <section id="vaults" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Future Vault Layer"
          centered
          title={
            <>
              Vaults Should Start With<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Reputation, Not Blind Allocation.</span>
            </>
          }
          subtitle="Fundoria Vaults are a future capital-access layer designed around verified trader reputation. Before capital is allocated, traders build measurable track records through Passports, Scores, rankings, tournaments, and risk intelligence."
        />

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-protocol-border bg-protocol-accent-bg p-6"
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/40 mb-4">Traditional Vaults</div>
            <div className="flex flex-wrap gap-2 items-center">
              {traditionalVault.map((step, i) => (
                <span key={i} className="font-mono text-[12px] text-protocol-text-dim/50">{step}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-blue/20 bg-blue/[0.02] p-6"
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue mb-4">Fundoria Vaults</div>
            <div className="flex flex-wrap gap-2 items-center">
              {fundoriaVault.map((step, i) => (
                <span key={i} className={`font-mono text-[12px] ${i === fundoriaVault.length - 1 ? 'text-green' : 'text-protocol-text'}`}>{step}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pipeline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50 mb-6">Vault Eligibility Pipeline</div>
            <div className="relative">
              <div className="absolute left-[14px] top-3 bottom-3 w-px bg-protocol-border hidden sm:block" />
              <div className="space-y-2">
                {pipelineSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`hidden sm:flex shrink-0 w-7 h-7 items-center justify-center border rounded-full relative z-10 ${step.color} ${step.future ? 'opacity-50' : ''}`}>
                      {step.icon ? (
                        <div className="scale-75">{step.icon}</div>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                      )}
                    </div>
                    <div className={`flex-1 border ${step.color} px-4 py-3 flex items-center justify-between ${step.future ? 'opacity-60' : ''}`}>
                      <div>
                        <div className="font-mono text-[11px] font-black uppercase tracking-wide">{step.label}</div>
                        <div className="font-mono text-[9px] opacity-50 mt-0.5">{step.sub}</div>
                      </div>
                      {step.future && (
                        <span className="font-mono text-[7px] uppercase tracking-widest border border-current/30 px-1.5 py-0.5 opacity-50">Future</span>
                      )}
                      {!step.future && !step.last && (
                        <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50 mb-6">Why Reputation-First Vaults</div>
            <div className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 border border-protocol-border bg-protocol-accent-bg px-4 py-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green shrink-0 mt-1.5" />
                  <span className="text-[13px] text-protocol-text-dim leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="border border-amber-500/20 bg-amber-500/[0.02] p-4 flex items-start gap-3"
            >
              <AlertTriangle className="w-4 h-4 text-amber-500/60 shrink-0 mt-0.5" />
              <p className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-wider leading-relaxed">
                Vault features are future, eligibility-based, and subject to legal, technical, operational, and risk constraints. Vaults are not live in the MVP.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
