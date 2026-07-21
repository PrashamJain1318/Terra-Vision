/**
 * Formatting helpers for Dashboard endpoints.
 */

export const formatOverview = (userData, stats, upcomingCount) => {
  return {
    user: {
      name: userData.name,
      email: userData.email,
    },
    travelScore: stats.travelScore,
    countriesVisited: stats.countriesCount,
    citiesVisited: stats.citiesCount,
    tripsPlanned: stats.totalTrips,
    upcomingTrips: upcomingCount,
    completedTrips: stats.completedTrips,
    savedPlacesCount: stats.savedCount,
    memoriesCount: stats.memoriesCount,
    aiSuggestionsCount: stats.aiHistoryCount,
    recentNotificationsCount: 1, // static template
  };
};

export const formatQuickActions = () => {
  return [
    { id: 'plan-trip', label: 'Plan Trip', href: '/dashboard/planner', icon: 'Compass' },
    { id: 'explore-nearby', label: 'Explore Nearby', href: '/dashboard/maps', icon: 'Map' },
    { id: 'scan-landmark', label: 'Scan Landmark', href: '/dashboard/vision', icon: 'Camera' },
    { id: 'view-memories', label: 'View Memories', href: '/dashboard/memories', icon: 'Heart' },
  ];
};

export const formatStatistics = (stats) => {
  return [
    { key: 'trips', value: stats.totalTrips.toString(), label: 'Trips Planned' },
    { key: 'countries', value: stats.countriesCount.toString(), label: 'Countries Visited' },
    { key: 'cities', value: stats.citiesCount.toString(), label: 'Cities Visited' },
    { key: 'score', value: stats.travelScore.toString(), label: 'Travel Score' },
  ];
};
