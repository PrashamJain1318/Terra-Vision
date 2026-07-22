import SafetyAdvisory from '../models/SafetyAdvisory.js';

export const AdvisoryService = {
  getAdvisories: async (destination = 'Amritsar, Punjab') => {
    let advisories = await SafetyAdvisory.find({ destination });
    if (!advisories.length) {
      advisories = [
        await SafetyAdvisory.create({ destination, advisoryText: 'Keep valuables in front pockets in crowded markets.', severity: 'low' }),
      ];
    }
    return advisories;
  },
};

export default AdvisoryService;
