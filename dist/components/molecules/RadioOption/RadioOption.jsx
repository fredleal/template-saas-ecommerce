'use client';
import React from 'react';
import { Label } from '../../atoms/Label/Label';
import { TagText } from '../../atoms/TagText/TagText';
import { Image } from '../../atoms/Image/Image';
export const RadioOption = ({ id, name, value, label, imageSrc, imageAlt, variant = 'primary', checked = false, disabled = false, onChange, className = '', ...props }) => {
    // Variant classes for the container
    const variantClasses = {
        primary: 'border-gray-300 hover:border-blue-400 checked:border-blue-500 checked:bg-blue-50',
        secondary: 'border-gray-300 hover:border-purple-400 checked:border-purple-500 checked:bg-purple-50',
    };
    // Container classes
    const containerClasses = `
    relative flex flex-col items-center justify-center gap-3 p-4 rounded-lg border-2 transition-all cursor-pointer
    ${checked ? (variant === 'primary' ? 'border-blue-500 bg-blue-50' : 'border-purple-500 bg-purple-50') : 'border-gray-300 hover:border-gray-400'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;
    return (<Label htmlFor={id} disabled={disabled} className={containerClasses.trim()}>
      {/* Optional Image */}
      {imageSrc && (<div className="w-full flex justify-center mb-2">
          <Image src={imageSrc} alt={imageAlt || label} width={80} height={80}/>
        </div>)}

      {/* Radio Input + Label Text */}
      <div className="flex items-center gap-2">
        <input type="radio" id={id} name={name} value={value} checked={checked} disabled={disabled} onChange={onChange} className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" {...props}/>

        <TagText as="span" text={label} size="sm" weight="medium" color={disabled ? 'muted' : 'primary'}/>
      </div>
    </Label>);
};
//# sourceMappingURL=RadioOption.jsx.map