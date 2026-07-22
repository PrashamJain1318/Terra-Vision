'use client';

import React from 'react';
import PlannerProvider from '@/providers/PlannerProvider';
import PlannerHeader from './PlannerHeader';
import PlannerSidebar from './PlannerSidebar';
import PlannerContainer from './PlannerContainer';
import PlannerWorkspace from './PlannerWorkspace';

interface PlannerLayoutProps {
  children?: React.ReactNode;
}

export const PlannerLayout = ({ children }: PlannerLayoutProps) => {
  return (
    <PlannerProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
        <PlannerHeader />

        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
          <PlannerSidebar />
          <PlannerContainer>
            {children || <PlannerWorkspace />}
          </PlannerContainer>
        </div>
      </div>
    </PlannerProvider>
  );
};

export default PlannerLayout;
