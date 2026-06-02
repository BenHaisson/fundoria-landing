import { motion } from 'motion/react';
import { Mail, ShieldCheck, Database, Zap, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-cyan" />,
    title: 'Compliance Ready',
    desc: 'Verifiable on-chain audit trails and rule-enforced risk parameters for institutional mandates.',
  },
  {
    icon: <Database className="w-5 h-5 text-cyan" />,
    title: 'Clean Liquidity',
    desc: 'Direct settlement on HyperEVM with non-custodial capital protection at every execution layer.',
  },
];

export default function Partnerships() {
  return (
    <section id="partnerships" className="py-24 border-t border-protocol-border bg-protocol-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 text-cyan">Institutional Gateway</div>
            <h2 className="font-display text-[clamp(44px,7vw,80px)] uppercase leading-[0.95] text-protocol-text mb-8">
              Protocol <br />
              <span className="text-cyan">Integrations.</span>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed mb-10 max-w-xl italic">
              Fundoria provides institution-grade connectivity for high-throughput strategies, secure treasury scaling, and verifiable performance reporting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-5 border border-protocol-border bg-protocol-accent-bg/50 hover:border-cyan/30 hover:bg-protocol-accent-bg hover:shadow-[0_8px_32px_rgba(6,182,212,0.08)] transition-all duration-300 group"
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300 origin-left">{f.icon}</div>
                  <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest text-protocol-text mb-2 group-hover:text-cyan transition-colors">{f.title}</h4>
                  <p className="text-[10px] text-protocol-text-dim leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[460px] relative"
          >
            {/* Glow */}
            <div className="absolute -inset-6 bg-cyan/8 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative border border-cyan/25 bg-gradient-to-b from-cyan/5 to-transparent backdrop-blur-sm overflow-hidden group">
              {/* Top accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

              {/* Corner decor */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan/40" />

              {/* Scan line */}
              <motion.div
                animate={{ y: [-60, 600] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none"
              />

              <div className="relative z-10 p-10 text-center">
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto mb-8">
                  <div className="absolute inset-0 bg-cyan/10 rounded-full animate-pulse" />
                  <div className="absolute inset-2 border border-cyan/20 rounded-full" />
                  <Zap className="w-9 h-9 text-cyan relative z-10" />
                </div>

                <h3 className="font-display text-[clamp(28px,4vw,42px)] uppercase mb-4 tracking-tight text-protocol-text leading-none">
                  Institutional<br />Onboarding
                </h3>

                <p className="text-[11px] text-protocol-text-dim leading-relaxed mb-10 uppercase tracking-widest font-mono">
                  Discuss custom mandates, API access, or DAO treasury integrations with our contributors.
                </p>

                <a
                  href="mailto:partners@fundoria.io"
                  className="group/btn inline-flex items-center gap-3 bg-cyan text-black px-10 py-5 font-mono text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  Contact Desk
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

                <div className="mt-8 pt-6 border-t border-cyan/10 font-mono text-[8px] text-protocol-text-dim/30 uppercase tracking-widest">
                  partners@fundoria.io
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
