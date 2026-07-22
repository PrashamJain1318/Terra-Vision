'use client';

import React from 'react';
import MemoryLayout from '@/components/memory/layout/MemoryLayout';
import StoryViewer from '@/components/memory/StoryViewer';

export const MemoryStory = () => {
  return (
    <MemoryLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">AI Travel Story & Journal</h2>
        <StoryViewer />
      </div>
    </MemoryLayout>
  );
};

export default MemoryStory;
