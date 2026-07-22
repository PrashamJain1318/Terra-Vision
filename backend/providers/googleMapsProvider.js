/**
 * Google Maps API Provider Adapter
 */

export const googleMapsProvider = {
  searchPlaces: async (query) => {
    return [
      { id: 'g_1', name: `${query} Landmark`, address: `${query}, Central Square`, lat: 31.1048, lng: 77.1734, rating: 4.8 },
      { id: 'g_2', name: `${query} Heritage Cafe`, address: `${query}, West Ridge`, lat: 31.106, lng: 77.175, rating: 4.5 },
    ];
  },

  getNearby: async (lat, lng, category) => {
    return [
      { id: 'g_near_1', name: `Popular ${category} Spot`, address: 'Ridge Road, Shimla', lat: lat + 0.002, lng: lng + 0.002, category, rating: 4.6 },
    ];
  },

  getRoute: async (origin, destination, mode = 'driving') => {
    return {
      distance: '14.2 km',
      duration: '35 mins',
      travelMode: mode,
      polyline: 'g_encoded_polyline_string_placeholder',
      steps: [
        { instruction: 'Head north on Ridge Road', distance: '2.5 km', duration: '5 mins' },
        { instruction: 'Turn right onto Mall Road Pass', distance: '11.7 km', duration: '30 mins' },
      ],
    };
  },
};

export default googleMapsProvider;
