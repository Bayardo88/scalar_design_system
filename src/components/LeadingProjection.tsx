import React from 'react';
import {
  getColorPrimitive,
  typographyPrimitives,
  spacing,
  sizing,
} from '../tokens';

export interface LeadingProjectionProps {
  className?: string;
  label?: string;
  projection?: boolean;
  themeMode?: 'light' | 'dark';
}

/**
 * Leading Projection Component
 * 
 * A badge component that displays a "Projection" label.
 * Used in column headers to indicate projected data.
 * 
 * Uses design tokens for all styling (colors, typography, spacing, sizing).
 */
export const LeadingProjection: React.FC<LeadingProjectionProps> = ({
  className = '',
  label = 'Projection',
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
      data-name="Leading Projection"
      data-node-id="1:1915"
      style={containerStyles}
    >
      <div
        data-name="Property 1=Default"
        data-node-id="1:1916"
        style={containerStyles}
      >
        <div
          data-name="Leading Header Label"
          data-node-id="1:1917"
          style={{
            backgroundColor: getColorPrimitive('brand', '600'),
            border: `1px solid ${getColorPrimitive('brand', '600')}`,
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
            data-node-id="1:1918"
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};
