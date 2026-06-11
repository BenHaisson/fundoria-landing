type StatusVariant =
  | 'live'
  | 'done'
  | 'in-build'
  | 'coming-soon'
  | 'future'
  | 'alpha'
  | 'preview'
  | 'planned'
  | 'research'
  | 'in-audit'
  | 'phased';

interface StyleDef {
  dot: string;
  text: string;
  border: string;
  bg: string;
}

const styles: Record<StatusVariant, StyleDef> = {
  live:          { dot: 'bg-blue',            text: 'text-blue',             border: 'border-blue/30',          bg: 'bg-blue/5' },
  done:          { dot: 'bg-green',           text: 'text-green',            border: 'border-green/30',         bg: 'bg-green/5' },
  'in-build':    { dot: 'bg-amber-500',       text: 'text-amber-500',        border: 'border-amber-500/30',     bg: 'bg-amber-500/5' },
  'coming-soon': { dot: 'bg-sky-400',         text: 'text-sky-400',          border: 'border-sky-400/30',       bg: 'bg-sky-400/5' },
  future:        { dot: 'bg-[#4A6484]',       text: 'text-protocol-text-dim/60', border: 'border-protocol-border', bg: '' },
  alpha:         { dot: 'bg-blue',            text: 'text-blue',             border: 'border-blue/30',          bg: 'bg-blue/5' },
  preview:       { dot: 'bg-purple-400',      text: 'text-purple-400',       border: 'border-purple-400/30',    bg: 'bg-purple-400/5' },
  planned:       { dot: 'bg-[#4A6484]',       text: 'text-protocol-text-dim/50', border: 'border-protocol-border', bg: '' },
  research:      { dot: 'bg-violet-400',      text: 'text-violet-400',       border: 'border-violet-400/30',    bg: 'bg-violet-400/5' },
  'in-audit':    { dot: 'bg-orange-400',      text: 'text-orange-400',       border: 'border-orange-400/30',    bg: 'bg-orange-400/5' },
  phased:        { dot: 'bg-purple-400',      text: 'text-purple-400',       border: 'border-purple-400/30',    bg: 'bg-purple-400/5' },
};

interface StatusTagProps {
  variant: StatusVariant;
  label: string;
  pulse?: boolean;
  className?: string;
}

export default function StatusTag({ variant, label, pulse = false, className = '' }: StatusTagProps) {
  const s = styles[variant];
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest ${s.text} ${s.border} ${s.bg} ${className}`}
    >
      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${s.dot} ${pulse ? 'animate-pulse' : ''}`} />
      {label}
    </span>
  );
}
