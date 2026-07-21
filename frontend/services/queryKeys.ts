export const QUERY_KEYS = {
  USER: ['user'] as const,
  PLANNER: ['planner'] as const,
  SETTINGS: ['settings'] as const,
  SYSTEM_HEALTH: ['system', 'health'] as const,
  LANDING: {
    HERO: ['landing', 'hero'] as const,
    FEATURES: ['landing', 'features'] as const,
    STATISTICS: ['landing', 'statistics'] as const,
    TESTIMONIALS: ['landing', 'testimonials'] as const,
    FOOTER: ['landing', 'footer'] as const,
  } as const,
  DASHBOARD: {
    OVERVIEW: ['dashboard', 'overview'] as const,
    QUICK_ACTIONS: ['dashboard', 'quick-actions'] as const,
    STATISTICS: ['dashboard', 'statistics'] as const,
    RECENT_TRIPS: ['dashboard', 'recent-trips'] as const,
    RECENT_MEMORIES: ['dashboard', 'recent-memories'] as const,
    SAVED_PLACES: ['dashboard', 'saved-places'] as const,
    NOTIFICATIONS: ['dashboard', 'notifications'] as const,
    ACTIVITY: ['dashboard', 'activity'] as const,
  } as const,
};
