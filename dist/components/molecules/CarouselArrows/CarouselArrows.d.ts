import React from 'react';
export interface CarouselArrowsProps {
    /** Show previous arrow */
    showPrev: boolean;
    /** Show next arrow */
    showNext: boolean;
    /** Callback when previous arrow is clicked */
    onPrev: () => void;
    /** Callback when next arrow is clicked */
    onNext: () => void;
    /** Custom icon for left arrow */
    iconLeft?: React.ReactNode;
    /** Custom icon for right arrow */
    iconRight?: React.ReactNode;
    /** Disable previous arrow */
    disabledPrev?: boolean;
    /** Disable next arrow */
    disabledNext?: boolean;
    /** Button size */
    size?: 'sm' | 'md' | 'lg';
    /** Button variant */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    /** Custom className for left arrow */
    classNameLeft?: string;
    /** Custom className for right arrow */
    classNameRight?: string;
    /** Accessible label for previous button */
    ariaLabelPrev?: string;
    /** Accessible label for next button */
    ariaLabelNext?: string;
}
export declare const CarouselArrows: ({ showPrev, showNext, onPrev, onNext, iconLeft, iconRight, disabledPrev, disabledNext, size, variant, classNameLeft, classNameRight, ariaLabelPrev, ariaLabelNext, }: CarouselArrowsProps) => React.JSX.Element;
//# sourceMappingURL=CarouselArrows.d.ts.map