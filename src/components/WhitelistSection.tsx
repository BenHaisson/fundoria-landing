import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import CTAButton from './ui/CTAButton';

interface WhitelistSectionProps {
  onOpenWhitelist?: () => void;
}

type Role = 'Trader' | 'Capital Provider' | 'Builder';
const ROLES: Role[] = ['Trader', 'Capital Provider', 'Builder'];

export default function WhitelistSection({ onOpenWhitelist: _onOpenWhitelist }: WhitelistSectionProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Role>('Trader');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="whitelist"
      className="relative bg-protocol-accent-bg border-t border-protocol-border py-24 md:py-36 overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,200,150,0.05) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-display uppercase tracking-[-0.02em] text-protocol-text mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            JOIN THE FUNDORIA WHITELIST
          </h2>
          <p className="font-sans text-[15px] text-protocol-text-dim leading-[1.75] mb-10">
            Be among the first to receive early access to Fundoria's Trader Passport,
            reputation scoring, and capital discovery tools — when they launch.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-3 py-8"
            >
              <CheckCircle2 size={32} className="text-green" />
              <p className="font-mono text-[13px] uppercase tracking-widest text-green">
                You're on the list.
              </p>
              <p className="font-mono text-[10px] text-protocol-text-dim/50">
                We'll notify you when early access opens.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email input */}
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="font-mono text-[11px] bg-protocol-accent-bg border border-protocol-border focus:border-blue/60 px-4 py-3 w-full outline-none text-protocol-text placeholder:text-protocol-text-dim/40 transition-colors duration-200"
              />

              {/* Role selector */}
              <div className="flex gap-2 justify-center flex-wrap">
                {ROLES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`font-mono text-[9px] uppercase tracking-widest px-4 py-2 border transition-all duration-200 cursor-pointer ${
                      role === r
                        ? 'border-blue bg-blue/10 text-blue'
                        : 'border-protocol-border text-protocol-text-dim/60 hover:border-blue/30 hover:text-protocol-text-dim'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <CTAButton variant="primary" size="lg">
                  Join Whitelist
                </CTAButton>
              </div>

              {/* Microcopy */}
              <p className="font-mono text-[9px] text-protocol-text-dim/35 mt-2">
                Registration is free and does not constitute a purchase, investment, token
                allocation, financial commitment, or guarantee of capital allocation.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
