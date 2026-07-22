'use client';

import React, { useState, useEffect } from 'react';
import OsLayout from '@/components/dashboard/os/OsLayout';
import GlassCard from '@/components/common/GlassCard';
import platformService, { GlobalAnalytics } from '@/services/platformService';
import { BarChart3, Globe, Zap, Cpu, Activity, TrendingUp } from 'lucide-react';

export default function GlobalAnalyticsPage() {
  const [analytics, setAnalytics] = useState<GlobalAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    setLoading(true);
    try {
      const data = await platformService.getGlobalAnalytics();
      setAnalytics(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OsLayout>
      <div className="space-y-6">
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Global Platform Telemetry & Analytics</h3>
              <p className="text-xs text-muted-foreground">
                Platform-level analytics: active worldwide travelers, multi-agent AI query load, global search popularity, and system health.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Global Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Active Global Travelers</span>
            <div className="text-2xl font-black text-foreground">
              {analytics?.activeUsersWorldwide.toLocaleString() || '482,900'}
            </div>
            <span className="text-[10px] text-emerald-400 font-bold block">+34% vs Last Month</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">AI Queries Processed</span>
            <div className="text-2xl font-black text-indigo-400">
              {analytics?.totalQueriesProcessed.toLocaleString() || '3,840,000'}
            </div>
            <span className="text-[10px] text-indigo-400 font-bold block">100% Multi-Agent Mesh</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Global System Uptime</span>
            <div className="text-2xl font-black text-emerald-400">{analytics?.systemUptime || '99.99%'}</div>
            <span className="text-[10px] text-emerald-400 font-bold block">SLA Guaranteed</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Average Response Time</span>
            <div className="text-2xl font-black text-purple-400">{analytics?.avgResponseTimeMs || 380} ms</div>
            <span className="text-[10px] text-purple-400 font-bold block">Zero Latency Grounding</span>
          </GlassCard>
        </div>

        {/* Global Destination Popularity & Agent Utilization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard hoverEffect={false} className="p-5 space-y-3 border-border/40">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-primary" /> Fastest Growing Travel Destinations
            </h4>
            <div className="space-y-2 text-xs">
              {analytics?.globalDestinationPopularity.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-border/20 pb-2">
                  <span className="font-extrabold text-foreground">{item.city}</span>
                  <span className="text-emerald-400 font-black">{item.growth} Growth</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-5 space-y-3 border-border/40">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-400" /> Multi-Agent Workload Utilization
            </h4>
            <div className="space-y-2 text-xs">
              {analytics?.agentUtilizationShare.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-border/20 pb-2">
                  <span className="font-bold text-muted-foreground">{item.name}</span>
                  <span className="text-indigo-400 font-black">{item.share}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </OsLayout>
  );
}
