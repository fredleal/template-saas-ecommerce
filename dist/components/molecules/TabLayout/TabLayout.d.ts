import React from 'react';
export interface Tab {
    /** Tab label/title */
    label: string;
    /** Tab content */
    content: React.ReactNode;
}
export interface TabLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Array of tabs */
    tabs: Tab[];
    /** Visual variant */
    variant?: 'primary' | 'secondary';
    /** Layout orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Initial active tab index */
    initialIndex?: number;
    /** Callback when tab changes */
    onTabChange?: (tab: Tab, index: number) => void;
    /** Custom className */
    className?: string;
}
export declare const TabLayout: ({ tabs, variant, orientation, initialIndex, onTabChange, className, ...props }: TabLayoutProps) => React.JSX.Element;
//# sourceMappingURL=TabLayout.d.ts.map