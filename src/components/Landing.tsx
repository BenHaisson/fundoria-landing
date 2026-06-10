import { useState } from 'react';
import Navbar, { StatusTicker } from './Navbar';
import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
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
      {/* Background orbs */}
      <div className="fixed top-[-5%] right-[-10%] w-[50vw] h-[50vw] bg-blue/[0.07] blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-5%] left-[-10%] w-[40vw] h-[40vw] bg-green/[0.05] blur-[140px] rounded-full pointer-events-none z-0" />

      <Navbar onOpenWhitelist={openWhitelist} />
      <StatusTicker />
      <FloatingCTA onOpenWhitelist={openWhitelist} />

      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero onOpenWhitelist={openWhitelist} />
        {/* 2. Problem */}
        <Problem />
        {/* 3. Solution */}
        <Solution />
        {/* 4. For Traders */}
        <ForTraders onOpenWhitelist={openWhitelist} />
        {/* 5. For Capital Providers */}
        <CapitalProviderDashboard onOpenWhitelist={openWhitelist} />
        {/* 6. Trader Passport */}
        <TraderPassportSection />
        {/* 7. Fundoria Score */}
        <FundoriaScore />
        {/* 8. Social Features */}
        <SocialFeatures />
        {/* 9. Fundoria Vaults */}
        <FundoriaVaults />
        {/* 10. Leaderboards */}
        <Leaderboards />
        {/* 11. Business Model */}
        <BusinessModel />
        {/* 12. Roadmap */}
        <Roadmap />
        {/* 13. FAQ */}
        <FAQ />
      </main>

      {/* 14. Footer (includes final CTA) */}
      <Footer onOpenWhitelist={openWhitelist} />
      <WhitelistModal isOpen={isWhitelistOpen} onClose={closeWhitelist} />
    </div>
  );
}
