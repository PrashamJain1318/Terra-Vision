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
      <div className="flex h-screen w-full overflow-hidden bg-background text-foreground transition-colors duration-300">
        {/* Left static sidebar navigation */}
        <DashboardSidebar />

        {/* Main workspace scrollable viewport */}
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
          {/* Header toolbar */}
          <DashboardNavbar />

          {/* Scrollable content container */}
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
