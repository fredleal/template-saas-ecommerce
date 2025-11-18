import React from 'react';
export interface CodeBlockProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
    showCopyButton?: boolean;
    className?: string;
    title?: string;
}
export declare const CodeBlock: ({ code, language, showLineNumbers, showCopyButton, className, title, }: CodeBlockProps) => React.JSX.Element;
//# sourceMappingURL=CodeBlock.d.ts.map