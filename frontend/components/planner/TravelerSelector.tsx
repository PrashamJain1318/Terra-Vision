'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { Users, User, Minus, Plus } from 'lucide-react';

export const TravelerSelector = () => {
  const { state, setNumberOfTravelers } = usePlanner();

  return (
    <div className="space-y-6 max-w-md">
      <div className="p-6 rounded-3xl bg-muted/20 border border-border/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">Group Size</h4>
            <p className="text-xs text-muted-foreground">Number of adults & travelers</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setNumberOfTravelers(Math.max(1, state.numberOfTravelers - 1))}
            className="p-2 rounded-xl bg-muted/40 border border-border/30 text-foreground hover:bg-muted/60 transition-all"
          >
            <Minus className="w-4 h-4" />
          </button>

          <span className="text-base font-extrabold text-foreground w-6 text-center">
            {state.numberOfTravelers}
          </span>

          <button
            type="button"
            onClick={() => setNumberOfTravelers(state.numberOfTravelers + 1)}
            className="p-2 rounded-xl bg-muted/40 border border-border/30 text-foreground hover:bg-muted/60 transition-all"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelerSelector;
