import api from '@/utils/api';

// Enforce standard backend response formats
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

export interface HealthData {
  status: string;
  timestamp: string;
  uptime: number;
}

export const apiService = {
  getSystemHealth: async (): Promise<ApiResponse<HealthData>> => {
    const response = await api.get<ApiResponse<HealthData>>('/v1/health');
    return response.data;
  },
};
export default apiService;
