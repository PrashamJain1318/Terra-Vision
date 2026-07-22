'use client';

import React from 'react';
import { Camera } from 'lucide-react';

export const VisionMemoryCard = () => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-pink-500/30 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-extrabold uppercase text-pink-400 flex items-center gap-1">
          <Camera className="w-3 h-3 text-pink-400" /> AI Vision Scan Memory
        </span>
        <h4 className="text-sm font-extrabold text-foreground">Gilded Marble Archway</h4>
      </div>
    </div>
  );
};

export default VisionMemoryCard;
