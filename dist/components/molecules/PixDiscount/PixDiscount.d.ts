import React from 'react';
export interface PixDiscountProps {
    /** Original price before discount */
    originalPrice: number;
    /** Price with PIX discount */
    pixPrice: number;
    /** Discount percentage (calculated if not provided) */
    discountPercent?: number;
    /** Currency code (ISO 4217) */
    currency?: 'BRL' | 'USD' | 'EUR' | 'GBP';
    /** Locale for formatting */
    locale?: string;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Custom className */
    className?: string;
}
export declare const PixDiscount: ({ originalPrice, pixPrice, discountPercent, currency, locale, size, className, }: PixDiscountProps) => React.JSX.Element;
//# sourceMappingURL=PixDiscount.d.ts.map