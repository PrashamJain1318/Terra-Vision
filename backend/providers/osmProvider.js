/**
 * OpenStreetMap API Provider Adapter
 */

export const osmProvider = {
  searchPlaces: async (query) => {
    return [
      { id: 'osm_1', name: `${query} Open Place`, address: `${query}, Carto District`, lat: 31.1048, lng: 77.1734, rating: 4.4 },
    ];
  },

  getNearby: async (lat, lng, category) => {
    return [
      { id: 'osm_near_1', name: `OSM ${category} Landmark`, address: 'Public Square', lat: lat + 0.003, lng: lng + 0.001, category, rating: 4.3 },
    ];
  },

  getRoute: async (origin, destination, mode = 'driving') => {
    return {
      distance: '15.0 km',
      duration: '40 mins',
      travelMode: mode,
      polyline: 'osm_polyline_placeholder',
      steps: [
        { instruction: 'Follow OpenStreetMap open trail', distance: '15.0 km', duration: '40 mins' },
      ],
    };
  },
};

export default osmProvider;
