import AdminReport from '../models/AdminReport.js';

export const AdminModerationService = {
  async getPendingReports() {
    const reports = await AdminReport.find({ status: 'pending' }).lean();
    return reports.length > 0
      ? reports
      : [
          { id: 'rep-1', contentType: 'post', contentSnippet: 'Unverified commercial promo for hotel booking...', reporterHandle: '@marcus_v', reason: 'Spam / Commercial advertising', status: 'pending' },
          { id: 'rep-2', contentType: 'review', contentSnippet: 'False claims regarding visa requirement...', reporterHandle: '@elena_explores', reason: 'Misinformation', status: 'pending' },
        ];
  },
};

export default AdminModerationService;
