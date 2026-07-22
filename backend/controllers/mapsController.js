import mapsService from '../services/mapsService.js';
import routingService from '../services/routingService.js';
import placesService from '../services/placesService.js';
import mapsFormatter from '../utils/mapsFormatter.js';

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
      const { q, provider } = req.query;
      const results = await mapsService.searchPlaces(q || 'Shimla', provider);
      return res.status(200).json(mapsFormatter.formatSuccess(results, 'Search results retrieved'));
    } catch (err) {
      next(err);
    }
  },

  getPlaceById: async (req, res, next) => {
    try {
      const { placeId } = req.params;
      const place = await mapsService.getPlaceById(placeId);
      return res.status(200).json(mapsFormatter.formatSuccess(place, 'Place details retrieved'));
    } catch (err) {
      next(err);
    }
  },

  getNearby: async (req, res, next) => {
    try {
      const { lat = '31.1048', lng = '77.1734', category = 'attraction', provider } = req.query;
      const places = await placesService.getNearbyPlaces(lat, lng, category, provider);
      return res.status(200).json(mapsFormatter.formatSuccess(places, 'Nearby places retrieved'));
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
