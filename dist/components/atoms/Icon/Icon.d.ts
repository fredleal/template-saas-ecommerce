import React from 'react';
export type IconName = 'CartIcon' | 'HeartIcon' | 'SearchIcon' | 'MenuIcon' | 'PlusIcon' | 'StarIcon' | 'UserIcon' | 'FilterIcon' | 'CheckIcon' | 'XIcon';
export interface IconProps {
    name: IconName;
    size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'current';
    className?: string;
    'aria-label'?: string;
    decorative?: boolean;
}
export declare const Icon: React.FC<IconProps>;
export declare const getAvailableIcons: () => IconName[];
//# sourceMappingURL=Icon.d.ts.map