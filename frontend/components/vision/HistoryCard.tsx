'use client';

import React from 'react';
import { Eye, Calendar, ArrowUpRight } from 'lucide-react';

interface HistoryCardProps {
  name: string;
  confidence: number;
  date: string;
}

export const HistoryCard = ({ name, confidence, date }: HistoryCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 hover:border-primary/40 transition-all flex items-center justify-between gap-3 group">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
          <Eye className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-foreground">{name}</h4>
          <p className="text-[11px] text-muted-foreground flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {date} • {Math.round(confidence * 100)}% match
          </p>
        </div>
      </div>

      <button className="p-2 rounded-xl text-muted-foreground hover:text-primary transition-colors">
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default HistoryCard;
