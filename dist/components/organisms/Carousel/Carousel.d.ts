import React from 'react';
export interface CarouselProps<T> {
    /** Array of items to display */
    items: T[];
    /** Function to render each item */
    renderItem: (item: T, index: number) => React.ReactNode;
    /** Function to generate unique keys */
    getItemKey?: (item: T, index: number) => string | number;
    /** Visual variant */
    variant?: 'primary' | 'secondary';
    /** Slides to show on mobile */
    slidesToShowMobile?: number;
    /** Slides to show on tablet */
    slidesToShowTablet?: number;
    /** Slides to show on desktop */
    slidesToShowDesktop?: number;
    /** Gap between slides in pixels */
    gap?: number;
    /** Enable infinite loop */
    infinite?: boolean;
    /** Enable auto-play */
    autoplay?: boolean;
    /** Pause on hover */
    pauseOnHover?: boolean;
    /** Show navigation arrows */
    showArrows?: boolean;
    /** Show dots */
    showDots?: boolean;
    /** Controlled index */
    currentIndex?: number;
    /** Callback when slide changes */
    onSlideChange?: (index: number) => void;
    /** Custom className */
    className?: string;
}
export declare function Carousel<T>({ items, renderItem, getItemKey, variant, slidesToShowMobile, slidesToShowTablet, slidesToShowDesktop, gap, infinite, autoplay, pauseOnHover, showArrows, showDots, currentIndex: controlledIndex, onSlideChange, className, }: CarouselProps<T>): React.JSX.Element | null;
//# sourceMappingURL=Carousel.d.ts.map