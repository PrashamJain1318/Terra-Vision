import SafetyAnalysisService from '../services/SafetyAnalysisService.js';
import ScamDetectionService from '../services/ScamDetectionService.js';
import SafetyScoreService from '../services/SafetyScoreService.js';
import EmergencyService from '../services/EmergencyService.js';
import CommunityReportService from '../services/CommunityReportService.js';
import AdvisoryService from '../services/AdvisoryService.js';
import NotificationService from '../services/NotificationService.js';
import RiskZoneService from '../services/RiskZoneService.js';
import SOSService from '../services/SOSService.js';
import HistoryService from '../services/HistoryService.js';

export const safetyController = {
  analyzeSafety: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { destination = 'Amritsar, Punjab', provider = 'gemini' } = req.body;
      const result = await SafetyAnalysisService.analyzeDestination(userId, destination, provider);
      return res.status(200).json({ success: true, message: 'Destination safety analysis generated', data: result });
    } catch (err) {
      next(err);
    }
  },

  scamCheck: async (req, res, next) => {
    try {
      const { destination = 'Amritsar, Punjab' } = req.body;
      const alerts = await ScamDetectionService.getScamAlerts(destination);
      return res.status(200).json({ success: true, message: 'Scam check alerts retrieved', data: alerts });
    } catch (err) {
      next(err);
    }
  },

  getScore: async (req, res, next) => {
    try {
      const { destination = 'Amritsar, Punjab' } = req.query;
      const score = SafetyScoreService.calculateScore(destination);
      return res.status(200).json({ success: true, message: 'Safety score calculated', data: score });
    } catch (err) {
      next(err);
    }
  },

  getAdvisories: async (req, res, next) => {
    try {
      const { destination = 'Amritsar, Punjab' } = req.query;
      const advisories = await AdvisoryService.getAdvisories(destination);
      return res.status(200).json({ success: true, message: 'Travel advisories retrieved', data: advisories });
    } catch (err) {
      next(err);
    }
  },

  getEmergency: async (req, res, next) => {
    try {
      const { destination = 'Amritsar, Punjab' } = req.query;
      const contacts = await EmergencyService.getEmergencyContacts(destination);
      return res.status(200).json({ success: true, message: 'Emergency contacts retrieved', data: contacts });
    } catch (err) {
      next(err);
    }
  },

  getRiskZones: async (req, res, next) => {
    try {
      const { destination = 'Amritsar, Punjab' } = req.query;
      const zones = await RiskZoneService.getRiskZones(destination);
      return res.status(200).json({ success: true, message: 'Risk zones retrieved', data: zones });
    } catch (err) {
      next(err);
    }
  },

  createCommunityReport: async (req, res, next) => {
    try {
      const { destination, title, description, author } = req.body;
      const report = await CommunityReportService.createReport(destination, title, description, author);
      return res.status(201).json({ success: true, message: 'Community safety report published', data: report });
    } catch (err) {
      next(err);
    }
  },

  getCommunityReports: async (req, res, next) => {
    try {
      const { destination = 'Amritsar, Punjab' } = req.query;
      const reports = await CommunityReportService.getReports(destination);
      return res.status(200).json({ success: true, message: 'Community safety reports retrieved', data: reports });
    } catch (err) {
      next(err);
    }
  },

  triggerSOS: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { destination, latitude, longitude } = req.body;
      const sos = await SOSService.triggerSOS(userId, destination, latitude, longitude);
      return res.status(200).json({ success: true, message: 'Emergency SOS request dispatched', data: sos });
    } catch (err) {
      next(err);
    }
  },

  getHistory: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const history = await HistoryService.getHistory(userId);
      return res.status(200).json({ success: true, message: 'Safety history retrieved', data: history });
    } catch (err) {
      next(err);
    }
  },

  sendNotification: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { message, type } = req.body;
      const notif = await NotificationService.sendNotification(userId, message, type);
      return res.status(200).json({ success: true, message: 'Safety notification created', data: notif });
    } catch (err) {
      next(err);
    }
  },
};

export default safetyController;
