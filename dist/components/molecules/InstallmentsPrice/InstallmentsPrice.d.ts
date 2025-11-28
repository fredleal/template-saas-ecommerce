import React from 'react';
export interface InstallmentsPriceProps {
    /** Number of installments */
    installments: number;
    /** Value per installment */
    value: number;
    /** Total value (optional, for reference) */
    totalValue?: number;
    /** Currency code (ISO 4217) */
    currency?: 'BRL' | 'USD' | 'EUR' | 'GBP';
    /** Locale for formatting */
    locale?: string;
    /** With interest or interest-free */
    withInterest?: boolean;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Custom className */
    className?: string;
}
export declare const InstallmentsPrice: ({ installments, value, currency, locale, withInterest, size, className, }: InstallmentsPriceProps) => React.JSX.Element;
//# sourceMappingURL=InstallmentsPrice.d.ts.map