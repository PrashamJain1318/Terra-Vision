export interface CommunityBadge {
  id: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
}

export const COMMUNITY_BADGES: CommunityBadge[] = [
  { id: 'b1', name: 'Explorer', description: 'Visited 10+ distinct countries', iconName: 'Compass', color: 'text-emerald-400' },
  { id: 'b2', name: 'Foodie', description: 'Published 25+ authentic dish reviews', iconName: 'Utensils', color: 'text-amber-400' },
  { id: 'b3', name: 'Photographer', description: 'Shared 50+ landmark photo dispatches', iconName: 'Camera', color: 'text-indigo-400' },
  { id: 'b4', name: 'Local Guide', description: 'Authored 5+ verified hidden gem guides', iconName: 'MapPin', color: 'text-cyan-400' },
  { id: 'b5', name: 'Top Reviewer', description: 'Received 100+ community helpful votes', iconName: 'Star', color: 'text-yellow-400' },
  { id: 'b6', name: 'Safety Champion', description: 'Reported 10+ verified travel scam alerts', iconName: 'Shield', color: 'text-red-400' },
  { id: 'b7', name: 'Community Leader', description: 'Founded an active travel group with 50+ members', iconName: 'Award', color: 'text-purple-400' },
];

export default COMMUNITY_BADGES;
