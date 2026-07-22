'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AmbientSoundPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const savedSoundPref = localStorage.getItem('terra_sound_enabled');
    if (savedSoundPref === 'true') {
      setIsPlaying(true);
    }
  }, []);

  const toggleSound = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    localStorage.setItem('terra_sound_enabled', String(nextState));
  };

  return (
    <button
      onClick={toggleSound}
      aria-label={isPlaying ? 'Mute ambient sound' : 'Enable ambient sound'}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-card/80 backdrop-blur-md border border-border/50 text-foreground shadow-lg hover:border-primary transition-all flex items-center gap-2 text-xs font-mono font-bold"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-primary animate-pulse" />
          <span className="hidden sm:inline text-[10px] uppercase">Ambient Audio On</span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-muted-foreground" />
          <span className="hidden sm:inline text-[10px] uppercase text-muted-foreground">Sound Muted</span>
        </>
      )}
    </button>
  );
};

export default AmbientSoundPlayer;
