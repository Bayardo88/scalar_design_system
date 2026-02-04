import React from 'react';
import {
  getColorPrimitive,
  getSemanticColor,
  typographyPrimitives,
  spacing,
  sizing,
} from '../tokens';

// Figma asset URLs - these expire after 7 days
// If these URLs expire, you'll need to download and host the images locally
const imgCalendarIcon = 'https://www.figma.com/api/mcp/asset/13e0c4a5-56eb-4038-861e-4686c2261de7';
const imgCalendarIcon1 = 'https://www.figma.com/api/mcp/asset/de25f7c2-e10b-492c-9877-b8a5ebd6937b';
const imgCalendarIcon2 = 'https://www.figma.com/api/mcp/asset/7080e8df-e0ee-4b09-811d-7e0ff1755480';
const imgCalendarIcon3 = 'https://www.figma.com/api/mcp/asset/6cf3ca37-4457-44fe-9ccf-35cd84efc576';
const imgAiChart = 'https://www.figma.com/api/mcp/asset/8ed238cd-9706-4c48-a4d5-0cf1e9a8daee';
const imgAiChartGroup = 'https://www.figma.com/api/mcp/asset/3aa54c15-cc67-44e5-87c6-8c9527e12c7d';
const imgTooltipMarkerDefault = 'https://www.figma.com/api/mcp/asset/43c134ab-94c9-424a-abe8-cdfcd2411568';
const imgTooltipMarkerSelected = 'https://www.figma.com/api/mcp/asset/98191090-8c3b-4796-ac6a-08e2a127f029';
const imgTooltipMarkerError = 'https://www.figma.com/api/mcp/asset/9ba728a9-43e3-4f9e-839b-f2ddffe4aecd';

export interface DataCellProps {
  className?: string;
  cellRightIcon?: React.ReactNode | null;
  hasAvatar?: boolean;
  hasIcon?: boolean;
  hasLabel?: boolean;
  hasTooltipMarker?: boolean;
  state?: 'Selected' | 'Editable' | 'Default' | 'error';
  text?: string;
  type?: 'Readable' | 'Editable' | 'Data' | 'Empty';
  avatarText?: string;
  labelText?: string;
  themeMode?: 'light' | 'dark';
}

/**
 * DataCell Component
 * 
 * A versatile data cell component that displays text with optional avatar, icon, label, and tooltip marker.
 * Supports multiple states (Selected, Editable, Default, error) and types (Readable, Editable, Data, Empty).
 * 
 * Uses design tokens for all styling (colors, typography, spacing, sizing).
 */
