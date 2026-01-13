import React from 'react';
import './logo.css';
import logoSvg from '../Size=XL.svg';

type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface LogoProps {
  /** Size variant of the logo */
  size?: LogoSize;
  /** Optional custom class name */
  className?: string;
  /** Alt text for accessibility */
  alt?: string;
}

/**
 * Logo component for the Scalar Design System.
 * Displays the brand logo in various sizes using the SVG file.
 */
export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  alt = 'Scalar Logo',
}) => {
  const sizeClasses = {
    xs: 'scalar-logo--xs',
    sm: 'scalar-logo--sm',
    md: 'scalar-logo--md',
    lg: 'scalar-logo--lg',
    xl: 'scalar-logo--xl',
  };

  return (
    <div
      className={`scalar-logo ${sizeClasses[size]} ${className}`}
      role="img"
      aria-label={alt}
      data-name="Logo"
    >
      <img
        src={logoSvg}
        alt={alt}
        className="scalar-logo__image"
        width="100%"
        height="100%"
      />
    </div>
  );
};

