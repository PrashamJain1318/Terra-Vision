export type TravelStyle = 'adventure' | 'leisure' | 'cultural' | 'luxury' | 'budget' | 'backpacker';

export interface UserPreferences {
  travelStyle: TravelStyle;
  interests: string[];
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  profileImage: string;
  preferences: UserPreferences;
  isDeleted: boolean;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}
