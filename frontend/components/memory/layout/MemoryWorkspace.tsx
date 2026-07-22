'use client';

import React from 'react';
import { useMemory } from '@/hooks/useMemory';
import { Sparkles, MapPin, Camera, Utensils, Compass, Download, Play, BookOpen } from 'lucide-react';
import STORY_TEMPLATES from '@/config/storyTemplates';

export const MemoryWorkspace = () => {
  const { state, generateTravelStory, toggleMapReplay } = useMemory();

  return (
    <div className="space-y-8">
      {/* Trip Overview Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-pink-900/30 via-purple-900/20 to-slate-900/40 border border-pink-500/30 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-400">Selected Travel Capsule</span>
            <h2 className="text-2xl font-extrabold text-foreground">{state.selectedTrip}</h2>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 text-pink-400" /> Amritsar, Punjab • 3 Days Journey
            </p>
          </div>

          <button
            onClick={toggleMapReplay}
            className={`px-4 py-2 rounded-2xl text-xs font-extrabold border transition-all flex items-center gap-1.5 ${
              state.mapReplayActive
                ? 'bg-pink-600 text-white border-pink-500 shadow-lg'
                : 'bg-card/45 text-pink-400 border-pink-500/30 hover:bg-pink-500/10'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            {state.mapReplayActive ? 'Stop Route Replay' : 'Replay Interactive Journey'}
          </button>
        </div>

        {/* Travel Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-3 border-t border-pink-500/20 text-center">
          <div className="p-3 rounded-2xl bg-card/45 border border-border/30">
            <span className="text-[10px] text-muted-foreground uppercase font-bold block">Photos</span>
            <span className="text-sm font-extrabold text-foreground">{state.statistics.photosImported}</span>
          </div>
          <div className="p-3 rounded-2xl bg-card/45 border border-border/30">
            <span className="text-[10px] text-muted-foreground uppercase font-bold block">Vision Scans</span>
            <span className="text-sm font-extrabold text-pink-400">{state.statistics.landmarksScanned}</span>
          </div>
          <div className="p-3 rounded-2xl bg-card/45 border border-border/30">
            <span className="text-[10px] text-muted-foreground uppercase font-bold block">Foods Tried</span>
            <span className="text-sm font-extrabold text-amber-400">{state.statistics.foodsTried}</span>
          </div>
          <div className="p-3 rounded-2xl bg-card/45 border border-border/30">
            <span className="text-[10px] text-muted-foreground uppercase font-bold block">Hidden Gems</span>
            <span className="text-sm font-extrabold text-emerald-400">{state.statistics.hiddenGemsVisited}</span>
          </div>
          <div className="p-3 rounded-2xl bg-card/45 border border-border/30">
            <span className="text-[10px] text-muted-foreground uppercase font-bold block">Distance</span>
            <span className="text-sm font-extrabold text-indigo-400">{state.statistics.distanceTraveledKm} km</span>
          </div>
        </div>
      </div>

      {/* AI Story & Timeline Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Story Generator Card */}
        <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-400" /> AI Travel Journal & Story
            </h3>
            <span className="text-[10px] text-muted-foreground font-bold">{state.selectedProvider.toUpperCase()} AI</span>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground">Select Story Template Tone</label>
            <div className="flex flex-wrap gap-2">
              {STORY_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => generateTravelStory(tmpl.id)}
                  className="px-3 py-1.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/30 text-xs font-extrabold hover:bg-pink-500/20 transition-all"
                >
                  {tmpl.name}
                </button>
              ))}
            </div>
          </div>

          {state.travelStory ? (
            <div className="p-4 rounded-2xl bg-muted/20 border border-border/20 text-xs text-muted-foreground leading-relaxed italic">
              "{state.travelStory}"
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-muted/20 border border-border/20 text-center text-xs text-muted-foreground">
              Click a story template above to generate a personalized AI travel narrative combining photos, landmarks, and culinary discoveries.
            </div>
          )}
        </div>

        {/* Timeline Event Feed */}
        <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
          <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-pink-400" /> Chronological Memory Timeline
          </h3>

          <div className="space-y-3">
            {state.timelineEvents.map((evt) => (
              <div key={evt.id} className="p-4 rounded-2xl bg-muted/20 border border-border/20 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-foreground">{evt.title}</span>
                  <span className="text-[10px] text-pink-400 font-bold">{evt.timestamp}</span>
                </div>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-pink-400" /> {evt.location}
                </p>
                <p className="text-xs text-muted-foreground pt-1">{evt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryWorkspace;
