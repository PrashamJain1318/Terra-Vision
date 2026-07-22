/**
 * Dietary Categories Specification
 */

export interface DietCategory {
  id: string;
  label: string;
  badgeColor: string;
}

export const DIET_CATEGORIES: DietCategory[] = [
  { id: 'vegetarian', label: '100% Pure Vegetarian', badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
  { id: 'vegan', label: 'Plant-Based Vegan', badgeColor: 'text-green-400 bg-green-500/10 border-green-500/30' },
  { id: 'gluten_free', label: 'Gluten Free', badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
  { id: 'halal', label: 'Halal Certified', badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
  { id: 'jain', label: 'Jain Friendly (No Root Veg)', badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30' },
];

export default DIET_CATEGORIES;
