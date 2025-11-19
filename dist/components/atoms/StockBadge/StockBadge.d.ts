import React from 'react';
export interface StockBadgeProps {
    stock: number;
    variant?: 'inStock' | 'lowStock' | 'outOfStock';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const StockBadge: ({ stock, variant, size, className, }: StockBadgeProps) => React.JSX.Element;
//# sourceMappingURL=StockBadge.d.ts.map