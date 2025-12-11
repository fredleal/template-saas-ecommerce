import React from 'react';
import { iconSizes, iconColors } from '../base/BaseIcon';
/**
 * ChevronUpIcon - Ícone de seta para cima (recolher, fechar)
 *
 * @example
 * <ChevronUpIcon size="md" color="secondary" />
 * <ChevronUpIcon size="sm" className="ml-2" decorative />
 */
export const ChevronUpIcon = ({ size = 'md', color = 'current', className = '', 'aria-label': ariaLabel = 'Recolher', decorative = false, }) => {
    const sizeValue = typeof size === 'number' ? size : iconSizes[size];
    const colorClass = iconColors[color];
    return (<svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none" className={`${colorClass} ${className}`} aria-label={decorative ? undefined : ariaLabel} aria-hidden={decorative} role={decorative ? 'presentation' : 'img'}>
      <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
//# sourceMappingURL=ChevronUpIcon.jsx.map