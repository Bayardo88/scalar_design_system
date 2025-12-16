/**
 * Composite Typography Resolver
 * 
 * Resolves composite typography references to actual style objects.
 */

import { typographyPrimitives } from '../typography/primitives';
import { compositeTypography } from '../typography/composite';
import type { TypographySize, TypographyWeight } from '../types';

/**
 * Resolve a composite typography style
 * 
 * @param breakpoint - Breakpoint (e.g., 'desktopLarge')
 * @param category - Typography category (e.g., 'heading')
 * @param scale - Typography scale (e.g., 'xs', 'm')
 * @param weight - Typography weight (e.g., 'regular', 'semiBold', 'bold')
 * @returns Resolved typography style object
 */
export function resolveCompositeTypography(
  breakpoint: 'desktopLarge',
  category: 'heading',
  scale: TypographySize,
  weight: TypographyWeight
) {
  const composite = compositeTypography[breakpoint][category][scale];
  
  if (!composite) {
    throw new Error(`Composite typography not found: ${breakpoint}/${category}/${scale}`);
  }

  // Map 'medium' to 'regular' if provided (composite typography doesn't support 'medium')
  const mappedWeight: 'regular' | 'semiBold' | 'bold' = weight === 'medium' ? 'regular' : weight as 'regular' | 'semiBold' | 'bold';
  
  const style = composite[mappedWeight];
  if (!style) {
    throw new Error(`Typography weight not found: ${mappedWeight}`);
  }

  // Resolve references to actual values
  const family = typographyPrimitives.family.inter;
  
  // Resolve size reference
  const sizeMatch = style.size.match(/\{Typography\/Size\/([^}]+)\}/);
  const size = sizeMatch ? typographyPrimitives.size[sizeMatch[1].toLowerCase() as keyof typeof typographyPrimitives.size] : typographyPrimitives.size[scale];
  
  // Resolve weight reference
  const weightMatch = style.weight.match(/\{Typography\/Weight\/([^}]+)\}/);
  const resolvedWeight = weightMatch ? typographyPrimitives.weight[weightMatch[1].toLowerCase() as keyof typeof typographyPrimitives.weight] : typographyPrimitives.weight[mappedWeight];
  
  // Resolve line height reference
  const lineHeightMatch = style.lineHeight.match(/\{Typography\/Line Height\/([^}]+)\}/);
  const lineHeight = lineHeightMatch ? typographyPrimitives.lineHeight[lineHeightMatch[1].toLowerCase() as keyof typeof typographyPrimitives.lineHeight] : typographyPrimitives.lineHeight[scale];
  
  // Resolve letter spacing reference
  const letterSpacingMatch = style.letterSpacing.match(/\{Typography\/Letter Spacing\/([^}]+)\}/);
  const letterSpacing = letterSpacingMatch ? typographyPrimitives.letterSpacing[letterSpacingMatch[1].toLowerCase() as keyof typeof typographyPrimitives.letterSpacing] : typographyPrimitives.letterSpacing.none;

  return {
    family,
    size,
    weight: resolvedWeight,
    lineHeight,
    letterSpacing,
  };
}

