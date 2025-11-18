import React from 'react';
import { iconSizes, iconColors } from '../base/BaseIcon';
export const FilterIcon = ({ size = 'md', color = 'current', className = '', 'aria-label': ariaLabel = 'Filter', decorative = false, }) => {
    const sizeValue = typeof size === 'number' ? size : iconSizes[size];
    const colorClass = iconColors[color];
    return (<svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none" className={`${colorClass} ${className}`} aria-label={decorative ? undefined : ariaLabel} aria-hidden={decorative} role={decorative ? 'presentation' : 'img'}>
      <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
//# sourceMappingURL=FilterIcon.jsx.map