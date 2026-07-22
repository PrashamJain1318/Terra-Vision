'use client';

import React from 'react';
import { Star, MapPin } from 'lucide-react';

export const TravelHighlights = () => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3 shadow-xl">
      <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
        <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Key Journey Highlights
      </h3>
      <ul className="space-y-2 text-xs text-muted-foreground list-disc pl-5">
        <li>Early morning Golden Light photography at Golden Temple</li>
        <li>100-year-old clay oven Kulcha tasting at Bhai Kulwant Singh</li>
        <li>Explored secret 350-year-old underground stepwell baoli</li>
      </ul>
    </div>
  );
};

export default TravelHighlights;
