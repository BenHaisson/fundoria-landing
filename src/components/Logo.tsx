import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 32, showText = false }: LogoProps) {
  // If we show text, we use a wider viewBox and width
  // Based on the description: Icon on left, "Fundoria" text, then a dot on the right
  const width = showText ? size * 5 : size;
  const viewBox = showText ? `0 0 ${32 * 5} 32` : "0 0 32 32";

  return (
    <svg 
      width={width} 
      height={size} 
      viewBox={viewBox} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Symbol Container (at x=0) */}
      <g id="symbol">
        {/* Bottom Layer - Solid Light Gray */}
        <path 
          d="M6 24C6 16 10 12 18 12H24" 
          stroke="#D1D5DB" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
        {/* Top Layer - Cyan to Green Gradient */}
        <path 
          d="M6 18C6 10 10 6 18 6H24" 
          stroke="url(#logo_grad_main)" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
      </g>

      {showText && (
        <>
          {/* Text: Fundoria */}
          <text
            x="36"
            y="21"
            fill="#D1D5DB"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif', 
              fontWeight: '700', 
              fontSize: '18px',
              letterSpacing: '-0.02em'
            }}
          >
            Fundoria
          </text>
          
          {/* Accent dot at far right */}
          <circle 
            cx="130" 
            cy="18" 
            r="3" 
            fill="url(#logo_grad_main)" 
          />
        </>
      )}

      <defs>
        <linearGradient id="logo_grad_main" x1="6" y1="18" x2="24" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#36AAB5"/> {/* Cyan */}
          <stop offset="1" stopColor="#39D392"/> {/* Green */}
        </linearGradient>
      </defs>
    </svg>
  );
}
