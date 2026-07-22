import googleMapsEngineService from '../services/googleMapsEngineService.js';
import routingService from '../services/routingService.js';
import placesService from '../services/placesService.js';
import mapsFormatter from '../utils/mapsFormatter.js';

export const mapsController = {
  getCurrentLocation: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      return res.status(200).json(mapsFormatter.formatSuccess({
        lat: 10.0889,
        lng: 77.0597,
        name: 'Munnar, Kerala',
        accuracy: 'GPS High Precision',
      }, 'Current location retrieved'));
    } catch (err) {
      next(err);
    }
  },

  search: async (req, res, next) => {
    try {
      const city = req.query.city || req.query.q || 'Munnar';
      const places = await googleMapsEngineService.searchCityPlaces(city);
      return res.status(200).json({
        success: true,
        message: `Google Maps Places retrieved for ${city}`,
        city,
        count: places.length,
        data: places,
      });
    } catch (err) {
      next(err);
    }
  },

  getPlaceById: async (req, res, next) => {
    try {
      const { placeId } = req.params;
      const details = await googleMapsEngineService.getPlaceDetails(placeId);
      return res.status(200).json({
        success: true,
        data: details,
      });
    } catch (err) {
      next(err);
    }
  },

  getPhotosById: async (req, res, next) => {
    try {
      const { id } = req.params;
      return res.status(200).json({
        success: true,
        data: [
          'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
        ],
      });
    } catch (err) {
      next(err);
    }
  },

  getNearby: async (req, res, next) => {
    try {
      const city = req.query.city || 'Munnar';
      const places = await googleMapsEngineService.searchCityPlaces(city);
      return res.status(200).json({
        success: true,
        data: places,
      });
    } catch (err) {
      next(err);
    }
  },

  generateRoute: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { origin, destination, waypoints, travelMode, provider } = req.body;
      const route = await routingService.generateRoute(userId, origin, destination, waypoints, travelMode, provider);
      return res.status(201).json(mapsFormatter.formatSuccess(route, 'Route generated successfully'));
    } catch (err) {
      next(err);
    }
  },

  savePlace: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const saved = await placesService.savePlace(userId, req.body);
      return res.status(201).json(mapsFormatter.formatSuccess(saved, 'Place saved successfully'));
    } catch (err) {
      next(err);
    }
  },

  getSavedPlaces: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const places = await placesService.getSavedPlaces(userId);
      return res.status(200).json(mapsFormatter.formatSuccess(places, 'Saved places retrieved'));
    } catch (err) {
      next(err);
    }
  },

  updateSavedPlace: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { id } = req.params;
      const updated = await placesService.updateSavedPlace(userId, id, req.body);
      return res.status(200).json(mapsFormatter.formatSuccess(updated, 'Saved place updated'));
    } catch (err) {
      next(err);
    }
  },

  deleteSavedPlace: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { id } = req.params;
      await placesService.deleteSavedPlace(userId, id);
      return res.status(200).json(mapsFormatter.formatSuccess(null, 'Saved place deleted'));
    } catch (err) {
      next(err);
    }
  },

  getRouteHistory: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const history = await routingService.getRouteHistory(userId);
      return res.status(200).json(mapsFormatter.formatSuccess(history, 'Route history retrieved'));
    } catch (err) {
      next(err);
    }
  },
};

export default mapsController;
