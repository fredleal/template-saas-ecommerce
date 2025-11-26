'use client';
import React from 'react';
export function List({ as, title, items = [], renderItem, getKey, direction = 'column', variant = 'primary', className = '', listProps, }) {
    const Tag = (as ?? 'ul');
    // Base classes
    const baseClasses = 'list-none m-0 p-0';
    // Direction classes
    const directionClasses = direction === 'row'
        ? 'flex flex-row gap-2'
        : 'flex flex-col gap-1';
    // Variant classes
    const variantClasses = {
        primary: '',
        secondary: 'text-gray-600',
    };
    const listClass = `${baseClasses} ${directionClasses} ${variantClasses[variant]} ${className}`;
    return (<>
      {title && (<h3 className="text-lg font-semibold mb-3">
          {title}
        </h3>)}
      <Tag className={listClass} {...listProps}>
        {items.map((item, index) => (<li key={getKey ? getKey(item, index) : `list-item-${index}`} className="list-item">
            {renderItem ? renderItem(item, index) : item}
          </li>))}
      </Tag>
    </>);
}
//# sourceMappingURL=List.jsx.map