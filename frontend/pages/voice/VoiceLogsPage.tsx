'use client';

import React from 'react';
import VoiceLayout from '@/components/voice/layout/VoiceLayout';
import SpeechTranscriptCard from '@/components/voice/SpeechTranscriptCard';

export const VoiceLogsPage = () => {
  return (
    <VoiceLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Audio Interaction Logs</h2>
        <SpeechTranscriptCard />
      </div>
    </VoiceLayout>
  );
};

export default VoiceLogsPage;
