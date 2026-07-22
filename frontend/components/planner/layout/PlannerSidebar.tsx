'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { plannerStepsConfig } from '@/config/plannerSteps';
import { Check } from 'lucide-react';

export const PlannerSidebar = () => {
  const { state, setCurrentStep } = usePlanner();

  return (
    <aside className="w-full lg:w-72 p-6 border-r border-border/20 bg-background/30 backdrop-blur-md space-y-6 flex-shrink-0">
      <div className="space-y-1">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
          Workflow Steps
        </h3>
        <p className="text-xs text-muted-foreground">Configure your AI travel parameters</p>
      </div>

      <nav className="space-y-2">
        {plannerStepsConfig.map((step) => {
          const isActive = state.currentStep === step.id;
          const isCompleted = state.currentStep > step.id;

          return (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`w-full flex items-center justify-between p-3 rounded-2xl text-left text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]'
                  : isCompleted
                  ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                  : 'bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                    isActive
                      ? 'bg-primary-foreground text-primary'
                      : isCompleted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3" /> : step.id}
                </span>
                <span className="truncate">{step.title}</span>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default PlannerSidebar;
