'use client';

import React from 'react';
import { Compass, Utensils, Trees, Crown, Zap, BookOpen } from 'lucide-react';
import { TravelDnaScores } from '@/context/PersonalizationContext';

export const TravelDnaCard = ({ dna }: { dna: TravelDnaScores }) => {
  const dimensions = [
    { label: 'Explorer', score: dna.explorer, icon: Compass, color: 'bg-blue-500' },
    { label: 'Foodie', score: dna.foodie, icon: Utensils, color: 'bg-amber-500' },
    { label: 'Nature Lover', score: dna.nature, icon: Trees, color: 'bg-emerald-500' },
    { label: 'Luxury', score: dna.luxury, icon: Crown, color: 'bg-purple-500' },
    { label: 'Adventure', score: dna.adventure, icon: Zap, color: 'bg-pink-500' },
    { label: 'History Buff', score: dna.history, icon: BookOpen, color: 'bg-indigo-500' },
  ];

  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <h3 className="font-extrabold text-base text-foreground font-sans">Travel DNA Profile Matrix</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dimensions.map((dim) => {
          const Icon = dim.icon;
          return (
            <div key={dim.label} className="p-4 rounded-2xl bg-muted/20 border border-border/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span className="font-extrabold text-foreground">{dim.label}</span>
                </div>
                <span className="font-extrabold text-indigo-400">{dim.score}%</span>
              </div>

              <div className="w-full h-2 rounded-full bg-muted/40 overflow-hidden">
                <div className={`h-full ${dim.color} rounded-full`} style={{ width: `${dim.score}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TravelDnaCard;
