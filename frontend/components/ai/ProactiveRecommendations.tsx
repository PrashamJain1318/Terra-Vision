'use client';

import React from 'react';
import { Sparkles, Mountain, Users, CloudRain, Sun } from 'lucide-react';
import AppCard from '@/components/ui/AppCard';
import AppBadge from '@/components/ui/AppBadge';

export const ProactiveRecommendations = () => {
  const suggestions = [
    {
      id: 'rec_1',
      title: 'Because you liked mountain destinations',
      subtitle: 'You may enjoy Coorg, Karnataka',
      desc: '98% Travel DNA match for misty peaks, coffee plantations, and trekking trails.',
      icon: Mountain,
      tag: 'DNA Recommendation',
      tagVariant: 'emerald' as const,
    },
    {
      id: 'rec_2',
      title: "Since you're traveling with family",
      subtitle: 'Here are child-friendly attractions in Goa',
      desc: 'Dolphin safari boat tours, Butterfly Conservatory, and quiet shallow water coves.',
      icon: Users,
      tag: 'Family Smart Pick',
      tagVariant: 'teal' as const,
    },
    {
      id: 'rec_3',
      title: 'Rain expected tomorrow at 3:30 PM',
      subtitle: 'Indoor museum & artisanal cafe plan suggested',
      desc: 'Proactive weather alert: Automatically switched outdoor beach trek to Museum of Christian Art.',
      icon: CloudRain,
      tag: 'Weather Telemetry',
      tagVariant: 'amber' as const,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          <h2 className="text-lg font-black text-white tracking-tight">Proactive AI Recommendations</h2>
        </div>
        <span className="text-xs text-emerald-400 font-extrabold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Gemini Proactive Engine Active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestions.map((item) => {
          const Icon = item.icon;
          return (
            <AppCard key={item.id} hoverEffect className="space-y-3">
              <div className="flex items-center justify-between">
                <AppBadge variant={item.tagVariant} icon={Icon}>
                  {item.tag}
                </AppBadge>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-black text-zinc-400 uppercase tracking-wider block">
                  {item.title}
                </span>
                <h3 className="font-black text-sm text-white">{item.subtitle}</h3>
                <p className="text-xs text-zinc-400 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            </AppCard>
          );
        })}
      </div>
    </div>
  );
};

export default ProactiveRecommendations;
