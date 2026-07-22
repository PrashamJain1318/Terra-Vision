'use client';

import React from 'react';
import MapsLayout from '@/components/maps/layout/MapsLayout';
import RoutePlanner from '@/components/maps/RoutePlanner';

export const RoutePlannerPage = () => {
  return (
    <MapsLayout>
      <div className="space-y-6">
        <RoutePlanner />
      </div>
    </MapsLayout>
  );
};

export default RoutePlannerPage;
