import React from 'react';
export interface CarouselSlideProps<T> {
    /** The item data to render */
    item: T;
    /** Index of the current slide */
    index: number;
    /** Render function for the slide content */
    renderItem: (item: T, index: number) => React.ReactNode;
    /** Width of the slide in pixels */
    width?: number;
    /** Gap between slides in pixels */
    gap?: number;
    /** Whether this is the last slide */
    isLast?: boolean;
    /** Custom className */
    className?: string;
    /** Ref for tracking visibility (Intersection Observer) */
    itemRef?: React.Ref<HTMLDivElement>;
}
export declare function CarouselSlide<T>({ item, index, renderItem, width, gap, isLast, className, itemRef, }: CarouselSlideProps<T>): React.JSX.Element;
//# sourceMappingURL=CarouselSlide.d.ts.map