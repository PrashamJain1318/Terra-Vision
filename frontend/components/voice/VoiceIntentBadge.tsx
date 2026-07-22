'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface IntentProps {
  intent: string;
}

export const VoiceIntentBadge = ({ intent }: IntentProps) => {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
      <Sparkles className="w-3 h-3 text-cyan-400" /> {intent}
    </span>
  );
};

export default VoiceIntentBadge;
