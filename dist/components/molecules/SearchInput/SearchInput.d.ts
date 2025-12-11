import React from 'react';
export interface SearchInputProps {
    /** Current value (controlled mode) */
    value?: string;
    /** Default value (uncontrolled mode) */
    defaultValue?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Called when value changes */
    onChange?: (value: string) => void;
    /** Called when search is submitted (Enter key or search icon click) */
    onSearch?: (value: string) => void;
    /** Called when clear button is clicked */
    onClear?: () => void;
    /** Input size */
    size?: 'sm' | 'md' | 'lg';
    /** Disable the input */
    disabled?: boolean;
    /** Auto focus on mount */
    autoFocus?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const SearchInput: ({ value: controlledValue, defaultValue, placeholder, onChange, onSearch, onClear, size, disabled, autoFocus, className, }: SearchInputProps) => React.JSX.Element;
//# sourceMappingURL=SearchInput.d.ts.map