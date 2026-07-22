'use client';

import React from 'react';
import SafetyLayout from '@/components/safety/layout/SafetyLayout';
import DestinationSelector from '@/components/safety/DestinationSelector';
import SafetyTipsCard from '@/components/safety/SafetyTipsCard';

export const SafetyAnalysis = () => {
  return (
    <SafetyLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Destination Safety Analysis</h2>
        <DestinationSelector />
        <SafetyTipsCard />
      </div>
    </SafetyLayout>
  );
};

export default SafetyAnalysis;
