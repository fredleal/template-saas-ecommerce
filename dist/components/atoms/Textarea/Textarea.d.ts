import React from 'react';
export interface TextareaProps {
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
    rows?: number;
    maxLength?: number;
    ariaDescribedBy?: string;
    size?: 'sm' | 'md' | 'lg';
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    className?: string;
    showCharCount?: boolean;
}
export declare const Textarea: ({ value, defaultValue, placeholder, onChange, onFocus, onBlur, disabled, readOnly, required, error, errorMessage, name, id, rows, maxLength, size, resize, className, ariaDescribedBy, showCharCount, }: TextareaProps) => React.JSX.Element;
//# sourceMappingURL=Textarea.d.ts.map