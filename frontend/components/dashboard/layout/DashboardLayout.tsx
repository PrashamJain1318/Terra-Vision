'use client';

import React from 'react';
import { DashboardProvider } from '@/providers/DashboardProvider';
import DashboardSidebar from './DashboardSidebar';
import DashboardNavbar from './DashboardNavbar';
import DashboardContainer from './DashboardContainer';
import RightSidebar from './RightSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <DashboardProvider>
      <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Left collapsable sidebar navigation */}
        <DashboardSidebar />

        {/* Workspace content wrapper */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header toolbar */}
          <DashboardNavbar />

          {/* Core scrollable viewport */}
          <DashboardContainer>
            {children}
          </DashboardContainer>
        </div>

        {/* Right contextual activity sidebar */}
        <RightSidebar />
      </div>
    </DashboardProvider>
  );
};

export default DashboardLayout;
