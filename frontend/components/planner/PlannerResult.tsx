'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Bookmark, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import DayTimeline from './DayTimeline';
import BudgetSummary from './BudgetSummary';
import TravelInsights from './TravelInsights';
import PackingChecklist from './PackingChecklist';
import SafetyTips from './SafetyTips';
import WeatherPlaceholder from './WeatherPlaceholder';
import { usePlanner } from '@/hooks/usePlanner';

export const PlannerResult = () => {
  const { state, saveTrip } = usePlanner();
  const plan = state.generatedPlan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Banner Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/15 via-purple-500/10 to-indigo-500/10 border border-primary/20 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> AI Generated Plan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              {plan?.title || `AI Expedition to ${state.selectedDestination || 'Shimla, HP'}`}
            </h2>
            <p className="text-xs text-muted-foreground">
              {state.numberOfTravelers} traveler(s) • {state.travelStyle} style • {state.budget} budget
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={saveTrip}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-bold text-xs shadow-md shadow-primary/20 hover:bg-primary/95 transition-all"
            >
              <Bookmark className="w-4 h-4" /> Save Trip
            </button>
          </div>
        </div>

        <WeatherPlaceholder />
      </div>

      <BudgetSummary />
      <DayTimeline days={plan?.itinerary} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TravelInsights />
        <PackingChecklist />
      </div>

      <SafetyTips />
    </motion.div>
  );
};

export default PlannerResult;
