/**
 * Mapbox API Provider Adapter
 */

export const mapboxProvider = {
  searchPlaces: async (query) => {
    return [
      { id: 'mb_1', name: `${query} Point`, address: `${query}, North Slope`, lat: 31.1048, lng: 77.1734, rating: 4.7 },
    ];
  },

  getNearby: async (lat, lng, category) => {
    return [
      { id: 'mb_near_1', name: `Mapbox ${category} Venue`, address: 'Valley View, Shimla', lat: lat + 0.001, lng: lng + 0.003, category, rating: 4.5 },
    ];
  },

  getRoute: async (origin, destination, mode = 'driving') => {
    return {
      distance: '13.8 km',
      duration: '32 mins',
      travelMode: mode,
      polyline: 'mb_encoded_polyline_string_placeholder',
      steps: [
        { instruction: 'Depart via Mapbox Dark GL route', distance: '13.8 km', duration: '32 mins' },
      ],
    };
  },
};

export default mapboxProvider;
