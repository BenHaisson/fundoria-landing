import { motion } from 'motion/react';
import SectionHeader from './ui/SectionHeader';
import RoadmapItem from './ui/RoadmapItem';

type PhaseStatus =
  | 'done' | 'live' | 'in-build' | 'coming-soon'
  | 'planned' | 'future' | 'research' | 'in-audit' | 'phased';

const phases: {
  phase: string;
  meta: string;
  title: string;
  desc: string;
  status: PhaseStatus;
  statusLabel: string;
  timeline: string;
  active: boolean;
  milestones: string[];
}[] = [
  {
    phase: 'Phase 0',
    meta: 'Foundation',
    title: 'Brand · Architecture · Landing',
    desc: 'Brand system, landing page, protocol architecture draft, whitepaper structure, and early community building.',
    status: 'live',
    statusLabel: 'Live',
    timeline: 'Done',
    active: true,
    milestones: [
      'Brand system + design tokens',
      'Landing page v0.1',
      'Protocol architecture draft',
      'Whitepaper structure',
    ],
  },
  {
    phase: 'Phase 1',
    meta: 'Interface + Evaluation',
    title: 'Wallet · Passport · Reputation',
    desc: 'Trader onboarding, Hyperliquid wallet indexing, first-generation Trader Passport, evaluation interface, and Fundoria Score v1.',
    status: 'in-build',
    statusLabel: 'In Build',
    timeline: 'Active',
    active: false,
    milestones: [
      'Trader onboarding flow',
      'Hyperliquid performance import',
      'Trader Reputation Passport',
      'Evaluation interface',
    ],
  },
  {
    phase: 'Phase 2',
    meta: 'Vault Infrastructure',
    title: 'Smart Vaults · Non-custodial Logic',
    desc: 'Smart vault architecture design, non-custodial deposit logic, allocation rules, and settlement framework — subject to legal and technical review.',
    status: 'research',
    statusLabel: 'Research',
    timeline: 'Planned',
    active: false,
    milestones: [
      'Smart vault architecture',
      'Non-custodial deposit logic',
      'Allocation rules design',
      'Settlement framework',
    ],
  },
  {
    phase: 'Phase 3',
    meta: 'Capital Provider Dashboard',
    title: 'Discovery · Allocation · Reporting',
    desc: 'Vault discovery interface, capital allocation dashboard, risk profile visibility, and reporting for capital providers.',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    timeline: 'Planned',
    active: false,
    milestones: [
      'Vault discovery interface',
      'Capital allocation dashboard',
      'Risk profile visibility',
      'Reporting interface',
    ],
  },
  {
    phase: 'Phase 4',
    meta: 'Risk Engine + Proof Layer',
    title: 'Risk Enforcement · On-chain Proof',
    desc: 'Drawdown enforcement, risk limit monitoring, signed performance attestations, and on-chain checkpoint infrastructure.',
    status: 'in-audit',
    statusLabel: 'In Design',
    timeline: 'Future',
    active: false,
    milestones: [
      'Drawdown enforcement logic',
      'Risk limit monitoring',
      'Signed attestations',
      'On-chain checkpoints',
    ],
  },
  {
    phase: 'Phase 5',
    meta: 'Governance + Ecosystem',
    title: 'DAO Governance · Institutional Layer',
    desc: 'DAO governance framework, contributor ecosystem, protocol parameter voting, and institutional integrations — subject to legal and regulatory constraints.',
    status: 'phased',
    statusLabel: 'Phased',
    timeline: 'Future',
    active: false,
    milestones: [
      'DAO governance framework',
      'Contributor ecosystem',
      'Protocol parameter voting',
      'Institutional integrations',
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Roadmap"
          centered
          title={
            <>
              Six Phases.<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">
                Reputation First.
              </span>
            </>
          }
          subtitle="From Foundation to Governance — each phase is milestone-gated, not calendar-based."
        />

        <p className="font-mono text-[9px] text-protocol-text-dim/40 uppercase tracking-wider text-center -mt-8 mb-14 max-w-xl mx-auto">
          Timeline is milestone-gated and may evolve based on product, legal, security, and ecosystem readiness.
        </p>

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
              <RoadmapItem
                key={i}
                index={i}
                phase={p.phase}
                meta={p.meta}
                title={p.title}
                desc={p.desc}
                status={p.status}
                statusLabel={p.statusLabel}
                timeline={p.timeline}
                milestones={p.milestones}
                active={p.active}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
