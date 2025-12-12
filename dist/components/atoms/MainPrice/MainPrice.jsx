'use client';
import React from 'react';
import { FormatPrice } from '../../molecules/FormatPrice/FormatPrice';
export const MainPrice = ({ value, currency = 'BRL', locale = 'pt-BR', size = 'md', className = '', }) => {
    // Size-specific classes for each part
    const sizeClasses = {
        sm: {
            currency: 'text-xs font-medium',
            integer: 'text-lg font-bold',
            decimal: 'text-xs font-medium align-super',
        },
        md: {
            currency: 'text-sm font-medium',
            integer: 'text-2xl font-bold',
            decimal: 'text-sm font-medium align-super',
        },
        lg: {
            currency: 'text-base font-medium',
            integer: 'text-4xl font-bold',
            decimal: 'text-base font-medium align-super',
        },
    };
    const currentSize = sizeClasses[size];
    return (<div className={`inline-flex items-baseline ${className}`} data-testid="main-price">
      <FormatPrice value={value} currency={currency} locale={locale} currencyClassName={currentSize.currency} integerClassName={currentSize.integer} decimalClassName={currentSize.decimal}/>
    </div>);
};
//# sourceMappingURL=MainPrice.jsx.map