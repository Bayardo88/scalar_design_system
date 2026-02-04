import React from 'react';
import * as MuiIcons from '@mui/icons-material';
import HelpOutline from '@mui/icons-material/HelpOutline';

// Icon name mapping from string names to MUI icon components
const iconMap: Record<string, React.ComponentType<any>> = {
  // Common icons
  'Check': MuiIcons.Check,
  'CheckCircle': MuiIcons.CheckCircle,
  'Close': MuiIcons.Close,
  'Delete': MuiIcons.Delete,
  'Edit': MuiIcons.Edit,
  'Add': MuiIcons.Add,
  'Remove': MuiIcons.Remove,
  'ArrowForward': MuiIcons.ArrowForward,
  'ArrowBack': MuiIcons.ArrowBack,
  'ArrowUpward': MuiIcons.ArrowUpward,
  'ArrowDownward': MuiIcons.ArrowDownward,
  'KeyboardArrowDown': MuiIcons.KeyboardArrowDown,
  'KeyboardArrowUp': MuiIcons.KeyboardArrowUp,
  'KeyboardArrowLeft': MuiIcons.KeyboardArrowLeft,
  'KeyboardArrowRight': MuiIcons.KeyboardArrowRight,
  'Warning': MuiIcons.Warning,
  'Error': MuiIcons.Error,
  'Info': MuiIcons.Info,
  'Home': MuiIcons.Home,
  'Settings': MuiIcons.Settings,
  'Search': MuiIcons.Search,
  'Menu': MuiIcons.Menu,
  'MoreVert': MuiIcons.MoreVert,
  'MoreHoriz': MuiIcons.MoreHoriz,
  'AccountCircle': MuiIcons.AccountCircle,
  'Notifications': MuiIcons.Notifications,
  'Favorite': MuiIcons.Favorite,
  'Share': MuiIcons.Share,
  'Download': MuiIcons.Download,
  'Upload': MuiIcons.Upload,
  'FileCopy': MuiIcons.FileCopy,
  'Visibility': MuiIcons.Visibility,
  'VisibilityOff': MuiIcons.VisibilityOff,
  'Lock': MuiIcons.Lock,
  'LockOpen': MuiIcons.LockOpen,
  'Refresh': MuiIcons.Refresh,
  'FilterList': MuiIcons.FilterList,
  'Sort': MuiIcons.Sort,
  'ExpandMore': MuiIcons.ExpandMore,
  'ExpandLess': MuiIcons.ExpandLess,
  'ChevronRight': MuiIcons.ChevronRight,
  'ChevronLeft': MuiIcons.ChevronLeft,
  
  // MDI compatibility mappings (for backward compatibility)
  'mdiCheck': MuiIcons.Check,
  'mdiChevronDown': MuiIcons.KeyboardArrowDown,
  'mdiArrowRight': MuiIcons.ArrowForward,
  'mdiDelete': MuiIcons.Delete,
  'mdiAlert': MuiIcons.Warning,
  'mdiCheckCircle': MuiIcons.CheckCircle,
  'mdiClose': MuiIcons.Close,
  'mdiEdit': MuiIcons.Edit,
  'mdiPlus': MuiIcons.Add,
  'mdiMinus': MuiIcons.Remove,
  'mdiHome': MuiIcons.Home,
  'mdiCog': MuiIcons.Settings,
  'mdiMagnify': MuiIcons.Search,
  'mdiMenu': MuiIcons.Menu,
  'mdiDotsVertical': MuiIcons.MoreVert,
  'mdiDotsHorizontal': MuiIcons.MoreHoriz,
  'mdiAccount': MuiIcons.AccountCircle,
  'mdiBell': MuiIcons.Notifications,
  'mdiHeart': MuiIcons.Favorite,
  'mdiShare': MuiIcons.Share,
  'mdiDownload': MuiIcons.Download,
  'mdiUpload': MuiIcons.Upload,
  'mdiContentCopy': MuiIcons.FileCopy,
  'mdiEye': MuiIcons.Visibility,
  'mdiEyeOff': MuiIcons.VisibilityOff,
  'mdiLock': MuiIcons.Lock,
  'mdiLockOpen': MuiIcons.LockOpen,
  'mdiRefresh': MuiIcons.Refresh,
  'mdiFilter': MuiIcons.FilterList,
  'mdiSort': MuiIcons.Sort,
  'mdiChevronUp': MuiIcons.KeyboardArrowUp,
  'mdiChevronLeft': MuiIcons.KeyboardArrowLeft,
  'mdiChevronRight': MuiIcons.KeyboardArrowRight,
};

// Size mapping from string to MUI fontSize
const sizeMap: Record<'small' | 'medium' | 'large', 'small' | 'medium' | 'large' | 'inherit'> = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export interface IconProps {
  /** Icon name (e.g., "Home", "Check", "ArrowForward") */
  name: string;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Color value (hex, rgb, etc.) */
  color?: string;
  /** Additional className */
  className?: string;
  /** Additional style props */
  style?: React.CSSProperties;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** ARIA hidden flag */
  'aria-hidden'?: boolean;
}

/**
 * AppIcon component using Material-UI icons.
 * 
 * Renders Material Design icons from @mui/icons-material based on the provided name.
 * Supports size and color customization.
 * 
 * @example
 * ```tsx
 * <AppIcon name="Home" size="medium" color="#037DE8" />
 * <AppIcon name="Check" size="small" />
 * ```
 */
export const AppIcon: React.FC<IconProps> = ({
  name,
  size = 'medium',
  color,
  className = '',
  style,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  // Get the icon component from the map, or use fallback
  const IconComponent = iconMap[name] || HelpOutline;
  
  // Convert size to MUI fontSize prop
  const fontSize = sizeMap[size] || 'medium';
  
  // Build style object
  const iconStyle: React.CSSProperties = {
    ...style,
  };
  
  return (
    <IconComponent
      fontSize={fontSize}
      htmlColor={color}
      className={className}
      style={iconStyle}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...props}
    />
  );
};
