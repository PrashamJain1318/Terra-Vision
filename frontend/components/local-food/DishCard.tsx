'use client';

import React, { useState } from 'react';
import { Star, MapPin, Bookmark, Share2, Utensils } from 'lucide-react';
import { useLocalFood } from '@/hooks/useLocalFood';
import SaveFoodDialog from './SaveFoodDialog';

interface DishCardProps {
  id?: string;
  name?: string;
  cuisine?: string;
  restaurantName?: string;
  location?: string;
  description?: string;
  priceEstimate?: string;
  rating?: number;
  dietaryTags?: string[];
  nutritionInfo?: { calories: string; protein: string; carbs: string };
  foodStory?: string;
}

export const DishCard = ({
  id = 'food-1',
  name = 'Amritsari Kulcha & Chole',
  cuisine = 'Punjabi Heritage Food',
  restaurantName = 'Bhai Kulwant Singh Kulchian Wale',
  location = 'Near Golden Temple, Amritsar',
  description = 'Crispy tandoori stuffed bread cooked in clay oven served with spicy chickpeas.',
  priceEstimate = '₹120',
  rating = 4.9,
  dietaryTags = ['Vegetarian', 'Jain Option'],
  nutritionInfo = { calories: '420 kcal', protein: '14g', carbs: '58g' },
  foodStory = 'Baked in 100-year-old clay tandoors using traditional brass ghee pour techniques.',
}: DishCardProps) => {
  const { saveFood } = useLocalFood();
  const [showSave, setShowSave] = useState(false);

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 hover:border-orange-500/40 transition-all space-y-4 shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-400">{cuisine}</span>
          <h3 className="text-xl font-extrabold text-foreground">{name}</h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Utensils className="w-3.5 h-3.5 text-orange-400" /> {restaurantName}
          </p>
          <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-primary" /> {location}
          </p>
        </div>

        <span className="text-xs font-extrabold text-amber-400 flex items-center gap-1 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
          <Star className="w-3.5 h-3.5 fill-amber-400" /> {rating}
        </span>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>

      <div className="p-3.5 rounded-2xl bg-muted/20 border border-border/20 text-xs text-muted-foreground italic">
        "{foodStory}"
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/20 text-xs font-semibold text-center">
        <div>
          <span className="text-[10px] text-muted-foreground uppercase block">Calories</span>
          <span className="text-foreground font-bold">{nutritionInfo.calories}</span>
        </div>
        <div>
          <span className="text-[10px] text-muted-foreground uppercase block">Protein</span>
          <span className="text-emerald-400 font-bold">{nutritionInfo.protein}</span>
        </div>
        <div>
          <span className="text-[10px] text-muted-foreground uppercase block">Price</span>
          <span className="text-amber-400 font-bold">{priceEstimate}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2">
        <button
          onClick={() => setShowSave(true)}
          className="flex-1 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-md shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
        >
          <Bookmark className="w-3.5 h-3.5" /> Save Food
        </button>
        <button className="p-2.5 rounded-2xl bg-muted/30 border border-border/40 text-foreground hover:bg-muted/50 transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {showSave && (
        <SaveFoodDialog
          dishName={name}
          onClose={() => setShowSave(false)}
          onSave={(title, notes) => saveFood({ id, name, cuisine, restaurantName, location, description, priceEstimate, rating, dietaryTags, nutritionInfo, foodStory, saved: true })}
        />
      )}
    </div>
  );
};

export default DishCard;
