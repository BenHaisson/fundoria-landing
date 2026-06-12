import { useState } from 'react';
import Navbar, { StatusTicker } from './Navbar';
import Hero from './Hero';
import AudienceSection from './AudienceSection';
import Problem from './Problem';
import Solution from './Solution';
import ArchitectureV2 from './ArchitectureV2';
import HowItWorks from './HowItWorks';
import ForTraders from './ForTraders';
import CapitalProviderDashboard from './CapitalProviderDashboard';
import TraderPassportSection from './TraderPassportSection';
import FundoriaScore from './FundoriaScore';
import SocialFeatures from './SocialFeatures';
import FundoriaVaults from './FundoriaVaults';
import Leaderboards from './Leaderboards';
import BusinessModel from './BusinessModel';
import Roadmap from './Roadmap';
import FAQ from './FAQ';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import WhitelistModal from './WhitelistModal';
import SectionProgress from './SectionProgress';
import MobileProgress from './MobileProgress';
import type { SectionDef } from '../hooks/useActiveSection';

const NAV_SECTIONS: SectionDef[] = [
  { id: 'hero',           label: 'Hero' },
  { id: 'audiences',      label: 'Who It\'s For' },
  { id: 'vision',         label: 'Why' },
  { id: 'solution',       label: 'Solution' },
  { id: 'intelligence',   label: 'Intelligence' },
  { id: 'how-it-works',   label: 'How It Works' },
  { id: 'for-traders',    label: 'Traders' },
  { id: 'capital-access', label: 'Capital' },
  { id: 'passport',       label: 'Passport' },
  { id: 'score',          label: 'Score' },
  { id: 'social',         label: 'Network' },
  { id: 'vaults',         label: 'Vaults' },
  { id: 'leaderboards',   label: 'Rankings' },
  { id: 'business-model', label: 'Revenue' },
  { id: 'roadmap',        label: 'Roadmap' },
  { id: 'faq',            label: 'FAQ' },
];

export default function Landing() {
  const [isWhitelistOpen, setIsWhitelistOpen] = useState(false);
  const openWhitelist = () => setIsWhitelistOpen(true);
  const closeWhitelist = () => setIsWhitelistOpen(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-protocol-bg text-protocol-text">
      <a href="#main-content" className="skip-to-content">Skip to content</a>

      {/* Background orbs — fixed, behind everything */}
      <div className="fixed top-[-5%] right-[-10%] w-[50vw] h-[50vw] bg-blue/[0.07] blur-[140px] rounded-full pointer-events-none z-0" aria-hidden="true" />
      <div className="fixed bottom-[-5%] left-[-10%] w-[40vw] h-[40vw] bg-green/[0.05] blur-[140px] rounded-full pointer-events-none z-0" aria-hidden="true" />

      <Navbar onOpenWhitelist={openWhitelist} />
      <StatusTicker />

      {/* Section progress navigator (desktop right-side dots) */}
      <SectionProgress sections={NAV_SECTIONS} />

      {/* Mobile scroll progress bar (thin line below nav+ticker) */}
      <MobileProgress />

      <FloatingCTA onOpenWhitelist={openWhitelist} />

      <main id="main-content" className="relative z-10" tabIndex={-1}>
        {/* 1. Hero */}
        <Hero onOpenWhitelist={openWhitelist} />
        {/* 2. Who It's For */}
        <AudienceSection onOpenWhitelist={openWhitelist} />
        {/* 3. Why Fundoria (Problem) */}
        <Problem />
        {/* 4. Solution + Future Protocol Architecture */}
        <Solution />
        {/* 5. MVP Intelligence Layer */}
        <ArchitectureV2 />
        {/* 6. How It Works — 8-step journey */}
        <HowItWorks />
        {/* 7. For Traders — deep dive */}
        <ForTraders onOpenWhitelist={openWhitelist} />
        {/* 8. For Capital Providers — deep dive */}
        <CapitalProviderDashboard onOpenWhitelist={openWhitelist} />
        {/* 9. Trader Passport */}
        <TraderPassportSection />
        {/* 10. Fundoria Score */}
        <FundoriaScore />
        {/* 11. Social Features */}
        <SocialFeatures />
        {/* 12. Fundoria Vaults */}
        <FundoriaVaults />
        {/* 13. Leaderboards */}
        <Leaderboards />
        {/* 14. Business Model */}
        <BusinessModel />
        {/* 15. Roadmap */}
        <Roadmap />
        {/* 16. FAQ */}
        <FAQ />
      </main>

      <Footer onOpenWhitelist={openWhitelist} />
      <WhitelistModal isOpen={isWhitelistOpen} onClose={closeWhitelist} />
    </div>
  );
}
