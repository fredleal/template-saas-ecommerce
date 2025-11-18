import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    isLoading?: boolean;
}
export declare const Button: ({ variant, size, children, isLoading, className, disabled, ...props }: ButtonProps) => React.JSX.Element;
//# sourceMappingURL=Button.d.ts.map