import React from 'react';
import { IconName } from '../../atoms/Icon/Icon';
export interface FeatureCardProps {
    icon: IconName;
    title: string;
    description: string;
    iconSize?: 'sm' | 'md' | 'lg';
    iconColor?: 'primary' | 'secondary' | 'current';
    className?: string;
}
export declare const FeatureCard: React.FC<FeatureCardProps>;
//# sourceMappingURL=FeatureCard.d.ts.map