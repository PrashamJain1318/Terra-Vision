export const ADMIN_CONFIG = {
  roles: ['superadmin', 'admin', 'moderator', 'support'],
  modules: [
    'overview',
    'users',
    'moderation',
    'destinations',
    'ai_ops',
    'analytics',
    'notifications',
    'subscriptions',
    'security',
  ],
  defaultRole: 'admin',
  refreshIntervalMs: 30000,
};

export default ADMIN_CONFIG;
