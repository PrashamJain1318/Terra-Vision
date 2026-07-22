export const RELIABILITY_CONFIG = {
  healthCheckIntervalMs: 15000,
  autoBackupIntervalHours: 24,
  maxRetryAttempts: 3,
  retryDelayMs: 1000,
  circuitBreakerThreshold: 5,
};

export default RELIABILITY_CONFIG;
