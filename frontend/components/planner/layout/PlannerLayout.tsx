'use client';

import React from 'react';
import PlannerProvider from '@/providers/PlannerProvider';
import PlannerWorkspace from './PlannerWorkspace';

interface PlannerLayoutProps {
  children?: React.ReactNode;
}

export const PlannerLayout = ({ children }: PlannerLayoutProps) => {
  return (
    <PlannerProvider>
      <div className="space-y-6">
        {children || <PlannerWorkspace />}
      </div>
    </PlannerProvider>
  );
};

export default PlannerLayout;
