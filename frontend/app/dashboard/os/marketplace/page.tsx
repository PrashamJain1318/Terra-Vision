'use client';

import React, { useState, useEffect } from 'react';
import OsLayout from '@/components/dashboard/os/OsLayout';
import GlassCard from '@/components/common/GlassCard';
import platformService, { MarketplaceItem } from '@/services/platformService';
import { ShoppingBag, Star, ShieldCheck, Tag, Plus, CheckCircle2 } from 'lucide-react';

export default function TravelMarketplacePage() {
  const [items, setItems] = useState<MarketplaceItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMarketplace();
  }, []);

  const loadMarketplace = async () => {
    try {
      const data = await platformService.getMarketplace();
      setItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <OsLayout>
      <div className="space-y-6">
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Global Travel Marketplace</h3>
              <p className="text-xs text-muted-foreground">
                Browse verified local experiences, guided tours, digital travel guides, and premium AI trip templates.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <GlassCard key={item.id} hoverEffect={true} className="p-0 overflow-hidden border-border/40 shadow-xl relative">
              <div className="h-44 w-full bg-muted overflow-hidden relative">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-extrabold text-white">
                  {item.badge}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary block">
                  {item.type}
                </span>
                <h4 className="font-extrabold text-sm text-foreground leading-snug">{item.title}</h4>
                <p className="text-xs text-muted-foreground font-semibold">By {item.author}</p>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-border/20">
                  <span className="text-amber-400 font-extrabold">★ {item.rating} ({item.reviewsCount})</span>
                  <span className="text-sm font-black text-emerald-400">
                    {item.priceUSD === 0 ? 'FREE' : `$${item.priceUSD}`}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </OsLayout>
  );
}
