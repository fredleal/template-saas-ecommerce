'use client';
import React, { useState } from 'react';
import { List } from '../List/List';
import { Button } from '../../atoms/Button/Button';
export const TabLayout = ({ tabs, variant = 'primary', orientation = 'horizontal', initialIndex = 0, onTabChange, className = '', ...props }) => {
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    // Handle tab click
    const handleTabClick = (index) => {
        setActiveIndex(index);
        onTabChange?.(tabs[index], index);
    };
    // Container classes based on orientation
    const containerClasses = `
    flex ${orientation === 'horizontal' ? 'flex-col' : 'flex-row gap-6'}
    ${className}
  `;
    // List direction (perpendicular to orientation)
    const listDirection = orientation === 'horizontal' ? 'row' : 'column';
    // Tab button variant based on TabLayout variant
    const buttonVariant = variant === 'primary' ? 'outline' : 'ghost';
    return (<div className={containerClasses.trim()} data-testid="tab-layout" {...props}>
      {/* Tab List */}
      <List as="ul" items={tabs} direction={listDirection} variant="primary" getKey={(tab) => tab.label} className={`border-b ${orientation === 'vertical' ? 'border-r border-b-0 pr-4' : 'border-gray-200'}`} listProps={{
            role: 'tablist',
            'aria-label': 'Tab navigation',
        }} renderItem={(tab, index) => {
            const isActive = activeIndex === index;
            return (<Button id={`tab-${index}`} role="tab" variant={isActive ? 'primary' : buttonVariant} size="sm" onClick={() => handleTabClick(index)} aria-selected={isActive} aria-controls={`tabpanel-${index}`} tabIndex={isActive ? 0 : -1} className={`
                ${orientation === 'horizontal' ? 'rounded-b-none' : 'w-full'}
                ${isActive ? '' : 'border-transparent'}
              `}>
              {tab.label}
            </Button>);
        }}/>

      {/* Tab Panels */}
      {tabs.map((tab, index) => (<div key={index} id={`tabpanel-${index}`} role="tabpanel" aria-labelledby={`tab-${index}`} hidden={activeIndex !== index} className="py-4">
          {activeIndex === index && <div>{tab.content}</div>}
        </div>))}
    </div>);
};
//# sourceMappingURL=TabLayout.jsx.map