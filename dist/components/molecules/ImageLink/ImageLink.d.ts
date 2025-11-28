import React from 'react';
export interface ImageLinkProps {
    /** Link title (also used as image alt if imageAlt not provided) */
    title?: string;
    /** Image source for mobile devices */
    imgMobile?: string;
    /** Image source for desktop devices */
    imgDesktop?: string;
    /** Fallback image if main image fails to load */
    fallbackSrc?: string;
    /** Image width */
    width?: number | string;
    /** Image height */
    height?: number | string;
    /** Link URL (defaults to #) */
    href?: string;
    /** Whether link opens in new tab */
    external?: boolean;
    /** Image loading strategy */
    loading?: 'eager' | 'lazy';
    /** Image fetch priority */
    priority?: 'high' | 'low' | 'auto';
    /** Callback when element becomes visible */
    onVisible?: () => void;
    /** Disable visibility tracking */
    disableVisibilityTracking?: boolean;
    /** Custom className */
    className?: string;
    /** Click handler */
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    /** Mouse over handler */
    onMouseOver?: React.MouseEventHandler<HTMLAnchorElement>;
    /** Mouse enter handler */
    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
    /** Mouse leave handler */
    onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare const ImageLink: ({ title, imgMobile, imgDesktop, fallbackSrc, width, height, href, external, loading, priority, onVisible, disableVisibilityTracking, className, onClick, onMouseOver, onMouseEnter, onMouseLeave, }: ImageLinkProps) => React.JSX.Element | null;
//# sourceMappingURL=ImageLink.d.ts.map