import BrandLogo from './BrandLogo';
import { Twitter, MessageCircle, Send, ExternalLink } from 'lucide-react';
import CTAButton from './ui/CTAButton';

interface FooterV2Props {
  onOpenWhitelist?: () => void;
}

const navLinks = [
  { label: 'Passport', href: '#passport' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Protocol', href: '#protocol' },
  { label: 'Hyperliquid', href: 'https://hyperliquid.xyz', external: true },
  { label: 'Contact', href: 'mailto:hello@fundoria.xyz' },
];

const socialLinks = [
  { Icon: Twitter, label: 'X (Twitter)', href: 'https://x.com/fundoria' },
  { Icon: MessageCircle, label: 'Discord', href: 'https://discord.gg/fundoria' },
  { Icon: Send, label: 'Telegram', href: 'https://t.me/fundoria' },
];

export default function FooterV2({ onOpenWhitelist }: FooterV2Props) {
  return (
    <footer className="bg-protocol-bg border-t border-protocol-border py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <BrandLogo variant="full" height={28} />
          </div>

          {/* Center: Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.12em] text-protocol-text-dim/60 hover:text-protocol-text transition-colors duration-200"
              >
                {label}
                {external && <ExternalLink size={8} />}
              </a>
            ))}
          </nav>

          {/* Right: Socials + CTA */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-protocol-text-dim/40 hover:text-protocol-text-dim transition-colors duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
            <CTAButton variant="secondary" size="sm" onClick={onOpenWhitelist}>
              Join Early Access
            </CTAButton>
          </div>
        </div>

        {/* Compliance row */}
        <div className="border-t border-protocol-border/30 pt-5">
          <p className="font-mono text-[8px] text-protocol-text-dim/35 leading-[1.7] mb-2 max-w-4xl">
            [DISCLOSURE] · Fundoria is pre-launch infrastructure. Nothing on this site
            constitutes investment advice, a securities offering, financial advice, or a
            guarantee of capital allocation. Read-only MVP — no custody, no deposits.
          </p>
          <p className="font-mono text-[8px] text-protocol-text-dim/25">
            © 2026 Fundoria · Hyperliquid Native · Pre-Launch
          </p>
        </div>
      </div>
    </footer>
  );
}
