export const AuditLogService = {
  async getComplianceLogs() {
    return [
      { id: 'aud-1', action: 'MFA_ENFORCED', target: 'Superadmin Portal', status: 'COMPLIANT', timestamp: new Date().toISOString() },
      { id: 'aud-2', action: 'BACKUP_VERIFIED', target: 'MongoDB Atlas DR Cluster', status: 'VERIFIED', timestamp: new Date().toISOString() },
    ];
  },
};

export default AuditLogService;
