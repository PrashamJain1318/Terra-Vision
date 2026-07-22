import mongoose from 'mongoose';

const UserSettingsSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },

  // 1. Profile
  profile: {
    name: { type: String, default: 'Prasham Jain' },
    username: { type: String, default: 'prashamjain1318' },
    bio: { type: String, default: 'Global AI Travel Explorer & Software Architect' },
    email: { type: String, default: 'prasham@locallens.ai' },
    phone: { type: String, default: '+91 98765 43210' },
    country: { type: String, default: 'India' },
    language: { type: String, default: 'English (US)' },
    timezone: { type: String, default: 'Asia/Kolkata (GMT+5:30)' },
    travelLevel: { type: String, default: 'Gold Explorer Level 8' },
    avatarUrl: { type: String, default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
  },

  // 2. Account
  account: {
    accountStatus: { type: String, default: 'active' },
    dataExportCount: { type: Number, default: 2 },
  },

  // 3. Security
  security: {
    twoFactorEnabled: { type: Boolean, default: true },
    biometricEnabled: { type: Boolean, default: true },
    passkeysEnabled: { type: Boolean, default: true },
    securityScore: { type: Number, default: 98 },
  },

  // 4. AI Preferences
  aiPreferences: {
    model: { type: String, default: 'Gemini 2.5 Pro (Recommended)' },
    autoSuggestions: { type: Boolean, default: true },
    smartRoutePlanning: { type: Boolean, default: true },
    personality: { type: String, default: 'Adventure & Hidden Gems' },
    responseLength: { type: String, default: 'Detailed' },
    voiceAssistant: { type: Boolean, default: true },
    aiMemory: { type: Boolean, default: true },
  },

  // 5. Travel Preferences
  travelPreferences: {
    favoriteCategories: [{ type: String }],
    preferredBudget: { type: String, default: '₹₹ (Moderate)' },
    preferredTransport: { type: String, default: 'Driving' },
    currency: { type: String, default: 'INR (₹)' },
    tempUnit: { type: String, default: 'Celsius (°C)' },
    distanceUnit: { type: String, default: 'Kilometers (km)' },
  },

  // 6. Maps & Navigation
  mapsNavigation: {
    defaultMapType: { type: String, default: 'Satellite' },
    trafficLayer: { type: Boolean, default: true },
    alwaysShowNearby: { type: Boolean, default: true },
    markerStyle: { type: String, default: 'Animated FAANG Pins' },
    defaultZoom: { type: Number, default: 14 },
    offlineMaps: { type: Boolean, default: true },
    locationAccuracy: { type: String, default: 'High Precision GPS' },
  },

  // 7. Notifications
  notifications: {
    emailNotifications: { type: Boolean, default: true },
    pushNotifications: { type: Boolean, default: true },
    tripAlerts: { type: Boolean, default: true },
    weatherAlerts: { type: Boolean, default: true },
    nearbyAttractions: { type: Boolean, default: true },
    aiSuggestions: { type: Boolean, default: true },
    emergencyAlerts: { type: Boolean, default: true },
  },

  // 8. Appearance
  appearance: {
    theme: { type: String, default: 'Dark' },
    accentColor: { type: String, default: '#7C3AED' },
    fontSize: { type: String, default: 'Medium' },
    compactMode: { type: Boolean, default: false },
    glassEffects: { type: Boolean, default: true },
    reduceMotion: { type: Boolean, default: false },
  },

  // 9. Privacy
  privacy: {
    locationPermission: { type: Boolean, default: true },
    cameraPermission: { type: Boolean, default: true },
    micPermission: { type: Boolean, default: true },
    analyticsConsent: { type: Boolean, default: true },
    cookiesConsent: { type: Boolean, default: true },
  },

  // 10. Billing
  billing: {
    plan: { type: String, default: 'Pro Founder Plan' },
    billingCycle: { type: String, default: 'Annual ($99/yr)' },
  },

  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('UserSettings', UserSettingsSchema);
