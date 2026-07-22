import providerFactory from '../providers/providerFactory.js';

export const mapsService = {
  getCurrentLocation: async (userId) => {
    return {
      lat: 31.1048,
      lng: 77.1734,
      name: 'Shimla, Himachal Pradesh',
      accuracy: 'GPS High Precision',
    };
  },

  searchPlaces: async (query, providerType = 'google') => {
    const provider = providerFactory.getProvider(providerType);
    return await provider.searchPlaces(query);
  },

  getPlaceById: async (placeId) => {
    return {
      id: placeId,
      name: 'Cafe Simla Times',
      address: 'Mall Road, Shimla, HP, India',
      coordinates: { lat: 31.1048, lng: 77.1734 },
      category: 'restaurant',
      rating: 4.6,
      phone: '+91 177 265 8901',
      website: 'https://locallens.ai',
    };
  },
};

export default mapsService;
