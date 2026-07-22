'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { budgetRangesConfig } from '@/config/budgetRanges';
import { DollarSign, Coins, Crown } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  DollarSign: <DollarSign className="w-5 h-5 text-emerald-400" />,
  Coins: <Coins className="w-5 h-5 text-indigo-400" />,
  Crown: <Crown className="w-5 h-5 text-amber-400" />,
};

export const BudgetSelector = () => {
  const { state, setBudget } = usePlanner();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {budgetRangesConfig.map((item) => {
        const isSelected = state.budget === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setBudget(item.id)}
            className={`p-6 rounded-3xl text-left border transition-all space-y-3 ${
              isSelected
                ? 'bg-primary/10 border-primary shadow-lg shadow-primary/15 scale-[1.02]'
                : 'bg-muted/20 border-border/30 hover:bg-muted/40'
            }`}
          >
            <div className="p-3 rounded-2xl bg-background/50 w-fit border border-border/20">
              {iconMap[item.icon] || <DollarSign className="w-5 h-5 text-primary" />}
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-foreground">{item.label}</h4>
              <span className="text-xs font-bold text-primary block">{item.range}</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default BudgetSelector;
