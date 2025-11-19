'use client';
import React from 'react';
export const PriceTag = ({ value, currency = 'USD', variant = 'normal', size = 'md', className = '', }) => {
    // Format price based on currency
    const formatPrice = (price, curr) => {
        const currencySymbols = {
            USD: '$',
            BRL: 'R$',
            EUR: '€',
            GBP: '£',
        };
        const formattedValue = price.toFixed(2);
        return `${currencySymbols[curr]}${formattedValue}`;
    };
    // Base classes
    const baseClasses = 'inline-flex items-center font-semibold';
    // Variant classes
    const variantClasses = {
        normal: 'text-gray-900',
        discount: 'text-green-600',
        strikethrough: 'text-gray-500 line-through',
    };
    // Size classes
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    return (<span className={classes} data-testid="price-tag">
      {formatPrice(value, currency)}
    </span>);
};
//# sourceMappingURL=PriceTag.jsx.map