export const DataCell: React.FC<DataCellProps> = ({
  className = '',
  cellRightIcon = null,
  hasAvatar = false,
  hasIcon = true,
  hasLabel = false,
  hasTooltipMarker = true,
  state = 'Selected',
  text = '11/11/30',
  type = 'Readable',
  avatarText = 'BV',
  labelText = 'Label',
  themeMode = 'light',
}) => {
  // Design tokens
  const xsSpacing = sizing.spacing.xs;
  const sSpacing = sizing.spacing.sm;
  const borderRadius = spacing.radius.sm;
  const fontFamily = typographyPrimitives.family.inter;
  const fontSizeL = typographyPrimitives.size.l;
  const fontSizeS = typographyPrimitives.size.s;
  const fontSizeXs = typographyPrimitives.size.xs;
  const lineHeightL = typographyPrimitives.lineHeight.l;
  const lineHeightS = typographyPrimitives.lineHeight.s;
  const lineHeightXs = typographyPrimitives.lineHeight.xs;
  const fontWeightBold = typographyPrimitives.weight.bold;
  const fontWeightRegular = typographyPrimitives.weight.regular;
  const letterSpacing = typographyPrimitives.letterSpacing.none;

  // State combinations
  const isDefaultAndData = state === 'Default' && type === 'Data';
  const isDefaultAndEmpty = state === 'Default' && type === 'Empty';
  const isDefaultAndReadable = state === 'Default' && type === 'Readable';
  const isEditableAndEditable = state === 'Editable' && type === 'Editable';
  const isErrorAndReadable = state === 'error' && type === 'Readable';
  const isSelectedAndData = state === 'Selected' && type === 'Data';
  const isSelectedAndEditable = state === 'Selected' && type === 'Editable';
  const isSelectedAndReadable = state === 'Selected' && type === 'Readable';

  // Get background and border colors based on state and type
  const getBackgroundColor = (): string => {
    if (isErrorAndReadable) {
      return getColorPrimitive('red', '100');
    }
    if (isDefaultAndEmpty) {
      return getColorPrimitive('neutral', '100');
    }
    if (isSelectedAndReadable || isSelectedAndEditable || isSelectedAndData) {
      return getColorPrimitive('brand', '100');
    }
    return getColorPrimitive('neutral', 'white');
  };

  const getBorderColor = (): string => {
    if (isErrorAndReadable) {
      return getSemanticColor('background', 'negative', themeMode);
    }
    if (isSelectedAndReadable || isSelectedAndEditable || isSelectedAndData) {
      return getColorPrimitive('brand', '500');
    }
    return getColorPrimitive('neutral', '300');
  };

  // Get text color based on type
  const getTextColor = (): string => {
    if (isSelectedAndEditable || isEditableAndEditable) {
      return getSemanticColor('text', 'editable', themeMode);
    }
    if (isSelectedAndData || isDefaultAndData) {
      return getSemanticColor('text', 'sourced', themeMode);
    }
    if (isErrorAndReadable) {
      return getSemanticColor('text', 'negative', themeMode);
    }
    return getSemanticColor('text', 'readable', themeMode);
  };

  // Get icon based on state and type
  const getCalendarIcon = (): string => {
    if (isErrorAndReadable) {
      return imgCalendarIcon3;
    }
    if (isSelectedAndData || isDefaultAndData) {
      return imgCalendarIcon2;
    }
    if (isSelectedAndEditable || isEditableAndEditable) {
      return imgCalendarIcon1;
    }
    return imgCalendarIcon;
  };

  // Get tooltip marker based on state
  const getTooltipMarker = (): string | null => {
    if (!hasTooltipMarker) return null;
    if (isErrorAndReadable) {
      return imgTooltipMarkerError;
    }
    if (isSelectedAndReadable || isSelectedAndEditable || isSelectedAndData) {
      return imgTooltipMarkerSelected;
    }
    if (isDefaultAndData || isEditableAndEditable || isDefaultAndReadable || isDefaultAndEmpty) {
      return imgTooltipMarkerDefault;
    }
    return null;
  };

  const backgroundColor = getBackgroundColor();
  const borderColor = getBorderColor();
  const textColor = getTextColor();
  const calendarIcon = getCalendarIcon();
  const tooltipMarker = getTooltipMarker();

  const containerStyles: React.CSSProperties = {
    border: `1px solid ${borderColor}`,
    display: 'flex',
    flexDirection: 'column',
    gap: `${xsSpacing}px`,
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '40px',
    minWidth: '112px',
    padding: `${sSpacing}px`,
    position: 'relative',
    width: '114px',
    backgroundColor,
    borderRadius: `${borderRadius}px`,
  };

  const dateContainerStyles: React.CSSProperties = {
    display: 'flex',
    gap: `${xsSpacing}px`,
    alignItems: 'center',
    position: 'relative',
    flexShrink: 0,
    width: '100%',
  };

  const textStyles: React.CSSProperties = {
    flex: '1 0 0',
    fontFamily,
    lineHeight: `${lineHeightL}px`,
    minHeight: '1px',
    minWidth: '1px',
    fontStyle: 'normal',
    position: 'relative',
    color: textColor,
    fontSize: `${fontSizeL}px`,
    letterSpacing: `${letterSpacing}px`,
    whiteSpace: 'pre-wrap',
    margin: 0,
    fontFeatureSettings: "'lnum' 1, 'tnum' 1",
  };

  return (
    <div
      className={className}
      style={containerStyles}
      data-name="Data Cell"
      id={
        isErrorAndReadable
          ? 'node-32_1450'
          : isDefaultAndEmpty
          ? 'node-33_1472'
          : isDefaultAndReadable
          ? 'node-30_3213'
          : isEditableAndEditable
          ? 'node-30_3194'
          : isDefaultAndData
          ? 'node-30_3175'
          : isSelectedAndData
          ? 'node-30_3289'
          : isSelectedAndEditable
          ? 'node-30_3270'
          : 'node-30_3156'
      }
    >
      <div
        data-name="Date Container"
        style={dateContainerStyles}
        id={
          isErrorAndReadable
            ? 'node-32_1451'
            : isDefaultAndEmpty
            ? 'node-33_1473'
            : isDefaultAndReadable
            ? 'node-30_3214'
            : isEditableAndEditable
            ? 'node-30_3195'
            : isDefaultAndData
            ? 'node-30_3176'
            : isSelectedAndData
            ? 'node-30_3290'
            : isSelectedAndEditable
            ? 'node-30_3271'
            : 'node-30_3157'
        }
      >
        {/* Avatar */}
        {hasAvatar && (
          <div
            data-name="Avatar"
            data-node-id="30:3158"
            style={{
              border: `2px solid ${getColorPrimitive('brand', '500')}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: `${sSpacing}px`,
              position: 'relative',
              borderRadius: '24px',
              flexShrink: 0,
              width: '32px',
              height: '32px',
            }}
          >
            <p
              style={{
                fontFamily,
                fontWeight: fontWeightBold,
                fontSize: `${fontSizeS}px`,
                lineHeight: `${lineHeightS}px`,
                color: getColorPrimitive('brand', '500'),
                letterSpacing: `${letterSpacing}px`,
                whiteSpace: 'nowrap',
                margin: 0,
              }}
            >
              {avatarText}
            </p>
          </div>
        )}

        {/* Text - Readable or Empty states */}
        {(isSelectedAndReadable || isDefaultAndReadable || isDefaultAndEmpty) && (
          <p style={textStyles} data-node-id="30:3159">
            {text}
          </p>
        )}

        {/* Label Chip - Readable or Empty states */}
        {(isSelectedAndReadable || isDefaultAndReadable || isDefaultAndEmpty) && hasLabel && (
          <div
            data-name="Chip"
            data-node-id="30:3160"
            style={{
              backgroundColor: getColorPrimitive('neutral', '100'),
              display: 'flex',
              gap: `${xsSpacing}px`,
              alignItems: 'center',
              justifyContent: 'center',
              padding: `2px ${xsSpacing}px`,
              position: 'relative',
              borderRadius: `${xsSpacing}px`,
              flexShrink: 0,
            }}
          >
            <div
              data-name="Ai_chart"
              data-node-id="I30:3160;70:12105"
              style={{
                width: '24px',
                height: '24px',
                position: 'relative',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <img
                src={imgAiChart}
                alt=""
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  maxWidth: 'none',
                }}
              />
            </div>
            <p
              style={{
                fontFamily,
                fontWeight: fontWeightRegular,
                fontSize: `${fontSizeXs}px`,
                lineHeight: `${lineHeightXs}px`,
                color: getSemanticColor('text', 'tertiary', themeMode),
                textAlign: 'center',
                letterSpacing: `${letterSpacing}px`,
                whiteSpace: 'nowrap',
                margin: 0,
              }}
            >
              {labelText}
            </p>
          </div>
        )}

        {/* Icon - Readable or Empty states */}
        {(isSelectedAndReadable || isDefaultAndReadable || isDefaultAndEmpty) &&
          hasIcon &&
          (cellRightIcon || (
            <div
              data-name="Calendar"
              data-node-id="30:3161"
              style={{
                position: 'relative',
                flexShrink: 0,
                width: '24px',
                height: '24px',
              }}
            >
              <img
                src={calendarIcon}
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

        {/* Text - Editable states */}
        {(isSelectedAndEditable || isEditableAndEditable) && (
          <p style={textStyles} data-node-id="30:3273">
            {text}
          </p>
        )}

        {/* Label Chip - Editable states */}
        {(isSelectedAndEditable || isEditableAndEditable) && hasLabel && (
          <div
            data-name="Chip"
            data-node-id="30:3274"
            style={{
              backgroundColor: getColorPrimitive('neutral', '100'),
              display: 'flex',
              gap: `${xsSpacing}px`,
              alignItems: 'center',
              justifyContent: 'center',
              padding: `2px ${xsSpacing}px`,
              position: 'relative',
              borderRadius: `${xsSpacing}px`,
              flexShrink: 0,
            }}
          >
            <div
              data-name="Ai_chart"
              data-node-id="I30:3274;70:12105"
              style={{
                width: '24px',
                height: '24px',
                position: 'relative',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <img
                src={imgAiChart}
                alt=""
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  maxWidth: 'none',
                }}
              />
            </div>
            <p
              style={{
                fontFamily,
                fontWeight: fontWeightRegular,
                fontSize: `${fontSizeXs}px`,
                lineHeight: `${lineHeightXs}px`,
                color: getSemanticColor('text', 'tertiary', themeMode),
                textAlign: 'center',
                letterSpacing: `${letterSpacing}px`,
                whiteSpace: 'nowrap',
                margin: 0,
              }}
            >
              {labelText}
            </p>
          </div>
        )}

        {/* Icon - Editable states */}
        {(isSelectedAndEditable || isEditableAndEditable) &&
          hasIcon &&
          (cellRightIcon || (
            <div
              data-name="Calendar"
              data-node-id="30:3275"
              style={{
                position: 'relative',
                flexShrink: 0,
                width: '24px',
                height: '24px',
              }}
            >
              <img
                src={calendarIcon}
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

        {/* Text - Data states */}
        {(isSelectedAndData || isDefaultAndData) && (
          <p style={textStyles} data-node-id="30:3292">
            {text}
          </p>
        )}

        {/* Label Chip - Data states */}
        {(isSelectedAndData || isDefaultAndData) && hasLabel && (
          <div
            data-name="Chip"
            data-node-id="30:3293"
            style={{
              backgroundColor: getColorPrimitive('neutral', '100'),
              display: 'flex',
              gap: `${xsSpacing}px`,
              alignItems: 'center',
              justifyContent: 'center',
              padding: `2px ${xsSpacing}px`,
              position: 'relative',
              borderRadius: `${xsSpacing}px`,
              flexShrink: 0,
            }}
          >
            <div
              data-name="Ai_chart"
              data-node-id="I30:3293;70:12105"
              style={{
                width: '24px',
                height: '24px',
                position: 'relative',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <img
                src={imgAiChart}
                alt=""
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  maxWidth: 'none',
                }}
              />
            </div>
            <p
              style={{
                fontFamily,
                fontWeight: fontWeightRegular,
                fontSize: `${fontSizeXs}px`,
                lineHeight: `${lineHeightXs}px`,
                color: getSemanticColor('text', 'tertiary', themeMode),
                textAlign: 'center',
                letterSpacing: `${letterSpacing}px`,
                whiteSpace: 'nowrap',
                margin: 0,
              }}
            >
              {labelText}
            </p>
          </div>
        )}

        {/* Icon - Data states */}
        {(isSelectedAndData || isDefaultAndData) &&
          hasIcon &&
          (cellRightIcon || (
            <div
              data-name="Calendar"
              data-node-id="30:3294"
              style={{
                position: 'relative',
                flexShrink: 0,
                width: '24px',
                height: '24px',
              }}
            >
              <img
                src={calendarIcon}
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

        {/* Error state text */}
        {isErrorAndReadable && (
          <p style={textStyles} data-node-id="32:1453">
            {text}
          </p>
        )}

        {/* Error state label */}
        {isErrorAndReadable && hasLabel && (
          <div
            data-name="Chip"
            data-node-id="32:1454"
            style={{
              backgroundColor: getColorPrimitive('neutral', '100'),
              display: 'flex',
              gap: `${xsSpacing}px`,
              alignItems: 'center',
              justifyContent: 'center',
              padding: `2px ${xsSpacing}px`,
              position: 'relative',
              borderRadius: `${xsSpacing}px`,
              flexShrink: 0,
            }}
          >
            <div
              data-name="Ai_chart"
              data-node-id="I32:1454;70:12105"
              style={{
                width: '24px',
                height: '24px',
                position: 'relative',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <img
                src={imgAiChart}
                alt=""
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  maxWidth: 'none',
                }}
              />
            </div>
            <p
              style={{
                fontFamily,
                fontWeight: fontWeightRegular,
                fontSize: `${fontSizeXs}px`,
                lineHeight: `${lineHeightXs}px`,
                color: getSemanticColor('text', 'tertiary', themeMode),
                textAlign: 'center',
                letterSpacing: `${letterSpacing}px`,
                whiteSpace: 'nowrap',
                margin: 0,
              }}
            >
              {labelText}
            </p>
          </div>
        )}

        {/* Error state icon */}
        {isErrorAndReadable &&
          hasIcon &&
          (cellRightIcon || (
            <div
              data-name="Calendar"
              data-node-id="32:1455"
              style={{
                position: 'relative',
                flexShrink: 0,
                width: '24px',
                height: '24px',
              }}
            >
              <img
                src={calendarIcon}
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

      {/* Tooltip Markers */}
      {tooltipMarker && (
        <div
          style={{
            position: 'absolute',
            right: '-1px',
            top: '-1px',
            width: '8px',
            height: '8px',
          }}
          data-node-id={
            isErrorAndReadable
              ? '32:1456'
              : isSelectedAndReadable || isSelectedAndEditable || isSelectedAndData
              ? '30:3162'
              : '30:3181'
          }
        >
          <img
            src={tooltipMarker}
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
  );
};
