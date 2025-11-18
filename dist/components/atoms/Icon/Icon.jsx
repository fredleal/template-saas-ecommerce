'use client';
import React from 'react';
import * as Icons from '../../../assets/icons';
export const Icon = ({ name, ...props }) => {
    const IconComponent = Icons[name];
    if (!IconComponent) {
        if (process.env.NODE_ENV === 'development') {
            console.warn(`Icon "${name}" not found. Available icons:`, Object.keys(Icons).filter(key => key.endsWith('Icon') &&
                typeof Icons[key] === 'function'));
        }
        return null;
    }
    return <IconComponent {...props}/>;
};
export const getAvailableIcons = () => [
    'CartIcon',
    'HeartIcon',
    'SearchIcon',
    'MenuIcon',
    'PlusIcon',
    'StarIcon',
    'UserIcon',
    'FilterIcon',
    'CheckIcon',
    'XIcon',
];
//# sourceMappingURL=Icon.jsx.map