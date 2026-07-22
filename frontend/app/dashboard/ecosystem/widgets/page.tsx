'use client';

import React, { useState } from 'react';
import EcosystemLayout from '@/components/dashboard/ecosystem/EcosystemLayout';
import GlassCard from '@/components/common/GlassCard';
import { LayoutGrid, Calendar, CloudSun, Plane, Building2, MapPin, Mic, CheckCircle2, Sparkles, Plus } from 'lucide-react';

export default function WidgetsPage() {
  const [widgets, setWidgets] = useState([
    { id: 'w1', title: "Today's Itinerary Widget", type: 'Itinerary', enabled: true, icon: Calendar },
    { id: 'w2', title: 'Destination Weather Widget', type: 'Weather', enabled: true, icon: CloudSun },
    { id: 'w3', title: 'Flight & Train Countdown Widget', type: 'Flight', enabled: true, icon: Plane },
    { id: 'w4', title: 'Hotel Booking & Voucher Widget', type: 'Hotel', enabled: true, icon: Building2 },
    { id: 'w5', title: 'Nearby Hidden Gems Widget', type: 'Nearby', enabled: true, icon: MapPin },
    { id: 'w6', title: 'Hands-Free Voice AI Widget', type: 'Voice', enabled: true, icon: Mic },
  ]);

  const toggleWidget = (id: string) => {
    setWidgets(widgets.map((w) => (w.id === id ? { ...w, enabled: !w.enabled } : w)));
  };

  return (
    <EcosystemLayout>
      <div className="space-y-6">
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <LayoutGrid className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Smart Travel Widgets Framework</h3>
              <p className="text-xs text-muted-foreground">
                Customize home-screen travel widgets for iOS, Android, and Web dashboard live glanceable trip updates.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Live Widget Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Widget 1: Today's Itinerary */}
          <GlassCard hoverEffect={true} className="p-5 space-y-3 border-border/40 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Today's Itinerary Widget
              </span>
              <input
                type="checkbox"
                checked={widgets[0].enabled}
                onChange={() => toggleWidget('w1')}
                className="rounded text-primary focus:ring-primary"
              />
            </div>
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 space-y-2 text-xs">
              <h4 className="font-extrabold text-foreground">09:00 AM - Potters Hill Pine Forest</h4>
              <p className="text-muted-foreground text-[11px]">Nature walks & photography along mist trails.</p>
              <span className="text-[10px] font-bold text-emerald-400 block">Open 24 hours</span>
            </div>
          </GlassCard>

          {/* Widget 2: Live Weather */}
          <GlassCard hoverEffect={true} className="p-5 space-y-3 border-border/40 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <CloudSun className="w-3.5 h-3.5" /> Destination Weather
              </span>
              <input
                type="checkbox"
                checked={widgets[1].enabled}
                onChange={() => toggleWidget('w2')}
                className="rounded text-primary focus:ring-primary"
              />
            </div>
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 space-y-1 text-xs">
              <div className="text-2xl font-black text-foreground">19°C Munnar</div>
              <p className="text-muted-foreground text-[11px]">Pleasant hill fog & light breeze.</p>
              <span className="text-[10px] font-bold text-indigo-400 block">Best time for trekking</span>
            </div>
          </GlassCard>

          {/* Widget 3: Flight Countdown */}
          <GlassCard hoverEffect={true} className="p-5 space-y-3 border-border/40 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase text-indigo-400 tracking-wider flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5" /> Flight Countdown
              </span>
              <input
                type="checkbox"
                checked={widgets[2].enabled}
                onChange={() => toggleWidget('w3')}
                className="rounded text-primary focus:ring-primary"
              />
            </div>
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 space-y-1 text-xs">
              <h4 className="font-extrabold text-foreground">Indigo AI-604 to Kochi</h4>
              <div className="text-xl font-black text-indigo-400">In 4 Hours 20 Mins</div>
              <span className="text-[10px] font-bold text-emerald-400 block">Boarding Gate 4B</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </EcosystemLayout>
  );
}
