import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, ArrowRight, CheckCircle2, Zap, Shield, Loader2 } from 'lucide-react';

interface WhitelistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const perks = [
  'Early access to the trading interface during evaluation phases',
  'Priority eligibility for trader verification cohorts',
  'Governance previews and contributor sessions',
  'Direct ecosystem updates ahead of public release',
];

export default function WhitelistModal({ isOpen, onClose }: WhitelistModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => { setEmail(''); setStatus('idle'); }, 400);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/92 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-[520px] bg-protocol-bg border border-protocol-border overflow-hidden transition-colors shadow-[0_0_80px_rgba(59,130,246,0.15)]"
          >
            {/* Top gradient bar */}
            <div className="h-[3px] bg-gradient-to-r from-blue via-cyan to-green w-full" />

            {/* Scanline overlay */}
            <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-blue/[0.03] to-transparent pointer-events-none animate-scanline z-20" />

            {/* Corner decor */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-blue/20 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-blue/20 pointer-events-none" />

            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 border border-protocol-border flex items-center justify-center text-protocol-text-dim hover:text-protocol-text hover:border-protocol-text/40 transition-all z-30"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-8 sm:p-10 relative z-10">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-green/10 border border-green/30 flex items-center justify-center mx-auto mb-6 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-green/20"
                    />
                    <CheckCircle2 className="w-9 h-9 text-green relative z-10" />
                  </motion.div>
                  <h3 id="modal-title" className="font-display text-[clamp(36px,8vw,54px)] uppercase mb-3 tracking-tight text-protocol-text">
                    You're In.
                  </h3>
                  <p className="font-mono text-[11px] text-protocol-text-dim uppercase tracking-widest leading-relaxed px-6 mb-8">
                    We'll be in touch with early access details. Watch your inbox.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-10 py-3 border border-protocol-border text-protocol-text font-mono text-[10px] font-black uppercase tracking-[0.2em] hover:bg-protocol-text hover:text-protocol-bg transition-all"
                  >
                    Return to Protocol
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-4 h-4 text-blue" />
                      <span className="font-mono text-[10px] text-blue font-black uppercase tracking-[0.3em]">Early Access</span>
                      <div className="flex-1 h-px bg-protocol-border ml-2" />
                    </div>
                    <h2 id="modal-title" className="font-display text-[clamp(36px,6vw,54px)] uppercase leading-[0.9] tracking-tight mb-4 text-protocol-text">
                      Join the <br />
                      <span className="text-blue">Fundoria</span> Whitelist.
                    </h2>
                    <p className="text-protocol-text-dim text-[13px] leading-relaxed font-sans font-medium">
                      Members receive priority onboarding, early governance visibility, and standing invitations to contributor sessions.
                    </p>
                  </div>

                  {/* Disclaimer */}
                  <div className="p-4 bg-protocol-accent-bg border border-protocol-border/50 mb-7 flex gap-3">
                    <Shield className="w-4 h-4 text-blue/40 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-protocol-text-dim/60 leading-relaxed font-mono">
                      Registration is free and does not constitute a purchase, allocation, or commitment of any kind. Architectural preview — real onboarding is enforced via the HyperEVM client.
                    </p>
                  </div>

                  {/* Perks */}
                  <ul className="space-y-3 mb-8">
                    {perks.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.06 }}
                        className="flex gap-3 group"
                      >
                        <span className="font-mono text-[9px] text-blue/40 group-hover:text-blue transition-colors mt-0.5 shrink-0 font-bold">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-[11px] text-protocol-text-dim group-hover:text-protocol-text transition-colors uppercase tracking-widest leading-relaxed font-semibold">
                          {point}
                        </p>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <label className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-widest font-black">
                          Email <span className="text-blue">*</span>
                        </label>
                        <span className="text-[8px] text-protocol-text-dim/30 uppercase tracking-widest">confirmation sent here</span>
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-protocol-text-dim/30" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="protocol@access.link"
                          className="w-full bg-protocol-accent-bg border border-protocol-border px-12 py-4 font-mono text-sm text-protocol-text placeholder:text-protocol-text-dim/40 focus:outline-none focus:border-blue focus:shadow-[0_0_0_2px_rgba(59,130,246,0.25)] transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group w-full bg-blue hover:bg-green text-black font-mono text-[11px] font-black uppercase tracking-[0.2em] py-5 flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_24px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_32px_rgba(16,185,129,0.4)] relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-500 pointer-events-none" />
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin relative" />
                          <span className="relative">Registering...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative">fnd::whitelist.register</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-8 pt-5 border-t border-protocol-border flex items-center justify-between">
                    <span className="font-mono text-[8px] text-protocol-text-dim/25 uppercase tracking-widest">Fundoria_Protocol</span>
                    <span className="font-mono text-[8px] text-protocol-text-dim/25 uppercase tracking-widest">v0.1.0</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
