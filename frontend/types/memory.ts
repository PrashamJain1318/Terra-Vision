import { Coordinates } from './trip';

export interface MediaAsset {
  _id?: string;
  url: string;
  publicId: string;
  type: 'image' | 'video';
}

export interface Memory {
  _id: string;
  user: string; // User reference ID
  trip: string; // Trip reference ID
  title: string;
  description?: string;
  media: MediaAsset[];
  location?: {
    name?: string;
    coordinates?: Coordinates;
  };
  isDeleted: boolean;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}
