declare module 'react-typing-effect' {
    import * as React from 'react';
  
    interface TypingEffectProps {
      text: string[];
      speed?: number;
      eraseSpeed?: number;
      eraseDelay?: number;
      typingDelay?: number;
      cursorRenderer?: (cursor: string) => React.ReactNode;
    }
  
    const TypingEffect: React.FC<TypingEffectProps>;
    export default TypingEffect;
  }
  