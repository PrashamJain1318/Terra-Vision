'use client';

import React, { useState } from 'react';
import RecognitionCard from './RecognitionCard';
import HistoricalInformation from './HistoricalInformation';
import TravelTips from './TravelTips';
import NearbyPlacesPanel from './NearbyPlacesPanel';
import MemorySaveDialog from './MemorySaveDialog';
import { Bookmark, Share2 } from 'lucide-react';

export const RecognitionResult = () => {
  const [showSaveModal, setShowSaveModal] = useState(false);

  return (
    <div className="space-y-6">
      <RecognitionCard />
      <HistoricalInformation />
      <TravelTips />
      <NearbyPlacesPanel />

      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={() => setShowSaveModal(true)}
          className="flex-1 py-3 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Bookmark className="w-4 h-4" /> Save to Travel Memories
        </button>

        <button className="p-3 rounded-2xl bg-muted/30 border border-border/40 text-foreground hover:bg-muted/50 transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {showSaveModal && <MemorySaveDialog onClose={() => setShowSaveModal(false)} />}
    </div>
  );
};

export default RecognitionResult;
