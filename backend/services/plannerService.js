import PlannerItinerary from '../models/PlannerItinerary.js';
import aiPlannerService from './aiPlannerService.js';

export const plannerService = {
  generateAndSaveItinerary: async (userId, params) => {
    const aiResponse = await aiPlannerService.generateItinerary(params);

    const itineraryRecord = await PlannerItinerary.create({
      user: userId,
      destination: params.destination || 'Shimla',
      dates: params.dates || { start: '', end: '' },
      travelDays: params.travelDays || 3,
      travelers: params.travelers || 1,
      travelStyle: params.travelStyle || 'balanced',
      budget: params.budget || 'balanced',
      interests: params.interests || [],
      accommodationPreference: params.accommodationPreference || 'comfort',
      transportPreference: params.transportPreference || 'mixed',
      language: params.language || 'english',
      generatedResponse: aiResponse,
      status: 'generated',
    });

    return itineraryRecord;
  },

  getUserHistory: async (userId, limit = 10, page = 1) => {
    const skip = (page - 1) * limit;
    const items = await PlannerItinerary.find({ user: userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    const total = await PlannerItinerary.countDocuments({ user: userId });

    return { items, total, page, totalPages: Math.ceil(total / limit) };
  },

  getItineraryById: async (userId, tripId) => {
    const item = await PlannerItinerary.findOne({ _id: tripId, user: userId });
    return item;
  },

  updateItinerary: async (userId, tripId, updateData) => {
    const updated = await PlannerItinerary.findOneAndUpdate(
      { _id: tripId, user: userId },
      { $set: updateData },
      { new: true }
    );
    return updated;
  },

  deleteItinerary: async (userId, tripId) => {
    const result = await PlannerItinerary.deleteOne({ _id: tripId, user: userId });
    return result;
  },

  saveItinerary: async (userId, tripId) => {
    const updated = await PlannerItinerary.findOneAndUpdate(
      { _id: tripId, user: userId },
      { $set: { status: 'saved' } },
      { new: true }
    );
    return updated;
  },

  regenerateItinerary: async (userId, tripId) => {
    const existing = await PlannerItinerary.findOne({ _id: tripId, user: userId });
    if (!existing) return null;

    const newAiResponse = await aiPlannerService.generateItinerary({
      destination: existing.destination,
      travelDays: existing.travelDays,
      travelers: existing.travelers,
      travelStyle: existing.travelStyle,
      budget: existing.budget,
      interests: existing.interests,
    });

    existing.generatedResponse = newAiResponse;
    existing.status = 'generated';
    await existing.save();

    return existing;
  },
};

export default plannerService;
