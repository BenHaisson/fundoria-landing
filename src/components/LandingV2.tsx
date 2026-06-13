import { useState } from 'react';
import Navbar, { StatusTicker } from './Navbar';
import HeroV2 from './HeroV2';
import ProblemV2 from './ProblemV2';
import PassportSection from './PassportSection';
import HowItWorksV2 from './HowItWorksV2';
import ForTradersV2 from './ForTradersV2';
import ForCapitalV2 from './ForCapitalV2';
import ProtocolSection from './ProtocolSection';
import RoadmapV2 from './RoadmapV2';
import FAQV2 from './FAQV2';
import WhitelistSection from './WhitelistSection';
import FooterV2 from './FooterV2';
import WhitelistModal from './WhitelistModal';

export default function LandingV2() {
  const [isWhitelistOpen, setIsWhitelistOpen] = useState(false);
  const openWhitelist = () => setIsWhitelistOpen(true);
  const closeWhitelist = () => setIsWhitelistOpen(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-protocol-bg text-protocol-text">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Background orbs */}
      <div
        className="fixed top-[-5%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-blue/[0.06] blur-[140px] rounded-full pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-[-5%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-green/[0.04] blur-[140px] rounded-full pointer-events-none z-0"
        aria-hidden="true"
      />

      <Navbar onOpenWhitelist={openWhitelist} />
      <StatusTicker />

      <main id="main-content" className="relative z-10" tabIndex={-1}>
        <HeroV2 onOpenWhitelist={openWhitelist} />
        <ProblemV2 />
        <PassportSection />
        <HowItWorksV2 />
        <ForTradersV2 onOpenWhitelist={openWhitelist} />
        <ForCapitalV2 onOpenWhitelist={openWhitelist} />
        <ProtocolSection />
        <RoadmapV2 />
        <FAQV2 />
        <WhitelistSection onOpenWhitelist={openWhitelist} />
      </main>

      <FooterV2 onOpenWhitelist={openWhitelist} />
      <WhitelistModal isOpen={isWhitelistOpen} onClose={closeWhitelist} />
    </div>
  );
}
