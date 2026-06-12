import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Lock, Zap } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import ScrollCue from './ScrollCue';

interface HeroProps {
  onOpenWhitelist?: () => void;
}

const trustIndicators = [
  { icon: <Lock className="w-3.5 h-3.5" />,  label: 'Non-custodial',          color: 'text-green',  dot: 'bg-green' },
  { icon: <Zap className="w-3.5 h-3.5" />,   label: 'HyperEVM native',         color: 'text-blue',   dot: 'bg-blue' },
  { icon: <Cpu className="w-3.5 h-3.5" />,   label: 'Risk enforced by code',   color: 'text-blue',   dot: 'bg-blue' },
  { icon: <Shield className="w-3.5 h-3.5" />,label: 'Pre-launch · Phase 01',   color: 'text-amber-500', dot: 'bg-amber-500' },
];

const terminalLines = [
  { text: '[ FUNDORIA :: PASSPORT_ALPHA ]',        color: 'text-blue',              delay: 200 },
  { text: '',                                       color: '',                        delay: 400 },
  { text: 'wallet: 0x7a...f291',                   color: 'text-protocol-text-dim', delay: 600 },
  { text: 'source: hyperliquid_chain',             color: 'text-protocol-text-dim', delay: 800 },
  { text: 'fundoria_score: 842 / 1000',            color: 'text-green',             delay: 1000 },
  { text: 'grade: STRONG  ·  top 8.4%',           color: 'text-green',             delay: 1200 },
  { text: 'risk_enforced: true',                   color: 'text-protocol-text-dim', delay: 1500 },
  { text: 'custody: none',                         color: 'text-protocol-text-dim', delay: 1700 },
  { text: 'status: future_eligibility_signal',     color: 'text-blue',              delay: 2000 },
];

const sparkPoints = '10,36 28,26 48,30 68,14 88,19 108,9 128,16 148,7 168,13 188,4';

const passportBadges = [
  { label: 'Low Drawdown',      color: 'border-green/40 text-green bg-green/5' },
  { label: 'Consistency Streak', color: 'border-blue/40 text-blue bg-blue/5' },
  { label: 'Capital Watchlist', color: 'border-green/40 text-green bg-green/5' },
];

function HeroGridDots() {
  const dots = [
    { x: '20%', y: '25%', delay: '0s',   size: 3 },
    { x: '40%', y: '15%', delay: '0.8s', size: 2 },
    { x: '60%', y: '30%', delay: '1.4s', size: 3 },
    { x: '80%', y: '20%', delay: '0.4s', size: 2 },
    { x: '15%', y: '60%', delay: '1.1s', size: 2 },
    { x: '50%', y: '55%', delay: '0.2s', size: 3 },
    { x: '75%', y: '65%', delay: '1.6s', size: 2 },
    { x: '30%', y: '80%', delay: '0.6s', size: 3 },
    { x: '65%', y: '78%', delay: '1.2s', size: 2 },
    { x: '88%', y: '50%', delay: '0.9s', size: 3 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue/40"
          style={{
            left: d.x, top: d.y, width: d.size, height: d.size,
            animation: `grid-dot-pulse ${2.5 + (i % 3) * 0.8}s ease-in-out ${d.delay} infinite`,
            boxShadow: `0 0 ${d.size * 3}px rgba(47,128,237,0.6)`,
          }}
        />
      ))}
      {['25%', '50%', '75%'].map((x, i) => (
        <div
          key={`stream-${i}`}
          className="absolute data-stream-line"
          style={{ left: x, top: 0, height: '100%', animationDelay: `${i * 1.3}s`, animationDuration: `${4 + i}s`, opacity: 0.06 }}
        />
      ))}
    </div>
  );
}

function HeroPassportCard() {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const score = 842;
  const fraction = score / 1000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      className="relative border border-protocol-border bg-protocol-bg w-full max-w-[300px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      <div className="h-[2px] bg-linear-to-r from-blue via-green to-blue" />
      <div className="px-4 py-3 border-b border-protocol-border bg-protocol-accent-bg flex items-center justify-between">
        <div>
          <div className="font-mono text-[7px] uppercase tracking-[0.3em] text-protocol-text-dim/50">Trader Passport</div>
          <div className="font-mono text-[11px] font-black text-blue mt-0.5">0x7A...93F</div>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 border border-amber-500/30 bg-amber-500/5">
          <div className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-[7px] uppercase tracking-widest text-amber-500">Future Eligibility</span>
        </div>
      </div>
      <div className="px-4 py-4 flex items-center gap-4 border-b border-protocol-border">
        <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
          <svg width="96" height="96" viewBox="0 0 96 96" className="-rotate-90">
            <circle cx="48" cy="48" r={radius} fill="none" stroke="#0E1A2E" strokeWidth="7" />
            <defs>
              <linearGradient id="heroScoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2F80ED" />
                <stop offset="100%" stopColor="#00C896" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="48" cy="48" r={radius}
              fill="none" stroke="url(#heroScoreGrad)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: circumference * (1 - fraction) }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="font-display text-[22px] leading-none text-protocol-text">{score}</span>
            <span className="font-mono text-[7px] uppercase tracking-widest text-protocol-text-dim/50">/ 1000</span>
          </div>
        </div>
        <div>
          <div className="font-mono text-[7px] uppercase tracking-widest text-protocol-text-dim/50 mb-1">Fundoria Score</div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="border border-blue/30 bg-blue/5 font-mono text-[7px] uppercase text-blue px-1.5 py-0.5">Grade A-</span>
            <span className="font-mono text-[8px] text-green">Top 3.2%</span>
          </div>
          <div className="font-mono text-[8px] text-protocol-text-dim/50">4.8% Max DD · 91% Consistency</div>
        </div>
      </div>
      <div className="px-4 py-3 border-b border-protocol-border">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-[7px] uppercase tracking-widest text-protocol-text-dim/50">30D PnL</span>
          <span className="font-mono text-[9px] font-black text-green">+19.8%</span>
        </div>
        <svg viewBox="0 0 200 40" className="w-full h-6" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroSparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00C896" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points={sparkPoints} fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points={`10,40 ${sparkPoints} 188,40`} fill="url(#heroSparkGrad)" />
        </svg>
      </div>
      <div className="px-4 py-3 flex flex-wrap gap-1">
        {passportBadges.map((b, i) => (
          <span key={i} className={`border font-mono text-[7px] uppercase tracking-widest px-1.5 py-0.5 ${b.color}`}>{b.label}</span>
        ))}
      </div>
      <div className="h-[2px] bg-linear-to-r from-transparent via-green/30 to-transparent" />
      <div className="px-4 py-2 flex items-center justify-center">
        <span className="font-mono text-[7px] uppercase tracking-widest text-protocol-text-dim/30">
          Illustrative · Sample Data
        </span>
      </div>
    </motion.div>
  );
}

