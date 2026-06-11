import { ArrowRight, Activity, Database, Shield, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenWhitelist?: () => void;
}

const stats = [
  { icon: <Activity className="w-3 h-3" />, label: 'Trader Identity', value: 'Wallet-Based', color: 'text-blue' },
  { icon: <Database className="w-3 h-3" />, label: 'Performance', value: 'Risk-Scored', color: 'text-green' },
  { icon: <Shield className="w-3 h-3" />, label: 'Trader Reputation', value: 'Social', color: 'text-blue' },
  { icon: <Layers className="w-3 h-3" />, label: 'Capital Access', value: 'Future', color: 'text-green' },
];

const terminalLines = [
  { text: '[ FUNDORIA_PASSPORT ]', color: 'text-blue', delay: 200 },
  { text: '', delay: 400 },
  { text: 'wallet: 0x7a...f291', color: 'text-protocol-text-dim', delay: 600 },
  { text: 'source: Hyperliquid', color: 'text-protocol-text-dim', delay: 800 },
  { text: 'fundoria_score: 842 / 1000', color: 'text-green', delay: 1000 },
  { text: 'grade: STRONG  ·  top 8.4%', color: 'text-green', delay: 1200 },
  { text: 'badges: low_drawdown · consistency_streak', color: 'text-protocol-text-dim', delay: 1500 },
  { text: 'watchlist_count: 47 allocators', color: 'text-protocol-text-dim', delay: 1800 },
  { text: 'status: future_eligibility_signal', color: 'text-blue', delay: 2100 },
];

// Passport card sparkline
const sparkPoints = '10,36 28,26 48,30 68,14 88,19 108,9 128,16 148,7 168,13 188,4';

const passportBadges = [
  { label: 'Low Drawdown', color: 'border-green/40 text-green bg-green/5' },
  { label: 'Consistency Streak', color: 'border-blue/40 text-blue bg-blue/5' },
  { label: 'Capital Watchlist', color: 'border-green/40 text-green bg-green/5' },
];

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

      {/* Header */}
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

      {/* Score ring + stats */}
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
              fill="none"
              stroke="url(#heroScoreGrad)"
              strokeWidth="7"
              strokeLinecap="round"
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
          <div className="font-mono text-[8px] text-protocol-text-dim/50 mt-0.5">Watchlists: 48 allocators</div>
        </div>
      </div>

      {/* Sparkline */}
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

      {/* Badges */}
      <div className="px-4 py-3 flex flex-wrap gap-1">
        {passportBadges.map((b, i) => (
          <span key={i} className={`border font-mono text-[7px] uppercase tracking-widest px-1.5 py-0.5 ${b.color}`}>{b.label}</span>
        ))}
      </div>

      <div className="h-[2px] bg-linear-to-r from-transparent via-green/30 to-transparent" />
    </motion.div>
  );
}

function WatchlistCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
      className="border border-blue/20 bg-protocol-bg/95 backdrop-blur-md w-[200px] shadow-[0_12px_40px_rgba(0,0,0,0.4)] overflow-hidden"
    >
      <div className="h-[1px] bg-linear-to-r from-blue to-green" />
      <div className="px-3 py-2.5 border-b border-protocol-border bg-protocol-accent-bg">
        <div className="font-mono text-[7px] uppercase tracking-[0.3em] text-blue">Allocator Watchlist</div>
      </div>
      <div className="p-3 space-y-2">
        {[
          { label: 'Watching', value: '128', color: 'text-protocol-text' },
          { label: 'Elite Score (900+)', value: '24', color: 'text-green' },
          { label: 'Low Drawdown', value: '31', color: 'text-blue' },
          { label: 'Tournament Verified', value: '17', color: 'text-blue' },
          { label: 'Vault Candidates', value: 'Future', color: 'text-protocol-text-dim/40' },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="font-mono text-[8px] text-protocol-text-dim/50 uppercase tracking-wider">{row.label}</span>
            <span className={`font-mono text-[9px] font-black ${row.color}`}>{row.value}</span>
          </div>
        ))}
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
    <div className="border border-protocol-border bg-black/40 backdrop-blur-md rounded overflow-hidden">
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
          <div key={i} className={line.color || 'text-protocol-text'}>
            {line.text || <>&nbsp;</>}
          </div>
        ))}
        {visibleLines < terminalLines.length && <span className="animate-pulse text-blue">▋</span>}
      </div>
    </div>
  );
}

