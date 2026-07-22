'use client';

import React from 'react';
import VoiceLayout from '@/components/voice/layout/VoiceLayout';
import VoiceCommandCard from '@/components/voice/VoiceCommandCard';

export const VoiceCommandsPage = () => {
  return (
    <VoiceLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Registered Voice Commands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <VoiceCommandCard command="Plan a 5-day trip to Japan" />
          <VoiceCommandCard command="Find the nearest vegetarian restaurant" />
          <VoiceCommandCard command="Translate this menu" />
          <VoiceCommandCard command="Is this place safe?" />
          <VoiceCommandCard command="Navigate me to my hotel" />
          <VoiceCommandCard command="Remember this place" />
        </div>
      </div>
    </VoiceLayout>
  );
};

export default VoiceCommandsPage;
