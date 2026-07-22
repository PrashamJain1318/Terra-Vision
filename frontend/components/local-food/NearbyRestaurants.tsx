'use client';

import React from 'react';
import { Utensils, MapPin } from 'lucide-react';

export const NearbyRestaurants = () => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3">
      <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
        <Utensils className="w-4 h-4 text-orange-400" /> Nearby Heritage Food Dhabas
      </h3>
      <div className="space-y-2">
        <div className="p-3 rounded-2xl bg-muted/20 border border-border/20 flex items-center justify-between text-xs">
          <span className="font-bold text-foreground">Kesar Da Dhaba</span>
          <span className="text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3 text-primary" /> 300 m</span>
        </div>
      </div>
    </div>
  );
};

export default NearbyRestaurants;
