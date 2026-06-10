import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
import ProductStack from './ProductStack';
import TraderPassportSection from './TraderPassportSection';
import SocialFeatures from './SocialFeatures';
import DailyUseLoop from './DailyUseLoop';
import Leaderboards from './Leaderboards';
import CapitalProviderDashboard from './CapitalProviderDashboard';
import BusinessModel from './BusinessModel';
import ArchitectureV2 from './ArchitectureV2';
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
      <div className="fixed top-[-5%] right-[-10%] w-[50vw] h-[50vw] bg-blue/[0.08] blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-5%] left-[-10%] w-[40vw] h-[40vw] bg-green/[0.06] blur-[140px] rounded-full pointer-events-none z-0" />

      <Navbar onOpenWhitelist={openWhitelist} />
      <FloatingCTA onOpenWhitelist={openWhitelist} />

      <main className="relative z-10">
        <Hero onOpenWhitelist={openWhitelist} />
        <Problem />
        <Solution />
        <ProductStack />
        <TraderPassportSection />
        <SocialFeatures />
        <DailyUseLoop />
        <Leaderboards />
        <CapitalProviderDashboard />
        <BusinessModel />
        <ArchitectureV2 />
        <Roadmap />
        <FAQ />
      </main>

      <Footer onOpenWhitelist={openWhitelist} />
      <WhitelistModal isOpen={isWhitelistOpen} onClose={closeWhitelist} />
    </div>
  );
}
