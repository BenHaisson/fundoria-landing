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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border border-protocol-border card-surface card-lift p-6 sm:p-7 hover:border-blue/30 overflow-hidden"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-3">
          {icon && (
            <div
              className="mt-0.5 opacity-70 group-hover:opacity-100 group-hover:scale-110 origin-left transition-all duration-500"
              style={{ color: accentColor }}
            >
              {icon}
            </div>
          )}
          {num && !icon && (
            <span className="font-display text-[20px] leading-none opacity-25 mt-0.5">{num}</span>
          )}
          <h3 className="font-mono text-[13px] font-black uppercase tracking-wide text-protocol-text group-hover:text-blue transition-colors duration-400">
            {title}
          </h3>
        </div>
        {tag && (
          <StatusTag variant={tag.variant} label={tag.label} pulse={tag.pulse} className="shrink-0" />
        )}
      </div>

      <p className="text-[14px] text-protocol-text-dim leading-[1.7]">{description}</p>

      {children && <div className="mt-4">{children}</div>}

      {/* Corner accent */}
      <div
        className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 100% 100%, ${accentColor}15, transparent 70%)`,
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
