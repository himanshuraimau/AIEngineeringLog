import React, { useState } from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  'data-language'?: string;
}

export default function CodeBlock({ children, className, 'data-language': language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const code = extractTextFromChildren(children);
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const extractTextFromChildren = (children: React.ReactNode): string => {
    if (typeof children === 'string') {
      return children;
    }
    if (React.isValidElement(children)) {
      return extractTextFromChildren((children.props as any).children);
    }
    if (Array.isArray(children)) {
      return children.map(child => extractTextFromChildren(child)).join('');
    }
    return '';
  };

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        {language && <span className="code-language">{language}</span>}
        <button 
          onClick={copyToClipboard}
          className="copy-button"
          title="Copy code"
        >
          {copied ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          )}
          <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className={className}>
        <code>{children}</code>
      </pre>
    </div>
  );
}
