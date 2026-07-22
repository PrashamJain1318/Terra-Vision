'use client';

import React from 'react';

export const VoiceVisualizer = () => {
  return (
    <div className="flex items-center justify-center gap-1.5 py-4">
      <div className="w-1.5 h-6 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-1.5 h-10 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-1.5 h-14 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      <div className="w-1.5 h-8 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
      <div className="w-1.5 h-4 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }} />
    </div>
  );
};

export default VoiceVisualizer;
