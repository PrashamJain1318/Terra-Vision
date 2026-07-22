/**
 * Culinary Cuisine Types Configuration
 */

export interface CuisineType {
  id: string;
  name: string;
  iconName: string;
}

export const CUISINE_TYPES: CuisineType[] = [
  { id: 'street_food', name: 'Authentic Street Food', iconName: 'Utensils' },
  { id: 'heritage', name: 'Royal & Heritage Dishes', iconName: 'Crown' },
  { id: 'cafes', name: 'Hidden Cafes & Brews', iconName: 'Coffee' },
  { id: 'sweets', name: 'Traditional Desserts & Mithai', iconName: 'Cookie' },
];

export default CUISINE_TYPES;
