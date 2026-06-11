import { ReactNode } from 'react';
import { motion } from 'motion/react';
import StatusTag from './StatusTag';

type StatusVariant =
  | 'live' | 'done' | 'in-build' | 'coming-soon' | 'future'
  | 'alpha' | 'preview' | 'planned' | 'research' | 'in-audit' | 'phased';

interface ProtocolCardProps {
  icon?: ReactNode;
  num?: string;
  title: string;
  description: string;
  tag?: { variant: StatusVariant; label: string; pulse?: boolean };
  accentColor?: string;
  delay?: number;
  children?: ReactNode;
}

export default function ProtocolCard({
  icon,
  num,
  title,
  description,
  tag,
  accentColor = '#2F80ED',
  delay = 0,
  children,
}: ProtocolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border border-protocol-border bg-protocol-accent-bg p-6 hover:border-blue/30 transition-colors duration-300 overflow-hidden"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }}
      />

      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-3">
          {icon && (
            <div className="mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: accentColor }}>
              {icon}
            </div>
          )}
          {num && !icon && (
            <span className="font-display text-[18px] leading-none opacity-20 mt-0.5">{num}</span>
          )}
          <h3 className="font-mono text-[12px] font-black uppercase tracking-wide text-protocol-text group-hover:text-blue transition-colors">
            {title}
          </h3>
        </div>
        {tag && (
          <StatusTag variant={tag.variant} label={tag.label} pulse={tag.pulse} className="shrink-0" />
        )}
      </div>

      <p className="text-[13px] text-protocol-text-dim leading-relaxed">{description}</p>

      {children && <div className="mt-4">{children}</div>}

      {/* Corner accent */}
      <div
        className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle at 100% 100%, ${accentColor}15, transparent)`,
        }}
      />
    </motion.div>
  );
}
