import mapsService from '../services/mapsService.js';
import routingService from '../services/routingService.js';
import placesService from '../services/placesService.js';
import mapsFormatter from '../utils/mapsFormatter.js';
import googleMapsProvider from '../providers/googleMapsProvider.js';

export const mapsController = {
  getCurrentLocation: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const loc = await mapsService.getCurrentLocation(userId);
      return res.status(200).json(mapsFormatter.formatSuccess(loc, 'Current location retrieved'));
    } catch (err) {
      next(err);
    }
  },

  search: async (req, res, next) => {
    try {
      const query = req.query.city || req.query.q || 'Jawad';
      const results = await googleMapsProvider.searchPlaces(query);
      return res.status(200).json({
        success: true,
        message: `Google Maps Places retrieved for ${query}`,
        data: results,
        city: query,
        count: results.length,
      });
    } catch (err) {
      next(err);
    }
  },

  getPlaceById: async (req, res, next) => {
    try {
      const { placeId } = req.params;
      const place = await googleMapsProvider.getPlaceById(placeId);
      return res.status(200).json({
        success: true,
        data: place,
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
          'https://images.unsplash.com/photo-1588097281266-310cead47879?auto=format&fit=crop&w=800&q=80',
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
      const { lat = '24.601', lng = '74.855', category = 'all' } = req.query;
      const places = await googleMapsProvider.getNearby(lat, lng, category);
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
