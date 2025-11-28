'use client';
import React from 'react';
import { FormatPrice } from '../../molecules/FormatPrice';
export const ListPrice = ({ value, currency = 'BRL', locale = 'pt-BR', size = 'md', className = '', }) => {
    // Size-specific classes for each part (smaller than MainPrice)
    const sizeClasses = {
        sm: {
            currency: 'text-xs font-normal',
            integer: 'text-sm font-normal',
            decimal: 'text-xs font-normal align-super',
        },
        md: {
            currency: 'text-sm font-normal',
            integer: 'text-base font-normal',
            decimal: 'text-sm font-normal align-super',
        },
        lg: {
            currency: 'text-base font-normal',
            integer: 'text-lg font-normal',
            decimal: 'text-base font-normal align-super',
        },
    };
    const currentSize = sizeClasses[size];
    return (<div className={`inline-flex items-baseline line-through text-gray-500 ${className}`} data-testid="list-price">
      <FormatPrice value={value} currency={currency} locale={locale} currencyClassName={currentSize.currency} integerClassName={currentSize.integer} decimalClassName={currentSize.decimal}/>
    </div>);
};
//# sourceMappingURL=ListPrice.jsx.map