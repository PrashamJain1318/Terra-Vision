'use client';

import React from 'react';
import RecentMemoriesWidget from '@/components/dashboard/widgets/RecentMemoriesWidget';

export default function MemoriesPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold tracking-tight">Travel Memories</h2>
      <RecentMemoriesWidget />
    </div>
  );
}
