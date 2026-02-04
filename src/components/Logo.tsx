import React from 'react';
import { getColorPrimitive } from '../tokens';

// Default SVG logo as fallback (inline SVG)
const defaultLogoSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0iIzAzN0RFOCI+CjxwYXRoIGQ9Ik0yMCAwQzMxLjA0NTcgMCA0MCA4Ljk1NDMgNDAgMjBDNDAgMzEuMDQ1NyAzMS4wNDU3IDQwIDIwIDQwQzguOTU0MyA0MCAwIDMxLjA0NTcgMCAyMEMwIDguOTU0MzEgOC45NTQzMSAwIDIwIDBaIi8+CjxwYXRoIGQ9Ik0xOC4wOTQ3IDEzLjMzNFYxOS4wNDc5SDIyLjg1NzRWMjYuNjY3SDE5LjA0NzlWMzIuMzgwOUgyNy42MTkxVjEzLjMzNEgxOC4wOTQ3Wk0xMi4zODA5IDYuNjY2OTlWMjUuNzE0OEgyMS45MDQzVjIwSDE3LjE0MjZWMTIuMzgwOUgyMS45MDQzVjYuNjY2OTlIMTIuMzgwOVoiLz4KPC9nPgo8L3N2Zz4K';

type LogoSize = 'Small' | 'Mid' | 'Large' | 'XL';

export interface LogoProps {
  /** Size variant of the logo - matches Figma design sizes */
  size?: LogoSize;
  /** Optional custom class name */
  className?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Custom color for the logo background circle (defaults to brand/500) */
  color?: string;
  /** Path to SVG file for the logo (optional, uses default LOGO_SVG_PATH if not provided) */
  logoSvgPath?: string;
}

/**
 * Logo component for the Scalar Design System.
 * 
 * Displays the Scalar brand logo in various sizes matching the Figma design.
 * The logo uses an SVG file instead of a filled circle background.
 * 
 * Sizes match Figma design:
 * - Small: 16px
 * - Mid: 24px
 * - Large: 32px
 * - XL: 40px
 * 
 * @example
 * ```tsx
 * <Logo size="Mid" />
 * <Logo size="Large" alt="Scalar Design System Logo" logoSvgPath="/logo/logo.svg" />
 * ```
 */
export const Logo: React.FC<LogoProps> = ({
  size = 'Small',
  className = '',
  alt = 'Scalar Logo',
  color,
  logoSvgPath,
}) => {
  // Size mapping in pixels - matches Figma design exactly
  const sizeMap: Record<LogoSize, number> = {
    Small: 16,
    Mid: 24,
    Large: 32,
    XL: 40,
  };

  const pixelSize = sizeMap[size];
  const svgPath = logoSvgPath || defaultLogoSvg;

  const containerStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${pixelSize}px`,
    height: `${pixelSize}px`,
  };

  return (
    <div
      className={className}
      style={containerStyles}
      role="img"
      aria-label={alt}
      data-name="Logo"
      data-node-id="114-2335"
    >
      <img
        src={svgPath}
        alt={alt}
        width={pixelSize}
        height={pixelSize}
        style={{
          display: 'block',
          width: `${pixelSize}px`,
          height: `${pixelSize}px`,
        }}
      />
    </div>
  );
};

