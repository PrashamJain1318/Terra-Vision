/**
 * Travel Interest Categories Configuration
 */

export interface TravelCategory {
  id: string;
  name: string;
  iconName: string;
}

export const TRAVEL_CATEGORIES: TravelCategory[] = [
  { id: 'heritage', name: 'Colonial & Cultural Heritage', iconName: 'Landmark' },
  { id: 'nature', name: 'Pine Trails & Valley Views', iconName: 'Trees' },
  { id: 'food', name: 'Local Mountain Delicacies', iconName: 'Utensils' },
  { id: 'viewpoint', name: 'Secret Panoramic Viewpoints', iconName: 'Compass' },
];

export default TRAVEL_CATEGORIES;
