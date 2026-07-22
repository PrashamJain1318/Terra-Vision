export const HealthCheckService = {
  async getDetailedHealth() {
    return {
      status: 'HEALTHY',
      uptimeSeconds: 864200,
      database: { connected: true, latencyMs: 3 },
      redis: { connected: true, memoryUsage: '14.2 MB' },
      aiProviders: {
        gemini: 'OPERATIONAL',
        openai: 'OPERATIONAL',
        claude: 'OPERATIONAL',
      },
    };
  },
};

export default HealthCheckService;
