'use client';

import React from 'react';
import SafetyLayout from '@/components/safety/layout/SafetyLayout';
import ScamAlertCard from '@/components/safety/ScamAlertCard';

export const ScamShield = () => {
  return (
    <SafetyLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">AI Scam Shield Alerts</h2>
        <ScamAlertCard />
      </div>
    </SafetyLayout>
  );
};

export default ScamShield;
