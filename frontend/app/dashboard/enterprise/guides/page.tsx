'use client';

import React, { useState } from 'react';
import EnterpriseLayout from '@/components/dashboard/enterprise/EnterpriseLayout';
import GlassCard from '@/components/common/GlassCard';
import { UserCheck, Compass, MapPin, Star, Plus, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function GuidesAgenciesPage() {
  const [tours, setTours] = useState([
    { id: 't1', title: 'Kolukkumalai Sunrise 4x4 Offroad Trek', guide: 'Highland Spice Expeditions', duration: '5 Hours', rating: 4.9, reviews: 340, price: '₹1,500' },
    { id: 't2', title: 'Munnar Hidden Tea Trail Walk & Tasting', guide: 'Local Lens Certified Guide', duration: '3 Hours', rating: 4.8, reviews: 210, price: '₹800' },
  ]);

  return (
    <EnterpriseLayout>
      <div className="space-y-6">
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Local Guide & Travel Agency Portal</h3>
              <p className="text-xs text-muted-foreground">
                Build guided tour packages, offer local experiences, publish itineraries, and manage traveler bookings.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Guided Packages Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-400" /> Active Guided Tours & Packages
          </h3>

          <button
            onClick={() => alert('Build Tour Package modal opened')}
            className="px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-md flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Create Guided Tour
          </button>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tours.map((tour) => (
            <GlassCard key={tour.id} hoverEffect={true} className="p-5 space-y-3 border-border/40 relative">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-foreground">{tour.title}</h4>
                  <span className="text-xs text-muted-foreground font-semibold block pt-0.5">
                    By {tour.guide} • ⏱️ {tour.duration}
                  </span>
                </div>
                <span className="text-sm font-black text-emerald-400">{tour.price}</span>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-border/20">
                <span className="text-amber-400 font-extrabold">★ {tour.rating} ({tour.reviews} reviews)</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase">
                  VERIFIED GUIDE
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </EnterpriseLayout>
  );
}
