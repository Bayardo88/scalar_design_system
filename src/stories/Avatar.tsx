import React from 'react';
import './avatar.css';

type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  /** User initials to display (max 2 characters recommended) */
  initials?: string;
  /** Size variant of the avatar */
  size?: AvatarSize;
  /** Image URL for the avatar */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Optional custom class name */
  className?: string;
}

/**
 * Avatar component for the Scalar Design System.
 * Displays user avatars with initials or an image.
 */
export const Avatar: React.FC<AvatarProps> = ({
  initials = 'BV',
  size = 'sm',
  src,
  alt = 'User avatar',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'scalar-avatar--sm',
    md: 'scalar-avatar--md',
    lg: 'scalar-avatar--lg',
  };

  const hasImage = Boolean(src);

  return (
    <div
      className={`scalar-avatar ${sizeClasses[size]} ${className}`}
      role="img"
      aria-label={hasImage ? alt : `Avatar for ${initials}`}
      data-name="Avatar"
    >
      {!hasImage && (
        <div className="scalar-avatar__initials">
          <p>{initials}</p>
        </div>
      )}
      {hasImage && (
        <img
          className="scalar-avatar__image"
          src={src}
          alt={alt}
        />
      )}
    </div>
  );
};

