import { create } from 'zustand';

interface SettingsState {
  notificationsEnabled: boolean;
  language: string;
  currency: string;
  setNotificationsEnabled: (enabled: boolean) => void;
  setLanguage: (lang: string) => void;
  setCurrency: (currency: string) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  notificationsEnabled: true,
  language: 'en',
  currency: 'USD',
  setNotificationsEnabled: (enabled) => set({ notificationsEnabled: enabled }),
  setLanguage: (lang) => set({ language: lang }),
  setCurrency: (currency) => set({ currency }),
}));
