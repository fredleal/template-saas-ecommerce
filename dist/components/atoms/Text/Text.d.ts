import React from 'react';
export interface TextProps {
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
    color?: 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'error';
    align?: 'left' | 'center' | 'right' | 'justify';
    children: React.ReactNode;
    className?: string;
}
export interface HeadingProps extends Omit<TextProps, 'as' | 'children'> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
}
export interface PriceProps extends Omit<TextProps, 'children'> {
    value: number;
    isDiscounted?: boolean;
}
export declare const Text: ({ as: Component, size, weight, color, align, children, className, }: TextProps) => React.JSX.Element;
export declare const Heading: ({ level, children, className, ...props }: HeadingProps) => React.JSX.Element;
export declare const Price: ({ value, size, isDiscounted, className, ...props }: PriceProps) => React.JSX.Element;
//# sourceMappingURL=Text.d.ts.map