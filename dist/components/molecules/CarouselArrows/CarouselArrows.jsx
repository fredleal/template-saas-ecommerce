'use client';
import React from 'react';
import { Button } from '../../atoms/Button/Button';
export const CarouselArrows = ({ showPrev, showNext, onPrev, onNext, iconLeft, iconRight, disabledPrev = false, disabledNext = false, size = 'md', variant = 'ghost', classNameLeft = '', classNameRight = '', ariaLabelPrev = 'Previous slide', ariaLabelNext = 'Next slide', }) => {
    // Default icons (chevron left and right)
    const defaultIconLeft = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
    </svg>);
    const defaultIconRight = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
    </svg>);
    return (<>
      {showPrev && (<Button onClick={onPrev} disabled={disabledPrev} size={size} variant={variant} className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 ${classNameLeft}`} aria-label={ariaLabelPrev}>
          {iconLeft || defaultIconLeft}
        </Button>)}

      {showNext && (<Button onClick={onNext} disabled={disabledNext} size={size} variant={variant} className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 ${classNameRight}`} aria-label={ariaLabelNext}>
          {iconRight || defaultIconRight}
        </Button>)}
    </>);
};
//# sourceMappingURL=CarouselArrows.jsx.map