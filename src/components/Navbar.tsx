import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { useActiveSection } from '../hooks/useActiveSection';

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

const navSections = navLinks.map(l => ({ id: l.anchor, label: l.label }));

export default function Navbar({ onOpenWhitelist }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navSections, 110);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className="site-header-glass fixed top-0 w-full transition-all duration-300 h-[72px] flex items-center">
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
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
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
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
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
            id="mobile-nav-menu"
            aria-label="Mobile navigation"
            className="site-header-glass absolute top-[72px] left-0 w-full md:hidden z-[1000] overflow-hidden"
          >
            <div className="px-6 pt-6 pb-8">
              <ul className="flex flex-col gap-1 mb-8">
                {navLinks.map(({ label, anchor }, i) => (
                  <motion.li key={anchor} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                    <a
                      href={`#${anchor}`}
                      onClick={e => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                          document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 150);
                      }}
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

    </nav>
  );
}

// ─── Standalone fixed ticker — sits OUTSIDE the nav stacking context ────────
// so backdrop-filter blurs actual page content, not the nav itself.

type Status = 'live' | 'done' | 'build' | 'coming' | 'mkt' | 'future' | 'audit' | 'phased';

const items: { status: Status; tag: string; text: string }[] = [
  { status: 'live',   tag: 'LIVE',         text: 'LANDING PAGE V0.1' },
  { status: 'done',   tag: 'DONE',         text: 'PROTOCOL ARCHITECTURE DRAFT' },
  { status: 'done',   tag: 'DONE',         text: 'TRADER REPUTATION NETWORK POSITIONING' },
  { status: 'done',   tag: 'DONE',         text: 'FUNDORIA SCORE FRAMEWORK' },
  { status: 'live',   tag: 'LIVE',         text: 'EARLY ACCESS FORM OPEN' },
  { status: 'build',  tag: 'IN BUILD',     text: 'TRADER EVALUATION INTERFACE' },
  { status: 'build',  tag: 'IN BUILD',     text: 'TRADER REPUTATION PASSPORT' },
  { status: 'audit',  tag: 'IN AUDIT',     text: 'SMART VAULT RISK MODEL' },
  { status: 'coming', tag: 'COMING SOON',  text: 'HYPERLIQUID WALLET INDEXING MVP' },
  { status: 'coming', tag: 'COMING SOON',  text: 'RISK ENGINE SIMULATOR' },
  { status: 'coming', tag: 'COMING SOON',  text: 'CAPITAL PROVIDER DASHBOARD' },
  { status: 'coming', tag: 'COMING SOON',  text: 'PUBLIC TRADER PROFILES' },
  { status: 'coming', tag: 'COMING SOON',  text: 'LEADERBOARDS & BADGES' },
  { status: 'mkt',    tag: 'COMMUNITY',    text: 'EARLY TRADER SIGNUPS OPEN' },
  { status: 'mkt',    tag: 'COMMUNITY',    text: 'CAPITAL PROVIDER WAITLIST OPEN' },
  { status: 'future', tag: 'FUTURE',       text: 'FUNDORIA VAULTS: ELIGIBILITY-BASED LAYER' },
  { status: 'future', tag: 'FUTURE',       text: 'MANDATE-BASED CAPITAL WORKFLOWS' },
  { status: 'phased', tag: 'PHASED',       text: 'DAO GOVERNANCE' },
];

const dotClass: Record<Status, string> = {
  live:   's-live',
  done:   's-done',
  build:  's-build',
  coming: 's-coming',
  mkt:    's-mkt',
  future: 's-future',
  audit:  's-audit',
  phased: 's-phased',
};

export function StatusTicker() {
  return (
    <div className="ticker-bar" aria-hidden="true">
      <div className="ticker-track animate-ticker-pausable">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="ticker-item">
            <span className={`ticker-dot ${dotClass[item.status]}`}
              style={{ boxShadow: `0 0 6px currentColor` }}
            />
            <span className={`ticker-status`}>[{item.tag}]</span>
            <span>{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
