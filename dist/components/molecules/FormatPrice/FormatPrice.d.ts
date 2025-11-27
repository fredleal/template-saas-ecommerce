import React from 'react';
export interface FormatPriceProps {
    /** Numeric value to format as price */
    value: number;
    /** Currency code (ISO 4217) */
    currency?: string;
    /** Locale for formatting (e.g., 'pt-BR', 'en-US') */
    locale?: string;
    /** Show currency symbol */
    showCurrency?: boolean;
    /** Custom className */
    className?: string;
    /** Custom className for currency symbol */
    currencyClassName?: string;
    /** Custom className for integer part */
    integerClassName?: string;
    /** Custom className for decimal part */
    decimalClassName?: string;
}
export declare const FormatPrice: ({ value, currency, locale, showCurrency, className, currencyClassName, integerClassName, decimalClassName, }: FormatPriceProps) => React.JSX.Element;
//# sourceMappingURL=FormatPrice.d.ts.map