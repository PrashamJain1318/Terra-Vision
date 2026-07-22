'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

interface AdvisoryProps {
  text?: string;
  severity?: string;
}

export const TravelAdvisoryCard = ({
  text = 'Keep valuables in front pockets in crowded markets.',
  severity = 'low',
}: AdvisoryProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-amber-400" />
        <span className="text-xs font-semibold text-foreground">{text}</span>
      </div>
    </div>
  );
};

export default TravelAdvisoryCard;
