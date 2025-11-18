import React from 'react';
export interface HeaderProps {
    logoText: string;
    links: {
        label: string;
        href: string;
    }[];
    currentPath?: string;
    className?: string;
}
export declare const Header: ({ logoText, links, currentPath, className, }: HeaderProps) => React.JSX.Element;
//# sourceMappingURL=Header.d.ts.map