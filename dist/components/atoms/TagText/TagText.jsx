'use client';
import React from 'react';
export const TagText = ({ as = 'span', text, size = 'sm', weight = 'normal', color = 'primary', className = '', }) => {
    const Tag = as;
    // Size classes
    const sizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };
    // Weight classes
    const weightClasses = {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
    };
    // Color classes
    const colorClasses = {
        primary: 'text-gray-900',
        secondary: 'text-gray-700',
        muted: 'text-gray-500',
    };
    const classes = `${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${className}`;
    return (<Tag className={classes} data-testid="tag-text">
      {text}
    </Tag>);
};
//# sourceMappingURL=TagText.jsx.map