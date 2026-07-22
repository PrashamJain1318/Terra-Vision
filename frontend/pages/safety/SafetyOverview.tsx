'use client';

import React from 'react';
import SafetyLayout from '@/components/safety/layout/SafetyLayout';
import SafetyScoreCard from '@/components/safety/SafetyScoreCard';
import SafetySummaryCard from '@/components/safety/SafetySummaryCard';

export const SafetyOverview = () => {
  return (
    <SafetyLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Safety Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SafetyScoreCard />
          <SafetySummaryCard />
        </div>
      </div>
    </SafetyLayout>
  );
};

export default SafetyOverview;
