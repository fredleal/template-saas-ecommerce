import React from 'react';
export interface SkeletonProps {
    /**
     * Width of the skeleton (CSS value: px, %, rem, etc.)
     * @example "100%", "200px", "20rem"
     */
    width?: string | number;
    /**
     * Height of the skeleton (CSS value: px, %, rem, etc.)
     * @example "34px", "100%", "3rem"
     */
    height?: string | number;
    /**
     * Border radius variant
     * @default "md"
     */
    variant?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    /**
     * Animation speed
     * @default "normal"
     */
    speed?: 'slow' | 'normal' | 'fast';
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Test ID for testing
     */
    'data-testid'?: string;
}
export declare const Skeleton: React.FC<SkeletonProps>;
//# sourceMappingURL=Skeleton.d.ts.map