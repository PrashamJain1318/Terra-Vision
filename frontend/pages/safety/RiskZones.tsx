'use client';

import React from 'react';
import SafetyLayout from '@/components/safety/layout/SafetyLayout';
import RiskZoneMap from '@/components/safety/RiskZoneMap';
import SafeZoneCard from '@/components/safety/SafeZoneCard';
import UnsafeZoneCard from '@/components/safety/UnsafeZoneCard';

export const RiskZones = () => {
  return (
    <SafetyLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">3D Geofenced Risk Zones</h2>
        <RiskZoneMap />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SafeZoneCard />
          <UnsafeZoneCard />
        </div>
      </div>
    </SafetyLayout>
  );
};

export default RiskZones;
