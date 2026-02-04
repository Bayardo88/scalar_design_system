import React from 'react';
import { getColorPrimitive, getSemanticColor, hexToRgba } from '../tokens';
import { sizing } from '../tokens/sizing';
import { spacing } from '../tokens/spacing';
import type { ThemeMode } from '../tokens/types';

type SidebarIconStyle = 'active' | 'default';
type SidebarIconState = 'default' | 'hover' | 'pressed';

export interface SidebarIconProps {
  /** Custom icon element to render */
  icon?: React.ReactNode;
  /** Visual style variant */
  style?: SidebarIconStyle;
  /** Interaction state */
  state?: SidebarIconState;
  /** Theme mode for colors */
  themeMode?: ThemeMode;
  /** Optional custom class name */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Accessible label */
  ariaLabel?: string;
}

/**
 * SidebarIcon component for the Scalar Design System.
 * 
 * A sidebar navigation icon with active/default styles and
 * hover/pressed interaction states.
 * 
 * Sizing from Figma:
 * - Container: padding 8px, border-radius 4px
 * - Icon: 16x16px
 * 
 * @example
 * ```tsx
 * <SidebarIcon icon={<MyIcon />} style="default" state="default" />
 * <SidebarIcon icon={<MyIcon />} style="active" />
 * ```
 */
export const SidebarIcon: React.FC<SidebarIconProps> = ({
  icon,
  style = 'default',
  state = 'default',
  themeMode = 'light',
  className = '',
  onClick,
  ariaLabel = 'Sidebar icon',
}) => {
  // Get colors from design tokens
  const getBackgroundColor = (): string => {
    if (style === 'active' && state === 'default') {
      // Active state: background/page color
      return getSemanticColor('background', 'page', themeMode);
    }
    
    if (style === 'default') {
      if (state === 'hover') {
        // Hover: white @ 50% opacity
        return hexToRgba(getColorPrimitive('neutral', 'white'), 0.5);
      }
      if (state === 'pressed') {
        // Pressed: white @ 30% opacity
        return hexToRgba(getColorPrimitive('neutral', 'white'), 0.3);
      }
    }
    
    // Default: transparent
    return 'transparent';
  };

  // Icon color based on style
  const getIconColor = (): string => {
    if (style === 'active') {
      return getColorPrimitive('brand', '500'); // Blue for active
    }
    return getColorPrimitive('neutral', '400'); // Gray for default
  };

  // Container styles
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${sizing.spacing.sm}px`, // 8px
    borderRadius: `${spacing.radius.sm}px`, // 4px
    backgroundColor: getBackgroundColor(),
    cursor: onClick ? 'pointer' : 'default',
    transition: 'background-color 0.15s ease',
    position: 'relative',
  };

  // Icon wrapper styles
  const iconWrapperStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16px',
    height: '16px',
    flexShrink: 0,
    overflow: 'hidden',
    color: getIconColor(),
  };

  // Generate unique class for hover/pressed states
  const stateId = `sidebar-icon-${style}-${state}`;
  
  // CSS for interactive states (when state is 'default' but we want hover/active effects)
  const interactiveStyleSheet = state === 'default' ? `
    .${stateId}:hover {
      background-color: ${hexToRgba(getColorPrimitive('neutral', 'white'), 0.5)} !important;
    }
    .${stateId}:active {
      background-color: ${hexToRgba(getColorPrimitive('neutral', 'white'), 0.3)} !important;
    }
    .${stateId}:focus-visible {
      outline: 2px solid ${getColorPrimitive('brand', '500')};
      outline-offset: 2px;
    }
  ` : '';

  // Default icon if none provided (chart icon)
  const defaultIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 12L6 8L9 11L14 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4H14V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      {interactiveStyleSheet && <style>{interactiveStyleSheet}</style>}
      <div
        className={`${stateId} ${className}`}
        style={containerStyles}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={ariaLabel}
        data-name="SideBarIcon"
        data-node-id="1:49231"
        data-style={style}
        data-state={state}
        onKeyDown={(e) => {
          if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <div style={iconWrapperStyles}>
          {icon || defaultIcon}
        </div>
      </div>
    </>
  );
};

