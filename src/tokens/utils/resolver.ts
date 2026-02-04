/**
 * Token Reference Resolver
 * 
 * Resolves token references to actual values.
 * Handles the format: {Color/[Family]/[Shade]} and similar patterns.
 */

import { colorPrimitives } from '../color/primitives';
import { semanticColors } from '../color/semantic';
import type { ThemeMode } from '../types';

/**
 * Resolve a color reference string to a primitive color value
 * Format: {Color/[Family]/[Shade]}
 */
export function resolveColorReference(reference: string): string {
  const match = reference.match(/\{Color\/([^/]+)\/([^}]+)\}/);
  if (!match) {
    throw new Error(`Invalid color reference format: ${reference}`);
  }

  const [, family, shade] = match;
  const colorFamily = colorPrimitives[family as keyof typeof colorPrimitives];
  
  if (!colorFamily) {
    throw new Error(`Color family not found: ${family}`);
  }

  const color = colorFamily[shade as keyof typeof colorFamily];
  if (!color || typeof color !== 'string') {
    throw new Error(`Color shade not found: ${family}/${shade}`);
  }

  return color as string;
}

/**
 * Resolve a semantic color to its primitive value
 * 
 * @param category - Color category ('text', 'background', 'overlay')
 * @param token - Token name (e.g., 'primary', 'brand')
 * @param mode - Theme mode (default: 'light')
 * @returns Resolved color value
 */
export function resolveSemanticColor(
  category: 'text' | 'background' | 'overlay',
  token: string,
  mode: ThemeMode = 'light'
): string {
  const modeColors = semanticColors[mode];
  const categoryColors = modeColors[category];
  
  if (!categoryColors) {
    throw new Error(`Color category not found: ${category}`);
  }

  const semanticRef = categoryColors[token as keyof typeof categoryColors];
  if (!semanticRef || typeof semanticRef !== 'string') {
    throw new Error(`Semantic color token not found: ${category}/${token}`);
  }

  // Resolve the reference to actual color value
  return resolveColorReference(semanticRef);
}

/**
 * Resolve an overlay color with opacity
 * 
 * @param level - Overlay level ('30', '50', '70')
 * @param mode - Theme mode (default: 'light')
 * @returns RGBA color string
 */
export function resolveOverlayColor(level: '30' | '50' | '70', mode: ThemeMode = 'light'): string {
  const modeColors = semanticColors[mode];
  const overlayRef = modeColors.overlay[level];
  
  if (!overlayRef) {
    throw new Error(`Overlay level not found: ${level}`);
  }

  const baseColor = resolveColorReference(overlayRef);
  
  // Convert hex to rgba with appropriate opacity
  const opacityMap: Record<'30' | '50' | '70', number> = {
    '30': 0.3,
    '50': 0.5,
    '70': 0.7,
  };

  const opacity = opacityMap[level];
  return hexToRgba(baseColor, opacity);
}

/**
 * Convert hex color to RGBA string
 */
export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

