'use client';

import React from 'react';
import { Mic } from 'lucide-react';

export const LoadingVoice = () => {
  return (
    <div className="min-h-[300px] rounded-3xl bg-muted/20 border border-border/30 flex flex-col items-center justify-center p-8 text-center space-y-3">
      <Mic className="w-8 h-8 text-cyan-400 animate-spin" />
      <h4 className="text-sm font-extrabold text-foreground">Processing Voice AI Audio Stream...</h4>
      <p className="text-xs text-muted-foreground">Transcribing speech tokens & classifying travel intents</p>
    </div>
  );
};

export default LoadingVoice;
