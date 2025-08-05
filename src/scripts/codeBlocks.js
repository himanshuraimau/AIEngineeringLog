// Code block copy functionality
export function initCodeBlocks() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCodeBlocks);
  } else {
    setupCodeBlocks();
  }
}

function setupCodeBlocks() {
  // Find all code blocks
  const codeBlocks = document.querySelectorAll('pre:has(code)');
  
  codeBlocks.forEach((block, index) => {
    if (block.closest('.code-block-wrapper')) {
      return; // Already processed
    }
    
    // Get the code element and language
    const codeElement = block.querySelector('code');
    if (!codeElement) return;
    
    const className = codeElement.className || '';
    const language = className.includes('language-') 
      ? className.split('language-')[1].split(' ')[0] 
      : 'text';
    
    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'code-block-header';
    
    // Language label
    const langLabel = document.createElement('span');
    langLabel.className = 'code-language';
    langLabel.textContent = language;
    
    // Copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.title = 'Copy code';
    copyButton.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="2" fill="none"/>
      </svg>
      <span class="copy-text">Copy</span>
    `;
    
    // Copy functionality
    copyButton.addEventListener('click', async () => {
      try {
        const text = codeElement.textContent || '';
        await navigator.clipboard.writeText(text);
        
        // Update button state
        copyButton.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="copy-text">Copied!</span>
        `;
        copyButton.classList.add('copied');
        
        // Reset after 2 seconds
        setTimeout(() => {
          copyButton.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
            <span class="copy-text">Copy</span>
          `;
          copyButton.classList.remove('copied');
        }, 2000);
        
      } catch (err) {
        console.error('Failed to copy code: ', err);
        
        // Update button to show error
        copyButton.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="copy-text">Error</span>
        `;
        
        setTimeout(() => {
          copyButton.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
            <span class="copy-text">Copy</span>
          `;
        }, 2000);
      }
    });
    
    // Assemble the enhanced code block
    header.appendChild(langLabel);
    header.appendChild(copyButton);
    
    // Insert wrapper before the original block
    block.parentNode?.insertBefore(wrapper, block);
    wrapper.appendChild(header);
    wrapper.appendChild(block);
    
    // Update block styles
    block.style.margin = '0';
    block.style.borderTopLeftRadius = '0';
    block.style.borderTopRightRadius = '0';
    block.style.borderTop = 'none';
  });
}

// Auto-initialize
initCodeBlocks();
