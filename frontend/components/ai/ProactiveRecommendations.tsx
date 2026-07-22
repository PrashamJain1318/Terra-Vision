'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  CloudRain,
  Users,
  Compass,
  Camera,
  ArrowRight,
  X,
  CheckCircle2
} from 'lucide-react';

interface Recommendation {
  id: string;
  type: 'behavioral' | 'family' | 'weather' | 'photography';
  title: string;
  recommendation: string;
  reason: string;
  badge: string;
  destination: string;
  actionLabel: string;
}

export default function ProactiveRecommendations() {
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [appliedMsg, setAppliedMsg] = useState('');

  const recommendations: Recommendation[] = [
    {
      id: 'rec_1',
      type: 'behavioral',
      title: 'Because you liked mountain destinations...',
      recommendation: 'You may enjoy Coorg & Chikmagalur',
      reason: '95% Travel DNA match based on your recent Munnar & Himachal searches.',
      badge: '98% DNA Match',
      destination: 'Coorg',
      actionLabel: 'Explore Coorg →'
    },
    {
      id: 'rec_2',
      type: 'family',
      title: 'Traveling with Family',
      recommendation: 'Top Child-Friendly & Accessible Attractions in Goa',
      reason: 'Includes quiet beach coves, spice garden walks, and high safety scores.',
      badge: 'Family Approved',
      destination: 'Goa',
      actionLabel: 'View Family Spots →'
    },
    {
      id: 'rec_3',
      type: 'weather',
      title: 'Rain expected tomorrow in Goa (85% chance)',
      recommendation: 'Curated Indoor Museum & Art Gallery Itinerary',
      reason: 'Swap open beach shacks for Houses of Goa Museum, artisan pottery, and cozy bistros.',
      badge: 'Weather Adapted',
      destination: 'Goa',
      actionLabel: 'Switch to Indoor Plan →'
    },
    {
      id: 'rec_4',
      type: 'photography',
      title: 'Golden Hour Photography Opportunity',
      recommendation: 'Secret Cliffside Sunset Vantage Point',
      reason: 'Optimal lighting window today between 6:05 PM – 6:45 PM.',
      badge: '9.8 Photo Score',
      destination: 'Aguada Headland',
      actionLabel: 'View Photo Spot →'
    }
  ];

  const activeRecs = recommendations.filter((r) => !dismissed.includes(r.id));

  if (activeRecs.length === 0) return null;

  const typeIcons = {
    behavioral: Compass,
    family: Users,
    weather: CloudRain,
    photography: Camera,
  };

  const typeStyles = {
    behavioral: 'from-emerald-950/60 to-zinc-950 border-emerald-500/30 text-emerald-400',
    family: 'from-purple-950/60 to-zinc-950 border-purple-500/30 text-purple-400',
    weather: 'from-cyan-950/60 to-zinc-950 border-cyan-500/30 text-cyan-400',
    photography: 'from-amber-950/60 to-zinc-950 border-amber-500/30 text-amber-400',
  };

  const handleAction = (rec: Recommendation) => {
    setAppliedMsg(`Applied AI recommendation: "${rec.recommendation}"`);
    setTimeout(() => setAppliedMsg(''), 4000);
  };

  return (
    <div className="space-y-3">
      {appliedMsg && (
        <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {appliedMsg}
        </div>
      )}

      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" /> Proactive AI Recommendations
        </span>
        <span className="text-zinc-500">{activeRecs.length} live suggestions</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeRecs.map((rec) => {
          const Icon = typeIcons[rec.type];
          const style = typeStyles[rec.type];

          return (
            <div
              key={rec.id}
              className={`p-5 rounded-3xl bg-gradient-to-r ${style} border shadow-xl backdrop-blur-xl relative flex flex-col justify-between gap-3 group hover:scale-[1.01] transition duration-300`}
            >
              <button
                onClick={() => setDismissed((prev) => [...prev, rec.id])}
                className="absolute top-3.5 right-3.5 p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="space-y-1.5 pr-6">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-black/40 border border-current font-mono font-bold">
                    {rec.badge}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium flex items-center gap-1">
                    <Icon className="w-3.5 h-3.5" /> {rec.title}
                  </span>
                </div>

                <h3 className="font-extrabold text-sm text-white group-hover:text-emerald-300 transition">
                  {rec.recommendation}
                </h3>
                <p className="text-xs text-zinc-300/90 leading-relaxed">{rec.reason}</p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">{rec.destination}</span>
                <button
                  onClick={() => handleAction(rec)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition"
                >
                  <span>{rec.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
