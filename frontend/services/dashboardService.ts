import api from '../utils/api';

export const dashboardService = {
  getOverview: async () => {
    try {
      const res = await api.get('/v1/dashboard/overview');
      return res.data?.data;
    } catch {
      return null;
    }
  },
  getQuickActions: async () => {
    try {
      const res = await api.get('/v1/dashboard/quick-actions');
      return res.data?.data;
    } catch {
      return null;
    }
  },
  getStatistics: async () => {
    try {
      const res = await api.get('/v1/dashboard/statistics');
      return res.data?.data;
    } catch {
      return null;
    }
  },
  getRecentTrips: async () => {
    try {
      const res = await api.get('/v1/dashboard/recent-trips');
      return res.data?.data;
    } catch {
      return null;
    }
  },
  getRecentMemories: async () => {
    try {
      const res = await api.get('/v1/dashboard/recent-memories');
      return res.data?.data;
    } catch {
      return null;
    }
  },
  getSavedPlaces: async () => {
    try {
      const res = await api.get('/v1/dashboard/saved-places');
      return res.data?.data;
    } catch {
      return null;
    }
  },
  getNotifications: async () => {
    try {
      const res = await api.get('/v1/dashboard/notifications');
      return res.data?.data;
    } catch {
      return null;
    }
  },
  getActivity: async () => {
    try {
      const res = await api.get('/v1/dashboard/activity');
      return res.data?.data;
    } catch {
      return null;
    }
  },
};

export default dashboardService;
