'use client';

import React from 'react';

export const BudgetSelector = () => {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Budget Range</label>
      <select className="w-full px-4 py-2.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none">
        <option value="budget">Budget Friendly (Free - Low)</option>
        <option value="moderate" selected>Moderate Experience</option>
        <option value="luxury">Luxury / Exclusive Secret Spot</option>
      </select>
    </div>
  );
};

export default BudgetSelector;
