'use client';

import React from 'react';
import { Sun, Sunset, Moon, MapPin, DollarSign, Clock } from 'lucide-react';

interface ActivityCardProps {
  timeOfDay: 'morning' | 'afternoon' | 'evening';
  title: string;
  description: string;
}

export const ActivityCard = ({ timeOfDay, title, description }: ActivityCardProps) => {
  const icon = timeOfDay === 'morning' ? (
    <Sun className="w-4 h-4 text-amber-400" />
  ) : timeOfDay === 'afternoon' ? (
    <Sunset className="w-4 h-4 text-rose-400" />
  ) : (
    <Moon className="w-4 h-4 text-indigo-400" />
  );

  return (
    <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 space-y-2 hover:border-primary/30 transition-all">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
          {icon}
          {timeOfDay}
        </span>
        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          2 Hours
        </span>
      </div>

      <h5 className="font-bold text-sm text-foreground">{title}</h5>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ActivityCard;
