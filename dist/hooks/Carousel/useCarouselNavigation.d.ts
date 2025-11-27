export interface UseCarouselNavigationProps {
    totalSlides: number;
    slidesToShow: number;
    infiniteLoop?: boolean;
    currentIndex?: number;
    onSlideChange?: (index: number) => void;
    defaultIndex?: number;
}
export interface UseCarouselNavigationReturn {
    currentIndex: number;
    goToSlide: (index: number) => void;
    handleNext: () => void;
    handlePrev: () => void;
    maxIndex: number;
    isFractional: boolean;
}
export declare const useCarouselNavigation: ({ totalSlides, slidesToShow, infiniteLoop, currentIndex: controlledIndex, onSlideChange, defaultIndex, }: UseCarouselNavigationProps) => UseCarouselNavigationReturn;
//# sourceMappingURL=useCarouselNavigation.d.ts.map