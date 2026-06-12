import { motion } from 'motion/react';
import { FileX2, BarChart2, Search } from 'lucide-react';

const problems = [
  {
    Icon: FileX2,
    title: 'Screenshots are not reputation',
    body: "JPEGs don't prove discipline, risk management, or consistency. They prove nothing.",
  },
  {
    Icon: BarChart2,
    title: "PnL alone doesn't prove discipline",
    body: 'Raw profits without context hide catastrophic drawdowns, leverage abuse, and survivorship bias.',
  },
  {
    Icon: Search,
    title: 'Capital discovery is still private',
    body: 'Skilled traders are invisible to capital. Discovery happens through personal networks — inefficient and unfair.',
  },
];

export default function ProblemV2() {
  return (
    <section
      id="problem"
      className="bg-protocol-accent-bg border-t border-protocol-border py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2
            className="font-display uppercase tracking-[-0.02em] text-protocol-text mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            <span className="block">TRADERS HAVE PERFORMANCE.</span>
            <span className="block text-protocol-text-dim/70">
              BUT NO PORTABLE REPUTATION.
            </span>
          </h2>
          <p className="font-sans text-[15px] text-protocol-text-dim leading-[1.75] max-w-2xl">
            Today, trader performance is fragmented across exchanges, screenshots, private
            groups, and unverifiable claims. Fundoria turns live trading activity into a
            portable reputation layer that capital providers can understand and trust.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-protocol-border bg-protocol-accent-bg p-6 hover:border-blue/20 transition-colors duration-300"
            >
              <Icon size={18} className="text-protocol-text-dim/60 mb-3" />
              <h3 className="font-display text-[18px] tracking-[-0.01em] text-protocol-text mb-2">
                {title}
              </h3>
              <p className="text-[13px] text-protocol-text-dim leading-[1.7]">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
