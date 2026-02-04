import React from 'react';
import {
  getColorPrimitive,
  typographyPrimitives,
  spacing,
  sizing,
} from '../tokens';

// Figma asset URLs - these expire after 7 days
// If these URLs expire, you'll need to download and host the images locally
const imgIcon = 'https://www.figma.com/api/mcp/asset/1aae86f1-f07f-47af-af08-16a9d1e7da70';
const imgIconVector = 'https://www.figma.com/api/mcp/asset/4f2c35d9-64fc-4a8d-9fbc-2ccc94cba859';
const imgCalendar = 'https://www.figma.com/api/mcp/asset/4326f819-f9d5-47e6-bba6-8627aec52d73';
const imgCalendar1 = 'https://www.figma.com/api/mcp/asset/9c091db9-2903-4ff0-ae43-973215dd697f';

interface LeadingActionProps {
  className?: string;
  label?: string;
  projection?: boolean;
}

/**
 * Leading Action Component
 * 
 * A badge component that displays a label with an icon, typically used for actions.
 */
const LeadingAction: React.FC<LeadingActionProps> = ({
  className = '',
  label = 'Mark all as Final',
  projection = true,
}) => {
  const xsSpacing = sizing.spacing.xs;
  const sSpacing = sizing.spacing.sm;
  const borderRadius = spacing.radius.md;
  const fontSize = typographyPrimitives.size.xs;
  const lineHeight = typographyPrimitives.lineHeight.xs;
  const fontWeight = typographyPrimitives.weight.semiBold;
  const fontFamily = typographyPrimitives.family.inter;

  if (!projection) return null;

  return (
    <div
      className={className}
      data-name="Leading Action"
      data-node-id="8:2026"
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        isolation: 'isolate',
      }}
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
  );
};

export interface ColumnHeaderProps {
  className?: string;
  icon?: boolean;
  iconHeader?: React.ReactNode | null;
  label?: string;
  leading?: boolean;
  leadingTop?: React.ReactNode | null;
  state?: 'Default' | 'Selected' | 'New Column';
  leadingLabel?: string;
  themeMode?: 'light' | 'dark';
}

/**
 * Column Header Component
 * 
 * A header component for table columns that displays a label with optional icon and leading action badge.
 * Supports three states: Default (white), Selected (light blue with blue top border), and New Column (light gray).
 * 
 * Uses design tokens for all styling (colors, typography, spacing, sizing).
 */
