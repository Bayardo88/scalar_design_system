import React from 'react';
import { getColorPrimitive, getSemanticColor, typographyPrimitives } from '../tokens';
import type { ThemeMode } from '../tokens/types';

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
  /** Theme mode for colors */
  themeMode?: ThemeMode;
}

/**
 * Avatar component for the Scalar Design System.
 * 
 * Displays user avatars with initials or an image.
 * Follows a 1:1 aspect ratio with circular shape.
 * 
 * Sizes from Figma design:
 * - sm: 32x32px, border-radius: 24px, font: 12px/16px Bold
 * - md: 48x48px, border-radius: 24px, font: 16px/24px Bold
 * - lg: 64x64px, border-radius: 32px, font: 20px/28px Bold
 * 
 * @example
 * ```tsx
 * <Avatar initials="JD" size="md" />
 * <Avatar src="/user-photo.jpg" alt="John Doe" size="lg" />
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({
  initials = 'BV',
  size = 'sm',
  src,
  alt = 'User avatar',
  className = '',
  themeMode = 'light',
}) => {
  // Size configurations from Figma design (1:1 ratio)
  const sizeConfig: Record<AvatarSize, {
    dimension: number;
    borderRadius: number;
    fontSize: number;
    lineHeight: number;
  }> = {
    sm: {
      dimension: 32,
      borderRadius: 24,
      fontSize: typographyPrimitives.size.s, // 12px
      lineHeight: typographyPrimitives.lineHeight.s, // 16px
    },
    md: {
      dimension: 48,
      borderRadius: 24,
      fontSize: typographyPrimitives.size.l, // 16px
      lineHeight: typographyPrimitives.lineHeight.l, // 24px
    },
    lg: {
      dimension: 64,
      borderRadius: 32, // xl from sizing tokens
      fontSize: typographyPrimitives.size['2xl'], // 20px
      lineHeight: typographyPrimitives.lineHeight['2xl'], // 28px
    },
  };

  const config = sizeConfig[size];
  
  // Get colors from design tokens
  const brandColor = getSemanticColor('text', 'editable', themeMode); // brand color for text
  const borderColor = getColorPrimitive('brand', '500'); // #037DE8
  const fontFamily = typographyPrimitives.family.inter;
  const fontWeight = typographyPrimitives.weight.bold; // 700

  const hasImage = Boolean(src);

  // Container styles
  const containerStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${config.dimension}px`,
    height: `${config.dimension}px`,
    borderRadius: `${config.borderRadius}px`,
    border: `2px solid ${borderColor}`,
    padding: '8px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    flexShrink: 0,
  };

  // Initials text styles
  const initialsStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily,
    fontSize: `${config.fontSize}px`,
    fontWeight,
    lineHeight: 0,
    color: brandColor,
    letterSpacing: '0px',
    whiteSpace: 'nowrap',
  };

  const paragraphStyles: React.CSSProperties = {
    margin: 0,
    lineHeight: `${config.lineHeight}px`,
  };

  // Image styles
  const imageStyles: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    pointerEvents: 'none',
    borderRadius: `${config.borderRadius}px`,
  };

  return (
    <div
      className={className}
      style={containerStyles}
      role="img"
      aria-label={hasImage ? alt : `Avatar for ${initials}`}
      data-name="Avatar"
      data-node-id="66:11868"
    >
      {!hasImage && (
        <div style={initialsStyles}>
          <p style={paragraphStyles}>{initials}</p>
        </div>
      )}
      {hasImage && (
        <img
          style={imageStyles}
          src={src}
          alt={alt}
        />
      )}
    </div>
  );
};

