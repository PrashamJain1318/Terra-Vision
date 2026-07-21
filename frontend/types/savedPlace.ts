import { Coordinates } from './trip';

export type PlaceCategory = 'restaurant' | 'attraction' | 'hotel' | 'transit' | 'shopping' | 'other';

export interface SavedPlace {
  _id: string;
  user: string; // User reference ID
  placeId: string;
  name: string;
  address?: string;
  coordinates: Coordinates;
  category: PlaceCategory;
  rating?: number;
  isDeleted: boolean;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}
