import { motion } from 'motion/react';
import { Activity, IdCard, Cpu, Search } from 'lucide-react';

const flow = [
  {
    Icon: Activity,
    label: 'LIVE HYPERLIQUID ACTIVITY',
    detail: 'Indexing wallet 0x7A3d...93F',
    color: '#2F80ED',
  },
  {
    Icon: IdCard,
    label: 'TRADER PASSPORT',
    detail: 'Grade A- · Score 842 / 1000',
    color: '#2F80ED',
  },
  {
    Icon: Cpu,
    label: 'FUNDORIA SCORE',
    detail: 'Performance · Risk · Consistency',
    color: '#00C896',
  },
  {
    Icon: Search,
    label: 'CAPITAL DISCOVERY',
    detail: 'Watchlists 128 · Future Eligibility',
    color: '#00C896',
  },
];

const metrics = [
  { label: 'Score',      value: '842' },
  { label: 'Grade',      value: 'A-' },
  { label: 'Watchlists', value: '128' },
  { label: 'Capital',    value: 'Future' },
];

interface HeroNetworkPreviewProps {
  className?: string;
}

export default function HeroNetworkPreview({ className = '' }: HeroNetworkPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      className={`relative w-full max-w-sm card-glow-hover ${className}`}
      style={{
        background: 'rgba(4,8,15,0.95)',
        border: '1px solid rgba(47,128,237,0.18)',
        boxShadow:
          '0 0 40px rgba(47,128,237,0.08), inset 0 1px 0 rgba(220,232,255,0.04)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #2F80ED 40%, #00C896 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="p-4 pt-5">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between mb-4 pb-3 border-b border-protocol-border/40">
          <div className="font-mono text-[9px] tracking-[0.28em] text-protocol-text uppercase">
            Hyperliquid Reputation Network
          </div>
          <span className="font-mono text-[7px] text-protocol-text-dim/25 uppercase tracking-widest flex-shrink-0 ml-3">
            Preview
          </span>
        </div>

        {/* ── Product flow ───────────────────────────────────────────────── */}
        <div>
          {flow.map(({ Icon, label, detail, color }, i) => (
            <div key={label}>
              <div className="flex items-start gap-3 py-2">
                <div
                  className="flex-shrink-0 w-7 h-7 flex items-center justify-center border"
                  style={{
                    borderColor: `${color}28`,
                    backgroundColor: `${color}08`,
                  }}
                >
                  <Icon size={13} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-protocol-text mb-0.5">
                    {label}
                  </div>
                  <div className="font-mono text-[8px] text-protocol-text-dim/40 tracking-wider">
                    {detail}
                  </div>
                </div>
              </div>

              {/* Connector */}
              {i < flow.length - 1 && (
                <div className="flex items-center gap-3 py-px">
                  <div className="w-7 flex justify-center flex-shrink-0">
                    <div className="w-[1px] h-3 bg-protocol-border/45" />
                  </div>
                  <span className="font-mono text-[9px] text-protocol-text-dim/20 leading-none">
                    ↓
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Metric strip ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-4 gap-1.5 mt-4 pt-4 border-t border-protocol-border/30">
          {metrics.map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="font-display text-[14px] text-protocol-text leading-none mb-1">
                {value}
              </div>
              <div className="font-mono text-[7px] text-protocol-text-dim/35 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-protocol-border/20 px-4 py-2">
        <span className="font-mono text-[7px] text-protocol-text-dim/20 uppercase tracking-[0.2em]">
          Sample Data · Illustrative Only
        </span>
      </div>
    </motion.div>
  );
}
