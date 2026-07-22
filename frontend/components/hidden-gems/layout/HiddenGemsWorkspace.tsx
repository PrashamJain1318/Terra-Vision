'use client';

import React from 'react';
import { useHiddenGems } from '@/hooks/useHiddenGems';
import { Sparkles, MapPin, Users, Clock, Star } from 'lucide-react';

export const HiddenGemsWorkspace = () => {
  const { state } = useHiddenGems();

  return (
    <div className="space-y-6">
      {/* Search Header Banner */}
      <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-amber-400" /> AI Destination Discovery
            </span>
            <h2 className="text-2xl font-extrabold text-foreground">{state.selectedDestination}</h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-bold">
              Crowd: Light (15-35%)
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
              Score: 9.6 / 10
            </span>
          </div>
        </div>
      </div>

      {/* Primary Discovery Placeholder Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {state.recommendedPlaces.map((place) => (
          <div
            key={place.id}
            className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all space-y-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-primary">{place.category}</span>
                <h3 className="text-lg font-extrabold text-foreground">{place.name}</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> {place.location}
                </p>
              </div>
              <span className="text-xs font-extrabold text-amber-400 flex items-center gap-1 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> {place.experienceScore}
              </span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">{place.description}</p>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/20 text-xs font-semibold text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-400" /> Crowd: {place.crowdLevel}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" /> Best: {place.bestVisitTime}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiddenGemsWorkspace;
