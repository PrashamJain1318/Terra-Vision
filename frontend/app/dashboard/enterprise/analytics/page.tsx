'use client';

import React, { useState, useEffect } from 'react';
import EnterpriseLayout from '@/components/dashboard/enterprise/EnterpriseLayout';
import GlassCard from '@/components/common/GlassCard';
import enterpriseService, { AnalyticsData } from '@/services/enterpriseService';
import { BarChart3, TrendingUp, Search, Eye, MousePointerClick, Bookmark, Sparkles, Award } from 'lucide-react';

export default function BusinessAnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    setLoading(true);
    try {
      const data = await enterpriseService.getAnalytics();
      setAnalytics(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EnterpriseLayout>
      <div className="space-y-6">
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Enterprise Business Analytics</h3>
              <p className="text-xs text-muted-foreground">
                Deep traveler engagement analytics: impression trends, click-through rates, AI recommendation shares, and search keyword popularity.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Analytics Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Monthly Impressions</span>
            <div className="text-2xl font-black text-foreground">
              {analytics?.monthlyImpressions.toLocaleString() || '248,900'}
            </div>
            <span className="text-[10px] text-emerald-400 font-bold block">+18.5% Growth</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Click-Through Rate (CTR)</span>
            <div className="text-2xl font-black text-indigo-400">{analytics?.clickThroughRate || '7.8%'}</div>
            <span className="text-[10px] text-emerald-400 font-bold block">Top 5% Benchmark</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Total Partner Bookings</span>
            <div className="text-2xl font-black text-purple-400">
              {analytics?.totalBookings.toLocaleString() || '1,420'}
            </div>
            <span className="text-[10px] text-purple-400 font-bold block">Verified Conversions</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Search Popularity Rank</span>
            <div className="text-2xl font-black text-emerald-400">{analytics?.searchPopularityRank || '#1 in Kerala'}</div>
            <span className="text-[10px] text-emerald-400 font-bold block">High Demand</span>
          </GlassCard>
        </div>

        {/* Top Search Keywords */}
        <GlassCard hoverEffect={false} className="p-5 space-y-3 border-border/40">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-primary" /> Top Traveler Search Keywords
          </h4>
          <div className="flex flex-wrap gap-2">
            {analytics?.topSearchKeywords.map((word, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-card border border-border/40 text-xs font-extrabold text-foreground shadow-sm">
                #{word}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </EnterpriseLayout>
  );
}
