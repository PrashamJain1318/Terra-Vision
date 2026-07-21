'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

export interface TripCardProps {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget?: string | number;
  status: 'upcoming' | 'ongoing' | 'completed' | string;
  coverImage?: string;
}

export const TripCard = ({
  title,
  destination,
  startDate,
  endDate,
  budget,
  status,
}: TripCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="p-5 rounded-3xl bg-muted/20 border border-border/30 hover:border-primary/40 transition-all space-y-3"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h4 className="font-bold text-base text-foreground tracking-tight">{title}</h4>
          <span className="flex items-center gap-1 text-xs text-primary font-medium">
            <MapPin className="w-3.5 h-3.5" />
            {destination}
          </span>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            status === 'upcoming'
              ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
              : status === 'completed'
              ? 'bg-muted/40 text-muted-foreground'
              : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
          }`}
        >
          {status}
        </span>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/10">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
        </span>

        {budget && (
          <span className="flex items-center gap-0.5 font-semibold text-foreground">
            <DollarSign className="w-3.5 h-3.5 text-primary" />
            {budget}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default TripCard;
