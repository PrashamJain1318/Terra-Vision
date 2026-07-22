import SafetyNotification from '../models/SafetyNotification.js';

export const NotificationService = {
  sendNotification: async (userId, message, type = 'scam_alert') => {
    return await SafetyNotification.create({ user: userId, message, type });
  },
};

export default NotificationService;
