import type { CSSProperties } from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'icon';
  height?: number;
  className?: string;
  style?: CSSProperties;
}

export default function BrandLogo({
  variant = 'full',
  height = 30,
  className = '',
  style,
}: BrandLogoProps) {
  const src =
    variant === 'icon'
      ? '/brand/fundoria-icon-light.png'
      : '/brand/fundoria-logo-light.png';

  return (
    <img
      src={src}
      alt="Fundoria"
      height={height}
      className={`brand-logo ${className}`}
      style={{ height: `${height}px`, ...style }}
      draggable={false}
    />
  );
}
