import React from 'react';
import {
  getColorPrimitive,
  typographyPrimitives,
  spacing,
  sizing,
} from '../tokens';

// Figma asset URLs - these expire after 7 days
// If these URLs expire, you'll need to download and host the images locally
const imgCurrencyDropdown = 'https://www.figma.com/api/mcp/asset/36ecb9d3-5381-4831-af8c-6569913a3d4a';
const imgDropdown = 'https://www.figma.com/api/mcp/asset/607e0eba-3147-41db-a978-e10d966387e9';

interface LeadingHeaderSelectorProps {
  className?: string;
  currency?: string;
  leading?: boolean;
  projection?: boolean;
  values?: string;
}

/**
 * Leading Header Selector Component
 * 
 * Displays currency and amount dropdown selectors with optional projection badge.
 */
const LeadingHeaderSelector: React.FC<LeadingHeaderSelectorProps> = ({
  className = '',
  currency = 'USD',
  leading = true,
  projection = false,
  values = '($) Thousands',
}) => {
  const xsSpacing = sizing.spacing.xs;
  const sSpacing = sizing.spacing.sm;
  const mSpacing = sizing.spacing.md;
  const borderRadius = spacing.radius.md;
  const fontSize = typographyPrimitives.size.xs;
  const lineHeight = typographyPrimitives.lineHeight.xs;
  const fontWeight = typographyPrimitives.weight.semiBold;
  const fontFamily = typographyPrimitives.family.inter;

  return (
    <div
      className={className}
      data-name="Leading Header Selector"
      data-node-id="1:1904"
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingRight: `${sSpacing}px`,
        isolation: 'isolate',
      }}
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
          >
            Projection
          </p>
        </div>
      )}
    </div>
  );
};

interface ColumnLeadingHeaderProps {
  className?: string;
  dropdown?: boolean;
  leading?: React.ReactNode | null;
  property1?: 'Default' | 'Selected';
  sub2?: string;
  subTitle?: string;
  title?: string;
}

/**
 * Column Leading Header Component
 * 
 * A header component for table columns that displays title, subtitle, and optional
 * currency/amount selectors. Supports selected and default states.
 * 
 * Uses design tokens for all styling (colors, typography, spacing, sizing).
 */
export const ColumnLeadingHeader: React.FC<ColumnLeadingHeaderProps> = ({
  className = '',
  dropdown = false,
  leading = null,
  property1 = 'Default',
  sub2 = '12/31',
  subTitle = 'Fiscal Year End:',
  title = 'Public Company Ownership',
}) => {
  const isSelected = property1 === 'Selected';
  
  // Design tokens
  const xsSpacing = sizing.spacing.xs;
  const sSpacing = sizing.spacing.sm;
  const mSpacing = sizing.spacing.md;
  const borderRadius = spacing.radius.sm;
  const fontFamily = typographyPrimitives.family.inter;
  
  // Typography tokens
  const titleSize = typographyPrimitives.size.l;
  const titleLineHeight = typographyPrimitives.lineHeight.l;
  const titleWeight = typographyPrimitives.weight.bold;
  const titleColor = isSelected 
    ? getColorPrimitive('brand', '800')
    : getColorPrimitive('brand', '800');
  
  const subtitleSize = typographyPrimitives.size.m;
  const subtitleLineHeight = typographyPrimitives.lineHeight.m;
  const subtitleWeight = typographyPrimitives.weight.regular;
  const subtitleColor = getColorPrimitive('neutral', '400');
  
  // Background and border colors
  const backgroundColor = isSelected
    ? getColorPrimitive('brand', '100')
    : getColorPrimitive('neutral', 'white');
  
  const borderColor = isSelected
    ? getColorPrimitive('brand', '500')
    : getColorPrimitive('neutral', '200');

  const containerStyles: React.CSSProperties = {
    border: `1px solid ${borderColor}`,
    display: 'flex',
    flexDirection: 'column',
    gap: `${sSpacing}px`,
    alignItems: 'flex-start',
    minHeight: '96px',
    position: 'relative',
    backgroundColor,
    borderRadius: `${borderRadius}px`,
    padding: `${sSpacing}px`,
  };

  return (
    <div
      className={className}
      id={isSelected ? 'node-23_1408' : 'node-20_1342'}
      style={containerStyles}
      data-name="Column Leading Header"
    >
      {/* Leading Header Selector */}
      {leading || (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingRight: `${sSpacing}px`,
            isolation: 'isolate',
            flexShrink: 0,
          }}
        >
          <LeadingHeaderSelector />
        </div>
      )}

      {/* Content Container */}
      <div
        data-name="Container"
        id={isSelected ? 'node-23_1410' : 'node-1_1899'}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: `${xsSpacing}px`,
          alignItems: 'flex-start',
          padding: `${sSpacing}px`,
          position: 'relative',
          flexShrink: 0,
          width: '100%',
        }}
      >
        {/* Title Container */}
        <div
          data-name="Title Container"
          id={isSelected ? 'node-23_1411' : 'node-1_2911'}
          style={{
            display: 'flex',
            gap: `${xsSpacing}px`,
            alignItems: 'flex-start',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontFamily,
              fontWeight: titleWeight,
              fontSize: `${titleSize}px`,
              lineHeight: `${titleLineHeight}px`,
              color: titleColor,
              letterSpacing: `${typographyPrimitives.letterSpacing.none}px`,
              margin: 0,
            }}
            data-node-id="1:1900"
          >
            {title}
          </p>
          {dropdown && (
            <div
              data-name="Dropdown"
              data-node-id="1:2908"
              style={{
                width: '24px',
                height: '24px',
                position: 'relative',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <img
                src={imgDropdown}
                alt=""
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  maxWidth: 'none',
                }}
              />
            </div>
          )}
        </div>

        {/* Info Container */}
        <div
          data-name="Info Container"
          id={isSelected ? 'node-23_1414' : 'node-1_1901'}
          style={{
            display: 'flex',
            gap: `${xsSpacing}px`,
            alignItems: 'center',
            lineHeight: `${subtitleLineHeight}px`,
            color: subtitleColor,
            fontSize: `${subtitleSize}px`,
            letterSpacing: `${typographyPrimitives.letterSpacing.none}px`,
            position: 'relative',
            flexShrink: 0,
            width: '100%',
          }}
        >
          <p
            style={{
              fontFamily,
              fontWeight: typographyPrimitives.weight.regular,
              margin: 0,
            }}
            data-node-id="1:1902"
          >
            {subTitle}
          </p>
          <p
            style={{
              fontFamily,
              fontWeight: typographyPrimitives.weight.bold,
              margin: 0,
            }}
            data-node-id="1:1903"
          >
            {sub2}
          </p>
        </div>
      </div>

      {/* Selected State Marker */}
      {isSelected && (
        <div
          data-name="Marker"
          data-node-id="23:1425"
          style={{
            position: 'absolute',
            backgroundColor: getColorPrimitive('brand', '500'),
            height: '96px',
            left: '-9px',
            borderRadius: `${xsSpacing}px 0 0 ${xsSpacing}px`,
            top: '-1px',
            width: `${sSpacing}px`,
          }}
        />
      )}
    </div>
  );
};
