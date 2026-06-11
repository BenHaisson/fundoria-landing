import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

type CTAVariant = 'primary' | 'secondary' | 'ghost';

interface CTAButtonProps {
  onClick?: () => void;
  variant?: CTAVariant;
  children: ReactNode;
  arrow?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
}

const base =
  'group relative font-mono font-black uppercase tracking-[0.2em] px-8 py-4 flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 active:scale-[0.98]';

const variants: Record<CTAVariant, string> = {
  primary:
    'bg-blue hover:bg-green text-black text-[11px] shadow-[0_0_40px_rgba(47,128,237,0.3)] hover:shadow-[0_0_80px_rgba(0,200,150,0.5)]',
  secondary:
    'border border-protocol-border hover:border-blue/50 text-protocol-text-dim hover:text-protocol-text text-[11px]',
  ghost:
    'border border-blue/30 hover:border-blue text-blue text-[10px]',
};

export default function CTAButton({
  onClick,
  variant = 'primary',
  children,
  arrow = true,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}: CTAButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : 'w-auto'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 pointer-events-none" />
      )}
      {variant === 'secondary' && (
        <div className="absolute inset-0 bg-blue/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
      )}
      <span className="relative">{children}</span>
      {arrow && (
        <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
}
