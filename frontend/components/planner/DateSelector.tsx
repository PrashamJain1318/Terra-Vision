'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { Calendar as CalendarIcon } from 'lucide-react';

export const DateSelector = () => {
  const { state, setTravelDates } = usePlanner();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
            Start Date
          </label>
          <div className="relative">
            <CalendarIcon className="w-4 h-4 absolute left-4 top-3.5 text-muted-foreground" />
            <input
              type="date"
              value={state.travelDates.start}
              onChange={(e) => setTravelDates({ ...state.travelDates, start: e.target.value })}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-muted/20 border border-border/40 text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
            End Date
          </label>
          <div className="relative">
            <CalendarIcon className="w-4 h-4 absolute left-4 top-3.5 text-muted-foreground" />
            <input
              type="date"
              value={state.travelDates.end}
              onChange={(e) => setTravelDates({ ...state.travelDates, end: e.target.value })}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-muted/20 border border-border/40 text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
