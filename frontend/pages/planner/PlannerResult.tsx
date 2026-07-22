'use client';

import React from 'react';
import PlannerProvider from '@/providers/PlannerProvider';
import PlannerResultWidget from '@/components/planner/PlannerResult';

export const PlannerResult = () => {
  return (
    <PlannerProvider>
      <PlannerResultWidget />
    </PlannerProvider>
  );
};

export default PlannerResult;
