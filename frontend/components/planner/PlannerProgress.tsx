'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';

export const PlannerProgress = () => {
  const { state } = usePlanner();

  return (
    <div className="w-full bg-muted/30 h-1.5 rounded-full overflow-hidden">
      <div
        className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 h-full transition-all duration-500 ease-out"
        style={{ width: `${(state.currentStep / 9) * 100}%` }}
      />
    </div>
  );
};

export default PlannerProgress;
