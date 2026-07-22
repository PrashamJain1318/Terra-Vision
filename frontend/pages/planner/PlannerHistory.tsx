'use client';

import React from 'react';
import PlannerProvider from '@/providers/PlannerProvider';
import PlannerHistoryWidget from '@/components/planner/PlannerHistory';
import SavedTrips from '@/components/planner/SavedTrips';

export const PlannerHistory = () => {
  return (
    <PlannerProvider>
      <div className="space-y-6">
        <SavedTrips />
        <PlannerHistoryWidget />
      </div>
    </PlannerProvider>
  );
};

export default PlannerHistory;
