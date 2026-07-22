'use client';

import React from 'react';
import { Terminal } from 'lucide-react';

interface CommandProps {
  command?: string;
}

export const VoiceCommandCard = ({ command = 'Translate this menu' }: CommandProps) => {
  return (
    <div className="p-3.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 flex items-center gap-2">
      <Terminal className="w-4 h-4 text-cyan-400" />
      <span className="text-xs font-semibold text-foreground">"{command}"</span>
    </div>
  );
};

export default VoiceCommandCard;