function TerminalMini() {
  const [visibleLines, setVisibleLines] = useState(0);
  useEffect(() => {
    terminalLines.forEach((_, i) => {
      setTimeout(() => setVisibleLines(i + 1), terminalLines[i].delay);
    });
  }, []);
  return (
    <div className="border border-protocol-border bg-black/40 backdrop-blur-md overflow-hidden">
      <div className="px-3 py-2 border-b border-protocol-border bg-protocol-accent-bg flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-green/40" />
        <span className="font-mono text-[7px] uppercase tracking-widest text-protocol-text-dim/40 ml-1.5">FUNDORIA_INIT :: PASSPORT_ALPHA</span>
        <span className="ml-auto font-mono text-[7px] text-blue/50 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-blue animate-pulse" />ALPHA
        </span>
      </div>
      <div className="p-3 font-mono text-[10px] leading-[1.8]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.color || 'text-protocol-text'}>{line.text || <>&nbsp;</>}</div>
        ))}
        {visibleLines < terminalLines.length && <span className="animate-pulse text-blue">▋</span>}
      </div>
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
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section id="hero" className="relative pt-[130px] md:pt-[180px] pb-20 md:pb-32 overflow-hidden px-4 sm:px-6">
      {/* Animated grid dots + data streams */}
      <HeroGridDots />

      {/* Background orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue/8 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-green/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Copy + CTAs */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="inline-flex flex-wrap items-center gap-2 px-3 py-2 border border-blue/30 bg-blue/5 backdrop-blur-md mb-7 max-w-full"
            >
              <div className="relative w-2 h-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-blue animate-ping-custom" />
                <span className="relative block w-2 h-2 rounded-full bg-blue" />
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-blue font-bold">
                Hyperliquid Trader Reputation Network
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-[clamp(44px,8vw,100px)] leading-[0.88] tracking-tighter uppercase mb-5 text-protocol-text"
            >
              Trader<br />
              Reputation<br />
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">
                  Network
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue/50 to-transparent"
                />
              </span>
              <span className="block text-[clamp(16px,2.8vw,32px)] font-mono font-normal tracking-wide mt-2 text-protocol-text-dim/60 normal-case leading-tight">
                for Programmable Capital
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-protocol-text-dim text-[16px] md:text-[17px] leading-[1.75] mb-8 max-w-[540px]"
            >
              Protocol-native capital markets infrastructure where trader skill becomes{' '}
              <span className="text-protocol-text">verifiable</span>, capital allocation becomes{' '}
              <span className="text-protocol-text">programmable</span>, and risk is{' '}
              <span className="text-protocol-text">enforced by code</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <CTAButton
                onClick={onOpenWhitelist}
                variant="primary"
                className="sm:w-auto w-full text-[11px]"
              >
                Join Whitelist
              </CTAButton>

              <button
                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto px-7 py-4 border border-protocol-border hover:border-blue/50 text-protocol-text-dim hover:text-protocol-text font-mono text-[11px] font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-blue/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Read Protocol</span>
              </button>

              <button
                onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto px-7 py-4 border border-blue/20 hover:border-blue/50 text-blue/70 hover:text-blue font-mono text-[11px] font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden flex items-center justify-center gap-2"
              >
                <span className="relative">View Roadmap</span>
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-2"
            >
              {trustIndicators.map((t, i) => (
                <div
                  key={i}
                  className="border border-protocol-border card-surface px-3 py-3.5 flex flex-col items-center gap-2 group hover:border-blue/30 transition-all duration-400 hover:-translate-y-0.5"
                >
                  <div className={`${t.color} opacity-70 group-hover:opacity-100 transition-opacity duration-400 flex items-center gap-1.5`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dot} flex-shrink-0`} aria-hidden="true" />
                    {t.icon}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/70 text-center leading-snug">
                    {t.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Visual cards */}
          <div className="relative flex flex-col items-center lg:items-end gap-5 lg:pl-4">
            <HeroPassportCard />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="w-full max-w-[300px] lg:absolute lg:top-4 lg:-left-16"
            >
              <TerminalMini />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto"
      >
        <ScrollCue nextId="audiences" nextLabel="Who It's For" />
      </motion.div>
    </section>
  );
}
