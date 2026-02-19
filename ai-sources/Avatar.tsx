/**
 * Avatar — AI-generated component
 *
 * Source of truth (Figma):
 * https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=66-11868&m=dev
 *
 * Rules: public/AI-Rules.md
 * Tokens: design-tokens.scalar.ai.json (semantic tokens only; no hardcoded values)
 */

import React, { useState } from 'react';

/** Semantic token names from design-tokens.scalar.ai.json */
type SemanticVar =
  | 'background-brand'
  | 'text-button-label'
  | 'stroke-disable';

function varOf(name: SemanticVar): string {
  return `var(--${name})`;
}

/** Size scale from tokens: xs/s/m/l/xl map to primitive/size units (Figma node 66-11868) */
const sizeToPx = (size: 'xs' | 's' | 'm' | 'l' | 'xl') =>
  size === 'xs' ? 'var(--20)' : size === 's' ? 'var(--24)' : size === 'm' ? 'var(--32)' : size === 'l' ? 'var(--40)' : 'var(--48)';

/** Typography for initials: size from primitiveType */
const sizeToFont = (size: 'xs' | 's' | 'm' | 'l' | 'xl') =>
  size === 'xs'
    ? { fontSize: 'var(--10)', lineHeight: 'var(--14)' }
    : size === 's'
      ? { fontSize: 'var(--10)', lineHeight: 'var(--14)' }
      : size === 'm'
        ? { fontSize: 'var(--12)', lineHeight: 'var(--16)' }
        : size === 'l'
          ? { fontSize: 'var(--14)', lineHeight: 'var(--20)' }
          : { fontSize: 'var(--16)', lineHeight: 'var(--24)' };

export type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface AvatarProps {
  /** Image URL. When absent or on error, fallback to initials from `name`. */
  src?: string | null;
  /** Alt text for the image. */
  alt?: string;
  /** Display name used to derive initials (e.g. "Jane Doe" → "JD"). */
  name?: string;
  /** Size from design token scale (xs for use in ContentCell with avatar + name). */
  size?: AvatarSize;
  /** Optional border; uses semantic stroke. */
  bordered?: boolean;
  className?: string;
}

function getInitials(name: string | undefined): string {
  if (!name || !name.trim()) return '';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

/**
 * Avatar component. All styling from design-tokens.scalar.ai.json via CSS variables.
 * Renders image or fallback initials. Theme: :root and [data-theme="dark"] must define semantic variables.
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  name,
  size = 'm',
  bordered = false,
  className = '',
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = Boolean(src && !imgFailed);
  const initials = getInitials(name);
  const dim = sizeToPx(size);
  const font = sizeToFont(size);

  const baseStyle: React.CSSProperties = {
    width: dim,
    height: dim,
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--family-inter)',
    fontWeight: 'var(--weight-semi-bold)',
    letterSpacing: 'var(--letter-spacing-none)',
    fontSize: font.fontSize,
    lineHeight: font.lineHeight,
    backgroundColor: varOf('background-brand'),
    color: varOf('text-button-label'),
    border: bordered ? `1px solid ${varOf('stroke-disable')}` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className={`ai-avatar ai-avatar--${size} ${bordered ? 'ai-avatar--bordered' : ''} ${className}`}
      style={baseStyle}
      role="img"
      aria-label={alt || name || 'Avatar'}
    >
      {showImage ? (
        <img
          src={src!}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span aria-hidden style={{ userSelect: 'none' }}>
          {initials || '?'}
        </span>
      )}
    </div>
  );
};

export default Avatar;
