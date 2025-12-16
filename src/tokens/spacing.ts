/**
 * Spacing Tokens
 * 
 * Spacing values for padding, margins, and gaps.
 * These values are based on the design system specifications.
 */

export const spacing = {
  // Button padding (horizontal, vertical)
  button: {
    sm: {
      horizontal: 12, // px-3 equivalent
      vertical: 4,   // py-1 equivalent
    },
    md: {
      horizontal: 16, // px-4 equivalent
      vertical: 8,   // py-2 equivalent
    },
    lg: {
      horizontal: 20, // px-5 equivalent
      vertical: 12,  // py-3 equivalent
    },
  },
  // Icon spacing
  icon: {
    size: {
      sm: 16, // 16x16 px for S size
      md: 24, // 24x24 px for M size
      lg: 28, // 28x28 px for L size
    },
    gap: {
      sm: 6,
      md: 8,
      lg: 10,
    },
  },
  // Border radius
  radius: {
    sm: 4,
    md: 6,
    lg: 8,
  },
} as const;

export type Spacing = typeof spacing;

