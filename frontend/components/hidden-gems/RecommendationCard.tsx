'use client';

import React, { useState } from 'react';
import { Star, Users, Clock, Bookmark, Share2, MapPin } from 'lucide-react';
import { useHiddenGems } from '@/hooks/useHiddenGems';
import SaveHiddenGemDialog from './SaveHiddenGemDialog';

interface RecommendationCardProps {
  id?: string;
  name?: string;
  category?: string;
  location?: string;
  description?: string;
  experienceScore?: number;
  crowdLevel?: string;
  bestVisitTime?: string;
  aiStory?: string;
}

export const RecommendationCard = ({
  id = 'gem-1',
  name = 'Potters Hill Pine Sanctuary',
  category = 'Nature & Pine Trails',
  location = 'Near Summer Hill, Shimla',
  description = 'Dense Himalayan pine forest trail untouched by commercial tourism.',
  experienceScore = 9.6,
  crowdLevel = 'very_low',
  bestVisitTime = '7:30 AM - 10:00 AM',
  aiStory = 'Carved through British-era forestry paths, Potters Hill remains untouched.',
}: RecommendationCardProps) => {
  const { saveGem } = useHiddenGems();
  const [showSave, setShowSave] = useState(false);

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all space-y-4 shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">{category}</span>
          <h3 className="text-xl font-extrabold text-foreground">{name}</h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-primary" /> {location}
          </p>
        </div>

        <span className="text-xs font-extrabold text-amber-400 flex items-center gap-1 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
          <Star className="w-3.5 h-3.5 fill-amber-400" /> {experienceScore}
        </span>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>

      <div className="p-3.5 rounded-2xl bg-muted/20 border border-border/20 text-xs text-muted-foreground italic">
        "{aiStory}"
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/20 text-xs font-semibold">
        <div className="flex items-center gap-1.5 text-blue-400">
          <Users className="w-3.5 h-3.5" /> Crowd: {crowdLevel}
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400">
          <Clock className="w-3.5 h-3.5" /> Best: {bestVisitTime}
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2">
        <button
          onClick={() => setShowSave(true)}
          className="flex-1 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-md shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
        >
          <Bookmark className="w-3.5 h-3.5" /> Save Gem
        </button>
        <button className="p-2.5 rounded-2xl bg-muted/30 border border-border/40 text-foreground hover:bg-muted/50 transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {showSave && (
        <SaveHiddenGemDialog
          gemName={name}
          onClose={() => setShowSave(false)}
          onSave={(title, notes) => saveGem({ id, name, category, location, description, experienceScore, crowdLevel, bestVisitTime, aiStory, saved: true })}
        />
      )}
    </div>
  );
};

export default RecommendationCard;
