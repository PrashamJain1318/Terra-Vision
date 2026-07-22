'use client';

import React from 'react';
import MemoryLayout from '@/components/memory/layout/MemoryLayout';
import TimelineView from '@/components/memory/TimelineView';

export const MemoryTimeline = () => {
  return (
    <MemoryLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Chronological Timeline</h2>
        <TimelineView />
      </div>
    </MemoryLayout>
  );
};

export default MemoryTimeline;
