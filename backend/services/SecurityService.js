export const SecurityService = {
  async getStatus() {
    return {
      mfaActive: true,
      tlsVersion: 'TLS 1.3',
      hstsEnabled: true,
      rateLimitMax: 100,
      activeSessions: 3420,
      blockedIpsCount: 12,
    };
  },
};

export default SecurityService;
