import React from 'react';
export interface DropdownProps {
    /** Dropdown label/trigger text */
    label: string;
    /** Content to display when open */
    children: React.ReactNode;
    /** Default open state (uncontrolled) */
    defaultOpen?: boolean;
    /** Controlled open state */
    isOpen?: boolean;
    /** Callback when toggle */
    onToggle?: (isOpen: boolean) => void;
    /** Disabled state */
    disabled?: boolean;
    /** Custom className */
    className?: string;
}
export declare function Dropdown({ label, children, defaultOpen, isOpen: controlledIsOpen, onToggle, disabled, className, }: DropdownProps): React.JSX.Element;
//# sourceMappingURL=Dropdown.d.ts.map