import { Coordinates } from './trip';

export interface Activity {
  _id?: string;
  name: string;
  description?: string;
  time?: string;
  location?: {
    name?: string;
    coordinates?: Coordinates;
  };
  cost: number;
}

export interface DayItinerary {
  _id?: string;
  dayNumber: number;
  date?: string;
  activities: Activity[];
}

export interface Planner {
  _id: string;
  trip: string; // Trip reference ID
  user: string; // User reference ID
  itinerary: DayItinerary[];
  totalEstimatedCost: number;
  isDeleted: boolean;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}
