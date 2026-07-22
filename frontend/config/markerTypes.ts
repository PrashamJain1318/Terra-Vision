export interface MarkerTypeOption {
  id: string;
  label: string;
  icon: string;
  color: string;
}

export const markerTypesConfig: MarkerTypeOption[] = [
  { id: 'attraction', label: 'Tourist Attraction', icon: 'Compass', color: 'text-primary' },
  { id: 'hotel', label: 'Hotel / Stay', icon: 'Hotel', color: 'text-indigo-400' },
  { id: 'restaurant', label: 'Food & Dining', icon: 'Utensils', color: 'text-amber-400' },
  { id: 'nature', label: 'Viewpoint & Nature', icon: 'Trees', color: 'text-emerald-400' },
];

export default markerTypesConfig;
