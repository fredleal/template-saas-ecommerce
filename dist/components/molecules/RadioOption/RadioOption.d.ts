import React from 'react';
export interface RadioOptionProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /** Radio input ID (required) */
    id: string;
    /** Radio group name (required) */
    name: string;
    /** Radio value (required) */
    value: string;
    /** Label text (required) */
    label: string;
    /** Optional image source */
    imageSrc?: string;
    /** Image alt text (defaults to label) */
    imageAlt?: string;
    /** Variant style */
    variant?: 'primary' | 'secondary';
    /** Checked state */
    checked?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Change handler */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Custom className for the container */
    className?: string;
}
export declare const RadioOption: ({ id, name, value, label, imageSrc, imageAlt, variant, checked, disabled, onChange, className, ...props }: RadioOptionProps) => React.JSX.Element;
//# sourceMappingURL=RadioOption.d.ts.map