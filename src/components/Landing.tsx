import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
import ProductStack from './ProductStack';
import TraderPassportSection from './TraderPassportSection';
import DailyUseLoop from './DailyUseLoop';
import Leaderboards from './Leaderboards';
import CapitalProviderDashboard from './CapitalProviderDashboard';
import BusinessModel from './BusinessModel';
import ArchitectureV2 from './ArchitectureV2';
import Roadmap from './Roadmap';
import FAQ from './FAQ';
import Footer from './Footer';
import WhitelistModal from './WhitelistModal';
import FloatingCTA from './FloatingCTA';

export default function Landing() {
  const [isWhitelistOpen, setIsWhitelistOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-protocol-bg text-protocol-text">
      {/* Background Orbs */}
      <div className="fixed top-[-5%] sm:top-[-10%] right-[-10%] w-[80vw] sm:w-[50vw] h-[80vw] sm:h-[50vw] bg-blue/[0.10] blur-[80px] sm:blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-5%] sm:bottom-[-10%] left-[-10%] w-[70vw] sm:w-[40vw] h-[70vw] sm:h-[40vw] bg-green/[0.06] blur-[80px] sm:blur-[140px] rounded-full pointer-events-none z-0" />

      <Navbar onOpenWhitelist={() => setIsWhitelistOpen(true)} />
      <FloatingCTA onOpenWhitelist={() => setIsWhitelistOpen(true)} />

      <main className="relative z-10">
        <Hero onOpenWhitelist={() => setIsWhitelistOpen(true)} />
        <Problem />
        <Solution />
        <ProductStack />
        <TraderPassportSection />
        <DailyUseLoop />
        <Leaderboards />
        <CapitalProviderDashboard />
        <BusinessModel />
        <ArchitectureV2 />
        <Roadmap />
        <FAQ />
      </main>

      <Footer onOpenWhitelist={() => setIsWhitelistOpen(true)} />

      <WhitelistModal isOpen={isWhitelistOpen} onClose={() => setIsWhitelistOpen(false)} />
    </div>
  );
}
