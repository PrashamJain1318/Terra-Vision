'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { MapPin, Calendar, Users, DollarSign, Sparkles, CheckCircle2 } from 'lucide-react';

export const ReviewPlanner = () => {
  const { state } = usePlanner();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
            <MapPin className="w-3 h-3 text-primary" /> Destination
          </span>
          <p className="text-sm font-bold text-foreground">{state.selectedDestination || 'Shimla, HP, India'}</p>
        </div>

        <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
            <Calendar className="w-3 h-3 text-primary" /> Dates & Duration
          </span>
          <p className="text-sm font-bold text-foreground">
            {state.travelDates.start || '2026-07-22'} to {state.travelDates.end || '2026-07-25'}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
            <Users className="w-3 h-3 text-primary" /> Travelers & Style
          </span>
          <p className="text-sm font-bold text-foreground">
            {state.numberOfTravelers} Adult(s) • <span className="capitalize">{state.travelStyle}</span>
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
            <DollarSign className="w-3 h-3 text-primary" /> Budget Tier
          </span>
          <p className="text-sm font-bold text-foreground capitalize">{state.budget}</p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
        <p className="text-xs font-medium text-foreground">
          All parameters validated. Ready to trigger TerraVision Multimodal Itinerary Engine.
        </p>
      </div>
    </div>
  );
};

export default ReviewPlanner;
