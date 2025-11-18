import React from 'react';
export interface HeroSectionProps {
    title: string;
    subtitle?: string;
    description?: string;
    primaryCTA?: {
        label: string;
        onClick?: () => void;
        href?: string;
    };
    secondaryCTA?: {
        label: string;
        onClick?: () => void;
        href?: string;
    };
    backgroundImage?: string;
    backgroundGradient?: boolean;
    children?: React.ReactNode;
    className?: string;
}
export declare const HeroSection: React.FC<HeroSectionProps>;
//# sourceMappingURL=HeroSection.d.ts.map