import type { FC } from 'react';
import * as Icons from 'lucide-react';

export interface IconProps {
  name: keyof typeof Icons;
  size?: number;
  className?: string;
  color?: string;
}

export const Icon: FC<IconProps> = ({ name, size = 24, className = '', color }) => {
  const IconComponent = Icons[name] as any;
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <IconComponent 
      size={size} 
      className={className} 
      color={color}
    />
  );
}; 