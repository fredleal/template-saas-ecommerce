'use client';
// src/components/atoms/Link/Link.tsx
import React from 'react';
export const Link = ({ href, children, variant = 'primary', target = '_self', className = '', rel, ...props }) => {
    // Base classes
    const baseClasses = 'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
    // Variant classes
    const variantClasses = {
        primary: 'text-blue-600 hover:text-blue-800 underline',
        secondary: 'text-blue-600 hover:text-blue-800 no-underline',
    };
    // Auto-add security attributes for external links
    const isExternal = target === '_blank';
    const secureRel = isExternal
        ? rel
            ? `${rel} noopener noreferrer`
            : 'noopener noreferrer'
        : rel;
    // Combine all classes
    const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
    return (<a href={href} target={target} rel={secureRel} className={finalClasses} {...props}>
      {children}
    </a>);
};
//# sourceMappingURL=Link.jsx.map