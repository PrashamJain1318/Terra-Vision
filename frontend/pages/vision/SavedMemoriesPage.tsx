'use client';

import React from 'react';
import VisionLayout from '@/components/vision/layout/VisionLayout';
import SavedMemoryCard from '@/components/vision/SavedMemoryCard';

const mockMemories = [
  { id: '1', title: 'Viceregal Lodge Heritage Exploration', notes: 'Touring Observatory Hill with family.', date: '2026-07-22' },
];

export const SavedMemoriesPage = () => {
  return (
    <VisionLayout>
      <div className="space-y-6">
        <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider">Saved Travel Memories</h3>
        <div className="space-y-3">
          {mockMemories.map((m) => (
            <SavedMemoryCard key={m.id} {...m} />
          ))}
        </div>
      </div>
    </VisionLayout>
  );
};

export default SavedMemoriesPage;
