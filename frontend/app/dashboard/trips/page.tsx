'use client';

import React from 'react';
import RecentTripsWidget from '@/components/dashboard/widgets/RecentTripsWidget';

export default function TripsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold tracking-tight">My Trips</h2>
      <RecentTripsWidget />
    </div>
  );
}
