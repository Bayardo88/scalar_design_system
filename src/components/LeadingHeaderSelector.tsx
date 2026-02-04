import React from 'react';
import {
  getColorPrimitive,
  typographyPrimitives,
  spacing,
  sizing,
} from '../tokens';

// Figma asset URLs - these expire after 7 days
// If these URLs expire, you'll need to download and host the images locally
const imgCurrencyDropdown = 'https://www.figma.com/api/mcp/asset/2083d519-e64c-4b4c-87f7-2b6fdd0bbf37';
const imgDropdownVector = 'https://www.figma.com/api/mcp/asset/a6c61faa-1db9-4ea6-bf91-e5db09172d38';

export interface LeadingHeaderSelectorProps {
  className?: string;
  currency?: string;
  leading?: boolean;
  projection?: boolean;
  values?: string;
  themeMode?: 'light' | 'dark';
}

/**
 * Leading Header Selector Component
 * 
 * A selector component that displays currency and amount dropdowns with optional projection badge.
 * Used in column headers to allow users to select currency and value format.
 * 
 * Uses design tokens for all styling (colors, typography, spacing, sizing).
 */
export const LeadingHeaderSelector: React.FC<LeadingHeaderSelectorProps> = ({
  className = '',
  currency = 'USD',
  leading = true,
  projection = false,
  values = '($) Thousands',
  themeMode = 'light',
}) => {
  // Design tokens
  const xsSpacing = sizing.spacing.xs;
  const sSpacing = sizing.spacing.sm;
  const mSpacing = sizing.spacing.md;
  const borderRadius = spacing.radius.md;
  const fontSize = typographyPrimitives.size.xs;
  const lineHeight = typographyPrimitives.lineHeight.xs;
  const fontWeight = typographyPrimitives.weight.semiBold;
  const fontFamily = typographyPrimitives.family.inter;

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingRight: `${sSpacing}px`,
    isolation: 'isolate',
  };

  return (
    <div
      className={className}
      data-name="Leading Header Selector"
      data-node-id="1:1904"
      style={containerStyles}
    >
      {leading && (
        <>
          {/* Currency Container */}
          <div
            data-name="Currency Container"
            data-node-id="1:1906"
            style={{
              backgroundColor: getColorPrimitive('neutral', 'white'),
              border: `1px solid ${getColorPrimitive('green', '400')}`,
              display: 'flex',
              gap: `${xsSpacing}px`,
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '24px',
              marginRight: `-${sSpacing}px`,
              padding: `${xsSpacing}px ${sSpacing}px`,
              position: 'relative',
              borderBottomRightRadius: `${borderRadius}px`,
              flexShrink: 0,
              zIndex: 3,
            }}
          >
            <p
              style={{
                fontFamily,
                fontWeight,
                fontSize: `${fontSize}px`,
                lineHeight: `${lineHeight}px`,
                color: getColorPrimitive('green', '400'),
                letterSpacing: `${typographyPrimitives.letterSpacing.none}px`,
                whiteSpace: 'nowrap',
                margin: 0,
              }}
              data-node-id="1:1907"
            >
              {currency}
            </p>
            <div
              data-name="Dropdown"
              data-node-id="1:1908"
              style={{
                width: '24px',
                height: '24px',
                position: 'relative',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <img
                src={imgCurrencyDropdown}
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

          {/* Amount Container */}
          <div
            data-name="Amount Container"
            data-node-id="1:1909"
            style={{
              backgroundColor: getColorPrimitive('neutral', 'white'),
              border: `1px solid ${getColorPrimitive('neutral', '400')}`,
              display: 'flex',
              gap: `${xsSpacing}px`,
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '24px',
              marginRight: `-${sSpacing}px`,
              padding: `${xsSpacing}px ${sSpacing}px ${xsSpacing}px ${mSpacing}px`,
              position: 'relative',
              borderBottomRightRadius: `${borderRadius}px`,
              flexShrink: 0,
              zIndex: 2,
            }}
          >
            <p
              style={{
                fontFamily,
                fontWeight,
                fontSize: `${fontSize}px`,
                lineHeight: `${lineHeight}px`,
                color: getColorPrimitive('neutral', '400'),
                letterSpacing: `${typographyPrimitives.letterSpacing.none}px`,
                whiteSpace: 'nowrap',
                margin: 0,
              }}
              data-node-id="1:1910"
            >
              {values}
            </p>
            <div
              data-name="Dropdown"
              data-node-id="1:1911"
              style={{
                width: '24px',
                height: '24px',
                position: 'relative',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <img
                src={imgCurrencyDropdown}
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
        </>
      )}

      {/* Projection Badge */}
      {projection && (
        <div
          data-name="Leading Header Label"
          data-node-id="1:1912"
          style={{
            backgroundColor: getColorPrimitive('brand', '600'),
            border: `1px solid ${getColorPrimitive('brand', '600')}`,
            display: 'flex',
            gap: `${xsSpacing}px`,
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '24px',
            marginRight: `-${sSpacing}px`,
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
            data-node-id="1:1913"
          >
            Projection
          </p>
        </div>
      )}
    </div>
  );
};
