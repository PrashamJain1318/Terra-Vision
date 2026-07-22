'use client';

import React from 'react';

interface AdvisorMessageProps {
  sender?: 'user' | 'assistant';
  text: string;
}

export const AdvisorMessage = ({ sender = 'assistant', text }: AdvisorMessageProps) => {
  const isAssistant = sender === 'assistant';

  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
          isAssistant ? 'bg-muted/30 border border-border/30 text-foreground' : 'bg-red-600 text-white font-semibold'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default AdvisorMessage;
