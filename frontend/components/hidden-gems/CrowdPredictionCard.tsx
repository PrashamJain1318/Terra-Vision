'use client';

import React from 'react';
import { Users } from 'lucide-react';

interface CrowdPredictionCardProps {
  level?: string;
}

export const CrowdPredictionCard = ({ level = 'very_low' }: CrowdPredictionCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-blue-400/30 flex items-center justify-between">
      <span className="text-xs font-extrabold text-foreground flex items-center gap-1.5">
        <Users className="w-4 h-4 text-blue-400" /> Crowd Prediction
      </span>
      <span className="text-xs font-extrabold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
        {level} (15-35%)
      </span>
    </div>
  );
};

export default CrowdPredictionCard;
