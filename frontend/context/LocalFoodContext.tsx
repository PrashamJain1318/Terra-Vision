'use client';

import { createContext } from 'react';

export interface FoodItem {
  id: string;
  name: string;
  cuisine: string;
  restaurantName: string;
  location: string;
  description: string;
  priceEstimate: string;
  rating: number;
  dietaryTags: string[];
  nutritionInfo: { calories: string; protein: string; carbs: string };
  foodStory: string;
  saved: boolean;
}

export interface LocalFoodState {
  selectedDestination: string;
  selectedCuisine: string;
  selectedDiet: string;
  budget: string;
  foodPreferences: string[];
  recommendedFoods: FoodItem[];
  selectedRestaurant: string | null;
  selectedDish: FoodItem | null;
  nutritionInfo: { calories: string; protein: string; carbs: string } | null;
  foodStory: string;
  savedFoods: FoodItem[];
  searchHistory: string[];
  filters: { priceMax: number; onlyVegetarian: boolean };
  provider: string;
  offlineMode: boolean;
  loadingState: boolean;
  errorState: string | null;
}

export interface LocalFoodContextType {
  state: LocalFoodState;
  setDestination: (dest: string) => void;
  setProvider: (provider: string) => void;
  togglePreference: (prefId: string) => void;
  startDiscovery: () => void;
  saveFood: (food: FoodItem) => void;
  resetDiscovery: () => void;
}

export const LocalFoodContext = createContext<LocalFoodContextType | undefined>(undefined);

export default LocalFoodContext;
