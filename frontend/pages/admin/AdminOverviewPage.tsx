'use client';

import React from 'react';
import AdminStatCard from '@/components/admin/AdminStatCard';
import { Users, Compass, Cpu, DollarSign, Activity, AlertTriangle, TrendingUp, HeartHandshake } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const AdminOverviewPage = () => {
  return (
    <div className="space-y-6">
      {/* 8 Primary Startup Analytics KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminStatCard title="Daily Active Users (DAU)" value="14,820" subtitle="+18.4% vs last week" icon={Users} color="text-emerald-400" />
        <AdminStatCard title="AI Requests Total" value="184,590" subtitle="Gemini 1.5 & Vision API" icon={Cpu} color="text-indigo-400" />
        <AdminStatCard title="Monthly Recurring Revenue" value="$42,800" subtitle="Pro Subscriptions & Enterprise" icon={DollarSign} color="text-amber-400" />
        <AdminStatCard title="System Error Rate" value="0.04%" subtitle="99.96% Uptime SLA" icon={AlertTriangle} color="text-cyan-400" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminStatCard title="User Retention (D30)" value="68.2%" subtitle="High organic engagement" icon={TrendingUp} color="text-purple-400" />
        <AdminStatCard title="Avg API Latency" value="142 ms" subtitle="Global CDN edge caching" icon={Activity} color="text-blue-400" />
        <AdminStatCard title="Popular Destinations" value="Goa, Tokyo, Munnar" subtitle="Top 3 searched regions" icon={Compass} color="text-pink-400" />
        <AdminStatCard title="Feedback CSAT" value="4.9 / 5.0" subtitle="98% Positive Sentiment" icon={HeartHandshake} color="text-emerald-400" />
      </div>

      {/* Analytics Telemetry Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard hoverEffect={false} className="p-6 space-y-4 border-border/40">
          <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
            <Compass className="w-4 h-4 text-primary" /> Popular Travel Destinations Ranking
          </h3>
          <div className="space-y-2 text-xs font-mono">
            {[
              { rank: 1, name: 'Goa, India', searches: '42,100', growth: '+34%' },
              { rank: 2, name: 'Tokyo, Japan', searches: '38,500', growth: '+28%' },
              { rank: 3, name: 'Munnar, Kerala', searches: '29,400', growth: '+19%' },
              { rank: 4, name: 'Paris, France', searches: '24,200', growth: '+15%' },
              { rank: 5, name: 'Bali, Indonesia', searches: '21,800', growth: '+22%' },
            ].map((item) => (
              <div key={item.rank} className="p-3 rounded-xl bg-muted/20 border border-border/30 flex items-center justify-between">
                <span className="font-bold text-foreground">#{item.rank} {item.name}</span>
                <span className="text-muted-foreground">{item.searches} queries ({item.growth})</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard hoverEffect={false} className="p-6 space-y-4 border-border/40">
          <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" /> Infrastructure & AI API Usage
          </h3>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-3 rounded-xl bg-muted/20 border border-border/30 flex items-center justify-between">
              <span className="font-bold text-foreground">Gemini 1.5 Flash API</span>
              <span className="text-emerald-400">124,500 calls (118 ms avg)</span>
            </div>
            <div className="p-3 rounded-xl bg-muted/20 border border-border/30 flex items-center justify-between">
              <span className="font-bold text-foreground">Google Maps Places & Routing</span>
              <span className="text-indigo-400">45,800 calls (92 ms avg)</span>
            </div>
            <div className="p-3 rounded-xl bg-muted/20 border border-border/30 flex items-center justify-between">
              <span className="font-bold text-foreground">Vision AI Multimodal Inference</span>
              <span className="text-purple-400">14,290 calls (210 ms avg)</span>
            </div>
            <div className="p-3 rounded-xl bg-muted/20 border border-border/30 flex items-center justify-between">
              <span className="font-bold text-foreground">MongoDB Atlas Connection Health</span>
              <span className="text-emerald-400">Optimal • 12ms ping</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
