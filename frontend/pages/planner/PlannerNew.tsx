'use client';

import React from 'react';
import PlannerProvider from '@/providers/PlannerProvider';
import PlannerForm from '@/components/planner/PlannerForm';

export const PlannerNew = () => {
  return (
    <PlannerProvider>
      <PlannerForm />
    </PlannerProvider>
  );
};

export default PlannerNew;
