'use client';
import React from 'react';
export function CarouselSlide({ item, index, renderItem, width, gap = 0, isLast = false, className = '', itemRef, }) {
    const slideStyle = {
        ...(width && { width: `${width}px`, minWidth: `${width}px` }),
        ...(gap && !isLast && { marginRight: `${gap}px` }),
    };
    return (<div ref={itemRef} data-slide-index={index} className={`flex-shrink-0 ${className}`} style={slideStyle}>
      {renderItem(item, index)}
    </div>);
}
//# sourceMappingURL=CarouselSlide.jsx.map