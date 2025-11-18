import React from 'react';
export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}
export interface FAQSectionProps {
    title: string;
    subtitle?: string;
    items: FAQItem[];
    allowMultipleOpen?: boolean;
    className?: string;
}
export declare const FAQSection: React.FC<FAQSectionProps>;
//# sourceMappingURL=FAQSection.d.ts.map