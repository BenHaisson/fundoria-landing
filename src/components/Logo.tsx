import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 32, showText = false }: LogoProps) {
  const iconSize = size;
  const fontSize = Math.round(size * 0.75);

  const icon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo_grad_main" x1="6" y1="18" x2="24" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#36AAB5" />
          <stop offset="1" stopColor="#39D392" />
        </linearGradient>
      </defs>
      {/* Bottom arc — light gray */}
      <path
        d="M6 24C6 16 10 12 18 12H24"
        stroke="#D1D5DB"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Top arc — cyan → green gradient */}
      <path
        d="M6 18C6 10 10 6 18 6H24"
        stroke="url(#logo_grad_main)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (!showText) {
    return (
      <span className={className}>
        {icon}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {icon}
      {/* Wordmark — Bebas Neue display font, matching the site headings */}
      <span
        className="font-display tracking-[0.12em] text-protocol-text leading-none select-none"
        style={{ fontSize: `${fontSize}px` }}
      >
        FUNDORIA
      </span>
      {/* Gradient accent dot */}
      <span
        className="rounded-full shrink-0"
        style={{
          width: Math.max(4, Math.round(size * 0.13)),
          height: Math.max(4, Math.round(size * 0.13)),
          background: 'linear-gradient(135deg, #36AAB5, #39D392)',
        }}
      />
    </span>
  );
}
