'use client';
import React, { useState, useCallback } from 'react';
import { Icon } from '../../atoms/Icon/Icon';
export const SearchInput = ({ value: controlledValue, defaultValue = '', placeholder = 'Search...', onChange, onSearch, onClear, size = 'md', disabled = false, autoFocus = false, className = '', }) => {
    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = useState(defaultValue);
    // Determine if controlled or uncontrolled
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;
    // Handle input change
    const handleChange = useCallback((e) => {
        const newValue = e.target.value;
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    }, [isControlled, onChange]);
    // Handle clear button click
    const handleClear = useCallback(() => {
        if (!isControlled) {
            setInternalValue('');
        }
        onChange?.('');
        onClear?.();
    }, [isControlled, onChange, onClear]);
    // Handle key down (Enter to search)
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter' && currentValue.trim()) {
            onSearch?.(currentValue.trim());
        }
    }, [currentValue, onSearch]);
    // Handle search icon click
    const handleSearchClick = useCallback(() => {
        if (currentValue.trim()) {
            onSearch?.(currentValue.trim());
        }
    }, [currentValue, onSearch]);
    // Size classes
    const sizeClasses = {
        sm: 'h-8 text-sm pl-8 pr-8',
        md: 'h-10 text-base pl-10 pr-10',
        lg: 'h-12 text-lg pl-12 pr-12',
    };
    const iconSizeMap = {
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    };
    const iconPositionClasses = {
        sm: 'left-2',
        md: 'left-3',
        lg: 'left-3.5',
    };
    const clearPositionClasses = {
        sm: 'right-2',
        md: 'right-3',
        lg: 'right-3.5',
    };
    // Base classes
    const baseClasses = 'w-full rounded-lg border border-gray-300 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
    const disabledClasses = disabled
        ? 'bg-gray-100 cursor-not-allowed opacity-60'
        : '';
    const classes = `${baseClasses} ${sizeClasses[size]} ${disabledClasses} ${className}`;
    const showClearButton = currentValue.length > 0 && !disabled;
    return (<div className="relative w-full">
      {/* Search icon */}
      <button type="button" onClick={handleSearchClick} disabled={disabled || !currentValue.trim()} className={`absolute top-1/2 -translate-y-1/2 ${iconPositionClasses[size]} text-gray-400 hover:text-gray-600 transition-colors disabled:hover:text-gray-400 disabled:cursor-default`} aria-label="Search">
        <Icon name="SearchIcon" size={iconSizeMap[size]} color="current" decorative/>
      </button>

      {/* Input field */}
      <input type="text" value={currentValue} onChange={handleChange} onKeyDown={handleKeyDown} placeholder={placeholder} disabled={disabled} autoFocus={autoFocus} className={classes} aria-label={placeholder}/>

      {/* Clear button */}
      {showClearButton && (<button type="button" onClick={handleClear} className={`absolute top-1/2 -translate-y-1/2 ${clearPositionClasses[size]} text-gray-400 hover:text-gray-600 transition-colors`} aria-label="Clear search">
          <Icon name="XIcon" size={iconSizeMap[size]} color="current" decorative/>
        </button>)}
    </div>);
};
//# sourceMappingURL=SearchInput.jsx.map