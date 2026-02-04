import React from 'react';
import {
  getColorPrimitive,
  getSemanticColor,
  typographyPrimitives,
  spacing,
  sizing,
} from '../tokens';

export interface TitleItemRowProps {
  className?: string;
  state?: 'Default' | 'Selected';
  style?: 'Default' | 'Total' | 'Data' | 'Editable' | 'Readable';
  titleRow?: string;
  themeMode?: 'light' | 'dark';
}

/**
 * Title Item Row Component
 * 
 * A row component that displays a title with different styles and states.
 * Supports multiple styles (Default, Total, Data, Editable, Readable) and states (Default, Selected).
 * 
 * Uses design tokens for all styling (colors, typography, spacing, sizing).
 */
export const TitleItemRow: React.FC<TitleItemRowProps> = ({
  className = '',
  state = 'Default',
  style = 'Default',
  titleRow = 'Title row',
  themeMode = 'light',
}) => {
  // State and style combinations
  const isDataAndDefault = style === 'Data' && state === 'Default';
  const isDefaultAndDefault = style === 'Default' && state === 'Default';
  const isDefaultAndSelected = style === 'Default' && state === 'Selected';
  const isEditableAndDefault = style === 'Editable' && state === 'Default';
  const isReadableAndDefault = style === 'Readable' && state === 'Default';
  const isTotalAndDefault = style === 'Total' && state === 'Default';
  const isTotalAndSelected = style === 'Total' && state === 'Selected';

  // Design tokens
  const xsSpacing = sizing.spacing.xs;
  const sSpacing = sizing.spacing.sm;
  const borderRadius = spacing.radius.sm;
  const fontFamily = typographyPrimitives.family.inter;
  const fontSizeL = typographyPrimitives.size.l;
  const lineHeightL = typographyPrimitives.lineHeight.l;
  const fontWeightLight = 300; // Light weight (not in primitives, using 300)
  const fontWeightBold = typographyPrimitives.weight.bold;
  const letterSpacing = typographyPrimitives.letterSpacing.none;

  // Get background and border colors based on state
  const getBackgroundColor = (): string => {
    if (isDefaultAndSelected || isTotalAndSelected) {
      return getColorPrimitive('brand', '100');
    }
    return getColorPrimitive('neutral', 'white');
  };

  const getBorderColor = (): string => {
    if (isDefaultAndSelected || isTotalAndSelected) {
      return getColorPrimitive('brand', '500');
    }
    return getColorPrimitive('neutral', '300');
  };

  // Get text color based on style
  const getTextColor = (): string => {
    if (isDataAndDefault) {
      return getSemanticColor('text', 'sourced', themeMode);
    }
    if (isReadableAndDefault) {
      return getSemanticColor('text', 'readable', themeMode);
    }
    if (isEditableAndDefault) {
      return getSemanticColor('text', 'editable', themeMode);
    }
    // Default and Total styles use brand/800
    return getColorPrimitive('brand', '800');
  };

  // Get font weight based on style
  const getFontWeight = (): number => {
    if (isTotalAndDefault || isTotalAndSelected) {
      return fontWeightBold;
    }
    return fontWeightLight;
  };

  // Get gap based on state
  const getGap = (): number => {
    if (isDefaultAndSelected || isTotalAndSelected) {
      return xsSpacing;
    }
    return 0;
  };

  const backgroundColor = getBackgroundColor();
  const borderColor = getBorderColor();
  const textColor = getTextColor();
  const fontWeight = getFontWeight();
  const gap = getGap();

  const containerStyles: React.CSSProperties = {
    border: `1px solid ${borderColor}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '40px',
    padding: `${sSpacing}px`,
    position: 'relative',
    backgroundColor,
    borderRadius: `${borderRadius}px`,
    gap: `${gap}px`,
  };

  const titleStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flexShrink: 0,
  };

  const textStyles: React.CSSProperties = {
    fontFamily,
    fontWeight,
    fontSize: `${fontSizeL}px`,
    lineHeight: `${lineHeightL}px`,
    color: textColor,
    letterSpacing: `${letterSpacing}px`,
    margin: 0,
  };

  return (
    <div
      className={className}
      style={containerStyles}
      data-name="Title Item Row"
      id={
        isTotalAndSelected
          ? 'node-30_1364'
          : isTotalAndDefault
          ? 'node-30_1361'
          : isDefaultAndSelected
          ? 'node-30_1367'
          : isEditableAndDefault
          ? 'node-30_1391'
          : isReadableAndDefault
          ? 'node-30_1395'
          : isDataAndDefault
          ? 'node-30_1387'
          : 'node-30_1359'
      }
    >
      <div
        data-name="Title"
        style={titleStyles}
        id={
          isTotalAndSelected
            ? 'node-30_1365'
            : isTotalAndDefault
            ? 'node-30_1362'
            : isDefaultAndSelected
            ? 'node-30_1368'
            : isEditableAndDefault
            ? 'node-30_1392'
            : isReadableAndDefault
            ? 'node-30_1396'
            : isDataAndDefault
            ? 'node-30_1388'
            : 'node-1_2913'
        }
      >
        {/* Default style text */}
        {(isDefaultAndDefault || isDefaultAndSelected) && (
          <p style={textStyles} data-node-id="1:2914">
            {titleRow}
          </p>
        )}

        {/* Total style text */}
        {(isTotalAndDefault || isTotalAndSelected) && (
          <p style={textStyles} data-node-id="30:1363">
            {titleRow}
          </p>
        )}

        {/* Data style text */}
        {isDataAndDefault && (
          <p style={textStyles} data-node-id="30:1389">
            {titleRow}
          </p>
        )}

        {/* Readable style text */}
        {isReadableAndDefault && (
          <p style={textStyles} data-node-id="30:1397">
            {titleRow}
          </p>
        )}

        {/* Editable style text */}
        {isEditableAndDefault && (
          <p style={textStyles} data-node-id="30:1393">
            {titleRow}
          </p>
        )}
      </div>

      {/* Selected State Left Marker */}
      {(isDefaultAndSelected || isTotalAndSelected) && (
        <div
          data-name="Marker"
          id={isTotalAndSelected ? 'node-30_1370' : 'node-30_1372'}
          style={{
            position: 'absolute',
            backgroundColor: getColorPrimitive('brand', '500'),
            height: '40px',
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
