'use client';
import React from 'react';
export const Skeleton = ({ width = '100%', height = '1rem', variant = 'md', speed = 'normal', className = '', 'data-testid': dataTestId = 'skeleton', }) => {
    // Convert number to px
    const widthValue = typeof width === 'number' ? `${width}px` : width;
    const heightValue = typeof height === 'number' ? `${height}px` : height;
    // Border radius classes based on variant
    const variantClasses = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    };
    // Animation speed classes
    const speedClasses = {
        slow: 'animate-pulse-slow',
        normal: 'animate-pulse',
        fast: 'animate-pulse-fast',
    };
    const skeletonClasses = `
    bg-gray-200
    ${variantClasses[variant]}
    ${speedClasses[speed]}
    ${className}
  `
        .trim()
        .replace(/\s+/g, ' ');
    return (<div className={skeletonClasses} style={{ width: widthValue, height: heightValue }} data-testid={dataTestId} aria-busy="true" aria-live="polite" role="status"/>);
};
//# sourceMappingURL=Skeleton.jsx.map