import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResponsiveIconProps {
  icon: LucideIcon;
  className?: string;
}

export function ResponsiveIcon({ icon: Icon, className }: ResponsiveIconProps) {
  return (
    <Icon 
      className={cn(
        "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10",
        className
      )}
    />
  );
}