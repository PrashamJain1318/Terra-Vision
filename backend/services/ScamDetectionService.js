import ScamAlert from '../models/ScamAlert.js';

export const ScamDetectionService = {
  getScamAlerts: async (destination = 'Amritsar, Punjab') => {
    let alerts = await ScamAlert.find({ destination });
    if (!alerts.length) {
      alerts = [
        await ScamAlert.create({
          destination,
          scamType: 'scam_taxi',
          title: 'Overcharging Meter Scam',
          description: 'Drivers refusing digital meter rates during late hours.',
          severity: 'high',
          location: 'Amritsar Rail Station',
        }),
      ];
    }
    return alerts;
  },
};

export default ScamDetectionService;
