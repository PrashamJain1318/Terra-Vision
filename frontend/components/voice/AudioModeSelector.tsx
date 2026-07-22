'use client';

import React from 'react';
import { useVoice } from '@/hooks/useVoice';
import AUDIO_MODES from '@/config/audioModes';

export const AudioModeSelector = () => {
  const { state, setAudioMode } = useVoice();

  return (
    <div className="space-y-2">
      {AUDIO_MODES.map((mode) => (
        <button
          key={mode.id}
          onClick={() => setAudioMode(mode.id as any)}
          className={`w-full p-3 rounded-2xl border text-left text-xs transition-all ${
            state.audioMode === mode.id
              ? 'bg-cyan-500/15 border-cyan-500 text-cyan-400 font-extrabold'
              : 'bg-muted/20 border-border/20 text-muted-foreground hover:bg-muted/30'
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
};

export default AudioModeSelector;
