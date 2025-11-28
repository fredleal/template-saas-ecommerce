import React from 'react';
export interface InstallmentsConfig {
    /** Number of installments */
    count: number;
    /** Value per installment */
    value: number;
    /** With or without interest */
    withInterest?: boolean;
}
export interface PriceSummaryProps {
    /** Original price (list price) - shown strikethrough if > currentPrice */
    originalPrice?: number;
    /** Current/main price (always required) */
    currentPrice: number;
    /** PIX discount price (optional) */
    pixPrice?: number;
    /** PIX discount percentage (optional, calculated if not provided) */
    pixDiscountPercent?: number;
    /** Installments configuration */
    installments?: InstallmentsConfig;
    /** Currency code (ISO 4217) */
    currency?: 'BRL' | 'USD' | 'EUR' | 'GBP';
    /** Locale for formatting */
    locale?: string;
    /** Size variant for all prices */
    size?: 'sm' | 'md' | 'lg';
    /** Custom className */
    className?: string;
}
export declare const PriceSummary: ({ originalPrice, currentPrice, pixPrice, pixDiscountPercent, installments, currency, locale, size, className, }: PriceSummaryProps) => React.JSX.Element;
//# sourceMappingURL=PriceSummary.d.ts.map