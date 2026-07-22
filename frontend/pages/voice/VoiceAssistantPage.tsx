'use client';

import React from 'react';
import VoiceLayout from '@/components/voice/layout/VoiceLayout';
import VoiceWorkspace from '@/components/voice/layout/VoiceWorkspace';

export const VoiceAssistantPage = () => {
  return (
    <VoiceLayout>
      <VoiceWorkspace />
    </VoiceLayout>
  );
};

export default VoiceAssistantPage;
