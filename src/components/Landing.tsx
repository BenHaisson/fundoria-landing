import React, { useState } from 'react';
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import ProtocolLogic from './ProtocolLogic.tsx';
import Vision from './Vision.tsx';
import Architecture from './Architecture.tsx';
import RiskControls from './RiskControls.tsx';
import TokenEconomics from './TokenEconomics.tsx';
import Participation from './Participation.tsx';
import Partnerships from './Partnerships.tsx';
import Roadmap from './Roadmap.tsx';
import FAQ from './FAQ.tsx';
import Footer from './Footer.tsx';
import WhitelistModal from './WhitelistModal.tsx';
import FloatingCTA from './FloatingCTA.tsx';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface LandingProps {
  onShowWhitepaper: () => void;
}

export default function Landing({ onShowWhitepaper }: LandingProps) {
  const [isWhitelistOpen, setIsWhitelistOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-protocol-bg text-protocol-text transition-colors duration-300">
      {/* Background Orbs */}
      <div className="fixed top-[-5%] sm:top-[-10%] right-[-10%] w-[80vw] sm:w-[50vw] h-[80vw] sm:h-[50vw] bg-blue/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-5%] sm:bottom-[-10%] left-[-10%] w-[70vw] sm:w-[40vw] h-[70vw] sm:h-[40vw] bg-green/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none z-0" />

      <Navbar onShowWhitepaper={onShowWhitepaper} onOpenWhitelist={() => setIsWhitelistOpen(true)} />

      <FloatingCTA onOpenWhitelist={() => setIsWhitelistOpen(true)} />
      
      <main className="relative z-10">
        <Hero onShowWhitepaper={onShowWhitepaper} onOpenWhitelist={() => setIsWhitelistOpen(true)} />
        <ProtocolLogic />
        <Vision onOpenWhitelist={() => setIsWhitelistOpen(true)} />
        <Architecture />
        <RiskControls />
        <TokenEconomics />
        <Participation onOpenWhitelist={() => setIsWhitelistOpen(true)} />
        <Partnerships />
        <Roadmap />
        <FAQ />
      </main>

      <Footer onShowWhitepaper={onShowWhitepaper} onOpenWhitelist={() => setIsWhitelistOpen(true)} />

      <WhitelistModal isOpen={isWhitelistOpen} onClose={() => setIsWhitelistOpen(false)} />
    </div>
  );
}
