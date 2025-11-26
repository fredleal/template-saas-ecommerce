'use client';
import React from 'react';
export const Wrapper = ({ children, containerRef, className = '', innerClassName = '', variantWidth = 'primary', blockId, overflowHidden = false, translateX, transition, isFlex = true, style, innerStyle, }) => {
    // Helper to filter and join class names
    const parseClassNames = (classes) => classes.filter(Boolean).join(' ');
    // Outer container classes
    const containerClasses = parseClassNames([
        'w-full',
        variantWidth === 'primary' ? 'max-w-7xl mx-auto' : 'max-w-full',
        overflowHidden ? 'overflow-hidden' : '',
        className,
    ]);
    // Inner wrapper classes
    const innerClasses = parseClassNames([
        isFlex ? 'flex' : '',
        innerClassName,
    ]);
    // Inner wrapper inline styles
    const innerInlineStyle = {
        ...(translateX !== undefined && {
            transform: `translateX(-${translateX}px)`,
        }),
        ...(transition && { transition }),
        ...innerStyle,
    };
    return (<div ref={containerRef} id={blockId} className={containerClasses} style={style}>
      <div className={innerClasses} style={innerInlineStyle}>
        {children}
      </div>
    </div>);
};
//# sourceMappingURL=Wrapper.jsx.map