'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePlanner } from '@/hooks/usePlanner';
import { plannerStepsConfig } from '@/config/plannerSteps';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const PlannerWorkspace = () => {
  const { state, nextStep, prevStep, generatePlan } = usePlanner();
  const currentConfig = plannerStepsConfig.find(s => s.id === state.currentStep) || plannerStepsConfig[0];

  return (
    <GlassCard hoverEffect={false} className="p-8 space-y-8 relative overflow-hidden">
      {/* Step Info */}
      <div className="space-y-2 pb-6 border-b border-border/10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Step {state.currentStep}: {currentConfig.title}
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
          {currentConfig.description}
        </h2>
      </div>

      {/* Dynamic Content Workspace Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={state.currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[240px] flex flex-col justify-center space-y-6"
        >
          <div className="p-8 rounded-3xl bg-muted/20 border border-border/30 text-center space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              [Architecture Workspace Placeholder for {currentConfig.title}]
            </p>
            <span className="text-xs text-muted-foreground block">
              Form inputs, selectors & multi-modal AI parameter controls will mount here.
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Toolbar */}
      <div className="flex items-center justify-between pt-6 border-t border-border/10">
        <button
          onClick={prevStep}
          disabled={state.currentStep === 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-semibold border border-border/40 hover:bg-muted/40 disabled:opacity-40 disabled:pointer-events-none transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        {state.currentStep === 8 ? (
          <button
            onClick={generatePlan}
            className="flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/95 shadow-lg shadow-primary/20 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Generate AI Plan
          </button>
        ) : (
          <button
            onClick={nextStep}
            disabled={state.currentStep === 9}
            className="flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/95 shadow-lg shadow-primary/20 disabled:opacity-40 disabled:pointer-events-none transition-all"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </GlassCard>
  );
};

export default PlannerWorkspace;
