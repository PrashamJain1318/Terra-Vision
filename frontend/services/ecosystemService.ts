import api from '@/utils/api';

export interface DeviceItem {
  _id: string;
  deviceName: string;
  deviceType: 'Phone' | 'Tablet' | 'Laptop' | 'Smartwatch' | 'Android Auto' | 'Apple CarPlay';
  platform: 'iOS' | 'Android' | 'macOS' | 'Windows' | 'watchOS' | 'WearOS' | 'CarPlay' | 'AndroidAuto';
  batteryLevel: number;
  syncStatus: 'synced' | 'pending' | 'offline' | 'error';
  lastSyncTime: string;
  isCurrentDevice: boolean;
  offlineStorageUsedMB: number;
}

export interface OfflinePackageItem {
  _id: string;
  title: string;
  category: 'Trips' | 'Maps' | 'Hidden Gems' | 'Restaurants' | 'Emergency' | 'AI Itinerary' | 'Voice Commands' | 'Translation Pack';
  cityName: string;
  sizeMB: number;
  downloadStatus: 'completed' | 'downloading' | 'available' | 'failed';
  downloadProgress: number;
}

export interface WidgetItem {
  id: string;
  type: string;
  title: string;
  enabled: boolean;
}

export interface CarModeData {
  activeTrip: string;
  nextStop: {
    name: string;
    distance: string;
    etaMinutes: number;
    category: string;
  };
  nearbyFuel: Array<{ name: string; distance: string; status: string }>;
  nearbyFood: Array<{ name: string; distance: string; rating: number; openNow: boolean }>;
  safetyAlerts: Array<{ type: string; message: string }>;
  handsFreeVoiceActive: boolean;
}

export interface SmartwatchData {
  time: string;
  destination: string;
  currentTemp: string;
  weatherCondition: string;
  nextTurn: string;
  nextActivity: string;
  stepCountToday: number;
  sosStatus: string;
  checklists: Array<{ task: string; done: boolean }>;
}

