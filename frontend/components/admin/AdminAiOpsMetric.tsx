'use client';

import React from 'react';
import { Cpu, DollarSign, Zap } from 'lucide-react';

export const AdminAiOpsMetric = () => {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <div className="flex items-center gap-2">
        <Cpu className="w-5 h-5 text-indigo-400" />
        <h3 className="font-extrabold text-base text-foreground">AI Inference Infrastructure & Token Spend</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
        <div className="p-4 rounded-2xl bg-muted/20 border border-border/30">
          <span className="text-muted-foreground text-[10px] uppercase block">Total Tokens Processed</span>
          <span className="text-xl font-extrabold text-foreground">18,450,000</span>
        </div>
        <div className="p-4 rounded-2xl bg-muted/20 border border-border/30">
          <span className="text-muted-foreground text-[10px] uppercase block">Est. Monthly Cloud Spend</span>
          <span className="text-xl font-extrabold text-emerald-400 flex items-center gap-0.5">
            <DollarSign className="w-4 h-4" /> 142.50
          </span>
        </div>
        <div className="p-4 rounded-2xl bg-muted/20 border border-border/30">
          <span className="text-muted-foreground text-[10px] uppercase block">Avg Stream Latency</span>
          <span className="text-xl font-extrabold text-cyan-400 flex items-center gap-1">
            <Zap className="w-4 h-4" /> 320 ms
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminAiOpsMetric;
