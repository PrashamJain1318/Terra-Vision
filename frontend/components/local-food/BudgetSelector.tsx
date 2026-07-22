'use client';

import React from 'react';

export const BudgetSelector = () => {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Budget Range</label>
      <select className="w-full px-4 py-2.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none">
        <option value="under300" selected>Hidden Street Food (Under ₹300)</option>
        <option value="moderate">Mid-range Heritage Dhabas (₹300 - ₹700)</option>
        <option value="fine_dining">Fine Dining & Royal Feasts (₹700+)</option>
      </select>
    </div>
  );
};

export default BudgetSelector;
