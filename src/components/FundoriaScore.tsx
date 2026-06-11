import { motion } from 'motion/react';

const dimensions = [
  { label: 'Performance', value: 88, color: '#2F80ED' },
  { label: 'Risk Control', value: 92, color: '#00C896' },
  { label: 'Consistency', value: 79, color: '#2F80ED' },
  { label: 'Drawdown Discipline', value: 85, color: '#00C896' },
  { label: 'Position Sizing', value: 81, color: '#2F80ED' },
  { label: 'Survival Rate', value: 96, color: '#00C896' },
  { label: 'Activity Quality', value: 74, color: '#2F80ED' },
  { label: 'Market Adaptability', value: 68, color: '#00C896' },
  { label: 'Recovery Behavior', value: 83, color: '#2F80ED' },
  { label: 'Time-Based Reliability', value: 77, color: '#00C896' },
];

const grades = [
  { range: '900–1000', grade: 'Elite', color: 'text-green border-green/30 bg-green/5', dot: 'bg-green' },
  { range: '800–899', grade: 'Verified', color: 'text-blue border-blue/30 bg-blue/5', dot: 'bg-blue' },
  { range: '700–799', grade: 'Strong', color: 'text-protocol-text border-protocol-border', dot: 'bg-protocol-text/30' },
  { range: '600–699', grade: 'Developing', color: 'text-protocol-text-dim border-protocol-border', dot: 'bg-protocol-text-dim/30' },
  { range: '500–599', grade: 'High Variance', color: 'text-protocol-text-dim/60 border-protocol-border/60', dot: 'bg-protocol-text-dim/20' },
  { range: 'Below 500', grade: 'Unstable', color: 'text-protocol-text-dim/40 border-protocol-border/40', dot: 'bg-protocol-text-dim/10' },
];

function ScoreRing({ score = 842 }: { score?: number }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const fraction = score / 1000;

  return (
    <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
      <svg width="176" height="176" viewBox="0 0 176 176" className="-rotate-90">
        <circle cx="88" cy="88" r={radius} fill="none" stroke="#0E1A2E" strokeWidth="10" />
        <defs>
          <linearGradient id="scoreRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2F80ED" />
            <stop offset="100%" stopColor="#00C896" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="88" cy="88" r={radius}
          fill="none"
          stroke="url(#scoreRingGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - fraction) }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-display text-[40px] leading-none text-protocol-text"
        >
          {score}
        </motion.span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-protocol-text-dim/50">/ 1000</span>
        <span className="font-mono text-[8px] uppercase tracking-widest text-green mt-1">Strong</span>
      </div>
    </div>
  );
}

export default function FundoriaScore() {
  return (
    <section id="score" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-accent-bg px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue/40" />
            Fundoria Score
            <span className="w-4 h-px bg-blue/40" />
          </div>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] uppercase leading-[0.92] tracking-tight text-protocol-text mb-5">
            Rank Skill, Discipline,<br />
            <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">and Consistency — Not Just Profit.</span>
          </h2>
          <p className="text-protocol-text-dim text-[15px] max-w-xl mx-auto leading-relaxed">
            The Fundoria Score is a risk-adjusted reputation signal. It measures how performance was achieved, not only the final PnL.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Score ring */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-full border border-protocol-border bg-protocol-bg p-8 flex flex-col items-center gap-8">
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50 text-center">Example Score Breakdown</div>
              <ScoreRing score={842} />

              {/* Grade grades */}
              <div className="w-full space-y-2">
                {grades.map((g, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`flex items-center justify-between border px-3 py-2 ${g.color}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${g.dot}`} />
                      <span className="font-mono text-[11px] font-black uppercase tracking-wide">{g.grade}</span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest opacity-70">{g.range}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — 10 dimensions */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="border border-protocol-border bg-protocol-bg p-6">
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
                10 Score Dimensions
              </div>

              <div className="space-y-5">
                {dimensions.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/30">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-protocol-text-dim/70">{d.label}</span>
                      </div>
                      <span className="font-mono text-[10px] font-black" style={{ color: d.color }}>{d.value}%</span>
                    </div>
                    <div className="h-1 bg-protocol-border overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${d.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full"
                        style={{ background: d.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="font-mono text-[9px] text-protocol-text-dim/40 uppercase tracking-wider mt-4 text-center"
            >
              The Fundoria Score is a reputation signal, not investment advice or a guarantee of future results.
              <br />
              The exact scoring methodology will be published progressively with the MVP and refined through transparent versioned releases.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
