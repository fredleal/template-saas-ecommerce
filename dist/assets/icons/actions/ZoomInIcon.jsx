import React from 'react';
import { iconSizes, iconColors } from '../base/BaseIcon';
/**
 * ZoomInIcon - Ícone de zoom/ampliar para galerias de imagens
 *
 * @example
 * <ZoomInIcon size="sm" color="secondary" />
 * <ZoomInIcon size="lg" className="cursor-pointer" />
 */
export const ZoomInIcon = ({ size = 'md', color = 'current', className = '', 'aria-label': ariaLabel = 'Ampliar', decorative = false, }) => {
    const sizeValue = typeof size === 'number' ? size : iconSizes[size];
    const colorClass = iconColors[color];
    return (<svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none" className={`${colorClass} ${className}`} aria-label={decorative ? undefined : ariaLabel} aria-hidden={decorative} role={decorative ? 'presentation' : 'img'}>
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
//# sourceMappingURL=ZoomInIcon.jsx.map