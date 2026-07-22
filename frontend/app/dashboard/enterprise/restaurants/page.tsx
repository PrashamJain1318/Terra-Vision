'use client';

import React, { useState, useEffect } from 'react';
import EnterpriseLayout from '@/components/dashboard/enterprise/EnterpriseLayout';
import GlassCard from '@/components/common/GlassCard';
import enterpriseService, { RestaurantListing } from '@/services/enterpriseService';
import { Utensils, Star, Tag, Plus, CheckCircle2, Flame, Heart } from 'lucide-react';

export default function RestaurantPortalPage() {
  const [restaurants, setRestaurants] = useState<RestaurantListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    setLoading(true);
    try {
      const data = await enterpriseService.getRestaurants();
      setRestaurants(data);
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
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Restaurant Partner Portal</h3>
              <p className="text-xs text-muted-foreground">
                Digital menu builder, food photo management, dish promotions, culinary reviews response, and customer insights.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurants.map((rest) => (
            <GlassCard key={rest.id} hoverEffect={true} className="p-0 overflow-hidden border-border/40 shadow-xl">
              <div className="h-44 w-full bg-muted overflow-hidden relative">
                <img src={rest.imageUrl} alt={rest.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-extrabold text-base text-foreground leading-snug">{rest.name}</h4>
                    <span className="text-xs text-muted-foreground font-semibold">{rest.cuisine}</span>
                  </div>

                  <span className="text-xs font-extrabold text-amber-400 flex items-center gap-1">
                    ★ {rest.rating} ({rest.reviewsCount})
                  </span>
                </div>

                {/* Popular Dishes */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground block flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400" /> Signature Dishes & Promoted Menu
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {rest.popularDishes.map((dish, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-card border border-border/40 text-xs font-extrabold text-foreground">
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Promotions */}
                {rest.promotions && rest.promotions.length > 0 && (
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{rest.promotions[0]}</span>
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
