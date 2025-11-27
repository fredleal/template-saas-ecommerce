'use client';
import React from 'react';
export const FormatPrice = ({ value, currency = 'BRL', locale = 'pt-BR', showCurrency = true, className = '', currencyClassName = '', integerClassName = '', decimalClassName = '', }) => {
    // Format price using Intl.NumberFormat
    const parts = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).formatToParts(value);
    // Map part types to custom class names
    const getPartClassName = (type) => {
        switch (type) {
            case 'currency':
                return currencyClassName || 'text-sm font-medium';
            case 'integer':
                return integerClassName || 'text-2xl font-bold';
            case 'decimal':
            case 'fraction':
                return decimalClassName || 'text-sm font-medium align-super';
            default:
                return '';
        }
    };
    // Filter parts if currency should be hidden
    const visibleParts = showCurrency
        ? parts
        : parts.filter((part) => part.type !== 'currency');
    return (<span className={`inline-flex items-baseline ${className}`}>
      {visibleParts.map((part, index) => (<span key={`${part.type}-${index}`} className={getPartClassName(part.type)} data-part-type={part.type}>
          {part.value === '\u00a0' ? '\u00a0' : part.value}
        </span>))}
    </span>);
};
//# sourceMappingURL=FormatPrice.jsx.map