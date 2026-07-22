'use client';

import React from 'react';
import { Landmark } from 'lucide-react';

export const EmbassyCard = () => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-extrabold uppercase text-amber-400 flex items-center gap-1">
          <Landmark className="w-3 h-3 text-amber-400" /> Consular Assistance
        </span>
        <h4 className="text-sm font-extrabold text-foreground">Diplomatic Mission Support Office</h4>
      </div>
    </div>
  );
};

export default EmbassyCard;
