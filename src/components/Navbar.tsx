import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface NavbarProps {
  onOpenWhitelist?: () => void;
}

const navLinks = [
  { label: 'Why', anchor: 'vision' },
  { label: 'Passport', anchor: 'passport' },
  { label: 'Score', anchor: 'score' },
  { label: 'Network', anchor: 'social' },
  { label: 'Capital', anchor: 'capital-access' },
  { label: 'Roadmap', anchor: 'roadmap' },
  { label: 'FAQ', anchor: 'faq' },
];

export default function Navbar({ onOpenWhitelist }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const { anchor } of [...navLinks].reverse()) {
        const el = document.getElementById(anchor);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(anchor);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="site-header-glass fixed top-0 w-full transition-all duration-300 h-[72px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
        <a href="#" className="flex items-center transition-opacity hover:opacity-80">
          <Logo size={32} showText={true} />
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map(({ label, anchor }) => {
            const isActive = activeSection === anchor;
            return (
              <li key={anchor}>
                <a
                  href={`#${anchor}`}
                  className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors relative group ${isActive ? 'text-protocol-text' : 'text-[#8AACCC] hover:text-protocol-text'}`}
                >
                  {label}
                  <span className={`absolute left-0 -bottom-1 h-px bg-blue transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenWhitelist}
            className="hidden sm:flex group items-center gap-2 bg-blue hover:bg-green text-black font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-300 active:scale-95 shadow-[0_4px_16px_rgba(47,128,237,0.25)] hover:shadow-[0_4px_24px_rgba(0,200,150,0.35)] overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-500 pointer-events-none" />
            <span className="relative">Join Early Access</span>
            <div className="w-1.5 h-1.5 bg-black/40 rounded-full relative" />
          </button>

          <button
            className="md:hidden p-2 text-protocol-text-dim hover:text-protocol-text transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="site-header-glass absolute top-[72px] left-0 w-full md:hidden z-[1000] overflow-hidden"
          >
            <div className="px-6 pt-6 pb-8">
              <ul className="flex flex-col gap-1 mb-8">
                {navLinks.map(({ label, anchor }, i) => (
                  <motion.li key={anchor} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                    <a
                      href={`#${anchor}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 font-mono text-xs uppercase tracking-[0.3em] text-[#8AACCC] hover:text-blue transition-colors border-b border-protocol-border/30 flex items-center justify-between group"
                    >
                      {label}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => { onOpenWhitelist?.(); setMobileMenuOpen(false); }}
                className="w-full bg-blue text-black font-mono text-[11px] font-bold uppercase tracking-[0.3em] py-4 flex items-center justify-center gap-3 shadow-[0_4px_24px_rgba(47,128,237,0.3)]"
              >
                Join Early Access
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ticker */}
      <div className="ticker-glass absolute top-[72px] left-0 w-full h-[30px] overflow-hidden flex items-center">
        <div className="flex gap-6 md:gap-12 whitespace-nowrap animate-ticker-pausable">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 md:gap-12">
              <TickerItem text="TRADER REPUTATION NETWORK: EARLY ACCESS" dotColor="text-blue" />
              <TickerItem text="BUILD YOUR REPUTATION BEFORE CAPITAL FINDS YOU" dotColor="text-green" />
              <TickerItem text="YOUR WALLET IS YOUR TRADING RESUME" dotColor="text-blue" isHex />
              <TickerItem text="TRADER PASSPORT: CREATE YOURS EARLY" dotColor="text-green" />
              <TickerItem text="FUNDORIA SCORE: 0–1000 REPUTATION SIGNAL" dotColor="text-blue" isHex />
              <TickerItem text="CAPITAL WATCHLISTS: FUTURE ALLOCATOR LAYER" dotColor="text-green" />
              <TickerItem text="FUNDORIA VAULTS: FUTURE ELIGIBILITY LAYER" dotColor="text-blue" isHex />
              <TickerItem text="HYPERLIQUID-NATIVE TRADER NETWORK" dotColor="text-green" />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

function TickerItem({ text, dotColor, isHex }: { text: string; dotColor: string; isHex?: boolean }) {
  return (
    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8AACCC] flex items-center gap-2.5">
      <span className={dotColor}>{isHex ? '⬡' : '●'}</span> {text}
    </div>
  );
}
