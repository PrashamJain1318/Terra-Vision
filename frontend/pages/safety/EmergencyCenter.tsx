'use client';

import React from 'react';
import SafetyLayout from '@/components/safety/layout/SafetyLayout';
import EmergencyContactsCard from '@/components/safety/EmergencyContactsCard';
import HospitalCard from '@/components/safety/HospitalCard';
import PoliceStationCard from '@/components/safety/PoliceStationCard';
import EmbassyCard from '@/components/safety/EmbassyCard';

export const EmergencyCenter = () => {
  return (
    <SafetyLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Emergency Center</h2>
        <EmergencyContactsCard />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <HospitalCard />
          <PoliceStationCard />
          <EmbassyCard />
        </div>
      </div>
    </SafetyLayout>
  );
};

export default EmergencyCenter;
