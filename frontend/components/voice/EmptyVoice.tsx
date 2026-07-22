'use client';

import React from 'react';
import { Mic } from 'lucide-react';

export const EmptyVoice = () => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
        <Mic className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-extrabold text-foreground">No Voice Interaction Active</h4>
      <p className="text-xs text-muted-foreground max-w-sm mx-auto">
        Press the microphone button or say "Hey TerraVision" to start talking.
      </p>
    </div>
  );
};

export default EmptyVoice;
