'use client';

import React, { useState } from 'react';
import EnterpriseLayout from '@/components/dashboard/enterprise/EnterpriseLayout';
import GlassCard from '@/components/common/GlassCard';
import { Landmark, Calendar, ShieldCheck, MapPin, Eye, Users, Award, CheckCircle2, Plus } from 'lucide-react';

export default function TourismBoardPage() {
  const [events, setEvents] = useState([
    { id: 'ev1', title: 'Grand Kerala Monsoon Cultural Carnival 2026', location: 'Munnar & Kochi', date: 'Aug 15 - Aug 25', status: 'Published', views: '28.4K' },
    { id: 'ev2', title: 'Highland Tea Harvest Festival', location: 'Munnar Hills', date: 'Sep 10 - Sep 14', status: 'Published', views: '19.2K' },
  ]);

  return (
    <EnterpriseLayout>
      <div className="space-y-6">
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Tourism Board & Government Portal</h3>
              <p className="text-xs text-muted-foreground">
                Publish regional events, manage attraction verification badges, monitor regional visitor footfall, and launch state campaigns.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Tourism Events Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-400" /> Published Tourism Events & Festivals
          </h3>

          <button
            onClick={() => alert('Publish Event modal opened')}
            className="px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-md flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Publish Official Event
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((ev) => (
            <GlassCard key={ev.id} hoverEffect={true} className="p-5 space-y-3 border-border/40 relative">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-foreground">{ev.title}</h4>
                  <span className="text-xs text-muted-foreground font-semibold block pt-0.5">
                    📍 {ev.location} • 🗓️ {ev.date}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/20">
                  {ev.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-border/20 text-muted-foreground">
                <span className="flex items-center gap-1 font-bold text-foreground">
                  <Eye className="w-3.5 h-3.5 text-indigo-400" /> {ev.views} Views
                </span>
                <span className="text-purple-400 font-extrabold">Official Tourism Stamp</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </EnterpriseLayout>
  );
}
