import { motion } from 'motion/react';
import StatusTag from './StatusTag';

type StatusVariant =
  | 'live' | 'done' | 'in-build' | 'coming-soon' | 'future'
  | 'alpha' | 'preview' | 'planned' | 'research' | 'in-audit' | 'phased';

interface RoadmapItemProps {
  phase: string;
  meta: string;
  title: string;
  desc: string;
  status: StatusVariant;
  statusLabel: string;
  timeline: string;
  milestones: string[];
  active?: boolean;
  index: number;
}

export default function RoadmapItem({
  phase,
  meta,
  title,
  desc,
  status,
  statusLabel,
  timeline,
  milestones,
  active = false,
  index,
}: RoadmapItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex gap-6 md:gap-8 items-start ${
        !active && index > 1 ? 'opacity-50 hover:opacity-100 transition-opacity duration-300' : ''
      }`}
    >
      {/* Timeline dot */}
      <div className="shrink-0 hidden md:flex flex-col items-center gap-2 pt-1">
        <div
          className={`w-[38px] h-[38px] rounded-full border flex items-center justify-center ${
            active ? 'border-green/50 bg-green/10' : 'border-protocol-border bg-protocol-bg'
          }`}
        >
          <div className={`w-2.5 h-2.5 rounded-full ${active ? 'bg-green animate-pulse' : 'bg-protocol-border'}`} />
        </div>
      </div>

      {/* Card */}
      <div
        className={`flex-1 border p-5 sm:p-6 group-hover:border-blue/30 transition-colors duration-300 relative overflow-hidden ${
          active ? 'border-green/30 bg-green/[0.02]' : 'border-protocol-border bg-protocol-accent-bg'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-protocol-border to-transparent group-hover:via-blue/20 transition-colors" />

        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <span className="font-display text-[20px] text-protocol-text-dim/25">{phase}</span>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-protocol-text-dim/50">{meta}</div>
              <h3 className="font-mono text-[13px] font-black uppercase tracking-wide text-protocol-text group-hover:text-blue transition-colors">
                {title}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <StatusTag variant={status} label={statusLabel} pulse={active} />
            <span className="border border-protocol-border px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-protocol-text-dim/40">
              {timeline}
            </span>
          </div>
        </div>

        <p className="text-[13px] text-protocol-text-dim leading-relaxed mb-4">{desc}</p>

        <div className="grid grid-cols-2 gap-1.5">
          {milestones.map((m, j) => (
            <div key={j} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-protocol-border shrink-0" />
              <span className="font-mono text-[8px] text-protocol-text-dim/40 uppercase tracking-wider">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
