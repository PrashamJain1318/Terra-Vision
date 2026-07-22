'use client';

import React from 'react';
import { DollarSign, Hotel, Bus, Utensils, ShieldAlert } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const BudgetSummary = () => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <h4 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
        Estimated Budget Allocation
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-bold">
            <Hotel className="w-3 h-3 text-indigo-400" /> Accommodation
          </span>
          <p className="text-sm font-extrabold text-foreground">$120 - $250</p>
        </div>

        <div className="p-3 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-bold">
            <Bus className="w-3 h-3 text-emerald-400" /> Transport
          </span>
          <p className="text-sm font-extrabold text-foreground">$40 - $80</p>
        </div>

        <div className="p-3 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-bold">
            <Utensils className="w-3 h-3 text-amber-400" /> Food & Dining
          </span>
          <p className="text-sm font-extrabold text-foreground">$50 - $100</p>
        </div>

        <div className="p-3 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-bold">
            <ShieldAlert className="w-3 h-3 text-rose-400" /> Buffer & Tips
          </span>
          <p className="text-sm font-extrabold text-foreground">$30 - $50</p>
        </div>
      </div>
    </GlassCard>
  );
};

export default BudgetSummary;
