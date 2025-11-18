import React from 'react';
export interface RatingProps {
    value: number;
    max?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    showValue?: boolean;
    showCount?: boolean;
    count?: number;
    color?: 'warning' | 'secondary' | 'primary';
    onRatingChange?: (rating: number) => void;
    isInteractive?: boolean;
    className?: string;
    'aria-label'?: string;
}
export declare const Rating: React.FC<RatingProps>;
//# sourceMappingURL=Rating.d.ts.map