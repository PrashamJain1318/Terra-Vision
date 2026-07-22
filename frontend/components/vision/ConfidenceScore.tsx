'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ConfidenceScoreProps {
  score?: number;
}

export const ConfidenceScore = ({ score = 0.98 }: ConfidenceScoreProps) => {
  const percentage = Math.round(score * 100);

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30">
      <CheckCircle2 className="w-3.5 h-3.5" />
      <span>{percentage}% Match Confidence</span>
    </div>
  );
};

export default ConfidenceScore;
