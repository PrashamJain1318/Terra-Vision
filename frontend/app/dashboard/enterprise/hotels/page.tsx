'use client';

import React, { useState, useEffect } from 'react';
import EnterpriseLayout from '@/components/dashboard/enterprise/EnterpriseLayout';
import GlassCard from '@/components/common/GlassCard';
import enterpriseService, { HotelListing } from '@/services/enterpriseService';
import { Hotel, Star, BedDouble, MapPin, Tag, Plus, CheckCircle2, ShieldCheck, Camera } from 'lucide-react';

export default function HotelPortalPage() {
  const [hotels, setHotels] = useState<HotelListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    setLoading(true);
    try {
      const data = await enterpriseService.getHotels();
      setHotels(data);
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
              <Hotel className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Hotel Partner Portal</h3>
              <p className="text-xs text-muted-foreground">
                Manage luxury stay listings, room inventory, special packages, photo galleries, and guest review responses.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <GlassCard key={hotel.id} hoverEffect={true} className="p-0 overflow-hidden border-border/40 shadow-xl">
              <div className="h-44 w-full bg-muted overflow-hidden relative">
                <img src={hotel.photos[0]} alt={hotel.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-extrabold text-white">
                  {hotel.availableRooms} Rooms Available
                </span>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-extrabold text-base text-foreground leading-snug">{hotel.name}</h4>
                    <span className="text-xs text-muted-foreground font-semibold">{hotel.category}</span>
                  </div>

                  <span className="text-sm font-black text-emerald-400">{hotel.pricePerNight} <span className="text-[10px] text-muted-foreground font-bold">/ night</span></span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-400">
                  <span>★ {hotel.rating}</span>
                  <span className="text-muted-foreground font-medium">({hotel.reviewsCount} guest reviews)</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {hotel.amenities.map((item, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-muted/40 text-[10px] font-extrabold text-muted-foreground border border-border/30">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Special Offer */}
                {hotel.specialOffer && (
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-extrabold flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{hotel.specialOffer}</span>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </EnterpriseLayout>
  );
}
