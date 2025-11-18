'use client';
import React, { useEffect, useRef } from 'react';
export const Checkbox = ({ checked, defaultChecked = false, indeterminate = false, onChange, disabled = false, label, labelPosition = 'right', size = 'md', className = '', }) => {
    // 1. Ref for indeterminate state
    const checkboxRef = useRef(null);
    // 2. useEffect for indeterminate visual state
    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);
    // 3. Handle change
    const handleChange = (e) => {
        if (!disabled && onChange) {
            onChange(e.target.checked);
        }
    };
    // 4. Base classes for checkbox input
    const baseClasses = 'rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors';
    // 5. Size classes for checkbox
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    };
    // 6. Label text size classes
    const labelSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };
    // 7. Checkbox element
    const checkboxElement = (<input ref={checkboxRef} type="checkbox" id={label
            ? `${label.toLowerCase().replace(/\s/g, '-')}-checkbox`
            : undefined} {...(checked !== undefined ? { checked } : { defaultChecked })} onChange={handleChange} disabled={disabled} className={`${baseClasses} ${sizeClasses[size]} ${className}`}/>);
    // 8. If no label, return just checkbox
    if (!label) {
        return checkboxElement;
    }
    // 9. With label, wrap in label element
    const labelClasses = `inline-flex items-center gap-2 cursor-pointer ${disabled ? 'cursor-not-allowed opacity-50' : ''}`;
    return (<label className={labelClasses} htmlFor={label
            ? `${label.toLowerCase().replace(/\s/g, '-')}-checkbox`
            : undefined}>
      {labelPosition === 'left' && (<span className={labelSizeClasses[size]}>{label}</span>)}
      {checkboxElement}
      {labelPosition === 'right' && (<span className={labelSizeClasses[size]}>{label}</span>)}
    </label>);
};
//# sourceMappingURL=Checkbox.jsx.map