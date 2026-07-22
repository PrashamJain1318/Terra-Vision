import RiskZone from '../models/RiskZone.js';

export const RiskZoneService = {
  getRiskZones: async (destination = 'Amritsar, Punjab') => {
    let zones = await RiskZone.find({ destination });
    if (!zones.length) {
      zones = [
        await RiskZone.create({ destination, zoneName: 'Heritage Walk Precinct', riskLevel: 'low', isSafeZone: true }),
        await RiskZone.create({ destination, zoneName: 'Unlit South Alleys', riskLevel: 'high', isSafeZone: false }),
      ];
    }
    return zones;
  },
};

export default RiskZoneService;
