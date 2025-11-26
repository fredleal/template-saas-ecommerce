import React from 'react';
export interface CarouselDotsProps {
    /** Total number of dots */
    total: number;
    /** Current active index */
    currentIndex: number;
    /** Callback when a dot is clicked */
    onDotClick: (index: number) => void;
    /** Custom icon for dots */
    iconDots?: React.ReactNode;
    /** Variant style for dots */
    variant?: 'primary' | 'secondary';
    /** Custom className */
    className?: string;
    /** Accessible label prefix for dots */
    ariaLabelPrefix?: string;
}
export declare const CarouselDots: ({ total, currentIndex, onDotClick, iconDots, variant, className, ariaLabelPrefix, }: CarouselDotsProps) => React.JSX.Element;
//# sourceMappingURL=CarouselDots.d.ts.map