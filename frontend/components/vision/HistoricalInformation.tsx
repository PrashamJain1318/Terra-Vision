'use client';

import React from 'react';
import { Landmark, Calendar, User, Compass } from 'lucide-react';

interface HistoricalInfoProps {
  info?: {
    name: string;
    builtYear: number;
    architect: string;
    style: string;
    history: string;
  };
}

export const HistoricalInformation = ({ info }: HistoricalInfoProps) => {
  const data = info || {
    name: 'Viceregal Lodge (Rashtrapati Niwas)',
    builtYear: 1888,
    architect: 'Henry Irwin',
    style: 'Jacobethan Revival Architecture',
    history: 'Formerly the summer residence of the British Viceroy of India, now housing the Indian Institute of Advanced Study.',
  };

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <div className="flex items-center gap-2 text-primary">
        <Landmark className="w-5 h-5" />
        <h3 className="text-base font-extrabold text-foreground">Historical Background</h3>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">{data.history}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-border/20 text-xs font-semibold">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span>Built: {data.builtYear}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-muted-foreground" />
          <span>Architect: {data.architect}</span>
        </div>
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-muted-foreground" />
          <span>Style: {data.style}</span>
        </div>
      </div>
    </div>
  );
};

export default HistoricalInformation;
