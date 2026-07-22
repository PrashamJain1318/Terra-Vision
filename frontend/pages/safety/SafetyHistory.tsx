'use client';

import React from 'react';
import SafetyLayout from '@/components/safety/layout/SafetyLayout';
import SafetyTimeline from '@/components/safety/SafetyTimeline';

export const SafetyHistory = () => {
  return (
    <SafetyLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Safety Query History</h2>
        <SafetyTimeline />
      </div>
    </SafetyLayout>
  );
};

export default SafetyHistory;
