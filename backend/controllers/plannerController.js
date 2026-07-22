import plannerService from '../services/plannerService.js';
import plannerFormatter from '../utils/plannerFormatter.js';

export const plannerController = {
  generate: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const record = await plannerService.generateAndSaveItinerary(userId, req.body);
      return res.status(201).json(plannerFormatter.formatSuccess(record, 'AI Itinerary generated successfully'));
    } catch (err) {
      next(err);
    }
  },

  getHistory: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const page = parseInt(req.query.page || '1', 10);
      const limit = parseInt(req.query.limit || '10', 10);
      const history = await plannerService.getUserHistory(userId, limit, page);
      return res.status(200).json(plannerFormatter.formatSuccess(history, 'Planner history fetched successfully'));
    } catch (err) {
      next(err);
    }
  },

  getById: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { tripId } = req.params;
      const itinerary = await plannerService.getItineraryById(userId, tripId);
      if (!itinerary) {
        return res.status(404).json(plannerFormatter.formatError('Itinerary not found', 404));
      }
      return res.status(200).json(plannerFormatter.formatSuccess(itinerary, 'Itinerary fetched successfully'));
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { tripId } = req.params;
      const updated = await plannerService.updateItinerary(userId, tripId, req.body);
      if (!updated) {
        return res.status(404).json(plannerFormatter.formatError('Itinerary not found', 404));
      }
      return res.status(200).json(plannerFormatter.formatSuccess(updated, 'Itinerary updated successfully'));
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { tripId } = req.params;
      await plannerService.deleteItinerary(userId, tripId);
      return res.status(200).json(plannerFormatter.formatSuccess(null, 'Itinerary deleted successfully'));
    } catch (err) {
      next(err);
    }
  },

  save: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { tripId } = req.body;
      const saved = await plannerService.saveItinerary(userId, tripId);
      return res.status(200).json(plannerFormatter.formatSuccess(saved, 'Itinerary saved successfully'));
    } catch (err) {
      next(err);
    }
  },

  regenerate: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { tripId } = req.body;
      const regenerated = await plannerService.regenerateItinerary(userId, tripId);
      return res.status(200).json(plannerFormatter.formatSuccess(regenerated, 'Itinerary regenerated successfully'));
    } catch (err) {
      next(err);
    }
  },
};

export default plannerController;
