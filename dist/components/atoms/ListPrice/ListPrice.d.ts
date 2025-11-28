import React from 'react';
export interface ListPriceProps {
    /** Numeric price value */
    value: number;
    /** Currency code (ISO 4217) */
    currency?: 'BRL' | 'USD' | 'EUR' | 'GBP';
    /** Locale for formatting */
    locale?: string;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Custom className */
    className?: string;
}
export declare const ListPrice: ({ value, currency, locale, size, className, }: ListPriceProps) => React.JSX.Element;
//# sourceMappingURL=ListPrice.d.ts.map