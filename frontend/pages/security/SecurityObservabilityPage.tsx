'use client';

import React from 'react';
import HealthCheckWidget from '@/components/security/HealthCheckWidget';

export const SecurityObservabilityPage = () => {
  return (
    <div className="space-y-6">
      <HealthCheckWidget />
    </div>
  );
};

export default SecurityObservabilityPage;
