import { TrendingUp, Building2, Landmark } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import AudienceCard from './ui/AudienceCard';

interface AudienceSectionProps {
  onOpenWhitelist?: () => void;
}

export default function AudienceSection({ onOpenWhitelist }: AudienceSectionProps) {
  return (
    <section
      id="audiences"
      aria-labelledby="audiences-heading"
      className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Who It's For"
          centered
          title={
            <span id="audiences-heading">
              Three Audiences.<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">
                One Reputation Network.
              </span>
            </span>
          }
          subtitle="Fundoria serves traders proving skill, capital providers discovering talent, and institutions deploying programmable capital — all on the same verifiable layer."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <AudienceCard
            icon={<TrendingUp className="w-6 h-6" aria-hidden="true" />}
            audience="Traders"
            eyebrow="For Active Traders"
            problem="Your track record exists on-chain, but no one can read it. PnL screenshots aren't proof. Capital providers can't find you. Your edge is invisible until Fundoria makes it legible."
            benefits={[
              'Trader Passport generated from on-chain Hyperliquid data',
              'Fundoria Score — risk-adjusted across 10 dimensions, not just PnL',
              'Public rankings, badges, and verifiable consistency metrics',
              'AI-generated trading journal highlighting your edge',
              'Visible to capital providers and allocators looking for talent',
              'Future eligibility for mandate-based capital access programs',
            ]}
            cta="Join the Whitelist"
            onCta={onOpenWhitelist}
            color="blue"
            delay={0}
          />

          <AudienceCard
            icon={<Building2 className="w-6 h-6" aria-hidden="true" />}
            audience="Capital Providers"
            eyebrow="For Allocators"
            problem="You rely on referrals, raw PnL, and gut instinct. There is no structured, tamper-proof way to evaluate a trader's risk discipline before committing capital — until now."
            benefits={[
              'Filter traders by verified Score, max drawdown, and win consistency',
              'Private watchlists and structured candidate pipelines',
              'No self-reported data — all metrics sourced from on-chain history',
              'Risk intelligence built before a capital conversation starts',
              'Future mandate-based smart vault infrastructure',
              'On-chain performance reporting and audit trail',
            ]}
            cta="Join the Allocator Waitlist"
            onCta={onOpenWhitelist}
            color="green"
            delay={0.08}
          />

          <AudienceCard
            icon={<Landmark className="w-6 h-6" aria-hidden="true" />}
            audience="DAOs & Institutions"
            eyebrow="For Institutions"
            problem="Treasuries need verifiable access to market operators — but not opaque mandates, not unauditable managers, and not protocols that require giving up custody to participate."
            benefits={[
              'Mandate-specific vault design with protocol-defined risk limits',
              'Verifiable trader performance sourced from Hyperliquid wallet history',
              'Risk limits enforced by code — not by verbal agreement',
              'Periodic on-chain performance checkpoints for full auditability',
              'Governance-compatible capital allocation architecture',
              'Future institutional API, reporting dashboard, and compliance layer',
            ]}
            cta="Request Institutional Access"
            onCta={onOpenWhitelist}
            color="violet"
            delay={0.16}
          />
        </div>
      </div>
    </section>
  );
}
