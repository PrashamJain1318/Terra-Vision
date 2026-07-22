import api from '@/utils/api';

export interface PlaceItem {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  badge?: 'HIDDEN GEM' | 'MUST VISIT' | 'TOP RATED' | 'POPULAR';
  isHiddenGem?: boolean;
  isMustVisit?: boolean;
  address: string;
  city: string;
  lat: number;
  lng: number;
  rating: number;
  reviewsCount: number;
  priceLevel: string;
  openNow: boolean;
  openingHours?: string;
  distance: string;
  description: string;
  notes?: string;
  imageUrl: string;
  photos?: string[];
  googleMapsUrl: string;
  phone?: string;
  website?: string;
  bestTimeToVisit?: string;
  popularFor?: string;
  aiScore?: number;
  aiInsights?: {
    summary: string;
    bestTimeToVisit?: string;
    crowdLevel: string;
    photographyScore: string;
    familyFriendly: string;
    adventureScore: string;
    nightlifeScore?: string;
    safetyScore?: string;
    budgetScore?: string;
    suggestedDuration?: string;
    budgetTips?: string;
    safetyTips?: string;
  };
}

export interface CityWeather {
  cityName: string;
  temp: string;
  condition: string;
  aqi: number;
  aqiLabel: string;
  sunrise: string;
  sunset: string;
  uvIndex: string;
  localTime: string;
  currency: string;
  emergency: {
    police: string;
    ambulance: string;
    touristHelpline: string;
  };
}

export interface RouteInfo {
  origin: string;
  destination: string;
  mode: string;
  distance: string;
  duration: string;
  fuelEstimate?: string;
  routeSteps: string[];
}

export interface TelemetryStats {
  temp: string;
  nearbyPlacesCount: number;
  savedPlacesCount: number;
  travelScore: number;
  aiStatus: string;
  apiStatus: string;
}

export const mapsService = {
  searchPlaces: async (city: string, category: string = 'All'): Promise<PlaceItem[]> => {
    const res = await api.get(`/v1/maps/search?city=${encodeURIComponent(city)}&category=${encodeURIComponent(category)}`);
    return res.data?.data || [];
  },

  getPlaceDetails: async (placeId: string): Promise<PlaceItem> => {
    const res = await api.get(`/v1/maps/place/${placeId}`);
    return res.data?.data;
  },

  getHiddenGems: async (city: string): Promise<PlaceItem[]> => {
    const res = await api.get(`/v1/maps/hidden-gems?city=${encodeURIComponent(city)}`);
    return res.data?.data || [];
  },

  getRestaurants: async (city: string): Promise<PlaceItem[]> => {
    const res = await api.get(`/v1/maps/restaurants?city=${encodeURIComponent(city)}`);
    return res.data?.data || [];
  },

  getWeather: async (city: string): Promise<CityWeather> => {
    const res = await api.get(`/v1/maps/weather?city=${encodeURIComponent(city)}`);
    return res.data?.data;
  },

  getRoute: async (origin: string, destination: string, mode: string = 'driving'): Promise<RouteInfo> => {
    const res = await api.get(
      `/v1/maps/route?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&mode=${encodeURIComponent(mode)}`
    );
    return res.data?.data;
  },

  saveBookmark: async (place: Partial<PlaceItem>) => {
    const res = await api.post('/v1/maps/bookmark', place);
    return res.data;
  },

  deleteBookmark: async (id: string) => {
    const res = await api.delete(`/v1/maps/bookmark/${id}`);
    return res.data;
  },
};

export default mapsService;
