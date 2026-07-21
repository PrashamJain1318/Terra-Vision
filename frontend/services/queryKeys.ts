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
};
