export interface InterestCategory {
  id: string;
  label: string;
  category: string;
  icon: string;
}

export const interestCategoriesConfig: InterestCategory[] = [
  { id: 'foodie', label: 'Local Food & Street Cafes', category: 'gastronomy', icon: 'Utensils' },
  { id: 'culture', label: 'History & Heritage', category: 'culture', icon: 'Landmark' },
  { id: 'nature', label: 'Mountains & Waterfalls', category: 'outdoors', icon: 'Trees' },
  { id: 'nightlife', label: 'Nightlife & Music', category: 'entertainment', icon: 'Music' },
  { id: 'shopping', label: 'Boutiques & Souvenir Bazaars', category: 'shopping', icon: 'ShoppingBag' },
  { id: 'photography', label: 'Instagram Photo Spots', category: 'art', icon: 'Camera' },
];

export default interestCategoriesConfig;
