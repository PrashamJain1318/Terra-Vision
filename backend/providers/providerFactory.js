import googleMapsProvider from './googleMapsProvider.js';
import mapboxProvider from './mapboxProvider.js';
import osmProvider from './osmProvider.js';

export const providerFactory = {
  getProvider: (providerType = 'google') => {
    switch (providerType.toLowerCase()) {
      case 'mapbox':
        return mapboxProvider;
      case 'osm':
      case 'openstreetmap':
        return osmProvider;
      case 'google':
      default:
        return googleMapsProvider;
    }
  },
};

export default providerFactory;
