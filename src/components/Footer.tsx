import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink, ChevronUp, Twitter, MessageCircle, Send } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface FooterProps {
  onOpenWhitelist?: () => void;
}

export default function Footer({ onOpenWhitelist }: FooterProps) {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* CTA Section */}
      <section className="relative py-24 sm:py-36 lg:py-44 px-4 sm:px-6 text-center border-t border-protocol-border bg-protocol-bg overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-linear-to-b from-protocol-text/20 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-green/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] h-[300px] bg-blue/5 rounded-full blur-[80px]" />
        </div>
        <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-protocol-border/50 hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-protocol-border/50 hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-protocol-border/50 hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-protocol-border/50 hidden lg:block" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-mono text-[10px] uppercase tracking-[0.4em] text-green mb-5 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Early Access Open
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="font-display text-[clamp(36px,9vw,110px)] uppercase leading-[0.9] mb-6 tracking-tight text-protocol-text">
            Your Wallet Is<br />
            <span className="bg-linear-to-r from-green to-blue bg-clip-text text-transparent">
              Your Trading Resume.
            </span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-protocol-text-dim text-[16px] mb-14 max-w-xl mx-auto">
            Join Fundoria early and start building the reputation layer that future capital markets can trust.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 px-4 sm:px-0">
            <button
              onClick={onOpenWhitelist}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-blue hover:bg-green text-black font-mono text-[11px] font-black uppercase tracking-widest overflow-hidden transition-all shadow-[0_0_40px_rgba(47,128,237,0.25)] hover:shadow-[0_0_60px_rgba(0,200,150,0.45)]"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <span className="relative flex items-center justify-center gap-3">
                Create Your Passport
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={onOpenWhitelist}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border border-protocol-border hover:border-blue/50 text-protocol-text-dim hover:text-protocol-text font-mono text-[11px] font-black uppercase tracking-widest overflow-hidden transition-all"
            >
              <div className="absolute inset-0 bg-blue/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center justify-center gap-3">
                Join Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 left-8 z-100 hidden md:flex w-10 h-10 border border-protocol-border bg-protocol-bg items-center justify-center text-protocol-text-dim hover:text-protocol-text hover:border-protocol-text/40 transition-all hover:-translate-y-1 active:scale-95"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer bar */}
      <footer className="border-t border-protocol-border bg-protocol-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-wrap items-center justify-between gap-6">
          <BrandLogo variant="full" height={32} className="footer-brand-logo" />
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter / X" className="w-7 h-7 border border-protocol-border flex items-center justify-center text-protocol-text-dim hover:text-protocol-text hover:border-protocol-text/40 transition-all">
              <Twitter className="w-3 h-3" />
            </a>
            <a href="#" aria-label="Discord" className="w-7 h-7 border border-protocol-border flex items-center justify-center text-protocol-text-dim hover:text-protocol-text hover:border-protocol-text/40 transition-all">
              <MessageCircle className="w-3 h-3" />
            </a>
            <a href="#" aria-label="Telegram" className="w-7 h-7 border border-protocol-border flex items-center justify-center text-protocol-text-dim hover:text-protocol-text hover:border-protocol-text/40 transition-all">
              <Send className="w-3 h-3" />
            </a>
          </div>
          <nav className="flex flex-wrap gap-8">
            <a href="#vision" className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-[0.2em] hover:text-protocol-text transition-colors">Vision</a>
            <a href="#product" className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-[0.2em] hover:text-protocol-text transition-colors">Product</a>
            <a href="#faq" className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-[0.2em] hover:text-protocol-text transition-colors">FAQ</a>
            <a href="https://hyperliquid.xyz" target="_blank" rel="noopener noreferrer" className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-[0.2em] hover:text-protocol-text transition-colors flex items-center gap-1">
              Hyperliquid <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </nav>
        </div>

        {/* Compliance disclaimer */}
        <div className="border-t border-protocol-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-3">
            <p className="text-[9px] font-mono text-protocol-text-dim/40 leading-relaxed uppercase tracking-tighter max-w-3xl">
              <span className="text-blue/50 font-bold">[ DISCLOSURE ]</span> · Fundoria is a trader intelligence and reputation layer. The MVP is read-only and does not custody user funds, accept deposits, execute trades, or provide investment advice. Fundoria does not offer guaranteed returns, investment products, or profit-sharing claims. Capital access and vault-related features are future, eligibility-based, and subject to legal, technical, operational, and risk constraints.
            </p>
            <div className="font-mono text-[9px] text-protocol-text-dim/25 uppercase tracking-widest">
              © 2026 Fundoria · Hyperliquid Native
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
