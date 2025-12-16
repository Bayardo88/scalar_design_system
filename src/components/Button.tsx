import React from 'react';
import { getColorPrimitive, getSemanticColor } from '../tokens';
import { typographyPrimitives } from '../tokens';
import { spacing } from '../tokens/spacing';
import type { ThemeMode } from '../tokens/types';
import { AppIcon } from './Icon';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'main' | 'positive' | 'warning' | 'negative';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonType;
  buttonType?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  disabled?: boolean;
  themeMode?: ThemeMode;
  iconLeft?: string; // Icon path from @mdi/js
  iconRight?: string; // Icon path from @mdi/js
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  type = 'main',
  buttonType = 'button',
  children,
  disabled = false,
  themeMode = 'light',
  iconLeft,
  iconRight,
  className = '',
  ...props
}) => {
  // Get typography tokens based on size
  const typographySize = size === 'sm' ? 's' : size === 'md' ? 'm' : 'l';
  const fontSize = typographyPrimitives.size[typographySize];
  const lineHeight = typographyPrimitives.lineHeight[typographySize];
  const fontWeight = typographyPrimitives.weight.semiBold;
  const fontFamily = typographyPrimitives.family.inter;
  const letterSpacing = typographyPrimitives.letterSpacing.none;

  // Get spacing tokens
  const padding = spacing.button[size];
  const borderRadius = spacing.radius.md;
  const iconSize = spacing.icon.size[size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg'];
  const iconGap = spacing.icon.gap[size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg'];

  // Get color tokens based on variant, type, and state
  const getColors = () => {
    if (disabled) {
      const bgColor = getSemanticColor('background', 'disabled', themeMode);
      const textColor = getSemanticColor('text', 'disabled', themeMode);
      return {
        backgroundColor: bgColor,
        color: textColor,
        borderColor: 'transparent',
        hoverBackgroundColor: bgColor,
        hoverColor: textColor,
        pressedBackgroundColor: bgColor,
        pressedColor: textColor,
        iconColor: textColor,
      };
    }

    // Primary variant
    if (variant === 'primary') {
      if (type === 'main') {
        const bgColor = getSemanticColor('background', 'brand', themeMode);
        const hoverBgColor = getSemanticColor('background', 'hover', themeMode);
        const pressedBgColor = getSemanticColor('background', 'pressed', themeMode);
        const textColor = getColorPrimitive('neutral', 'white');
        return {
          backgroundColor: bgColor,
          color: textColor,
          borderColor: 'transparent',
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      } else if (type === 'positive') {
        const bgColor = getSemanticColor('background', 'positive', themeMode);
        const hoverBgColor = getSemanticColor('background', 'positiveHover', themeMode);
        const pressedBgColor = getSemanticColor('background', 'positivePressed', themeMode);
        const textColor = getColorPrimitive('neutral', 'white');
        return {
          backgroundColor: bgColor,
          color: textColor,
          borderColor: 'transparent',
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      } else if (type === 'warning') {
        const bgColor = getSemanticColor('background', 'warning', themeMode);
        const hoverBgColor = getSemanticColor('background', 'warningHover', themeMode);
        const pressedBgColor = getSemanticColor('background', 'warningPressed', themeMode);
        const textColor = themeMode === 'light' ? getColorPrimitive('neutral', '900') : getColorPrimitive('neutral', '100');
        return {
          backgroundColor: bgColor,
          color: textColor,
          borderColor: 'transparent',
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      } else if (type === 'negative') {
        const bgColor = getSemanticColor('background', 'negative', themeMode);
        const hoverBgColor = getSemanticColor('background', 'negativeHover', themeMode);
        const pressedBgColor = getSemanticColor('background', 'negativePressed', themeMode);
        const textColor = getColorPrimitive('neutral', 'white');
        return {
          backgroundColor: bgColor,
          color: textColor,
          borderColor: 'transparent',
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      }
    }

    // Secondary variant (outlined)
    if (variant === 'secondary') {
      if (type === 'main') {
        const borderColor = getSemanticColor('background', 'brand', themeMode);
        const textColor = getSemanticColor('text', 'editable', themeMode);
        const hoverBgColor = themeMode === 'light' ? getColorPrimitive('brand', '100') : getColorPrimitive('brand', '900');
        const pressedBgColor = themeMode === 'light' ? getColorPrimitive('brand', '200') : getColorPrimitive('brand', '800');
        return {
          backgroundColor: 'transparent',
          color: textColor,
          borderColor: borderColor,
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      } else if (type === 'positive') {
        const borderColor = getSemanticColor('background', 'positive', themeMode);
        const textColor = getSemanticColor('text', 'positive', themeMode);
        const hoverBgColor = themeMode === 'light' ? getColorPrimitive('green', '100') : getColorPrimitive('green', '900');
        const pressedBgColor = themeMode === 'light' ? getColorPrimitive('green', '200') : getColorPrimitive('green', '800');
        return {
          backgroundColor: 'transparent',
          color: textColor,
          borderColor: borderColor,
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      } else if (type === 'warning') {
        const borderColor = getSemanticColor('background', 'warning', themeMode);
        const textColor = getSemanticColor('text', 'warning', themeMode);
        const hoverBgColor = themeMode === 'light' ? getColorPrimitive('yellow', '100') : getColorPrimitive('yellow', '900');
        const pressedBgColor = themeMode === 'light' ? getColorPrimitive('yellow', '200') : getColorPrimitive('yellow', '800');
        return {
          backgroundColor: 'transparent',
          color: textColor,
          borderColor: borderColor,
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      } else if (type === 'negative') {
        const borderColor = getSemanticColor('background', 'negative', themeMode);
        const textColor = getSemanticColor('text', 'negative', themeMode);
        const hoverBgColor = themeMode === 'light' ? getColorPrimitive('red', '100') : getColorPrimitive('red', '900');
        const pressedBgColor = themeMode === 'light' ? getColorPrimitive('red', '200') : getColorPrimitive('red', '800');
        return {
          backgroundColor: 'transparent',
          color: textColor,
          borderColor: borderColor,
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      }
    }

    // Tertiary variant (text-only)
    if (variant === 'tertiary') {
      if (type === 'main') {
        const textColor = getSemanticColor('text', 'editable', themeMode);
        const hoverBgColor = themeMode === 'light' ? getColorPrimitive('brand', '100') : getColorPrimitive('brand', '900');
        const pressedBgColor = themeMode === 'light' ? getColorPrimitive('brand', '200') : getColorPrimitive('brand', '800');
        return {
          backgroundColor: 'transparent',
          color: textColor,
          borderColor: 'transparent',
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      } else if (type === 'positive') {
        const textColor = getSemanticColor('text', 'positive', themeMode);
        const hoverBgColor = themeMode === 'light' ? getColorPrimitive('green', '100') : getColorPrimitive('green', '900');
        const pressedBgColor = themeMode === 'light' ? getColorPrimitive('green', '200') : getColorPrimitive('green', '800');
        return {
          backgroundColor: 'transparent',
          color: textColor,
          borderColor: 'transparent',
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      } else if (type === 'warning') {
        const textColor = getSemanticColor('text', 'warning', themeMode);
        const hoverBgColor = themeMode === 'light' ? getColorPrimitive('yellow', '100') : getColorPrimitive('yellow', '900');
        const pressedBgColor = themeMode === 'light' ? getColorPrimitive('yellow', '200') : getColorPrimitive('yellow', '800');
        return {
          backgroundColor: 'transparent',
          color: textColor,
          borderColor: 'transparent',
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      } else if (type === 'negative') {
        const textColor = getSemanticColor('text', 'negative', themeMode);
        const hoverBgColor = themeMode === 'light' ? getColorPrimitive('red', '100') : getColorPrimitive('red', '900');
        const pressedBgColor = themeMode === 'light' ? getColorPrimitive('red', '200') : getColorPrimitive('red', '800');
        return {
          backgroundColor: 'transparent',
          color: textColor,
          borderColor: 'transparent',
          hoverBackgroundColor: hoverBgColor,
          hoverColor: textColor,
          pressedBackgroundColor: pressedBgColor,
          pressedColor: textColor,
          iconColor: textColor,
        };
      }
    }

    // Fallback
    return {
      backgroundColor: getSemanticColor('background', 'brand', themeMode),
      color: getColorPrimitive('neutral', 'white'),
      borderColor: 'transparent',
      hoverBackgroundColor: getSemanticColor('background', 'hover', themeMode),
      hoverColor: getColorPrimitive('neutral', 'white'),
      pressedBackgroundColor: getSemanticColor('background', 'pressed', themeMode),
      pressedColor: getColorPrimitive('neutral', 'white'),
      iconColor: getColorPrimitive('neutral', 'white'),
    };
  };

  const colors = getColors();

  // Build inline styles
  const baseStyles: React.CSSProperties = {
    fontFamily,
    fontSize: `${fontSize}px`,
    fontWeight,
    lineHeight: `${lineHeight}px`,
    letterSpacing: `${letterSpacing}px`,
    padding: `${padding.vertical}px ${padding.horizontal}px`,
    borderRadius: `${borderRadius}px`,
    border: variant === 'secondary' ? `1px solid ${colors.borderColor}` : 'none',
    backgroundColor: colors.backgroundColor,
    color: colors.color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${iconGap}px`,
    transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
    outline: 'none',
    minHeight: size === 'sm' ?16 : size === 'md' ? 24 : 28,
  };

  // Generate CSS for hover and active states
  const styleId = `button-${variant}-${size}-${type}-${disabled ? 'disabled' : 'enabled'}`;
  const styleSheet = `
    .${styleId}:hover:not(:disabled) {
      background-color: ${colors.hoverBackgroundColor} !important;
      color: ${colors.hoverColor} !important;
      ${variant === 'secondary' ? `border-color: ${colors.borderColor} !important;` : ''}
    }
    .${styleId}:hover:not(:disabled) svg {
      color: ${colors.hoverColor} !important;
    }
    .${styleId}:active:not(:disabled) {
      background-color: ${colors.pressedBackgroundColor} !important;
      color: ${colors.pressedColor} !important;
      ${variant === 'secondary' ? `border-color: ${colors.borderColor} !important;` : ''}
    }
    .${styleId}:active:not(:disabled) svg {
      color: ${colors.pressedColor} !important;
    }
    .${styleId}:focus-visible {
      outline: 2px solid ${getSemanticColor('background', 'brand', themeMode)};
      outline-offset: 2px;
    }
  `;

  return (
    <>
      <style>{styleSheet}</style>
      <button
        type={buttonType}
        className={`${styleId} ${className}`}
        disabled={disabled}
        style={baseStyles}
        aria-disabled={disabled}
        aria-label={props['aria-label'] || (typeof children === 'string' ? children : undefined)}
        {...props}
      >
        {iconLeft && (
          <AppIcon
            name={iconLeft}
            size={iconSize}
            color={colors.iconColor}
            aria-hidden="true"
          />
        )}
        {children}
        {iconRight && (
          <AppIcon
            name={iconRight}
            size={iconSize}
            color={colors.iconColor}
            aria-hidden="true"
          />
        )}
      </button>
    </>
  );
};
