import providerFactory from '../providers/providerFactory.js';
import RouteHistory from '../models/RouteHistory.js';

export const routingService = {
  generateRoute: async (userId, origin, destination, waypoints = [], travelMode = 'driving', providerType = 'google') => {
    const provider = providerFactory.getProvider(providerType);
    const routeData = await provider.getRoute(origin, destination, travelMode);

    const savedRecord = await RouteHistory.create({
      user: userId,
      origin: typeof origin === 'string' ? { name: origin, lat: 31.1048, lng: 77.1734 } : origin,
      destination: typeof destination === 'string' ? { name: destination, lat: 31.106, lng: 77.175 } : destination,
      waypoints,
      travelMode,
      distance: routeData.distance,
      duration: routeData.duration,
      polyline: routeData.polyline,
    });

    return savedRecord;
  },

  getRouteHistory: async (userId, limit = 10) => {
    return await RouteHistory.find({ user: userId }).sort({ createdAt: -1 }).limit(limit);
  },
};

export default routingService;
