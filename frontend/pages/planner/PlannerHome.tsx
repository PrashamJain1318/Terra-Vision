'use client';

import React from 'react';
import PlannerProvider from '@/providers/PlannerProvider';
import PlannerHero from '@/components/planner/PlannerHero';
import PlannerForm from '@/components/planner/PlannerForm';

export const PlannerHome = () => {
  return (
    <PlannerProvider>
      <div className="space-y-6">
        <PlannerHero />
        <PlannerForm />
      </div>
    </PlannerProvider>
  );
};

export default PlannerHome;