function HeroGridDots() {
  const dots = [
    { x: '20%',  y: '25%',  delay: '0s',    size: 3 },
    { x: '40%',  y: '15%',  delay: '0.8s',  size: 2 },
    { x: '60%',  y: '30%',  delay: '1.4s',  size: 3 },
    { x: '80%',  y: '20%',  delay: '0.4s',  size: 2 },
    { x: '15%',  y: '60%',  delay: '1.1s',  size: 2 },
    { x: '50%',  y: '55%',  delay: '0.2s',  size: 3 },
    { x: '75%',  y: '65%',  delay: '1.6s',  size: 2 },
    { x: '30%',  y: '80%',  delay: '0.6s',  size: 3 },
    { x: '65%',  y: '78%',  delay: '1.2s',  size: 2 },
    { x: '88%',  y: '50%',  delay: '0.9s',  size: 3 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue/40"
          style={{
            left: d.x,
            top: d.y,
            width: d.size,
            height: d.size,
            animation: `grid-dot-pulse ${2.5 + (i % 3) * 0.8}s ease-in-out ${d.delay} infinite`,
            boxShadow: `0 0 ${d.size * 3}px rgba(47,128,237,0.6)`,
          }}
        />
      ))}
      {/* Vertical data streams */}
      {['25%', '50%', '75%'].map((x, i) => (
        <div
          key={`stream-${i}`}
          className="absolute data-stream-line"
          style={{
            left: x,
            top: 0,
            height: '100%',
            animationDelay: `${i * 1.3}s`,
            animationDuration: `${4 + i}s`,
            opacity: 0.07,
          }}
        />
      ))}
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
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative pt-[130px] md:pt-[180px] pb-20 md:pb-32 overflow-hidden px-4 sm:px-6">
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
              className="inline-flex flex-wrap items-center gap-2 px-3 py-2 rounded-full border border-blue/30 bg-blue/5 backdrop-blur-md mb-7 max-w-full"
            >
              <div className="relative w-2 h-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-blue animate-ping-custom" />
                <span className="relative block w-2 h-2 rounded-full bg-blue" />
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-blue font-bold">
                HYPERLIQUID TRADER REPUTATION NETWORK
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-[clamp(44px,8vw,100px)] leading-[0.88] tracking-tighter uppercase mb-6 text-protocol-text"
            >
              Build Your<br />
              Trading Reputation<br />
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">
                  Before Capital Finds You.
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue/50 to-transparent"
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-protocol-text-dim text-[15px] md:text-[16px] leading-relaxed mb-4 max-w-[520px]"
            >
              Fundoria turns Hyperliquid wallet activity into{' '}
              <span className="text-protocol-text">Trader Passports</span>, Fundoria Scores, social rankings, badges,{' '}
              <span className="text-protocol-text">AI trading reviews</span>, and future capital eligibility.
            </motion.p>

            {/* Micro-line */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-[11px] text-blue italic mb-8"
            >
              "Your wallet is your trading resume."
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <button
                onClick={onOpenWhitelist}
                className="group relative w-full sm:w-auto bg-blue hover:bg-green text-black font-mono text-[11px] font-black uppercase tracking-[0.2em] px-8 py-4 rounded-sm overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(47,128,237,0.3)] hover:shadow-[0_0_80px_rgba(0,200,150,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <span className="relative flex items-center justify-center gap-3">
                  Create Your Passport
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              <button
                onClick={onOpenWhitelist}
                className="group w-full sm:w-auto px-8 py-4 border border-protocol-border hover:border-blue/50 text-protocol-text-dim hover:text-protocol-text font-mono text-[11px] font-black uppercase tracking-[0.2em] rounded-sm transition-all relative overflow-hidden flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-blue/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Join Early Access</span>
                <ArrowRight className="w-3.5 h-3.5 relative group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-protocol-border border border-protocol-border"
            >
              {stats.map((s, i) => (
                <div key={i} className="bg-protocol-bg px-4 py-4 flex flex-col items-center gap-1.5 group hover:bg-protocol-accent-bg transition-colors">
                  <div className={`${s.color} opacity-60 group-hover:opacity-100 transition-opacity`}>{s.icon}</div>
                  <div className={`font-mono text-[11px] font-black ${s.color} text-center leading-tight`}>{s.value}</div>
                  <div className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/50 text-center">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Visual cards */}
          <div className="relative flex flex-col items-center lg:items-end gap-5 lg:pl-4">
            {/* Passport card */}
            <HeroPassportCard />

            {/* Watchlist card — offset bottom */}
            <div className="self-start lg:self-auto lg:absolute lg:bottom-0 lg:-left-4">
              <WatchlistCard />
            </div>

            {/* Terminal — stacked below on mobile, absolute on desktop */}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-protocol-text-dim/30">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="w-4 h-4 text-protocol-text-dim/20 flex items-center justify-center">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
