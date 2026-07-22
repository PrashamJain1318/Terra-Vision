'use client';

import React from 'react';
import MapsLayout from '@/components/maps/layout/MapsLayout';
import HistoryPanel from '@/components/maps/HistoryPanel';

export const RouteHistoryPage = () => {
  return (
    <MapsLayout>
      <div className="space-y-6">
        <HistoryPanel />
      </div>
    </MapsLayout>
  );
};

export default RouteHistoryPage;
