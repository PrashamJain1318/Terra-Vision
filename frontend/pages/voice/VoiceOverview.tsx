'use client';

import React from 'react';
import VoiceLayout from '@/components/voice/layout/VoiceLayout';
import MicButton from '@/components/voice/MicButton';
import AudioWaveform from '@/components/voice/AudioWaveform';

export const VoiceOverview = () => {
  return (
    <VoiceLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Voice Assistant Overview</h2>
        <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-cyan-500/20 text-center space-y-4">
          <MicButton />
          <AudioWaveform />
        </div>
      </div>
    </VoiceLayout>
  );
};

export default VoiceOverview;
