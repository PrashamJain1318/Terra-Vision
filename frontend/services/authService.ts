import api from '@/utils/api';
import { ApiResponse } from './apiService';
import { User } from '@/types/user';

export interface AuthResponseData {
  user: User;
  token: string;
}

export const authService = {
  login: async (payload: any): Promise<ApiResponse<AuthResponseData>> => {
    try {
      const response = await api.post<ApiResponse<AuthResponseData>>('/v1/auth/login', payload);
      return response.data;
    } catch (err: any) {
      return {
        success: false,
        message: err.response?.data?.message || err.message || 'Authentication failed',
      } as any;
    }
  },

  register: async (payload: any): Promise<ApiResponse<AuthResponseData>> => {
    try {
      const response = await api.post<ApiResponse<AuthResponseData>>('/v1/auth/register', payload);
      return response.data;
    } catch (err: any) {
      return {
        success: false,
        message: err.response?.data?.message || err.message || 'Registration failed',
      } as any;
    }
  },

  refresh: async (): Promise<ApiResponse<AuthResponseData>> => {
    try {
      const response = await api.get<ApiResponse<AuthResponseData>>('/v1/auth/refresh');
      return response.data;
    } catch (err: any) {
      return { success: false, message: 'Token refresh failed' } as any;
    }
  },

  logout: async (): Promise<ApiResponse<null>> => {
    try {
      const response = await api.post<ApiResponse<null>>('/v1/auth/logout');
      return response.data;
    } catch (err: any) {
      return { success: false, message: 'Logout failed' } as any;
    }
  },
};

export default authService;
