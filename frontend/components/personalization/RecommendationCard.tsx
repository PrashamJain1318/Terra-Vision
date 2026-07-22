'use client';

import React from 'react';
import { Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { PersonalizedRecommendation } from '@/context/PersonalizationContext';

export const RecommendationCard = ({ recommendation }: { recommendation: PersonalizedRecommendation }) => {
  return (
    <div className="p-5 rounded-3xl bg-card border border-indigo-500/30 space-y-3 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold text-amber-400 uppercase font-mono tracking-wider">
            {recommendation.confidenceScore}% AI Confidence Match
          </span>
        </div>
        <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-mono font-bold uppercase">
          {recommendation.type.replace('_', ' ')}
        </span>
      </div>

      <div className="space-y-1">
        <h4 className="font-extrabold text-foreground text-lg">{recommendation.title}</h4>
        <p className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
          <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {recommendation.location}
        </p>
      </div>

      <div className="p-3.5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 text-xs font-sans text-muted-foreground flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
        <span>{recommendation.explanation}</span>
      </div>
    </div>
  );
};

export default RecommendationCard;
