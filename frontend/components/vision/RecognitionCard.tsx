'use client';

import React from 'react';
import ConfidenceScore from './ConfidenceScore';
import { Eye, MapPin } from 'lucide-react';

interface RecognitionCardProps {
  title?: string;
  confidence?: number;
  location?: string;
  description?: string;
}

export const RecognitionCard = ({
  title = 'Viceregal Lodge (Rashtrapati Niwas)',
  confidence = 0.98,
  location = 'Shimla, Himachal Pradesh, India',
  description = 'Historical Jacobethan mansion located on Observatory Hill in Shimla.',
}: RecognitionCardProps) => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5" /> Landmark Identified
        </span>
        <ConfidenceScore score={confidence} />
      </div>

      <div className="space-y-1">
        <h2 className="text-xl font-extrabold text-foreground">{title}</h2>
        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-primary" /> {location}
        </p>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default RecognitionCard;
