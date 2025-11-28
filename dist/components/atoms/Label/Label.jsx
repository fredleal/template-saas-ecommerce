'use client';
import React from 'react';
export const Label = ({ htmlFor, children, required = false, disabled = false, className = '', ...props }) => {
    // Base classes
    const baseClasses = 'block text-sm font-medium transition-colors cursor-pointer';
    // State classes
    const stateClasses = disabled
        ? 'text-gray-400 cursor-not-allowed'
        : 'text-gray-700';
    const classes = `${baseClasses} ${stateClasses} ${className}`;
    return (<label htmlFor={htmlFor} className={classes} {...props}>
      {children}
      {required && (<span className="text-red-500 ml-1" aria-label="required">
          *
        </span>)}
    </label>);
};
//# sourceMappingURL=Label.jsx.map