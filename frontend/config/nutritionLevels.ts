/**
 * Nutrition Classification Levels
 */

export interface NutritionLevel {
  id: string;
  name: string;
  calorieRange: string;
}

export const NUTRITION_LEVELS: NutritionLevel[] = [
  { id: 'light', name: 'Light & Healthy Snacks', calorieRange: '150 - 300 kcal' },
  { id: 'balanced', name: 'Balanced Meal', calorieRange: '350 - 650 kcal' },
  { id: 'hearty', name: 'Rich & Authentic Feast', calorieRange: '700 - 1200 kcal' },
];

export default NUTRITION_LEVELS;
