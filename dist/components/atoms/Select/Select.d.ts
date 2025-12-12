import React from 'react';
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    errorMessage?: string;
    name?: string;
    id?: string;
    ariaDescribedBy?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const Select: ({ options, value, defaultValue, placeholder, onChange, onFocus, onBlur, disabled, required, error, errorMessage, name, id, size, className, ariaDescribedBy, }: SelectProps) => React.JSX.Element;
//# sourceMappingURL=Select.d.ts.map