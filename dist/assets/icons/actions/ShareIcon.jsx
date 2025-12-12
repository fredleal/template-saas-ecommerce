import React from 'react';
import { iconSizes, iconColors } from '../base/BaseIcon';
/**
 * ShareIcon - Ícone de compartilhamento
 *
 * @example
 * <ShareIcon size="sm" color="primary" />
 * <ShareIcon size="md" className="hover:text-blue-600" />
 */
export const ShareIcon = ({ size = 'md', color = 'current', className = '', 'aria-label': ariaLabel = 'Compartilhar', decorative = false, }) => {
    const sizeValue = typeof size === 'number' ? size : iconSizes[size];
    const colorClass = iconColors[color];
    return (<svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none" className={`${colorClass} ${className}`} aria-label={decorative ? undefined : ariaLabel} aria-hidden={decorative} role={decorative ? 'presentation' : 'img'}>
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
//# sourceMappingURL=ShareIcon.jsx.map