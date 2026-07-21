'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Compass } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

interface TripItem {
  _id?: string;
  title: string;
  destination: { name: string };
  startDate: string;
  endDate: string;
  status: string;
}

interface RecentTripsWidgetProps {
  trips?: TripItem[];
}

const defaultTrips: TripItem[] = [
  {
    title: 'Himalayan Adventure',
    destination: { name: 'Shimla, India' },
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'upcoming',
  },
];

export const RecentTripsWidget = ({ trips = defaultTrips }: RecentTripsWidgetProps) => {
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
        <div className="text-center py-8 space-y-3">
          <Compass className="w-8 h-8 text-muted-foreground mx-auto opacity-50" />
          <p className="text-xs text-muted-foreground">No trips planned yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {trips.map((trip, idx) => (
            <motion.div
              key={trip._id || idx}
              whileHover={{ x: 4 }}
              className="p-4 rounded-2xl bg-muted/20 border border-border/30 hover:border-primary/30 transition-all flex items-center justify-between"
            >
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">{trip.title}</h4>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-primary" />
                    {trip.destination?.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(trip.startDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <span
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  trip.status === 'upcoming'
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                    : 'bg-muted/40 text-muted-foreground'
                }`}
              >
                {trip.status}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default RecentTripsWidget;
