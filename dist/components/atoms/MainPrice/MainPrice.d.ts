import React from 'react';
export interface MainPriceProps {
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
export declare const MainPrice: ({ value, currency, locale, size, className, }: MainPriceProps) => React.JSX.Element;
//# sourceMappingURL=MainPrice.d.ts.map