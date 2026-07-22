'use client';

import React from 'react';
import VoiceLayout from '@/components/voice/layout/VoiceLayout';
import VoiceProviderSelector from '@/components/voice/VoiceProviderSelector';
import AudioModeSelector from '@/components/voice/AudioModeSelector';

export const VoiceSettingsPage = () => {
  return (
    <VoiceLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Voice Engine & Audio Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
            <h3 className="text-sm font-extrabold text-foreground">AI Voice Provider</h3>
            <VoiceProviderSelector />
          </div>
          <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
            <h3 className="text-sm font-extrabold text-foreground">Audio Input Mode</h3>
            <AudioModeSelector />
          </div>
        </div>
      </div>
    </VoiceLayout>
  );
};

export default VoiceSettingsPage;
