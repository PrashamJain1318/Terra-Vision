export const RateLimitService = {
  async getRateLimitMetrics() {
    return {
      windowMs: 60000,
      maxAllowedPerMinute: 100,
      totalBlockedToday: 14,
      topBlockedIps: ['45.12.89.12', '185.220.101.4'],
    };
  },
};

export default RateLimitService;
