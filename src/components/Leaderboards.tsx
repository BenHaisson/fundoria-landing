import { motion } from 'motion/react';

const rows = [
  { rank: 1, wallet: '0x7a...f291', score: 924, pnl: '+42.1%', maxDD: '2.1%', consistency: '97%', status: 'Capital Matched', statusColor: 'green' },
  { rank: 2, wallet: '0x3e...8bc4', score: 891, pnl: '+28.4%', maxDD: '3.4%', consistency: '94%', status: 'Capital Eligible', statusColor: 'blue' },
  { rank: 3, wallet: '0x1f...cc07', score: 842, pnl: '+19.8%', maxDD: '4.8%', consistency: '91%', status: 'Eligible Soon', statusColor: 'yellow' },
];

export default function Leaderboards() {
  return (
    <section id="capital-access" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-3.5 text-blue">Leaderboards</div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(36px,5vw,60px)] uppercase leading-[0.95] text-protocol-text">
              Every Trade Is<br />
              <em className="text-green not-italic">A Public Signal.</em>
            </h2>
            <p className="text-protocol-text-dim text-[15px] leading-relaxed max-w-[360px] italic">
              Fundoria ranks traders by skill, not just profit. Risk discipline and consistency define your position.
            </p>
          </div>
        </motion.div>

        {/* Leaderboard table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border border-protocol-border bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)] mb-12"
        >
          {/* Header chrome */}
          <div className="py-2.5 px-4 border-b border-protocol-border bg-protocol-accent-bg flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/40" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
            <div className="w-2 h-2 rounded-full bg-green/40" />
            <span className="font-mono text-[9px] text-protocol-text-dim/40 ml-2 uppercase tracking-widest font-black flex-1">
              FUNDORIA :: GLOBAL_LEADERBOARD_v1
            </span>
            <span className="font-mono text-[8px] text-blue/50 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-blue animate-pulse" />
              LIVE
            </span>
          </div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-7 px-5 py-3 border-b border-protocol-border/50">
            {['#', 'Trader', 'Score', '30D PnL', 'Max DD', 'Consistency', 'Status'].map((col) => (
              <div key={col} className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-widest">
                {col}
              </div>
            ))}
          </div>

          {/* Table rows */}
          <div>
            {rows.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group grid grid-cols-3 md:grid-cols-7 px-5 py-4 border-b border-protocol-border/30 hover:bg-blue/5 transition-colors cursor-default items-center gap-y-2"
              >
                <div className="font-mono text-[13px] text-blue font-bold">#{row.rank}</div>
                <div className="font-mono text-[12px] text-protocol-text col-span-2 md:col-span-1">{row.wallet}</div>
                <div className="font-mono text-[13px] text-protocol-text font-black">{row.score}</div>
                <div className="font-mono text-[12px] text-green">{row.pnl}</div>
                <div className="font-mono text-[12px] text-protocol-text-dim">{row.maxDD}</div>
                <div className="font-mono text-[12px] text-protocol-text-dim">{row.consistency}</div>
                <div>
                  <span className={`inline-block px-2.5 py-1 rounded-full font-mono text-[9px] uppercase tracking-wider ${
                    row.statusColor === 'green' ? 'border border-green/30 bg-green/5 text-green' :
                    row.statusColor === 'blue' ? 'border border-blue/30 bg-blue/5 text-blue' :
                    'border border-yellow-500/30 bg-yellow-500/5 text-yellow-400'
                  }`}>
                    {row.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom indicator */}
          <div className="px-5 py-3 flex items-center gap-2 bg-protocol-accent-bg border-t border-protocol-border">
            <span className="font-mono text-[9px] text-protocol-text-dim/30 uppercase tracking-widest">
              Showing top 3 of 2,400+ traders · Tournament Season 1 ranking based on Fundoria Score
            </span>
          </div>

          <div className="h-[2px] bg-linear-to-r from-transparent via-blue to-transparent animate-flash" />
        </motion.div>

        {/* Tournament card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-protocol-border bg-protocol-bg rounded-xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-blue/30 via-green/30 to-transparent" />
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue mb-2">Tournament</div>
            <h3 className="font-display text-[clamp(28px,4vw,44px)] uppercase leading-[0.95] text-protocol-text mb-3">
              Season 1
            </h3>
            <p className="text-protocol-text-dim text-[14px] leading-relaxed max-w-[360px]">
              The inaugural Fundoria tournament. Every trader ranked by Fundoria Score — not just profit. Tournament record feeds directly into your capital eligibility.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <div className="px-3 py-1.5 border border-protocol-border bg-protocol-accent-bg rounded-full font-mono text-[9px] text-protocol-text/50 uppercase tracking-widest">
                Entry: Score ≥ 700
              </div>
              <div className="px-3 py-1.5 border border-blue/20 bg-blue/5 rounded-full font-mono text-[9px] text-blue/70 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-blue animate-pulse" />
                Coming Soon
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="font-display text-[clamp(48px,8vw,80px)] leading-none text-protocol-text/10 mb-2">S1</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-protocol-text-dim/40">Tournament Season 1</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
