/**
 * Sizing Tokens
 * 
 * Foundational sizing tokens extracted from the Figma Sizing scale.
 * All values are based on the official Scalar Design System v1.0 sizing scale.
 * 
 * Reference: https://www.figma.com/design/anrnTIJKgu27zV224h7vON/Scalar_Design_System-v1.0?node-id=92-10&m=dev
 */

export const sizing = {
  /**
   * Base spacing scale
   * Used for padding, margins, gaps, and general spacing
   */
  spacing: {
    xs: 4,   // 4px - Extra small spacing
    sm: 8,   // 8px - Small spacing
    md: 16,  // 16px - Medium spacing
    lg: 24,  // 24px - Large spacing
    xl: 32,  // 32px - Extra large spacing
    '2xl': 40,  // 40px - 2X large spacing
    '3xl': 48,  // 48px - 3X large spacing
    '4xl': 56,  // 56px - 4X large spacing
    '5xl': 64,  // 64px - 5X large spacing
    '6xl': 72,  // 72px - 6X large spacing
    '7xl': 80,  // 80px - 7X large spacing
    '8xl': 88,  // 88px - 8X large spacing
    '9xl': 96,  // 96px - 9X large spacing
    '10xl': 104, // 104px - 10X large spacing
    '11xl': 112, // 112px - 11X large spacing
    '12xl': 120, // 120px - 12X large spacing
  },

  /**
   * Icon sizing
   * Based on button size requirements from Figma
   */
  icon: {
    sm: 16, // 16x16 px for S size buttons
    md: 24, // 24x24 px for M size buttons
    lg: 28, // 28x28 px for L size buttons
  },

  /**
   * Button sizing
   * Height and minimum width values for buttons
   */
  button: {
    height: {
      sm: 24,  // 24px - Small button height (from Figma: Size S)
      md: 40,  // 40px - Medium button height (from Figma: Size M)
      lg: 60,  // 60px - Large button height (from Figma: Size L)
    },
    minWidth: {
      sm: 64,  // 64px - Small button minimum width
      md: 96,  // 96px - Medium button minimum width
      lg: 128, // 128px - Large button minimum width
    },
  },

  /**
   * Input field sizing
   */
  input: {
    height: 40, // 40px - Standard input field height
    minWidth: 200, // 200px - Minimum input field width
  },

  /**
   * Additional sizing values from Figma scale
   * These are available for custom component sizing
   */
  scale: {
    '2': 2,    // 2px
    '4': 4,    // 4px
    '8': 8,    // 8px
    '10': 10,  // 10px
    '12': 12,  // 12px
    '14': 14,  // 14px
    '16': 16,  // 16px
    '18': 18,  // 18px
    '20': 20,  // 20px
    '24': 24,  // 24px
    '26': 26,  // 26px
    '28': 28,  // 28px
    '32': 32,  // 32px
    '36': 36,  // 36px
    '40': 40,  // 40px
    '48': 48,  // 48px
    '56': 56,  // 56px
    '64': 64,  // 64px
    '72': 72,  // 72px
    '80': 80,  // 80px
    '88': 88,  // 88px
    '96': 96,  // 96px
    '104': 104, // 104px
    '112': 112, // 112px
    '120': 120, // 120px
  },
} as const;

export type Sizing = typeof sizing;
export type SpacingSize = keyof typeof sizing.spacing;
export type IconSize = keyof typeof sizing.icon;
export type ButtonSize = keyof typeof sizing.button.height;
export type ScaleValue = keyof typeof sizing.scale;

