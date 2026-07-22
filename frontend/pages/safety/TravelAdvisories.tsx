'use client';

import React from 'react';
import SafetyLayout from '@/components/safety/layout/SafetyLayout';
import TravelAdvisoryCard from '@/components/safety/TravelAdvisoryCard';

export const TravelAdvisories = () => {
  return (
    <SafetyLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Travel Advisories</h2>
        <TravelAdvisoryCard />
      </div>
    </SafetyLayout>
  );
};

export default TravelAdvisories;
