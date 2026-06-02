import { ArrowRight, Activity, Shield, Cpu, Layers, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onShowWhitepaper?: () => void;
  onOpenWhitelist?: () => void;
}

const stats = [
  { icon: <Activity className="w-3 h-3" />, label: 'Network', value: 'HyperEVM', color: 'text-blue' },
  { icon: <Shield className="w-3 h-3" />, label: 'Custody', value: '0%', color: 'text-green' },
  { icon: <Cpu className="w-3 h-3" />, label: 'Risk Engine', value: 'On-Chain', color: 'text-cyan' },
  { icon: <Layers className="w-3 h-3" />, label: 'Phase', value: '01 / Active', color: 'text-blue' },
];

export default function Hero({ onShowWhitepaper, onOpenWhitelist }: HeroProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative pt-[160px] md:pt-[200px] pb-[120px] md:pb-[160px] text-center overflow-hidden px-6 transition-colors duration-300">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[140px] mix-blend-screen animate-pulse-custom" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] mix-blend-screen animate-pulse-custom delay-1000" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-green/5 rounded-full blur-[120px]" />
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue/30 bg-blue/5 backdrop-blur-md mb-10 group cursor-default"
        >
          <div className="relative w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-blue animate-ping-custom" />
            <span className="relative block w-2 h-2 rounded-full bg-blue" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue font-bold">
            PRE-LAUNCH · HYPEREVM NATIVE
          </span>
          <div className="w-px h-3 bg-blue/30 ml-2 mr-1" />
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-protocol-text/40">
            Phase 01: Active
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(54px,11vw,140px)] leading-[0.88] tracking-tighter uppercase mb-8 text-protocol-text"
        >
          <span className="block text-protocol-text/20 mb-2 font-mono text-sm tracking-widest animate-flicker">[ SYSTEM_INIT ]</span>
          Protocol-Native <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue via-cyan to-green bg-clip-text text-transparent">
              Capital Markets
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/50 to-transparent"
            />
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={itemVariants}
          className="max-w-[620px] mx-auto text-protocol-text-dim text-[16px] md:text-lg leading-relaxed mb-14 italic"
        >
          Fundoria is a protocol-controlled capital allocation and trading infrastructure
          where <span className="text-protocol-text">trader skill is verifiable</span> on-chain and risk is{' '}
          <span className="text-protocol-text">enforced by logic</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <button
            onClick={onOpenWhitelist}
            className="group relative bg-blue hover:bg-green text-black font-mono text-[12px] font-black uppercase tracking-[0.2em] px-10 py-5 rounded-sm overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_80px_rgba(16,185,129,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            <span className="relative flex items-center gap-3">
              Whitelist Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>

          <button
            onClick={onShowWhitepaper}
            className="group px-10 py-5 border border-protocol-border hover:border-blue/50 text-protocol-text/60 hover:text-protocol-text font-mono text-[12px] font-black uppercase tracking-[0.2em] rounded-sm transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">Read Documentation</span>
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="inline-grid grid-cols-2 md:grid-cols-4 gap-px bg-protocol-border border border-protocol-border max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-protocol-bg px-6 py-4 flex flex-col items-center gap-1.5 group hover:bg-protocol-accent-bg transition-colors"
            >
              <div className={`${s.color} opacity-60 group-hover:opacity-100 transition-opacity`}>{s.icon}</div>
              <div className={`font-mono text-[13px] font-black ${s.color}`}>{s.value}</div>
              <div className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/40">{s.label}</div>
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
