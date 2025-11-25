import React from 'react';
export const Image = ({ src, alt, width, height, objectFit = 'cover', loading = 'lazy', className = '', ...props }) => {
    // Base classes
    const baseClasses = 'block max-w-full h-auto';
    // Object-fit classes
    const objectFitClasses = {
        contain: 'object-contain',
        cover: 'object-cover',
        fill: 'object-fill',
        none: 'object-none',
        'scale-down': 'object-scale-down',
    };
    // Combine classes
    const classes = `${baseClasses} ${objectFitClasses[objectFit]} ${className}`;
    return (<img src={src} alt={alt} width={width} height={height} loading={loading} className={classes} {...props}/>);
};
//# sourceMappingURL=Image.jsx.map