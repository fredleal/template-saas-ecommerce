import React from 'react';
export interface PriceTagProps {
    value: number;
    currency?: 'USD' | 'BRL' | 'EUR' | 'GBP';
    variant?: 'normal' | 'discount' | 'strikethrough';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const PriceTag: ({ value, currency, variant, size, className, }: PriceTagProps) => React.JSX.Element;
//# sourceMappingURL=PriceTag.d.ts.map