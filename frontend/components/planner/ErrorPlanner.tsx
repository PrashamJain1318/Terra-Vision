'use client';

import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

interface ErrorPlannerProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorPlanner = ({ message = 'AI Itinerary generation failed.', onRetry }: ErrorPlannerProps) => {
  return (
    <GlassCard hoverEffect={false} className="py-10 text-center space-y-4 border-rose-500/30 bg-rose-500/5">
      <div className="w-12 h-12 rounded-3xl bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto">
        <AlertCircle className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h4 className="font-extrabold text-sm text-foreground">Generation Error</h4>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-rose-500 text-white font-bold text-xs shadow-md"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Retry Session
        </button>
      )}
    </GlassCard>
  );
};

export default ErrorPlanner;
