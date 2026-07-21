import api from '@/utils/api';
import { ApiResponse } from './apiService';
import { User } from '@/types/user';

export interface AuthResponseData {
  user: User;
  token: string;
}

export const authService = {
  login: async (payload: any): Promise<ApiResponse<AuthResponseData>> => {
    const response = await api.post<ApiResponse<AuthResponseData>>('/v1/auth/login', payload);
    return response.data;
  },

  register: async (payload: any): Promise<ApiResponse<AuthResponseData>> => {
    const response = await api.post<ApiResponse<AuthResponseData>>('/v1/auth/register', payload);
    return response.data;
  },

  refresh: async (): Promise<ApiResponse<AuthResponseData>> => {
    const response = await api.get<ApiResponse<AuthResponseData>>('/v1/auth/refresh');
    return response.data;
  },

  logout: async (): Promise<ApiResponse<null>> => {
    const response = await api.post<ApiResponse<null>>('/v1/auth/logout');
    return response.data;
  },
};

export default authService;
