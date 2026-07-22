'use client';

import React from 'react';
import VisionLayout from '@/components/vision/layout/VisionLayout';
import ScanHistoryPanel from '@/components/vision/ScanHistoryPanel';

export const ScanHistoryPage = () => {
  return (
    <VisionLayout>
      <div className="space-y-6">
        <ScanHistoryPanel />
      </div>
    </VisionLayout>
  );
};

export default ScanHistoryPage;
