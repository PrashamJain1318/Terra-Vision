import UserSettings from '../models/UserSettings.js';

// In-memory fallback state for immediate response
const inMemorySettings = {
  userId: 'user_default',
  profile: {
    name: 'Prasham Jain',
    username: 'prashamjain1318',
    bio: 'Global AI Travel Explorer & Software Architect',
    email: 'prasham@locallens.ai',
    phone: '+91 98765 43210',
    country: 'India',
    language: 'English (US)',
    timezone: 'Asia/Kolkata (GMT+5:30)',
    travelLevel: 'Gold Explorer Level 8',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  account: { accountStatus: 'active', dataExportCount: 2 },
  security: { twoFactorEnabled: true, biometricEnabled: true, passkeysEnabled: true, securityScore: 98 },
  aiPreferences: {
    model: 'Gemini 2.5 Pro (Recommended)',
    autoSuggestions: true,
    smartRoutePlanning: true,
    personality: 'Adventure & Hidden Gems',
    responseLength: 'Detailed',
    voiceAssistant: true,
    aiMemory: true,
  },
  travelPreferences: {
    favoriteCategories: ['Hidden Gems', 'Nature', 'Food', 'Adventure'],
    preferredBudget: '₹₹ (Moderate)',
    preferredTransport: 'Driving',
    currency: 'INR (₹)',
    tempUnit: 'Celsius (°C)',
    distanceUnit: 'Kilometers (km)',
  },
  mapsNavigation: {
    defaultMapType: 'Satellite',
    trafficLayer: true,
    alwaysShowNearby: true,
    markerStyle: 'Animated FAANG Pins',
    defaultZoom: 14,
    offlineMaps: true,
    locationAccuracy: 'High Precision GPS',
  },
  notifications: {
    emailNotifications: true,
    pushNotifications: true,
    tripAlerts: true,
    weatherAlerts: true,
    nearbyAttractions: true,
    aiSuggestions: true,
    emergencyAlerts: true,
  },
  appearance: {
    theme: 'Dark',
    accentColor: '#7C3AED',
    fontSize: 'Medium',
    compactMode: false,
    glassEffects: true,
    reduceMotion: false,
  },
  privacy: {
    locationPermission: true,
    cameraPermission: true,
    micPermission: true,
    analyticsConsent: true,
    cookiesConsent: true,
  },
  billing: { plan: 'Pro Founder Plan', billingCycle: 'Annual ($99/yr)' },
};

export const getSettings = async (req, res) => {
  try {
    res.json({ success: true, data: inMemorySettings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateSettingsSection = async (req, res) => {
  try {
    const { section, data } = req.body;
    if (section && data && (inMemorySettings as any)[section]) {
      (inMemorySettings as any)[section] = { ...(inMemorySettings as any)[section], ...data };
    }
    res.json({ success: true, message: `${section} updated successfully`, data: inMemorySettings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const exportSettings = async (req, res) => {
  try {
    res.json({
      success: true,
      exportDate: new Date(),
      data: inMemorySettings,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const importSettings = async (req, res) => {
  try {
    const { settingsData } = req.body;
    if (settingsData) {
      Object.assign(inMemorySettings, settingsData);
    }
    res.json({ success: true, message: 'Settings imported successfully', data: inMemorySettings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
