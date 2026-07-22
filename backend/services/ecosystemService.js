import Device from '../models/Device.js';
import OfflineCache from '../models/OfflineCache.js';

export const ecosystemService = {
  // Get all registered devices for user
  getUserDevices: async (userId) => {
    let devices = await Device.find({ userId }).sort({ updatedAt: -1 });

    if (devices.length === 0) {
      // Seed initial default connected ecosystem devices for user preview
      const defaultDevices = [
        {
          userId,
          deviceName: "Prasham's iPhone 15 Pro",
          deviceType: 'Phone',
          platform: 'iOS',
          batteryLevel: 92,
          syncStatus: 'synced',
          lastSyncTime: new Date(),
          isCurrentDevice: true,
          offlineStorageUsedMB: 240,
        },
        {
          userId,
          deviceName: 'Apple Watch Series 9',
          deviceType: 'Smartwatch',
          platform: 'watchOS',
          batteryLevel: 78,
          syncStatus: 'synced',
          lastSyncTime: new Date(Date.now() - 5 * 60 * 1000),
          isCurrentDevice: false,
          offlineStorageUsedMB: 45,
        },
        {
          userId,
          deviceName: 'Porsche Communication CarPlay',
          deviceType: 'Apple CarPlay',
          platform: 'CarPlay',
          batteryLevel: 100,
          syncStatus: 'synced',
          lastSyncTime: new Date(Date.now() - 12 * 60 * 1000),
          isCurrentDevice: false,
          offlineStorageUsedMB: 512,
        },
        {
          userId,
          deviceName: 'iPad Air 5th Gen',
          deviceType: 'Tablet',
          platform: 'iOS',
          batteryLevel: 64,
          syncStatus: 'pending',
          lastSyncTime: new Date(Date.now() - 45 * 60 * 1000),
          isCurrentDevice: false,
          offlineStorageUsedMB: 180,
        },
        {
          userId,
          deviceName: 'MacBook Pro M3 Max',
          deviceType: 'Laptop',
          platform: 'macOS',
          batteryLevel: 100,
          syncStatus: 'synced',
          lastSyncTime: new Date(),
          isCurrentDevice: false,
          offlineStorageUsedMB: 1024,
        },
      ];

      devices = await Device.insertMany(defaultDevices);
    }

    return devices;
  },

  // Register a new device
  registerDevice: async (userId, deviceData) => {
    const newDevice = new Device({
      userId,
      ...deviceData,
      lastSyncTime: new Date(),
    });
    return await newDevice.save();
  },

  // Trigger Intelligent Sync Engine across devices
  triggerSync: async (userId, deviceId) => {
    if (deviceId) {
      await Device.findByIdAndUpdate(deviceId, {
        syncStatus: 'synced',
        lastSyncTime: new Date(),
      });
    } else {
      await Device.updateMany({ userId }, {
        syncStatus: 'synced',
        lastSyncTime: new Date(),
      });
    }

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
        'Local Food Recommendations',
      ],
    };
  },

  // Offline Cache Data Packages
  getOfflinePackages: async (userId) => {
    let packages = await OfflineCache.find({ userId }).sort({ createdAt: -1 });

    if (packages.length === 0) {
      const defaultPackages = [
        {
          userId,
          title: 'Munnar Offline Navigation Map',
          category: 'Maps',
          cityName: 'Munnar',
          sizeMB: 145,
          downloadStatus: 'completed',
          downloadProgress: 100,
        },
        {
          userId,
          title: 'Kerala 5-Day Master AI Itinerary',
          category: 'AI Itinerary',
          cityName: 'Munnar',
          sizeMB: 18,
          downloadStatus: 'completed',
          downloadProgress: 100,
        },
        {
          userId,
          title: 'Munnar Hidden Gems & Food Guide',
          category: 'Hidden Gems',
          cityName: 'Munnar',
          sizeMB: 34,
          downloadStatus: 'completed',
          downloadProgress: 100,
        },
        {
          userId,
          title: 'Offline Emergency SOS & Medical Guide',
          category: 'Emergency',
          cityName: 'Munnar',
          sizeMB: 12,
          downloadStatus: 'completed',
          downloadProgress: 100,
        },
        {
          userId,
          title: 'Offline Voice Assistant Model & Dictionary',
          category: 'Voice Commands',
          cityName: 'Global',
          sizeMB: 85,
          downloadStatus: 'completed',
          downloadProgress: 100,
        },
      ];

      packages = await OfflineCache.insertMany(defaultPackages);
    }

    return packages;
  },

  // Download Package
  downloadPackage: async (userId, packageId) => {
    const pkg = await OfflineCache.findById(packageId);
    if (pkg) {
      pkg.downloadStatus = 'completed';
      pkg.downloadProgress = 100;
      return await pkg.save();
    }
    return null;
  },

  // Smart Travel Widgets configuration
  getWidgetConfiguration: async () => {
    return {
      activeWidgets: [
        { id: 'w_itinerary', type: 'TodayItinerary', title: "Today's Itinerary", enabled: true },
        { id: 'w_weather', type: 'Weather', title: 'Live Destination Weather', enabled: true },
        { id: 'w_flight', type: 'FlightCountdown', title: 'Flight & Train Countdown', enabled: true },
        { id: 'w_hotel', type: 'HotelCheckin', title: 'Hotel Booking & Check-in', enabled: true },
        { id: 'w_nearby', type: 'NearbyPlaces', title: 'Nearby Gems & Food', enabled: true },
        { id: 'w_voice', type: 'VoiceShortcut', title: 'Hands-Free Voice AI', enabled: true },
      ],
      layout: 'grid_2x2',
    };
  },

  // Car Mode Navigation Feed
  getCarModeData: async () => {
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
  },

  // Smartwatch Data Feed
  getSmartwatchData: async () => {
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
  },
};

export default ecosystemService;
