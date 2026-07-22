import CommunityReport from '../models/CommunityReport.js';

export const CommunityReportService = {
  createReport: async (destination, title, description, author = 'Anonymous') => {
    return await CommunityReport.create({ destination, title, description, author });
  },

  getReports: async (destination = 'Amritsar, Punjab') => {
    return await CommunityReport.find({ destination }).sort({ createdAt: -1 });
  },
};

export default CommunityReportService;
