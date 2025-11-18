import React from 'react';
export interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    labelPosition?: 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const Checkbox: ({ checked, defaultChecked, indeterminate, onChange, disabled, label, labelPosition, size, className, }: CheckboxProps) => React.JSX.Element;
//# sourceMappingURL=Checkbox.d.ts.map