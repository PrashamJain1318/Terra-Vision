'use client';

import React from 'react';
import MemoryLayout from '@/components/memory/layout/MemoryLayout';
import JourneyReplayMap from '@/components/memory/JourneyReplayMap';

export const JourneyReplay = () => {
  return (
    <MemoryLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Interactive Journey Replay</h2>
        <JourneyReplayMap />
      </div>
    </MemoryLayout>
  );
};

export default JourneyReplay;
