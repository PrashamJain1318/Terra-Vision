export type TripStatus = 'planning' | 'upcoming' | 'active' | 'completed';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Destination {
  name: string;
  coordinates: Coordinates;
}

export interface Trip {
  _id: string;
  user: string; // User reference ID
  title: string;
  destination: Destination;
  startDate: string;
  endDate: string;
  status: TripStatus;
  isDeleted: boolean;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}
