import Trip from '../models/Trip.js';
import Memory from '../models/Memory.js';
import SavedPlace from '../models/SavedPlace.js';
import AIHistory from '../models/AIHistory.js';
import User from '../models/User.js';

export const getAggregatedStats = async (userId) => {
  // Aggregate trips statistics
  const totalTrips = await Trip.countDocuments({ user: userId });
  const completedTrips = await Trip.countDocuments({ user: userId, status: 'completed' });
  const upcomingTrips = await Trip.countDocuments({ user: userId, status: 'upcoming' });

  // Count unique cities and countries visited
  const trips = await Trip.find({ user: userId });
  const destinations = trips.map(t => t.destination?.name || '');
  
  const uniqueCities = new Set(destinations);
  const uniqueCountries = new Set(destinations.map(d => d.split(',').pop()?.trim()).filter(Boolean));

  const savedCount = await SavedPlace.countDocuments({ user: userId });
  const memoriesCount = await Memory.countDocuments({ user: userId });
  const aiHistoryCount = await AIHistory.countDocuments({ user: userId });

  // Compute travel score (arbitrary calculation for gamification dashboard placeholder)
  const travelScore = (completedTrips * 150) + (memoriesCount * 50) + (savedCount * 10);

  return {
    totalTrips,
    completedTrips,
    upcomingTrips,
    citiesCount: uniqueCities.size,
    countriesCount: uniqueCountries.size,
    savedCount,
    memoriesCount,
    aiHistoryCount,
    travelScore,
  };
};

export const getRecentTrips = async (userId) => {
  return await Trip.find({ user: userId })
    .sort({ startDate: -1 })
    .limit(5);
};

export const getRecentMemories = async (userId) => {
  return await Memory.find({ user: userId })
    .sort({ createdAt: -1 })
    .limit(5);
};

export const getSavedPlaces = async (userId) => {
  return await SavedPlace.find({ user: userId })
    .sort({ createdAt: -1 })
    .limit(5);
};

export const getNotifications = async (userId) => {
  // Mock notification array matching requirements
  return [
    { message: 'Your trip to Shimla starts tomorrow!', type: 'info', priority: 'high', timestamp: new Date(), read: false },
    { message: 'New local guides recommended in your area.', type: 'suggestion', priority: 'medium', timestamp: new Date(), read: true },
  ];
};

export const getActivityTimeline = async (userId) => {
  return [
    { activity: 'Logged in to dashboard', timestamp: new Date(), module: 'auth', status: 'success' },
    { activity: 'Created Himalayan itinerary', timestamp: new Date(Date.now() - 3600000), module: 'planner', status: 'success' },
  ];
};
