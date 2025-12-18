import React from 'react';
import { getColorPrimitive } from '../tokens';

type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface LogoProps {
  /** Size variant of the logo */
  size?: LogoSize;
  /** Optional custom class name */
  className?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Custom color for the logo background (defaults to brand/500) */
  color?: string;
}

/**
 * Logo component for the Scalar Design System.
 * 
 * Displays the Scalar brand logo in various sizes using design tokens.
 * The logo uses the brand/500 color (#037DE8) by default.
 * 
 * @example
 * ```tsx
 * <Logo size="md" />
 * <Logo size="lg" alt="Scalar Design System Logo" />
 * ```
 */
export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  alt = 'Scalar Logo',
  color,
}) => {
  // Size mapping in pixels (md = 42px matches Figma design)
  const sizeMap: Record<LogoSize, number> = {
    xs: 24,
    sm: 32,
    md: 42,
    lg: 56,
    xl: 72,
  };

  const pixelSize = sizeMap[size];
  
  // Use brand/500 color from design tokens as default
  const logoColor = color || getColorPrimitive('brand', '500');
  const whiteColor = getColorPrimitive('neutral', 'white');

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
      data-node-id="70:12074"
    >
      <svg
        width={pixelSize}
        height={pixelSize}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ display: 'block' }}
      >
        {/* Background circle with brand color */}
        <circle cx="21" cy="21" r="21" fill={logoColor} />
        
        {/* Top-left square with rounded corner */}
        <path
          d="M12.5 15.5C12.5 14.1193 13.6193 13 15 13H20V20H13.5C12.9477 20 12.5 19.5523 12.5 19V15.5Z"
          fill={whiteColor}
        />
        
        {/* Bottom-right square with rounded corner */}
        <path
          d="M29.5 22C29.5 21.4477 29.0523 21 28.5 21H22V29C22 29.5523 22.4477 30 23 30H27C28.3807 30 29.5 28.8807 29.5 27.5V22Z"
          fill={whiteColor}
        />
        
        {/* Top-right square with rounded corner */}
        <path
          d="M22 13H27C28.3807 13 29.5 14.1193 29.5 15.5V19C29.5 19.5523 29.0523 20 28.5 20H22V13Z"
          fill={whiteColor}
        />
        
        {/* Bottom-left square with rounded corner */}
        <path
          d="M12.5 22C12.5 21.4477 12.9477 21 13.5 21H20V29H15C13.6193 29 12.5 27.8807 12.5 26.5V22Z"
          fill={whiteColor}
        />
      </svg>
    </div>
  );
};

