'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';
import TripCard, { TripCardProps } from './widgets/TripCard';

interface RecentTripsProps {
  trips?: TripCardProps[];
}

const defaultTrips: TripCardProps[] = [
  {
    title: 'Himalayan Adventure',
    destination: 'Shimla, India',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'upcoming',
    budget: '$1,200',
  },
];

export const RecentTrips = ({ trips = defaultTrips }: RecentTripsProps) => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
          Recent Trips
        </h3>
        <Link
          href="/dashboard/trips"
          className="text-xs text-primary hover:underline font-semibold flex items-center gap-1"
        >
          View All
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {trips.length === 0 ? (
        <div className="text-center py-8 space-y-2">
          <Compass className="w-8 h-8 text-muted-foreground mx-auto opacity-50" />
          <p className="text-xs text-muted-foreground">No trips planned yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {trips.map((trip, idx) => (
            <TripCard key={idx} {...trip} />
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default RecentTrips;
