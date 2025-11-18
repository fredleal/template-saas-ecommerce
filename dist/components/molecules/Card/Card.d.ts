import React from 'react';
export interface CardProps {
    variant?: 'default' | 'elevated' | 'outlined' | 'filled';
    size?: 'sm' | 'md' | 'lg';
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
    image?: string;
    imageAlt?: string;
    actions?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    isClickable?: boolean;
}
export interface ProductCardProps {
    title: string;
    price: number;
    originalPrice?: number;
    image: string;
    description?: string;
    onAddToCart?: () => void;
    onViewDetails?: () => void;
    inStock?: boolean;
    className?: string;
}
export declare const Card: ({ variant, size, title, subtitle, children, image, imageAlt, actions, className, onClick, isClickable, }: CardProps) => React.JSX.Element;
export declare const ProductCard: ({ title, price, originalPrice, image, description, onAddToCart, onViewDetails, inStock, className, }: ProductCardProps) => React.JSX.Element;
//# sourceMappingURL=Card.d.ts.map