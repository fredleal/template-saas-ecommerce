import React from 'react';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /** ID of the input element this label is for */
    htmlFor?: string;
    /** Label text or content */
    children: React.ReactNode;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Custom className */
    className?: string;
}
export declare const Label: ({ htmlFor, children, required, disabled, className, ...props }: LabelProps) => React.JSX.Element;
//# sourceMappingURL=Label.d.ts.map