import React from 'react';
import './logo.css';

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
 * Displays the brand logo in various sizes.
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
      <svg
        className="scalar-logo__svg"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="21" cy="21" r="21" fill="#037DE8" />
        <path
          d="M12.5 15.5C12.5 14.1193 13.6193 13 15 13H20V20H13.5C12.9477 20 12.5 19.5523 12.5 19V15.5Z"
          fill="white"
        />
        <path
          d="M29.5 22C29.5 21.4477 29.0523 21 28.5 21H22V29C22 29.5523 22.4477 30 23 30H27C28.3807 30 29.5 28.8807 29.5 27.5V22Z"
          fill="white"
        />
        <path
          d="M22 13H27C28.3807 13 29.5 14.1193 29.5 15.5V19C29.5 19.5523 29.0523 20 28.5 20H22V13Z"
          fill="white"
        />
        <path
          d="M12.5 22C12.5 21.4477 12.9477 21 13.5 21H20V29H15C13.6193 29 12.5 27.8807 12.5 26.5V22Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

