import AdminOperationsService from '../services/AdminOperationsService.js';
import AdminUserManagementService from '../services/AdminUserManagementService.js';
import AdminModerationService from '../services/AdminModerationService.js';
import AdminAiAnalyticsService from '../services/AdminAiAnalyticsService.js';
import AdminSecurityAuditService from '../services/AdminSecurityAuditService.js';

export const getMetrics = async (req, res, next) => {
  try {
    const metrics = await AdminOperationsService.getMetrics();
    res.status(200).json({ success: true, data: metrics });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await AdminUserManagementService.getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

export const getReports = async (req, res, next) => {
  try {
    const reports = await AdminModerationService.getPendingReports();
    res.status(200).json({ success: true, data: reports });
  } catch (error) {
    next(error);
  }
};

export const getAiOps = async (req, res, next) => {
  try {
    const aiOps = await AdminAiAnalyticsService.getAiAnalytics();
    res.status(200).json({ success: true, data: aiOps });
  } catch (error) {
    next(error);
  }
};

export const getAuditLogs = async (req, res, next) => {
  try {
    const logs = await AdminSecurityAuditService.getAuditLogs();
    res.status(200).json({ success: true, data: logs });
  } catch (error) {
    next(error);
  }
};
