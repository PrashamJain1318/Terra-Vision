import { create } from 'zustand';
import { User } from '@/types/user';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setCredentials: (user: User, token: string) => void;
  clearCredentials: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  setCredentials: (user, token) => set({ user, token, isAuthenticated: true }),
  clearCredentials: () => set({ user: null, token: null, isAuthenticated: false }),
  setLoading: (loading) => set({ isLoading: loading }),
}));

export default useAuthStore;
