import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BrandLogo from './BrandLogo';
import { useActiveSection } from '../hooks/useActiveSection';

interface NavbarProps {
  onOpenWhitelist?: () => void;
}

const navLinks = [
  { label: 'Passport', anchor: 'passport' },
  { label: 'Traders',  anchor: 'traders' },
  { label: 'Capital',  anchor: 'capital' },
  { label: 'Protocol', anchor: 'protocol' },
  { label: 'Roadmap',  anchor: 'roadmap' },
  { label: 'FAQ',      anchor: 'faq' },
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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileMenuOpen(false); };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {/* ── Main nav bar ───────────────────────────────────────────────── */}
      <nav
        aria-label="Main navigation"
        className={`site-header-glass${scrolled ? ' scrolled' : ''} fixed top-0 w-full h-[72px] flex items-center`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
          <a href="#" className="flex items-center transition-opacity hover:opacity-80" aria-label="Fundoria — home">
            <BrandLogo variant="full" height={30} className="nav-brand-logo" />
          </a>

          {/* Desktop links */}
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
            {/* Desktop CTA */}
            <button
              onClick={onOpenWhitelist}
              className="hidden sm:flex group items-center gap-2 bg-blue hover:bg-green text-black font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-300 active:scale-95 shadow-[0_4px_16px_rgba(47,128,237,0.25)] hover:shadow-[0_4px_24px_rgba(0,200,150,0.35)] overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-500 pointer-events-none" />
              <span className="relative">Join Early Access</span>
              <div className="w-1.5 h-1.5 bg-black/40 rounded-full relative" />
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-2 text-protocol-text-dim hover:text-protocol-text transition-colors"
              onClick={() => setMobileMenuOpen(prev => !prev)}
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
      </nav>

      {/*
        ── Mobile menu panel ─────────────────────────────────────────────
        Rendered OUTSIDE the <nav> so it is never clipped by the nav's
        overflow:hidden. Uses position:fixed so it escapes any parent
        stacking/overflow context.
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-nav-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 right-0 md:hidden"
            style={{ top: 72, zIndex: 1003 }}
          >
            <div className="mobile-menu-panel px-5 pt-5 pb-7">
              <ul className="flex flex-col gap-1 mb-5">
                {navLinks.map(({ label, anchor }, i) => (
                  <motion.li
                    key={anchor}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <a
                      href={`#${anchor}`}
                      onClick={e => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                          document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 150);
                      }}
                      className="flex items-center justify-between py-3.5 px-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8AACCC] hover:text-blue border border-[rgba(26,45,70,0.65)] hover:border-blue/30 transition-all group"
                    >
                      {label}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => { onOpenWhitelist?.(); setMobileMenuOpen(false); }}
                className="w-full bg-blue hover:bg-green text-black font-mono text-[11px] font-bold uppercase tracking-[0.25em] py-4 flex items-center justify-center gap-3 transition-colors shadow-[0_4px_24px_rgba(47,128,237,0.3)]"
              >
                Join Early Access
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Standalone fixed ticker — sits OUTSIDE the nav stacking context ────────
// so backdrop-filter blurs actual page content, not the nav itself.

type Status = 'live' | 'build' | 'coming' | 'future' | 'prelaunch' | 'phased';

const items: { status: Status; tag: string; text: string }[] = [
  { status: 'live',      tag: 'LIVE',        text: 'EARLY ACCESS OPEN' },
  { status: 'build',     tag: 'IN BUILD',    text: 'TRADER PASSPORT' },
  { status: 'build',     tag: 'IN BUILD',    text: 'FUNDORIA SCORE' },
  { status: 'coming',    tag: 'COMING SOON', text: 'PUBLIC TRADER PROFILES' },
  { status: 'coming',    tag: 'COMING SOON', text: 'CAPITAL PROVIDER WATCHLISTS' },
  { status: 'future',    tag: 'FUTURE',      text: 'SMART VAULT ELIGIBILITY' },
  { status: 'prelaunch', tag: 'PRE-LAUNCH',  text: 'HYPERLIQUID REPUTATION NETWORK' },
];

const dotClass: Record<Status, string> = {
  live:      's-live',
  build:     's-build',
  coming:    's-coming',
  future:    's-future',
  prelaunch: 's-prelaunch',
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
