import React from 'react';
import { IconName } from '../../atoms/Icon/Icon';
export interface StepCardProps {
    /** Step number (e.g., 1, 2, 3) */
    step: number;
    /** Title of the step */
    title: string;
    /** Description of what happens in this step */
    description: string;
    /** Optional icon to display instead of step number */
    icon?: IconName;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Layout orientation */
    orientation?: 'vertical' | 'horizontal';
    /** Color variant for step indicator */
    variant?: 'primary' | 'secondary' | 'success';
    /** Additional CSS classes */
    className?: string;
}
export declare const StepCard: React.FC<StepCardProps>;
//# sourceMappingURL=StepCard.d.ts.map