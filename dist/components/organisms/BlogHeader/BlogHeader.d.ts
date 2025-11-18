import React from 'react';
export interface BlogHeaderProps {
    title: string;
    description?: string;
    author: string;
    date: string;
    readTime: string;
    tags?: string[];
    heroImage?: string;
    heroImageAlt?: string;
    className?: string;
}
export declare const BlogHeader: ({ title, description, author, date, readTime, tags, heroImage, heroImageAlt, className, }: BlogHeaderProps) => React.JSX.Element;
//# sourceMappingURL=BlogHeader.d.ts.map