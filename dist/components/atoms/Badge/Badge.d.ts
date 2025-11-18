import React from 'react';
export interface BadgeProps {
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
}
export declare const Badge: ({ variant, size, children, className, }: BadgeProps) => React.JSX.Element;
//# sourceMappingURL=Badge.d.ts.map