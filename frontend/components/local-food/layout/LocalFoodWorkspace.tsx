'use client';

import React from 'react';
import { useLocalFood } from '@/hooks/useLocalFood';
import { Sparkles, MapPin, Star, Flame, Utensils } from 'lucide-react';

export const LocalFoodWorkspace = () => {
  const { state } = useLocalFood();

  return (
    <div className="space-y-6">
      {/* Culinary Search Header Banner */}
      <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-orange-400" /> AI Local Food Intelligence
            </span>
            <h2 className="text-2xl font-extrabold text-foreground">{state.selectedDestination}</h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
              Diet: {state.selectedDiet}
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold">
              Budget: {state.budget}
            </span>
          </div>
        </div>

        {/* Phase 3 Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none border-t border-border/30">
          {[
            { label: 'All Experiences', icon: Utensils },
            { label: 'Street Food Guide 🍢', icon: Flame },
            { label: 'Vegetarian Guide 🥦', icon: Sparkles },
            { label: '100% Vegan 🌱', icon: Sparkles },
            { label: 'Nightlife & Bars 🍹', icon: Flame },
            { label: 'Shopping Bazaars 🛍️', icon: MapPin },
            { label: 'Festivals & Events 🛕', icon: Star },
            { label: 'Museums & Culture 🏛️', icon: MapPin },
            { label: 'Adventure & Trails 🥾', icon: Flame },
          ].map((cat, idx) => (
            <button
              key={idx}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-muted/30 hover:bg-orange-500/20 hover:text-orange-400 border border-border/30 whitespace-nowrap transition"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Primary Culinary Discovery Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {state.recommendedFoods.map((food) => (
          <div
            key={food.id}
            className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 hover:border-orange-500/40 transition-all space-y-4 shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-orange-400">{food.cuisine}</span>
                <h3 className="text-lg font-extrabold text-foreground">{food.name}</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Utensils className="w-3.5 h-3.5 text-orange-400" /> {food.restaurantName}
                </p>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> {food.location}
                </p>
              </div>
              <span className="text-xs font-extrabold text-amber-400 flex items-center gap-1 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> {food.rating}
              </span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">{food.description}</p>

            <div className="p-3 rounded-2xl bg-muted/20 border border-border/20 text-xs text-muted-foreground italic">
              "{food.foodStory}"
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/20 text-xs font-semibold text-muted-foreground text-center">
              <div>
                <span className="text-[10px] uppercase text-muted-foreground block">Calories</span>
                <span className="text-foreground font-bold">{food.nutritionInfo.calories}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-muted-foreground block">Protein</span>
                <span className="text-emerald-400 font-bold">{food.nutritionInfo.protein}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-muted-foreground block">Price</span>
                <span className="text-amber-400 font-bold">{food.priceEstimate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalFoodWorkspace;
