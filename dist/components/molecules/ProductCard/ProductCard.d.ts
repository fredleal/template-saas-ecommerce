import React from 'react';
export interface ProductCardProps {
    id: string;
    name: string;
    description?: string;
    image: string;
    imageAlt?: string;
    price: number;
    originalPrice?: number;
    currency?: 'USD' | 'BRL' | 'EUR' | 'GBP';
    stock: number;
    stockVariant?: 'inStock' | 'lowStock' | 'outOfStock';
    onAddToCart?: (productId: string, quantity: number) => void;
    onViewDetails?: (productId: string) => void;
    variant?: 'default' | 'compact' | 'featured';
    size?: 'sm' | 'md' | 'lg';
    showQuantitySelector?: boolean;
    className?: string;
}
export declare const ProductCard: ({ id, name, description, image, imageAlt, price, originalPrice, currency, stock, stockVariant, onAddToCart, onViewDetails, variant, size, showQuantitySelector, className, }: ProductCardProps) => React.JSX.Element;
//# sourceMappingURL=ProductCard.d.ts.map