import React from 'react';
import { iconSizes, iconColors } from '../base/BaseIcon';
/**
 * MenuIcon - Ícone de hamburguer para menus de navegação
 *
 * @example
 * <MenuIcon size="lg" color="primary" />
 * <MenuIcon size="md" className="md:hidden" aria-label="Abrir menu" />
 */
export const MenuIcon = ({ size = 'md', color = 'current', className = '', 'aria-label': ariaLabel = 'Menu', decorative = false, }) => {
    const sizeValue = typeof size === 'number' ? size : iconSizes[size];
    const colorClass = iconColors[color];
    return (<svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none" className={`${colorClass} ${className}`} aria-label={decorative ? undefined : ariaLabel} aria-hidden={decorative} role={decorative ? 'presentation' : 'img'}>
      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
//# sourceMappingURL=MenuIcon.jsx.map