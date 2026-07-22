export const SECURITY_CONFIG = {
  mfaEnabled: true,
  mfaMethods: ['totp', 'email'],
  sessionTimeoutMinutes: 30,
  refreshTokenRotation: true,
  rateLimitMaxRequests: 100,
  rateLimitWindowMs: 60000,
  securityHeaders: {
    contentSecurityPolicy: "default-src 'self'",
    strictTransportSecurity: 'max-age=31536000; includeSubDomains',
    xFrameOptions: 'DENY',
    xContentTypeOptions: 'nosniff',
    referrerPolicy: 'strict-origin-when-cross-origin',
  },
};

export default SECURITY_CONFIG;
