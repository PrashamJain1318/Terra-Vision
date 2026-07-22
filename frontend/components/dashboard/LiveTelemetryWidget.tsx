'use client';

import React, { useState } from 'react';
import {
  CloudSun,
  Users,
  Shield,
  Plane,
  Train,
  Bell,
  Sparkles,
  Zap,
  MapPin,
  Clock
} from 'lucide-react';

export default function LiveTelemetryWidget() {
  const [activeTab, setActiveTab] = useState<'weather' | 'events' | 'crowd' | 'safety'>('weather');

  return (
    <div className="p-4 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 backdrop-blur-xl shadow-xl space-y-3">
      {/* Ticker Header Tabs */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[10px] uppercase font-mono font-extrabold text-emerald-400 flex items-center gap-1 pr-2">
            <Zap className="w-3.5 h-3.5 animate-pulse" /> Live Telemetry
          </span>

          <button
            onClick={() => setActiveTab('weather')}
            className={`px-3 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1 ${
              activeTab === 'weather' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <CloudSun className="w-3 h-3" /> Weather & AQI
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className={`px-3 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1 ${
              activeTab === 'events' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3" /> Local Events
          </button>

          <button
            onClick={() => setActiveTab('crowd')}
            className={`px-3 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1 ${
              activeTab === 'crowd' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Users className="w-3 h-3" /> Crowd Radar
          </button>

          <button
            onClick={() => setActiveTab('safety')}
            className={`px-3 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1 ${
              activeTab === 'safety' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Shield className="w-3 h-3" /> Safety Advisory
          </button>
        </div>

        <span className="text-[10px] font-mono text-zinc-500 shrink-0">Updated 1m ago</span>
      </div>

      {/* Dynamic Content Details */}
      {activeTab === 'weather' && (
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">Goa • 28°C</span>
            <span className="text-emerald-400">AQI 38 (Good)</span>
            <span className="text-zinc-400">UV Index 4</span>
          </div>
          <p className="text-zinc-300">
            ⛈️ <strong>Weather Alert:</strong> Light showers expected at 3:30 PM.
          </p>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-purple-300 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Goa Food & Jazz Fest • Panaji Promenade (7:00 PM)</span>
          </div>
          <span className="text-zinc-400">Entry: Free • Live Performance</span>
        </div>
      )}

      {activeTab === 'crowd' && (
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-amber-300 font-bold">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Crowd Level: Moderate</span>
          </div>
          <span className="text-zinc-300">
            Peak crowds: 4:30 PM – 6:30 PM. Recommended visit: Morning 7:00 AM.
          </span>
        </div>
      )}

      {activeTab === 'safety' && (
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-cyan-300 font-bold">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>Safety Index: 9.8 / 10 (Level 1 Normal)</span>
          </div>
          <span className="text-zinc-400">
            Helplines: Police <strong>112</strong> • Tourist Police <strong>1364</strong> • ER Hospital 1.8km
          </span>
        </div>
      )}
    </div>
  );
}
