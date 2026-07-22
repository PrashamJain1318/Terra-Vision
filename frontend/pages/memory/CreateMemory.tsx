'use client';

import React from 'react';
import MemoryLayout from '@/components/memory/layout/MemoryLayout';
import MemoryImporter from '@/components/memory/MemoryImporter';

export const CreateMemory = () => {
  return (
    <MemoryLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Create New Travel Capsule</h2>
        <MemoryImporter />
      </div>
    </MemoryLayout>
  );
};

export default CreateMemory;
