import React from 'react';
export interface InputProps {
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    error?: boolean;
    errorMessage?: string;
    name?: string;
    id?: string;
    autoComplete?: string;
    maxLength?: number;
    ariaDescribedBy?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const Input: ({ type, value, defaultValue, placeholder, onChange, onFocus, onBlur, disabled, readOnly, required, error, errorMessage, name, id, autoComplete, maxLength, size, className, ariaDescribedBy, }: InputProps) => React.JSX.Element;
//# sourceMappingURL=Input.d.ts.map