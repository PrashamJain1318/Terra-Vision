'use client';

import React from 'react';
import { useVoice } from '@/hooks/useVoice';

export const SpeechTranscriptCard = () => {
  const { state } = useVoice();

  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-cyan-500/20 text-xs font-semibold text-foreground space-y-1">
      <span className="text-[10px] uppercase font-bold text-muted-foreground block">Realtime STT Transcript</span>
      <p>{state.transcript || 'No active audio transcription stream...'}</p>
    </div>
  );
};

export default SpeechTranscriptCard;
