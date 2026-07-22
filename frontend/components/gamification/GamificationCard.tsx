'use client';

import React from 'react';
import {
  Flame,
  Award,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
  Lock,
  ChevronRight
} from 'lucide-react';

export default function GamificationCard() {
  const badges = [
    { name: 'Hidden Gem Finder', icon: Sparkles, color: 'text-amber-400 border-amber-500/30 bg-amber-500/10', unlocked: true },
    { name: 'Food Connoisseur', icon: Trophy, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10', unlocked: true },
    { name: 'Summit Explorer', icon: Award, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10', unlocked: true },
    { name: 'Photo Master', icon: Target, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10', unlocked: false },
  ];

  const challenges = [
    { title: 'Discover 3 Hidden Gems', progress: '3 / 3', completed: true },
    { title: 'Log 5 Meal Receipts in Expense Tracker', progress: '4 / 5', completed: false },
    { title: 'Generate 1 Family-Friendly Itinerary', progress: '1 / 1', completed: true },
  ];

  return (
    <div className="p-6 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 backdrop-blur-xl shadow-xl space-y-6">
      {/* Header Level & Streak */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 animate-bounce">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase font-mono text-amber-400">
                14-Day Streak
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                Level 7 Explorer
              </span>
            </div>
            <h3 className="text-lg font-black text-white">Travel DNA & Explorer Rewards</h3>
          </div>
        </div>

        <div className="w-full sm:w-56 space-y-1">
          <div className="flex justify-between text-[11px] font-mono text-zinc-400">
            <span>XP Progress</span>
            <span className="text-emerald-400 font-bold">4,850 / 5,000 XP</span>
          </div>
          <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[97%]" />
          </div>
        </div>
      </div>

      {/* Unlocked Badges */}
      <div className="space-y-3">
        <span className="text-xs font-mono font-bold uppercase text-zinc-400 block">
          Badges & Achievements
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`p-3 rounded-2xl border flex items-center gap-2.5 ${
                  b.unlocked ? b.color : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
                }`}
              >
                <div className="p-2 rounded-xl bg-black/40">
                  {b.unlocked ? <Icon className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                </div>
                <div>
                  <span className="text-xs font-bold block truncate">{b.name}</span>
                  <span className="text-[9px] font-mono block opacity-80">
                    {b.unlocked ? 'Unlocked' : 'Locked'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Challenges */}
      <div className="space-y-3 pt-2 border-t border-zinc-800/80">
        <span className="text-xs font-mono font-bold uppercase text-zinc-400 block">
          Weekly Explorer Challenges
        </span>
        <div className="space-y-2">
          {challenges.map((c, i) => (
            <div
              key={i}
              className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2 text-zinc-200 font-medium">
                {c.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <Target className="w-4 h-4 text-amber-400 shrink-0" />
                )}
                <span>{c.title}</span>
              </div>
              <span className="font-mono font-bold text-emerald-400">{c.progress}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
