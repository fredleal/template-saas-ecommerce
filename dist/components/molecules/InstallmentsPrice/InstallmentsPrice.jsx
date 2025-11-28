'use client';
import React from 'react';
import { FormatPrice } from '../FormatPrice';
export const InstallmentsPrice = ({ installments, value, currency = 'BRL', locale = 'pt-BR', withInterest = false, size = 'md', className = '', }) => {
    // Size-specific classes
    const sizeClasses = {
        sm: {
            text: 'text-xs',
            currency: 'text-xs font-medium',
            integer: 'text-sm font-semibold',
            decimal: 'text-xs font-medium align-super',
        },
        md: {
            text: 'text-sm',
            currency: 'text-sm font-medium',
            integer: 'text-base font-semibold',
            decimal: 'text-sm font-medium align-super',
        },
        lg: {
            text: 'text-base',
            currency: 'text-base font-medium',
            integer: 'text-lg font-semibold',
            decimal: 'text-base font-medium align-super',
        },
    };
    const currentSize = sizeClasses[size];
    const interestText = withInterest ? 'com juros' : 'sem juros';
    return (<div className={`inline-flex items-baseline gap-1 text-gray-700 ${className}`} data-testid="installments-price">
      <span className={currentSize.text}>
        {installments}x de
      </span>
      <FormatPrice value={value} currency={currency} locale={locale} currencyClassName={currentSize.currency} integerClassName={currentSize.integer} decimalClassName={currentSize.decimal}/>
      <span className={currentSize.text}>
        {interestText}
      </span>
    </div>);
};
//# sourceMappingURL=InstallmentsPrice.jsx.map