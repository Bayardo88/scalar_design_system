/**
 * Semantic Color Tokens
 * 
 * Context-specific color tokens that map to primitives with mode-dependent values.
 * Each semantic variable references a primitive color using the format: {Color/[ColorFamily]/[Shade]}
 */

import type { ThemeMode } from '../types';

/**
 * Semantic color references for Light and Dark modes
 */
export const semanticColors = {
  light: {
    text: {
      primary: '{Color/neutral/900}',
      secondary: '{Color/neutral/800}',
      tertiary: '{Color/neutral/600}',
      disabled: '{Color/neutral/300}',
      link: '{Color/blue/500}',
      linkHover: '{Color/blue/600}',
      linkPressed: '{Color/blue/700}',
      warning: '{Color/yellow/600}',
      warningHover: '{Color/yellow/700}',
      warningPressed: '{Color/yellow/800}',
      positive: '{Color/green/600}',
      positiveHover: '{Color/green/700}',
      positivePressed: '{Color/green/800}',
      negative: '{Color/red/600}',
      negativeHover: '{Color/red/700}',
      negativePressed: '{Color/red/800}',
      readable: '{Color/neutral/800}',
      sourced: '{Color/green/600}',
      editable: '{Color/brand/500}',
    },
    background: {
      brand: '{Color/brand/500}',
      hover: '{Color/brand/600}',
      pressed: '{Color/brand/700}',
      disabled: '{Color/neutral/300}',
      positive: '{Color/green/600}',
      positiveHover: '{Color/green/700}',
      positivePressed: '{Color/green/800}',
      warning: '{Color/yellow/600}',
      warningHover: '{Color/yellow/700}',
      warningPressed: '{Color/yellow/800}',
      negative: '{Color/red/600}',
      negativeHover: '{Color/red/700}',
      negativePressed: '{Color/red/800}',
      page: '{Color/neutral/100}',
    },
    overlay: {
      '30': '{Color/neutral/black}',
      '50': '{Color/neutral/black}',
      '70': '{Color/neutral/black}',
    },
  },
  dark: {
    text: {
      primary: '{Color/neutral/100}',
      secondary: '{Color/neutral/200}',
      tertiary: '{Color/neutral/400}',
      disabled: '{Color/neutral/700}',
      link: '{Color/blue/400}',
      linkHover: '{Color/blue/300}',
      linkPressed: '{Color/blue/200}',
      warning: '{Color/yellow/400}',
      warningHover: '{Color/yellow/300}',
      warningPressed: '{Color/yellow/200}',
      positive: '{Color/green/400}',
      positiveHover: '{Color/green/300}',
      positivePressed: '{Color/green/200}',
      negative: '{Color/red/400}',
      negativeHover: '{Color/red/300}',
      negativePressed: '{Color/red/200}',
      readable: '{Color/neutral/200}',
      sourced: '{Color/green/400}',
      editable: '{Color/brand/400}',
    },
    background: {
      brand: '{Color/brand/400}',
      hover: '{Color/brand/300}',
      pressed: '{Color/brand/200}',
      disabled: '{Color/neutral/700}',
      positive: '{Color/green/400}',
      positiveHover: '{Color/green/300}',
      positivePressed: '{Color/green/200}',
      warning: '{Color/yellow/400}',
      warningHover: '{Color/yellow/300}',
      warningPressed: '{Color/yellow/200}',
      negative: '{Color/red/400}',
      negativeHover: '{Color/red/300}',
      negativePressed: '{Color/red/200}',
      page: '{Color/neutral/900}',
    },
    overlay: {
      '30': '{Color/neutral/white}',
      '50': '{Color/neutral/white}',
      '70': '{Color/neutral/white}',
    },
  },
} as const;

export type SemanticColors = typeof semanticColors;
export type SemanticColorCategory = keyof typeof semanticColors.light;
export type SemanticTextColor = keyof typeof semanticColors.light.text;
export type SemanticBackgroundColor = keyof typeof semanticColors.light.background;
export type SemanticOverlayColor = keyof typeof semanticColors.light.overlay;

