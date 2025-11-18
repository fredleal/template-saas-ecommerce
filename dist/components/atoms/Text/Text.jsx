import React from 'react';
export const Text = ({ as: Component = 'p', size = 'base', weight = 'normal', color = 'primary', align = 'left', children, className = '', }) => {
    const sizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
    };
    const weightClasses = {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
    };
    const colorClasses = {
        primary: 'text-gray-900',
        secondary: 'text-gray-600',
        muted: 'text-gray-500',
        success: 'text-green-600',
        warning: 'text-yellow-600',
        error: 'text-red-600',
    };
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
    };
    const finalClasses = `${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${alignClasses[align]} ${className}`;
    return <Component className={finalClasses}>{children}</Component>;
};
export const Heading = ({ level = 1, children, className = '', ...props }) => {
    const headingProps = {
        1: { as: 'h1', size: '4xl', weight: 'bold' },
        2: { as: 'h2', size: '3xl', weight: 'semibold' },
        3: { as: 'h3', size: '2xl', weight: 'semibold' },
        4: { as: 'h4', size: 'xl', weight: 'medium' },
        5: { as: 'h5', size: 'lg', weight: 'medium' },
        6: { as: 'h6', size: 'base', weight: 'medium' },
    };
    return (<Text {...headingProps[level]} className={className} {...props}>
      {children}
    </Text>);
};
export const Price = ({ value, size = 'lg', isDiscounted = false, className = '', ...props }) => {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
    return (<Text size={size} weight="semibold" color={isDiscounted ? 'error' : 'primary'} className={`${isDiscounted ? 'line-through' : ''} ${className}`} {...props}>
      {formattedPrice}
    </Text>);
};
//# sourceMappingURL=Text.jsx.map