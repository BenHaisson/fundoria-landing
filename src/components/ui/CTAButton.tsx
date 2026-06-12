import React from 'react';
import { motion } from 'motion/react';

interface CTAButtonProps {
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function CTAButton({
  onClick,
  variant = 'primary',
  children,
  className = '',
  fullWidth = false,
  size = 'md',
}: CTAButtonProps) {
  const sizeClasses: Record<string, string> = {
    sm: 'px-4 py-2 text-[9px]',
    md: 'px-6 py-3 text-[10px]',
    lg: 'px-8 py-4 text-[11px]',
  };

  const baseClasses = [
    'relative inline-flex items-center justify-center',
    'font-mono uppercase tracking-widest',
    'transition-all duration-200 cursor-pointer',
    'active:scale-[0.97] select-none',
    'overflow-hidden',
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
  ].join(' ');

  if (variant === 'primary') {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseClasses} bg-blue text-black font-semibold hover:bg-green group ${className}`}
      >
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden="true"
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }

  if (variant === 'secondary') {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseClasses} bg-transparent border border-blue text-blue hover:bg-blue/10 ${className}`}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} bg-transparent text-protocol-text-dim hover:text-protocol-text ${className}`}
    >
      {children}
    </motion.button>
  );
}
