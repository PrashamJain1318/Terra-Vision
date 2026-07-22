'use client';

import React from 'react';
import { Rocket, Check } from 'lucide-react';

export const SecurityDeploymentPage = () => {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <div className="flex items-center gap-2">
        <Rocket className="w-5 h-5 text-emerald-400" />
        <h3 className="font-extrabold text-lg text-foreground">Zero-Downtime Production Deployment Plan</h3>
      </div>

      <div className="space-y-2 font-mono text-xs">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
          <span>1. Pre-flight Environment Variable Validation</span>
          <Check className="w-4 h-4" />
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
          <span>2. Blue-Green Canary Deployment Strategy</span>
          <Check className="w-4 h-4" />
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
          <span>3. Automated Automated Rollback Trigger on 5xx Errors</span>
          <Check className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default SecurityDeploymentPage;
