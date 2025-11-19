import React from 'react';
export interface QuantitySelectorProps {
    value: number;
    min?: number;
    max?: number;
    onChange: (value: number) => void;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const QuantitySelector: ({ value, min, max, onChange, disabled, size, className, }: QuantitySelectorProps) => React.JSX.Element;
//# sourceMappingURL=QuantitySelector.d.ts.map