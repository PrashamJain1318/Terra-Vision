'use client';

import React from 'react';
import AppStatCard from '@/components/ui/AppStatCard';
import AppCard from '@/components/ui/AppCard';
import { Users, Compass, Cpu, DollarSign, Activity, AlertTriangle, TrendingUp, HeartHandshake } from 'lucide-react';

export const AdminOverviewPage = () => {
  return (
    <div className="space-y-6">
      {/* 8 Primary Startup Analytics KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AppStatCard title="Daily Active Users (DAU)" value="14,820" subtitle="+18.4% vs last week" icon={Users} variant="emerald" />
        <AppStatCard title="AI Requests Total" value="184,590" subtitle="Gemini 1.5 & Vision API" icon={Cpu} variant="teal" />
        <AppStatCard title="Monthly Recurring Revenue" value="$42,800" subtitle="Pro Subscriptions & Enterprise" icon={DollarSign} variant="amber" />
        <AppStatCard title="System Error Rate" value="0.04%" subtitle="99.96% Uptime SLA" icon={AlertTriangle} variant="cyan" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AppStatCard title="User Retention (D30)" value="68.2%" subtitle="High organic engagement" icon={TrendingUp} variant="emerald" />
        <AppStatCard title="Avg API Latency" value="142 ms" subtitle="Global CDN edge caching" icon={Activity} variant="teal" />
        <AppStatCard title="Popular Destinations" value="Goa, Tokyo, Munnar" subtitle="Top 3 searched regions" icon={Compass} variant="amber" />
        <AppStatCard title="Feedback CSAT" value="4.9 / 5.0" subtitle="98% Positive Sentiment" icon={HeartHandshake} variant="cyan" />
      </div>

      {/* Analytics Telemetry Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AppCard hoverEffect={false} className="space-y-4">
          <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-400" /> Popular Travel Destinations Ranking
          </h3>
          <div className="space-y-2 text-xs font-mono">
            {[
              { rank: 1, name: 'Goa, India', searches: '42,100', growth: '+34%' },
              { rank: 2, name: 'Tokyo, Japan', searches: '38,500', growth: '+28%' },
              { rank: 3, name: 'Munnar, Kerala', searches: '29,400', growth: '+19%' },
              { rank: 4, name: 'Paris, France', searches: '24,200', growth: '+15%' },
              { rank: 5, name: 'Bali, Indonesia', searches: '21,800', growth: '+22%' },
            ].map((item) => (
              <div key={item.rank} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <span className="font-bold text-white">#{item.rank} {item.name}</span>
                <span className="text-emerald-400">{item.searches} queries ({item.growth})</span>
              </div>
            ))}
          </div>
        </AppCard>

        <AppCard hoverEffect={false} className="space-y-4">
          <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-teal-400" /> Infrastructure & AI API Usage
          </h3>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
              <span className="font-bold text-white">Gemini 1.5 Flash API</span>
              <span className="text-emerald-400">124,500 calls (118 ms avg)</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
              <span className="font-bold text-white">Google Maps Places & Routing</span>
              <span className="text-teal-400">45,800 calls (92 ms avg)</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
              <span className="font-bold text-white">Vision AI Multimodal Inference</span>
              <span className="text-cyan-400">14,290 calls (210 ms avg)</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
              <span className="font-bold text-white">MongoDB Atlas Connection Health</span>
              <span className="text-emerald-400">Optimal • 12ms ping</span>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
