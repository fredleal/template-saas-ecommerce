import React from 'react';
export interface LinkProps extends React.AnchorHTMLAttributes<React.ElementRef<'a'>> {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    target?: '_self' | '_blank' | '_parent' | '_top';
    className?: string;
}
export declare const Link: ({ href, children, variant, target, className, rel, ...props }: LinkProps) => React.JSX.Element;
//# sourceMappingURL=Link.d.ts.map