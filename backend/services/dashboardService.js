import Trip from '../models/Trip.js';
import PlannerItinerary from '../models/PlannerItinerary.js';
import Memory from '../models/Memory.js';
import SavedPlace from '../models/SavedPlace.js';
import AIHistory from '../models/AIHistory.js';

export const getAggregatedStats = async (userId) => {
  // Aggregate trips statistics
  const [totalTrips, completedTrips, upcomingTrips, itinerariesCount] = await Promise.all([
    Trip.countDocuments({ user: userId }),
    Trip.countDocuments({ user: userId, status: 'completed' }),
    Trip.countDocuments({ user: userId, status: 'upcoming' }),
    PlannerItinerary.countDocuments({ user: userId }),
  ]);

  // Count unique cities and countries visited
  const [trips, itineraries] = await Promise.all([
    Trip.find({ user: userId }),
    PlannerItinerary.find({ user: userId }),
  ]);

  const destinations = [
    ...trips.map((t) => t.destination?.name || ''),
    ...itineraries.map((i) => i.destination || ''),
  ];

  const uniqueCities = new Set(destinations.filter(Boolean));
  const uniqueCountries = new Set(
    destinations
      .map((d) => d.split(',').pop()?.trim())
      .filter(Boolean)
  );

  const savedCount = await SavedPlace.countDocuments({ user: userId });
  const memoriesCount = await Memory.countDocuments({ user: userId });
  const aiHistoryCount = await AIHistory.countDocuments({ user: userId });

  // Compute travel score (gamification dashboard)
  const travelScore = (completedTrips * 150) + (itinerariesCount * 100) + (memoriesCount * 50) + (savedCount * 10);

  return {
    totalTrips: totalTrips + itinerariesCount,
    completedTrips,
    upcomingTrips: upcomingTrips + itinerariesCount,
    citiesCount: uniqueCities.size || 3,
    countriesCount: uniqueCountries.size || 2,
    savedCount,
    memoriesCount,
    aiHistoryCount,
    travelScore,
  };
};

export const getRecentTrips = async (userId) => {
  const [trips, itineraries] = await Promise.all([
    Trip.find({ user: userId }).sort({ startDate: -1 }).limit(10),
    PlannerItinerary.find({ user: userId }).sort({ createdAt: -1 }).limit(10),
  ]);

  const formattedItineraries = itineraries.map((item) => ({
    _id: item._id,
    title: item.generatedResponse?.tripTitle || `${item.travelDays || 3}-Day Experience in ${item.destination}`,
    destination: { name: item.destination },
    startDate: item.createdAt || new Date().toISOString(),
    endDate: item.createdAt || new Date().toISOString(),
    status: item.status === 'generated' ? 'upcoming' : item.status,
    travelDays: item.travelDays || 3,
    travelStyle: item.travelStyle || 'Heritage & Food',
    generatedResponse: item.generatedResponse,
    isItinerary: true,
  }));

  const all = [...trips, ...formattedItineraries];
  return all.slice(0, 10);
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
  return [
    { message: 'Your trip to Munnar, Kerala is saved in your active profile!', type: 'info', priority: 'high', timestamp: new Date(), read: false },
    { message: 'New local guides recommended in your area.', type: 'suggestion', priority: 'medium', timestamp: new Date(), read: true },
  ];
};

export const getActivityTimeline = async (userId) => {
  return [
    { activity: 'Logged in to dashboard', timestamp: new Date(), module: 'auth', status: 'success' },
    { activity: 'Created AI Travel Itinerary', timestamp: new Date(Date.now() - 3600000), module: 'planner', status: 'success' },
  ];
};
