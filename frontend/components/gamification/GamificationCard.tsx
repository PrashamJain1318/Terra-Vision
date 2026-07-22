'use client';

import React from 'react';
import { Award, Flame, Trophy, CheckCircle2, Zap } from 'lucide-react';
import AppCard from '@/components/ui/AppCard';
import AppBadge from '@/components/ui/AppBadge';

export const GamificationCard = () => {
  return (
    <AppCard hoverEffect className="space-y-4 border-emerald-500/20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-black text-lg text-white">Level 7 Explorer</h3>
              <AppBadge variant="emerald" icon={Zap}>
                PRO EXPLORER
              </AppBadge>
            </div>
            <p className="text-xs text-zinc-400 font-semibold">2,850 / 3,000 XP (150 XP to Level 8 Master Explorer)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
            <span>14-Day Travel Streak!</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-[11px] font-black text-zinc-400">
          <span>XP Progress</span>
          <span className="text-emerald-400 font-bold">95% Complete</span>
        </div>
        <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500" style={{ width: '95%' }} />
        </div>
      </div>

      {/* Badges and Weekly Challenge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="space-y-2">
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider block">Unlocked Badges (3)</span>
          <div className="flex items-center gap-2">
            <AppBadge variant="emerald" icon={Award}>
              Hidden Gem Finder
            </AppBadge>
            <AppBadge variant="teal" icon={Award}>
              Food Connoisseur
            </AppBadge>
            <AppBadge variant="amber" icon={Award}>
              Summit Explorer
            </AppBadge>
          </div>
        </div>

        <div className="space-y-1.5 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800">
          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider block flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Weekly Challenge Active
          </span>
          <p className="text-xs font-bold text-white">Visit 3 local food street stalls in Goa (+200 XP reward)</p>
        </div>
      </div>
    </AppCard>
  );
};

export default GamificationCard;
