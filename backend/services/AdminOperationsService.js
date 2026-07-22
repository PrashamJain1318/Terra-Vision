export const AdminOperationsService = {
  async getMetrics() {
    return {
      totalUsers: 14850,
      activeUsers: 3420,
      newRegistrationsToday: 184,
      tripsCreated: 8940,
      aiRequestsTotal: 142500,
      voiceAiUsageMs: 8490000,
      visionAiScans: 28400,
      communityPostsTotal: 12400,
      pendingReportsCount: 4,
      serverStatus: 'HEALTHY',
    };
  },
};

export default AdminOperationsService;
