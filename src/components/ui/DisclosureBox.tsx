import { ReactNode } from 'react';

interface DisclosureBoxProps {
  label?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'warning';
}

export default function DisclosureBox({
  label = 'DISCLOSURE',
  children,
  className = '',
  variant = 'default',
}: DisclosureBoxProps) {
  const border =
    variant === 'warning'
      ? 'border-amber-500/20 bg-amber-500/[0.03]'
      : 'border-protocol-border/30 bg-protocol-bg/50';
  const labelColor = variant === 'warning' ? 'text-amber-500/60' : 'text-blue/50';

  return (
    <div className={`border px-5 py-4 ${border} ${className}`}>
      <p className="font-mono text-[10px] text-protocol-text-dim/55 uppercase tracking-wider leading-[1.8]">
        {label && (
          <span className={`font-bold ${labelColor}`}>[{label}]</span>
        )}
        {label && ' · '}
        {children}
      </p>
    </div>
  );
}
