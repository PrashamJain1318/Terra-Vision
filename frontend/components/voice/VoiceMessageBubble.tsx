'use client';

import React from 'react';

interface BubbleProps {
  sender: 'user' | 'assistant';
  text: string;
  targetModule?: string;
}

export const VoiceMessageBubble = ({ sender, text, targetModule }: BubbleProps) => {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed ${
          isUser ? 'bg-cyan-600 text-white font-semibold' : 'bg-muted/30 border border-border/30 text-foreground'
        }`}
      >
        <p>{text}</p>
        {targetModule && (
          <span className="mt-1 inline-block text-[9px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
            Target Module: {targetModule}
          </span>
        )}
      </div>
    </div>
  );
};

export default VoiceMessageBubble;
