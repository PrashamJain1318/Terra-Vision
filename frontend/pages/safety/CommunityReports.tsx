'use client';

import React from 'react';
import SafetyLayout from '@/components/safety/layout/SafetyLayout';
import CommunityReportCard from '@/components/safety/CommunityReportCard';
import CommunityFilter from '@/components/safety/CommunityFilter';

export const CommunityReports = () => {
  return (
    <SafetyLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-foreground">Community Safety Reports</h2>
          <CommunityFilter />
        </div>
        <CommunityReportCard />
      </div>
    </SafetyLayout>
  );
};

export default CommunityReports;
