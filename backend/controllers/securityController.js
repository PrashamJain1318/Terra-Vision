import SecurityService from '../services/SecurityService.js';
import HealthCheckService from '../services/HealthCheckService.js';
import BackupService from '../services/BackupService.js';
import RateLimitService from '../services/RateLimitService.js';
import AuditLogService from '../services/AuditLogService.js';

export const getSecurityStatus = async (req, res, next) => {
  try {
    const status = await SecurityService.getStatus();
    res.status(200).json({ success: true, data: status });
  } catch (error) {
    next(error);
  }
};

export const getHealthDetails = async (req, res, next) => {
  try {
    const health = await HealthCheckService.getDetailedHealth();
    res.status(200).json({ success: true, data: health });
  } catch (error) {
    next(error);
  }
};

export const getBackupHistory = async (req, res, next) => {
  try {
    const backups = await BackupService.getBackupHistory();
    res.status(200).json({ success: true, data: backups });
  } catch (error) {
    next(error);
  }
};

export const getRateLimits = async (req, res, next) => {
  try {
    const limits = await RateLimitService.getRateLimitMetrics();
    res.status(200).json({ success: true, data: limits });
  } catch (error) {
    next(error);
  }
};

export const getComplianceLogs = async (req, res, next) => {
  try {
    const logs = await AuditLogService.getComplianceLogs();
    res.status(200).json({ success: true, data: logs });
  } catch (error) {
    next(error);
  }
};
