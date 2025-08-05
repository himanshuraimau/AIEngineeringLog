import CodeBlock from './CodeBlock';

export const components = {
  pre: ({ children }: any) => {
    // Extract language from className (e.g., "language-javascript" -> "javascript")
    const codeElement = children?.props;
    const className = codeElement?.className || '';
    const language = className.replace('language-', '') || 'text';
    
    return (
      <CodeBlock 
        className={className}
        data-language={language}
      >
        {children?.props?.children || children}
      </CodeBlock>
    );
  },
};