export const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  className = '',
  icon = false,
  iconHeader = null,
  label = 'Column Header',
  leading = false,
  leadingTop = null,
  state = 'Default',
  leadingLabel = 'Mark all as Final',
  themeMode = 'light',
}) => {
  const isDefaultOrSelected = ['Default', 'Selected'].includes(state);
  const isNewColumn = state === 'New Column';
  const isSelected = state === 'Selected';

  // Design tokens
  const xsSpacing = sizing.spacing.xs;
  const sSpacing = sizing.spacing.sm;
  const borderRadius = spacing.radius.sm;
  const fontFamily = typographyPrimitives.family.inter;
  const fontSizeL = typographyPrimitives.size.l;
  const lineHeightL = typographyPrimitives.lineHeight.l;
  const fontWeightBold = typographyPrimitives.weight.bold;
  const letterSpacing = typographyPrimitives.letterSpacing.none;

  // Get background and border colors based on state
  const getBackgroundColor = (): string => {
    if (isSelected) {
      return getColorPrimitive('brand', '100');
    }
    if (isNewColumn) {
      return getColorPrimitive('neutral', '100');
    }
    return getColorPrimitive('neutral', 'white');
  };

  const getBorderColor = (): string => {
    if (isSelected) {
      return getColorPrimitive('brand', '500');
    }
    if (isNewColumn) {
      return getColorPrimitive('neutral', '100');
    }
    return getColorPrimitive('neutral', '200');
  };

  const getTextColor = (): string => {
    if (isNewColumn) {
      return getColorPrimitive('neutral', '700');
    }
    return getColorPrimitive('brand', '800');
  };

  const backgroundColor = getBackgroundColor();
  const borderColor = getBorderColor();
  const textColor = getTextColor();

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  };

  const headerStyles: React.CSSProperties = {
    border: `1px solid ${borderColor}`,
    display: 'flex',
    flexDirection: 'column',
    gap: `${sSpacing}px`,
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '72px',
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    backgroundColor,
    borderRadius: `${borderRadius}px`,
  };

  const headerContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    alignItems: 'flex-start',
    padding: `${sSpacing}px`,
    position: 'relative',
    flexShrink: 0,
  };

  const textContainerStyles: React.CSSProperties = {
    display: 'flex',
    gap: `${xsSpacing}px`,
    alignItems: 'flex-start',
    position: 'relative',
    flexShrink: 0,
  };

  return (
    <div
      className={className}
      style={containerStyles}
      id={isSelected ? 'node-29_1673' : isNewColumn ? 'node-32_1643' : 'node-29_1674'}
      data-name="Column Header Wrapper"
    >
      <div
        data-name="Column Header"
        style={headerStyles}
        id={isSelected ? 'node-28_1660' : isNewColumn ? 'node-32_1645' : 'node-26_1577'}
      >
        {/* Leading Action */}
        {leading &&
          (leadingTop || (
            <div
              data-name="Leading Action"
              data-node-id="26:1579"
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                isolation: 'isolate',
                flexShrink: 0,
              }}
            >
              <LeadingAction label={leadingLabel} projection={true} />
            </div>
          ))}

        {/* Column Header Container */}
        <div
          data-name="Column Header Container"
          style={headerContainerStyles}
          id={isSelected ? 'node-28_1662' : isNewColumn ? 'node-32_1647' : 'node-26_1580'}
        >
          {/* Column Header Text Container */}
          <div
            data-name="Column Header Text Container"
            style={textContainerStyles}
            id={isSelected ? 'node-28_1663' : isNewColumn ? 'node-32_1648' : 'node-26_1581'}
          >
            {/* Default or Selected state text */}
            {isDefaultOrSelected && (
              <p
                style={{
                  fontFamily,
                  fontWeight: fontWeightBold,
                  fontSize: `${fontSizeL}px`,
                  lineHeight: `${lineHeightL}px`,
                  color: textColor,
                  letterSpacing: `${letterSpacing}px`,
                  margin: 0,
                }}
                data-node-id="26:1582"
              >
                {label}
              </p>
            )}

            {/* Default or Selected state icon */}
            {isDefaultOrSelected &&
              icon &&
              (iconHeader || (
                <div
                  data-name="Calendar"
                  data-node-id="26:1583"
                  style={{
                    position: 'relative',
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img
                    src={imgCalendar1}
                    alt=""
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      maxWidth: 'none',
                    }}
                  />
                </div>
              ))}

            {/* New Column state text */}
            {isNewColumn && (
              <p
                style={{
                  fontFamily,
                  fontWeight: fontWeightBold,
                  fontSize: `${fontSizeL}px`,
                  lineHeight: `${lineHeightL}px`,
                  color: textColor,
                  letterSpacing: `${letterSpacing}px`,
                  margin: 0,
                }}
                data-node-id="32:1649"
              >
                {label}
              </p>
            )}

            {/* New Column state icon */}
            {isNewColumn &&
              icon &&
              (iconHeader || (
                <div
                  data-name="Calendar"
                  data-node-id="32:1650"
                  style={{
                    position: 'relative',
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img
                    src={imgCalendar1}
                    alt=""
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      maxWidth: 'none',
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Selected State Top Marker */}
      {isSelected && (
        <div
          data-name="Marker"
          data-node-id="28:1659"
          style={{
            position: 'absolute',
            backgroundColor: getColorPrimitive('brand', '500'),
            height: `${sSpacing}px`,
            left: 0,
            right: 0,
            borderRadius: `${xsSpacing}px ${xsSpacing}px 0 0`,
            top: `-${sSpacing}px`,
          }}
        />
      )}
    </div>
  );
};
