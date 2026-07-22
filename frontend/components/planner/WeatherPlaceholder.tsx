'use client';

import React from 'react';
import { Sun, CloudRain, Wind } from 'lucide-react';

export const WeatherPlaceholder = () => {
  return (
    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-between text-xs font-bold">
      <div className="flex items-center gap-2">
        <Sun className="w-5 h-5" />
        <span>Live Destination Forecast</span>
      </div>
      <div className="flex items-center gap-4">
        <span>22°C Sunny</span>
        <span className="flex items-center gap-1 text-muted-foreground font-medium text-[11px]">
          <Wind className="w-3 h-3" /> 12 km/h
        </span>
      </div>
    </div>
  );
};

export default WeatherPlaceholder;
