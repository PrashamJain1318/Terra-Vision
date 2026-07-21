import api from '../utils/api';

export const dashboardService = {
  getOverview: async () => {
    const res = await api.get('/v1/dashboard/overview');
    return res.data?.data;
  },
  getQuickActions: async () => {
    const res = await api.get('/v1/dashboard/quick-actions');
    return res.data?.data;
  },
  getStatistics: async () => {
    const res = await api.get('/v1/dashboard/statistics');
    return res.data?.data;
  },
  getRecentTrips: async () => {
    const res = await api.get('/v1/dashboard/recent-trips');
    return res.data?.data;
  },
  getRecentMemories: async () => {
    const res = await api.get('/v1/dashboard/recent-memories');
    return res.data?.data;
  },
  getSavedPlaces: async () => {
    const res = await api.get('/v1/dashboard/saved-places');
    return res.data?.data;
  },
  getNotifications: async () => {
    const res = await api.get('/v1/dashboard/notifications');
    return res.data?.data;
  },
  getActivity: async () => {
    const res = await api.get('/v1/dashboard/activity');
    return res.data?.data;
  },
};

export default dashboardService;
