'use client';

import React from 'react';

export const TravelStyleSelector = () => {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Travel Style</label>
      <select className="w-full px-4 py-2.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none">
        <option value="uncrowded" selected>Authentic & Uncrowded</option>
        <option value="adventure">Adventure & Hidden Trails</option>
        <option value="family">Family Friendly Secret Spots</option>
      </select>
    </div>
  );
};

export default TravelStyleSelector;
