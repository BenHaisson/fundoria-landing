import { motion } from 'motion/react';
import { Trophy, ArrowUp } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const traders = [
  {
    rank: 1,
    address: '0x7a...f291',
    score: 924,
    pnl: '+42.1%',
    maxDD: '2.1%',
    consistency: '97%',
    status: 'Elite Score',
    statusColor: 'text-green border-green/30 bg-green/5',
    dotColor: 'bg-green',
  },
  {
    rank: 2,
    address: '0x3e...8bc4',
    score: 891,
    pnl: '+28.4%',
    maxDD: '3.4%',
    consistency: '94%',
    status: 'Verified Score',
    statusColor: 'text-blue border-blue/30 bg-blue/5',
    dotColor: 'bg-blue',
  },
  {
    rank: 3,
    address: '0x1f...cc07',
    score: 842,
    pnl: '+19.8%',
    maxDD: '4.8%',
    consistency: '91%',
    status: 'Future Eligibility',
    statusColor: 'text-amber-500 border-amber-500/30 bg-amber-500/5',
    dotColor: 'bg-amber-500',
  },
];

const cols = ['#', 'Trader', 'Score', '30D PnL', 'Max DD', 'Consistency', 'Status'];

export default function Leaderboards() {
  return (
    <section id="leaderboards" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Leaderboards"
          centered
          title={
            <>
              Every Trade Is a<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Public Signal.</span>
            </>
          }
          subtitle="Rankings are transparent, tamper-proof, and updated daily. Your on-chain history speaks for itself."
        />

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-protocol-border overflow-hidden mb-8"
        >
          {/* Table Header */}
          <div className="bg-protocol-accent-bg border-b border-protocol-border px-4 py-2 flex items-center justify-between">
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              Rankings Preview · Season 1
            </div>
            <div className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/30">Score-Ranked</div>
          </div>

          {/* Column Headers */}
          <div className="hidden md:grid grid-cols-[40px_1fr_80px_90px_80px_100px_140px] gap-4 px-5 py-3 border-b border-protocol-border bg-protocol-bg">
            {cols.map((c, i) => (
              <div key={i} className="font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/40">{c}</div>
            ))}
          </div>

          {/* Rows */}
          {traders.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`px-5 py-4 border-b last:border-0 border-protocol-border hover:bg-blue/[0.03] transition-colors group ${i === 0 ? 'bg-green/[0.02]' : ''}`}
            >
              {/* Mobile layout */}
              <div className="md:hidden flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="font-mono text-[11px] font-black text-protocol-text-dim/40 w-5">#{t.rank}</div>
                  <div>
                    <div className="font-mono text-[11px] font-black text-blue">{t.address}</div>
                    <div className="font-mono text-[9px] text-protocol-text-dim/50 mt-0.5">Score: {t.score} · PnL: {t.pnl}</div>
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 px-2 py-0.5 border font-mono text-[8px] uppercase tracking-widest shrink-0 ${t.statusColor}`}>
                  <div className={`w-1 h-1 rounded-full ${t.dotColor}`} />
                  {t.status}
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:grid grid-cols-[40px_1fr_80px_90px_80px_100px_140px] gap-4 items-center">
                <div className="font-mono text-[11px] font-black text-protocol-text-dim/40">
                  {t.rank === 1 ? <Trophy className="w-3.5 h-3.5 text-amber-500" /> : `#${t.rank}`}
                </div>
                <div className="font-mono text-[11px] font-black text-blue group-hover:text-blue/80 transition-colors">{t.address}</div>
                <div className="font-display text-[14px] text-protocol-text">{t.score}</div>
                <div className="font-mono text-[11px] font-black text-green flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" />{t.pnl}
                </div>
                <div className="font-mono text-[11px] text-protocol-text-dim">{t.maxDD}</div>
                <div className="font-mono text-[11px] text-protocol-text-dim">{t.consistency}</div>
                <div className={`inline-flex items-center gap-1.5 px-2 py-1 border font-mono text-[8px] uppercase tracking-widest ${t.statusColor}`}>
                  <div className={`w-1 h-1 rounded-full ${t.dotColor} animate-pulse`} />
                  {t.status}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tournament Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border border-blue/20 bg-blue/[0.03] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-blue" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue font-black">Tournament Season 1</span>
            </div>
            <h3 className="font-display text-[22px] uppercase text-protocol-text mb-1">Score-Gated Competition</h3>
            <p className="text-[13px] text-protocol-text-dim">
              Entry requires Fundoria Score ≥ 700. Dates TBD. Open to all early access members.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-3 border border-blue/30 px-4 py-2 bg-protocol-bg shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue">Coming Soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
