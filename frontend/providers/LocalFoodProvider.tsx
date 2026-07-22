'use client';

import React, { useState, ReactNode } from 'react';
import LocalFoodContext, { LocalFoodState, FoodItem } from '@/context/LocalFoodContext';

const defaultState: LocalFoodState = {
  selectedDestination: 'Amritsar, Punjab',
  selectedCuisine: 'street_food',
  selectedDiet: 'vegetarian',
  budget: 'Under ₹300',
  foodPreferences: ['street_food', 'heritage'],
  recommendedFoods: [
    {
      id: 'food-1',
      name: 'Amritsari Kulcha & Chole',
      cuisine: 'Punjabi Heritage Food',
      restaurantName: 'Bhai Kulwant Singh Kulchian Wale',
      location: 'Near Golden Temple, Amritsar',
      description: 'Crispy tandoori stuffed bread cooked in clay oven served with spicy chickpeas.',
      priceEstimate: '₹120',
      rating: 4.9,
      dietaryTags: ['Vegetarian', 'Jain Option'],
      nutritionInfo: { calories: '420 kcal', protein: '14g', carbs: '58g' },
      foodStory: 'Baked in 100-year-old clay tandoors using traditional brass ghee pour techniques.',
      saved: false,
    },
  ],
  selectedRestaurant: null,
  selectedDish: null,
  nutritionInfo: { calories: '420 kcal', protein: '14g', carbs: '58g' },
  foodStory: 'Amritsari Kulchas have defined the culinary heritage of Punjab for over a century.',
  savedFoods: [],
  searchHistory: ['Amritsar', 'Chandigarh'],
  filters: { priceMax: 500, onlyVegetarian: true },
  provider: 'gemini',
  offlineMode: false,
  loadingState: false,
  errorState: null,
};

export const LocalFoodProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<LocalFoodState>(defaultState);

  const setDestination = (dest: string) => {
    setState((prev) => ({ ...prev, selectedDestination: dest }));
  };

  const setProvider = (provider: string) => {
    setState((prev) => ({ ...prev, provider }));
  };

  const togglePreference = (prefId: string) => {
    setState((prev) => {
      const foodPreferences = prev.foodPreferences.includes(prefId)
        ? prev.foodPreferences.filter((p) => p !== prefId)
        : [...prev.foodPreferences, prefId];
      return { ...prev, foodPreferences };
    });
  };

  const startDiscovery = () => {
    setState((prev) => ({ ...prev, loadingState: true }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, loadingState: false }));
    }, 800);
  };

  const saveFood = (food: FoodItem) => {
    setState((prev) => {
      const exists = prev.savedFoods.some((f) => f.id === food.id);
      const savedFoods = exists ? prev.savedFoods.filter((f) => f.id !== food.id) : [...prev.savedFoods, food];
      return { ...prev, savedFoods };
    });
  };

  const resetDiscovery = () => {
    setState(defaultState);
  };

  return (
    <LocalFoodContext.Provider
      value={{
        state,
        setDestination,
        setProvider,
        togglePreference,
        startDiscovery,
        saveFood,
        resetDiscovery,
      }}
    >
      {children}
    </LocalFoodContext.Provider>
  );
};

export default LocalFoodProvider;
