export const AdminAiAnalyticsService = {
  async getAiAnalytics() {
    return {
      totalTokensUsed: 18450000,
      estimatedMonthlyCostUsd: 142.5,
      providerDistribution: {
        gemini: '65%',
        openai: '25%',
        claude: '10%',
      },
      averageLatencyMs: 320,
      errorRate: '0.02%',
    };
  },
};

export default AdminAiAnalyticsService;
