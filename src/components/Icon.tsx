import React from 'react';
import Icon from '@mdi/react';

type MdiIconProps = React.ComponentProps<typeof Icon>;

export interface IconProps extends Omit<MdiIconProps, 'path'> {
  name: string; // refer to icon constants imported from @mdi/js
  size?: number; // size in pixels
  color?: string; // color value (hex, rgb, etc.)
}

export const AppIcon: React.FC<IconProps> = ({ name, size = 1, ...props }) => {
  return (
    <Icon
      path={name}
      size={size}
      style={{ width: '16px', height: '16px', ...props.style }} // enforce pixel size
      {...props}
    />
  );
};

