'use client';

import React from 'react';
import { Clock } from 'lucide-react';

export const RecommendationTimeline = () => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3">
      <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
        <Clock className="w-4 h-4 text-primary" /> Best Visiting Timeline
      </h3>
      <div className="p-3 rounded-2xl bg-muted/20 border border-border/20 text-xs font-semibold text-muted-foreground">
        7:30 AM - Morning mist pine trail walk (Lowest Crowd Window)
      </div>
    </div>
  );
};

export default RecommendationTimeline;
