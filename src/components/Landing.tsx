import { useState } from 'react';
import Navbar, { StatusTicker } from './Navbar';
import Hero from './Hero';
import AudienceSection from './AudienceSection';
import Problem from './Problem';
import Solution from './Solution';
import HowItWorks from './HowItWorks';
import ArchitectureV2 from './ArchitectureV2';
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

export default function Landing() {
  const [isWhitelistOpen, setIsWhitelistOpen] = useState(false);
  const openWhitelist = () => setIsWhitelistOpen(true);
  const closeWhitelist = () => setIsWhitelistOpen(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-protocol-bg text-protocol-text">
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      {/* Background orbs — fixed, behind everything */}
      <div className="fixed top-[-5%] right-[-10%] w-[50vw] h-[50vw] bg-blue/[0.07] blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-5%] left-[-10%] w-[40vw] h-[40vw] bg-green/[0.05] blur-[140px] rounded-full pointer-events-none z-0" />

      <Navbar onOpenWhitelist={openWhitelist} />
      <StatusTicker />
      <FloatingCTA onOpenWhitelist={openWhitelist} />

      <main id="main-content" className="relative z-10" tabIndex={-1}>
        {/* 1. Hero */}
        <Hero onOpenWhitelist={openWhitelist} />
        {/* 2. Audience cards — quick audience identification */}
        <AudienceSection onOpenWhitelist={openWhitelist} />
        {/* 3. Problem */}
        <Problem />
        {/* 4. Solution + Architecture Flow */}
        <Solution />
        {/* 5. MVP Intelligence Architecture */}
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

      {/* 16. Footer (includes final CTA) */}
      <Footer onOpenWhitelist={openWhitelist} />
      <WhitelistModal isOpen={isWhitelistOpen} onClose={closeWhitelist} />
    </div>
  );
}
