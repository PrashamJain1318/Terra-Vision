export interface TravelStyleOption {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export const travelStylesConfig: TravelStyleOption[] = [
  { id: 'relaxed', label: 'Relaxed & Slow', description: 'Leisurely pace, scenic cafes, minimal rushing', icon: 'Coffee' },
  { id: 'balanced', label: 'Balanced Explorer', description: 'Mix of iconic landmarks and relaxing downtime', icon: 'Compass' },
  { id: 'packed', label: 'Fast & Action-Packed', description: 'Maximize spots, packed daily itinerary from morning to night', icon: 'Zap' },
  { id: 'adventure', label: 'Offbeat Adventure', description: 'Hiking trails, hidden waterfalls, nature excursions', icon: 'Mountain' },
];

export default travelStylesConfig;
