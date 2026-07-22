'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Compass, Clock, Eye } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

interface TripItem {
  _id?: string;
  title: string;
  destination: { name: string } | string;
  startDate?: string;
  endDate?: string;
  status: string;
  travelDays?: number;
  travelStyle?: string;
}

const defaultTrips: TripItem[] = [
  {
    title: '7-Day Experience in Munnar, Kerala',
    destination: { name: 'Munnar, Kerala' },
    startDate: '2026-07-25T00:00:00.000Z',
    endDate: '2026-08-01T00:00:00.000Z',
    status: 'upcoming',
    travelDays: 7,
    travelStyle: 'Heritage & Food',
  },
  {
    title: 'Himalayan Adventure & Ridge Walk',
    destination: { name: 'Shimla, India' },
    startDate: '2026-08-10T00:00:00.000Z',
    endDate: '2026-08-13T00:00:00.000Z',
    status: 'upcoming',
    travelDays: 3,
    travelStyle: 'Relaxed Exploration',
  },
];

export const RecentTripsWidget = ({ trips: initialTrips }: { trips?: TripItem[] | null }) => {
  const [trips, setTrips] = useState<TripItem[]>(initialTrips && initialTrips.length > 0 ? initialTrips : defaultTrips);

  useEffect(() => {
    fetchRecentTrips();
  }, []);

  const fetchRecentTrips = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5050/api/v1/dashboard/recent-trips', {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setTrips(data.data);
      }
    } catch (e) {
      console.log('Using default trips fallback for widget');
    }
  };

  return (
    <GlassCard hoverEffect={false} className="space-y-4 border-border/40 shadow-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-primary" /> Recent Trips & AI Plans
        </h3>
        <Link
          href="/dashboard/trips"
          className="text-xs text-primary hover:underline font-extrabold flex items-center gap-1"
        >
          View All ({trips.length})
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
          {trips.slice(0, 4).map((trip, idx) => {
            const destName = typeof trip.destination === 'object' ? trip.destination?.name : trip.destination;
            const isUpcoming = trip.status === 'upcoming' || trip.status === 'generated';

            return (
              <motion.div
                key={trip._id || idx}
                whileHover={{ x: 4 }}
                className="p-4 rounded-2xl bg-muted/20 border border-border/30 hover:border-primary/30 transition-all flex items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <h4 className="font-bold text-xs text-foreground line-clamp-1">{trip.title}</h4>
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary shrink-0" />
                      {destName || 'Destination'}
                    </span>
                    <span className="flex items-center gap-1" suppressHydrationWarning>
                      <Calendar className="w-3 h-3 shrink-0" />
                      {trip.startDate ? new Date(trip.startDate).toLocaleDateString('en-US') : 'Jul 25, 2026'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      isUpcoming
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-muted/40 text-muted-foreground'
                    }`}
                  >
                    {isUpcoming ? 'Upcoming' : 'Completed'}
                  </span>
                  <Link
                    href="/dashboard/trips"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </GlassCard>
  );
};

export default RecentTripsWidget;