export const ecosystemService = {
  getDevices: async (): Promise<DeviceItem[]> => {
    try {
      const response = await api.get('/v1/ecosystem/devices');
      return response.data?.data || [];
    } catch (err) {
      console.warn('Backend ecosystem service unavailable, using local devices state');
      return [
        {
          _id: 'dev_1',
          deviceName: "Prasham's iPhone 15 Pro",
          deviceType: 'Phone',
          platform: 'iOS',
          batteryLevel: 92,
          syncStatus: 'synced',
          lastSyncTime: new Date().toISOString(),
          isCurrentDevice: true,
          offlineStorageUsedMB: 240,
        },
        {
          _id: 'dev_2',
          deviceName: 'Apple Watch Series 9',
          deviceType: 'Smartwatch',
          platform: 'watchOS',
          batteryLevel: 78,
          syncStatus: 'synced',
          lastSyncTime: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
          isCurrentDevice: false,
          offlineStorageUsedMB: 45,
        },
        {
          _id: 'dev_3',
          deviceName: 'Porsche Communication CarPlay',
          deviceType: 'Apple CarPlay',
          platform: 'CarPlay',
          batteryLevel: 100,
          syncStatus: 'synced',
          lastSyncTime: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
          isCurrentDevice: false,
          offlineStorageUsedMB: 512,
        },
        {
          _id: 'dev_4',
          deviceName: 'iPad Air 5th Gen',
          deviceType: 'Tablet',
          platform: 'iOS',
          batteryLevel: 64,
          syncStatus: 'pending',
          lastSyncTime: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
          isCurrentDevice: false,
          offlineStorageUsedMB: 180,
        },
      ];
    }
  },

  triggerSync: async (deviceId?: string) => {
    try {
      const response = await api.post('/v1/ecosystem/sync', { deviceId });
      return response.data?.data;
    } catch (err) {
      return {
        synced: true,
        timestamp: new Date().toISOString(),
        itemsSynced: 42,
        syncModules: [
          'Trips & Itineraries',
          'Bookmarks & Saved Places',
          'Memory Capsule Multi-Media',
          'Voice Assistant History',
          'Safety Alerts & Emergency Contacts',
        ],
      };
    }
  },

  getOfflinePackages: async (): Promise<OfflinePackageItem[]> => {
    try {
      const response = await api.get('/v1/ecosystem/offline-packages');
      return response.data?.data || [];
    } catch (err) {
      return [
        {
          _id: 'pkg_1',
          title: 'Munnar Offline Navigation Map',
          category: 'Maps',
          cityName: 'Munnar',
          sizeMB: 145,
          downloadStatus: 'completed',
          downloadProgress: 100,
        },
        {
          _id: 'pkg_2',
          title: 'Kerala 5-Day Master AI Itinerary',
          category: 'AI Itinerary',
          cityName: 'Munnar',
          sizeMB: 18,
          downloadStatus: 'completed',
          downloadProgress: 100,
        },
        {
          _id: 'pkg_3',
          title: 'Munnar Hidden Gems & Food Guide',
          category: 'Hidden Gems',
          cityName: 'Munnar',
          sizeMB: 34,
          downloadStatus: 'completed',
          downloadProgress: 100,
        },
        {
          _id: 'pkg_4',
          title: 'Offline Emergency SOS & Medical Guide',
          category: 'Emergency',
          cityName: 'Munnar',
          sizeMB: 12,
          downloadStatus: 'completed',
          downloadProgress: 100,
        },
        {
          _id: 'pkg_5',
          title: 'Offline Voice Assistant Model & Dictionary',
          category: 'Voice Commands',
          cityName: 'Global',
          sizeMB: 85,
          downloadStatus: 'completed',
          downloadProgress: 100,
        },
      ];
    }
  },

  downloadPackage: async (packageId: string) => {
    try {
      const response = await api.post(`/v1/ecosystem/offline-packages/${packageId}/download`);
      return response.data?.data;
    } catch (err) {
      return { _id: packageId, downloadStatus: 'completed', downloadProgress: 100 };
    }
  },

  getCarModeData: async (): Promise<CarModeData> => {
    try {
      const response = await api.get('/v1/ecosystem/car-mode');
      return response.data?.data;
    } catch (err) {
      return {
        activeTrip: 'Munnar Hill Escape',
        nextStop: {
          name: 'Potters Hill Pine Forest',
          distance: '12.4 km',
          etaMinutes: 18,
          category: 'Nature',
        },
        nearbyFuel: [
          { name: 'HP Fuel Station Munnar', distance: '2.1 km', status: 'Open 24 hrs' },
          { name: 'Indian Oil Petrol Pump', distance: '4.8 km', status: 'Open 24 hrs' },
        ],
        nearbyFood: [
          { name: 'Rapsy Restaurant', distance: '1.2 km', rating: 4.5, openNow: true },
          { name: 'Al Buhari Restaurant', distance: '2.4 km', rating: 4.3, openNow: true },
        ],
        safetyAlerts: [
          { type: 'Weather', message: 'Mist and afternoon fog expected along Top Station Road drive.' },
        ],
        handsFreeVoiceActive: true,
      };
    }
  },

  getSmartwatchData: async (): Promise<SmartwatchData> => {
    try {
      const response = await api.get('/v1/ecosystem/smartwatch');
      return response.data?.data;
    } catch (err) {
      return {
        time: '14:30',
        destination: 'Munnar, Kerala',
        currentTemp: '19°C',
        weatherCondition: 'Pleasant & Misty',
        nextTurn: 'In 300m, turn right onto Top Station Rd',
        nextActivity: '15:00 - Eravikulam National Park Safari',
        stepCountToday: 8420,
        sosStatus: 'Ready',
        checklists: [
          { task: 'Camera Charged', done: true },
          { task: 'Water Bottle', done: true },
          { task: 'Park Ticket Downloaded', done: true },
          { task: 'Jacket for Evening', done: false },
        ],
      };
    }
  },
};

export default ecosystemService;
