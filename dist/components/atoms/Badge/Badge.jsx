'use client';
import React from 'react';
export const Badge = ({ variant = 'default', size = 'md', children, className = '', }) => {
    const baseClasses = 'inline-flex items-center rounded-full font-medium';
    const variantClasses = {
        default: 'bg-[var(--color-gray-100,#f3f4f6)] text-[var(--color-gray-800,#1f2937)]',
        success: 'bg-[var(--color-success-100,#dcfce7)] text-[var(--color-success-800,#166534)]',
        warning: 'bg-[var(--color-warning-100,#fef3c7)] text-[var(--color-warning-800,#92400e)]',
        error: 'bg-[var(--color-error-100,#fee2e2)] text-[var(--color-error-800,#991b1b)]',
        info: 'bg-[var(--color-info-100,#dbeafe)] text-[var(--color-info-800,#1e40af)]',
    };
    const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-2.5 py-0.5 text-sm',
        lg: 'px-3 py-1 text-base',
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    return (<span role="status" className={classes}>
      {children}
    </span>);
};
//# sourceMappingURL=Badge.jsx.map