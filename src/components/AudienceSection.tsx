import { TrendingUp, Building2, Landmark } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import AudienceCard from './ui/AudienceCard';

interface AudienceSectionProps {
  onOpenWhitelist?: () => void;
}

export default function AudienceSection({ onOpenWhitelist }: AudienceSectionProps) {
  return (
    <section id="audiences" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Who It's For"
          centered
          title={
            <>
              Three Audiences.<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">
                One Reputation Network.
              </span>
            </>
          }
          subtitle="Fundoria serves traders proving skill, capital providers discovering talent, and institutions deploying programmable capital — all on the same verifiable layer."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <AudienceCard
            icon={<TrendingUp className="w-6 h-6" />}
            audience="Traders"
            eyebrow="For Active Traders"
            problem="Skill is real, but it's invisible. Screenshots can't be verified, social noise drowns signal, and capital providers have no reliable way to find disciplined operators."
            benefits={[
              'Public Trader Passport built from on-chain data',
              'Fundoria Score — risk-adjusted, not just PnL',
              'Badges, rankings, and social reputation layer',
              'AI-generated trading journal and review',
              'Visibility to capital providers and allocators',
              'Future eligibility for capital access programs',
            ]}
            cta="Create Your Passport"
            onCta={onOpenWhitelist}
            color="blue"
            delay={0}
          />

          <AudienceCard
            icon={<Building2 className="w-6 h-6" />}
            audience="Capital Providers"
            eyebrow="For Allocators"
            problem="Discovery is broken. Raw PnL hides risk. Social signal is manipulated. There is no structured way to find disciplined traders before they become obvious."
            benefits={[
              'Filter traders by Score, drawdown, and consistency',
              'Private watchlists and candidate pipelines',
              'Verified performance — no self-reported data',
              'Risk intelligence before capital is deployed',
              'Future mandate-based vault infrastructure',
              'On-chain reporting and audit trail',
            ]}
            cta="Join Allocator Waitlist"
            onCta={onOpenWhitelist}
            color="green"
            delay={0.08}
          />

          <AudienceCard
            icon={<Landmark className="w-6 h-6" />}
            audience="DAOs & Institutions"
            eyebrow="For Institutions"
            problem="Treasuries need transparent, programmable access to verified market operators without giving up custody or relying on opaque managers with unverifiable track records."
            benefits={[
              'Mandate-specific vault design per allocation',
              'Verifiable trader performance — wallet-sourced',
              'Protocol-enforced risk limits, not promises',
              'On-chain performance checkpoints',
              'Governance-ready capital allocation structure',
              'Future institutional API and reporting access',
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
