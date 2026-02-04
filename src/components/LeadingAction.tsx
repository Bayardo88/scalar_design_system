import React from 'react';
import {
  getColorPrimitive,
  typographyPrimitives,
  spacing,
  sizing,
} from '../tokens';

// Figma asset URLs - these expire after 7 days
// If these URLs expire, you'll need to download and host the images locally
const imgIcon = 'https://www.figma.com/api/mcp/asset/d14040c1-4cef-4960-a937-f567f424643f';
const imgIconVector = 'https://www.figma.com/api/mcp/asset/9f7401ae-71ac-46a9-8fd2-2994aa745733';

export interface LeadingActionProps {
  className?: string;
  label?: string;
  projection?: boolean;
  themeMode?: 'light' | 'dark';
}

/**
 * Leading Action Component
 * 
 * A badge component that displays an action label with an icon (e.g., "Mark all as Final").
 * Used in column headers to provide quick actions.
 * 
 * Uses design tokens for all styling (colors, typography, spacing, sizing).
 */
export const LeadingAction: React.FC<LeadingActionProps> = ({
  className = '',
  label = 'Mark all as Final',
  projection = true,
  themeMode = 'light',
}) => {
  // Design tokens
  const xsSpacing = sizing.spacing.xs;
  const sSpacing = sizing.spacing.sm;
  const borderRadius = spacing.radius.md;
  const fontSize = typographyPrimitives.size.xs;
  const lineHeight = typographyPrimitives.lineHeight.xs;
  const fontWeight = typographyPrimitives.weight.semiBold;
  const fontFamily = typographyPrimitives.family.inter;

  if (!projection) return null;

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    isolation: 'isolate',
  };

  return (
    <div
      className={className}
      data-name="Leading Action"
      data-node-id="8:2026"
      style={containerStyles}
    >
      <div
        data-name="Property 1=Default"
        data-node-id="8:2027"
        style={containerStyles}
      >
        <div
          data-name="Leading Header Label"
          data-node-id="8:2028"
          style={{
            backgroundColor: getColorPrimitive('green', '300'),
            border: `1px solid ${getColorPrimitive('green', '300')}`,
            display: 'flex',
            gap: `${xsSpacing}px`,
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '24px',
            padding: `${xsSpacing}px ${sSpacing}px`,
            position: 'relative',
            borderBottomRightRadius: `${borderRadius}px`,
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontFamily,
              fontWeight,
              fontSize: `${fontSize}px`,
              lineHeight: `${lineHeight}px`,
              color: getColorPrimitive('neutral', 'white'),
              letterSpacing: `${typographyPrimitives.letterSpacing.none}px`,
              whiteSpace: 'nowrap',
              margin: 0,
            }}
            data-node-id="8:2029"
          >
            {label}
          </p>
          <div
            data-name="Doc/outline"
            data-node-id="8:2030"
            style={{
              width: '24px',
              height: '24px',
              position: 'relative',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            <img
              src={imgIcon}
              alt=""
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                maxWidth: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
