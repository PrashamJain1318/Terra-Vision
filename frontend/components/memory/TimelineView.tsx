'use client';

import React from 'react';
import TimelineCard from './TimelineCard';
import { useMemory } from '@/hooks/useMemory';

export const TimelineView = () => {
  const { state } = useMemory();

  return (
    <div className="space-y-4">
      {state.timelineEvents.map((evt) => (
        <TimelineCard key={evt.id} {...evt} />
      ))}
    </div>
  );
};

export default TimelineView;
