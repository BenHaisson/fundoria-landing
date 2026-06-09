import { ArrowRight, Activity, Shield, TrendingUp, Layers, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenWhitelist?: () => void;
}

const stats = [
  { icon: <Activity className="w-3 h-3" />, label: 'Active Traders', value: '2,400+', color: 'text-blue' },
  { icon: <TrendingUp className="w-3 h-3" />, label: 'Avg Score', value: '731', color: 'text-green' },
  { icon: <Shield className="w-3 h-3" />, label: 'Capital Ready', value: '$0 Min', color: 'text-blue' },
  { icon: <Layers className="w-3 h-3" />, label: 'Status', value: 'Alpha', color: 'text-green' },
];

const terminalLines = [
  { text: '[ FUNDORIA_INIT ]', color: 'text-blue', delay: 300 },
  { text: '', delay: 500 },
  { text: 'source: Hyperliquid', color: 'text-protocol-text-dim', delay: 700 },
  { text: 'mode: read-only intelligence', color: 'text-protocol-text-dim', delay: 900 },
  { text: 'wallet: connected', color: 'text-green', delay: 1100 },
  { text: 'risk_profile: generating...', color: 'text-protocol-text-dim', delay: 1400 },
  { text: 'trader_passport: pending', color: 'text-protocol-text-dim', delay: 1700 },
  { text: 'capital_access: locked until verified', color: 'text-protocol-text-dim', delay: 2000 },
  { text: '', delay: 2200 },
  { text: 'status: pre-launch', color: 'text-blue', delay: 2400 },
];

function TerminalBlock() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    terminalLines.forEach((_, i) => {
      setTimeout(() => setVisibleLines(i + 1), terminalLines[i].delay);
    });
  }, []);

  return (
    <div className="w-full max-w-md mx-auto border border-protocol-border bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
      {/* Terminal chrome */}
      <div className="py-2.5 px-4 border-b border-protocol-border bg-protocol-accent-bg flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500/40" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
        <div className="w-2 h-2 rounded-full bg-green/40" />
        <span className="font-mono text-[9px] text-protocol-text-dim/40 ml-2 uppercase tracking-widest font-black flex-1">
          FUNDORIA_INIT :: WALLET_CONNECT
        </span>
        <span className="font-mono text-[8px] text-blue/50 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-blue animate-pulse" />
          LIVE
        </span>
      </div>
      <div className="p-5 font-mono text-[11px] leading-[2] text-left min-h-[180px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.color || 'text-protocol-text'}>
            {line.text || <>&nbsp;</>}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="animate-pulse text-blue">▋</span>
        )}
      </div>
      <div className="h-[2px] bg-linear-to-r from-transparent via-blue to-transparent animate-flash" />
    </div>
  );
}

export default function Hero({ onOpenWhitelist }: HeroProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative pt-[140px] md:pt-[200px] pb-25 md:pb-45 text-center overflow-hidden px-4 sm:px-6 transition-colors duration-300">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[140px] mix-blend-screen animate-pulse-custom" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-green/5 rounded-full blur-[120px]" />
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
        {/* Eyebrow */}
        <motion.div
          variants={itemVariants}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-3 py-2 sm:px-4 rounded-full border border-blue/30 bg-blue/5 backdrop-blur-md mb-8 sm:mb-10 group cursor-default max-w-[90vw]"
        >
          <div className="relative w-2 h-2 shrink-0">
            <span className="absolute inset-0 rounded-full bg-blue animate-ping-custom" />
            <span className="relative block w-2 h-2 rounded-full bg-blue" />
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue font-bold">
            HYPERLIQUID-NATIVE TRADER INTELLIGENCE
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(48px,10vw,130px)] leading-[0.88] tracking-tighter uppercase mb-8 text-protocol-text"
        >
          Turn Trading<br />
          Performance Into<br />
          <span className="relative inline-block">
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">
              Verified Capital Access.
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -bottom-2 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue/50 to-transparent"
            />
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={itemVariants}
          className="max-w-[620px] mx-auto text-protocol-text-dim text-[14px] sm:text-[16px] md:text-lg leading-relaxed mb-10 sm:mb-14 px-2"
        >
          Fundoria indexes Hyperliquid wallet activity and transforms it into{' '}
          <span className="text-protocol-text">verified reputation</span>, risk intelligence, rankings, rewards, and{' '}
          <span className="text-protocol-text">capital eligibility</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          <button
            onClick={onOpenWhitelist}
            className="group relative w-full sm:w-auto bg-blue hover:bg-green text-black font-mono text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] px-8 sm:px-10 py-4 sm:py-5 rounded-sm overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(47,128,237,0.3)] hover:shadow-[0_0_80px_rgba(0,200,150,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            <span className="relative flex items-center justify-center gap-3">
              Join Early Access
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>

          <a
            href="#product"
            className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border border-protocol-border hover:border-blue/50 text-protocol-text-dim hover:text-protocol-text font-mono text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] rounded-sm transition-all relative overflow-hidden flex items-center justify-center gap-2"
          >
            <div className="absolute inset-0 bg-blue/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">Explore the Protocol</span>
            <ArrowRight className="w-3.5 h-3.5 relative group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Terminal block */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <TerminalBlock />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-protocol-border border border-protocol-border w-full max-w-sm md:max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-protocol-bg px-5 py-5 flex flex-col items-center gap-2 group hover:bg-protocol-accent-bg transition-colors"
            >
              <div className={`${s.color} opacity-60 group-hover:opacity-100 transition-opacity`}>{s.icon}</div>
              <div className={`font-mono text-[15px] font-black tabular-nums ${s.color}`}>{s.value}</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/50">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Left vertical bars */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: i % 2 === 0 ? 40 : 20 }}
            transition={{ delay: 1 + i * 0.1, duration: 1 }}
            className="w-[2px] bg-blue"
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-protocol-text-dim/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-protocol-text-dim/20" />
        </motion.div>
      </motion.div>

      {/* Right vertical bars */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: i % 2 !== 0 ? 40 : 20 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 1 }}
            className="w-[2px] bg-green"
          />
        ))}
      </div>
    </section>
  );
}
