'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { plannerStepsConfig } from '@/config/plannerSteps';
import { Compass, Sparkles, ChevronRight, RotateCcw } from 'lucide-react';

export const PlannerHeader = () => {
  const { state, resetPlanner } = usePlanner();
  const activeStep = plannerStepsConfig.find(s => s.id === state.currentStep) || plannerStepsConfig[0];

  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border-b border-border/20 bg-background/40 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
          <Compass className="w-6 h-6 animate-pulse" />
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <span>AI Travel Planner</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary font-bold">Step {state.currentStep} of {plannerStepsConfig.length}</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-foreground flex items-center gap-2">
            {activeStep.title}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
        <button
          onClick={resetPlanner}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all border border-border/30"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>

        <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-bold border border-primary/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Multi-modal Engine</span>
        </span>
      </div>
    </header>
  );
};

export default PlannerHeader;
