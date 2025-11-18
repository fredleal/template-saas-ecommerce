import React from 'react';
export interface PostCardProps {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime?: number;
    featured?: boolean;
    imageUrl?: string;
    className?: string;
    onClick?: () => void;
}
export declare const PostCard: ({ title, excerpt, date, author, category, readTime, featured, imageUrl, className, onClick, }: PostCardProps) => React.JSX.Element;
//# sourceMappingURL=PostCard.d.ts.map