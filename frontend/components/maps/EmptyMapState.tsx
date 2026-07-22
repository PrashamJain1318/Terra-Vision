'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

export const EmptyMapState = () => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
        <MapPin className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-extrabold text-foreground">No Places Saved Yet</h4>
      <p className="text-xs text-muted-foreground max-w-sm mx-auto">
        Search destinations or click on map markers to save your favorite spots for upcoming trips.
      </p>
    </div>
  );
};

export default EmptyMapState;
