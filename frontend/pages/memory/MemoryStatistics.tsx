'use client';

import React from 'react';
import MemoryLayout from '@/components/memory/layout/MemoryLayout';
import MemoryStatisticsCard from '@/components/memory/MemoryStatisticsCard';

export const MemoryStatistics = () => {
  return (
    <MemoryLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Memory Analytics</h2>
        <MemoryStatisticsCard />
      </div>
    </MemoryLayout>
  );
};

export default MemoryStatistics;
