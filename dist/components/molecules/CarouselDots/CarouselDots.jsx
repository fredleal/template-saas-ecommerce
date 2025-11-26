'use client';
import React from 'react';
export const CarouselDots = ({ total, currentIndex, onDotClick, iconDots, variant = 'primary', className = '', ariaLabelPrefix = 'Go to slide', }) => {
    // Container classes based on variant
    const containerClasses = {
        primary: 'flex justify-center items-center gap-2 mt-4',
        secondary: 'flex justify-center items-center gap-3 mt-6',
    };
    // Dot button classes based on variant and active state
    const getDotClasses = (index) => {
        const isActive = index === currentIndex;
        const baseClasses = 'transition-all duration-200';
        if (variant === 'primary') {
            return `${baseClasses} ${isActive
                ? 'w-8 h-2 bg-blue-500 rounded-full'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full'}`;
        }
        // secondary variant
        return `${baseClasses} ${isActive
            ? 'w-3 h-3 bg-blue-500 border-2 border-blue-500 rounded-full'
            : 'w-3 h-3 bg-transparent border-2 border-gray-400 hover:border-blue-300 rounded-full'}`;
    };
    return (<div className={`${containerClasses[variant]} ${className}`} role="group" aria-label="Carousel navigation dots">
      {Array.from({ length: total }).map((_, index) => (<button key={`dot-${index}`} onClick={() => onDotClick(index)} className={getDotClasses(index)} aria-label={`${ariaLabelPrefix} ${index + 1}`} aria-current={index === currentIndex ? 'true' : undefined} type="button">
          {iconDots && <span className="sr-only">{iconDots}</span>}
        </button>))}
    </div>);
};
//# sourceMappingURL=CarouselDots.jsx.map